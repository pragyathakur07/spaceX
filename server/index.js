import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import Routes from '../src/routes/routes';
import { StaticRouter } from "react-router-dom";
import axios from 'axios';
import serialize from 'serialize-javascript';

const PORT = process.env.PORT || 3006;
const app = express();

app.get(['/', '/launches'], (req, res) => {
  axios({
    'method':'GET',
    'url':'https://api.spaceXdata.com/v3/launches?limit=100'
    })
    .then(response => {
        let initialdata = response.data
        let context =  { initialdata } 
        const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context} >
            <Routes data={JSON.stringify(initialdata)} />
        </StaticRouter>    
    );  
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send('Oops, better luck next time!');
      }      
        return res.send(
            data
            .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
            .replace(
                '</body>',
                `<script>window.__ROUTE_DATA__ = ${serialize(JSON.stringify(initialdata))}</script></body>`
            )
        );
    });
    }).catch(err => console.log(err))
  });
  
  app.use(express.static('./build'));
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });