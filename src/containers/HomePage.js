import React, { useState, useEffect } from 'react';
import LaunchFilters from './LaunchFilters';
import Launches from './Launches';
import { getApidata } from '../apicalls';
import { Row, Col, Container } from 'react-bootstrap';
import Loader from '../components/Loader';
import { constants } from '../constants';
import '../styles/HomePage.css';

function HomePage (props) {
    let propdata = [];
    if(props.staticContext) {
        propdata = props.staticContext.initialdata
     } 
    const [initialdata, setInitialdata] = useState(propdata); 
    const [isLoading, setLoaded] = useState(true);         

    useEffect(() => {      
        if(initialdata.length === 0){
        setTimeout(() => {
            if (window.__ROUTE_DATA__) {
                setInitialdata(JSON.parse(window.__ROUTE_DATA__));
                setLoaded(false);
               delete window.__ROUTE_DATA__;
            } else {
                getApidata(constants.initialurl)
                .then(res => { 
                    setInitialdata(res.data);
                    setLoaded(false);
                })
                .catch(err => console.log(err))
            }
          }, 0);
        }            
    },[initialdata]);

    return(
        <div className="maindiv">              
            <Container fluid className='maincont' >   
                <Row className='textstyle'>{constants.title}</Row>         
                <Row>
                    <Col xs={12} md={4} lg={2} className="filtercls">                  
                        <LaunchFilters /> 
                    </Col>
                    <Col xs={12} md={8} lg={10} className="launchescls">  
                        {!isLoading ? (
                            <Launches isLoading={isLoading} historyInfo={props} data={initialdata} /> 
                            ) : 
                            <div><Loader /></div>
                        }                    
                    </Col>
                </Row> 
                <Row>
                    <div className='devparent'>
                        <span className='devcls'>{'Developed by: '}</span>
                        {constants.devname}
                    </div>                
                </Row>                           
            </Container>
        </div>
    )     
}

export default HomePage;