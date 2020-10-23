import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import history from '../routes/history';
import '../styles/LaunchFilter.css';
import TextComponent from '../components/TextComponent';
import { constants } from '../constants';

const LaunchFilters = () => {
    const launch_years = constants.yeardata;

    const sethistory = (path, val, btnId, btncls) => {       
        let href = window.location.href;
        const loadState = {"isLoading": true};
        getbtnStyle(btnId, btncls);
        if(href.split('/')[3] === ""){
            history.push({
                 pathname: '/launches',
                 state: loadState,
                 search: `?${path}`
            })
        } else {    
            let existingpath = href.split("?")[1];
            let subpath, new_path;
            if(href.indexOf(val) !== -1){
                subpath = existingpath.substr(existingpath.indexOf(val), path.length);
                subpath = subpath.indexOf("fals") !== -1 
                    ? existingpath.substr(existingpath.indexOf(val), path.length + 1)
                    : subpath             
                new_path = existingpath.replace(subpath, path);
            } else {
                new_path = `${existingpath}&&${path}`
            }
            history.push({
                pathname: '/launches',
                state: loadState,
                search: `?${new_path}`
            })             
        }
    }

    const getAllbtns = (btns) => {
        Array.from(btns).forEach(element => {
            addbtnstyle(element, "#69be28", "#000");
        });  
    }

    const addbtnstyle = (btn, bcolor, color) => {
        btn.style.setProperty("background-color", `${bcolor}`, "important"); 
        btn.style.setProperty("color", `${color}`, "important"); 
    }

    const getbtnStyle = (btnId, btncls) => {
        if(btnId){
            let allbtns = document.getElementsByClassName(btncls);
            let clickedbtn = document.getElementById(btnId);
            getAllbtns(allbtns);
            addbtnstyle(clickedbtn, "#28a745", "#fff");   
        }
    }

    const getresetdata = () => {
        let allbtns = document.getElementsByClassName('btncls');
        getAllbtns(allbtns);
        history.push({
            pathname: '/',
            state: {"isLoading": true}
        })
    }

    const get_btns = (path, btnclass) => {
        return (
            <>
                <Col xs={6} className='col_cls'>
                    <Button className={`btncls ${btnclass}`}
                        id={`${btnclass}_true`}
                        variant="success" 
                        onClick={() => sethistory(`${path}=${true}`, path, `${btnclass}_true`, btnclass)}
                        >
                        {'True'}
                    </Button>
                </Col>
                <Col xs={6} className='col_cls'>
                    <Button className={`btncls ${btnclass}`}
                        id={`${btnclass}_false`}
                        variant="success" 
                        onClick={() => sethistory(`${path}=${false}`, path, `${btnclass}_false`, btnclass)}
                        >
                        {'False'}
                    </Button>
                </Col>
            </>
        );
    }

    return(
        <div className="cont">
            <Row>
                <Col>
                    <Row className='filtertxt'>{constants.filters}</Row>                    
                       <TextComponent textId={'launchid'} data={constants.year} />                     
                    <Row>
                        {launch_years.map((item, idx) => {
                        return (
                            <Col xs={6} key={`${item}_idx`}>
                                <Button className="btncls btnyear" 
                                    id={`${item}_idx`}
                                    variant="success"
                                    onClick={() => sethistory(`launch_year=${item}`, "launch_year", `${item}_idx`, "btnyear")}
                                    >
                                    {item}
                                </Button>
                            </Col> 
                            )           
                        })}                   
                    </Row>
                </Col>
            </Row>   
                <TextComponent data={constants.launch} />
            <Row>
                {get_btns('launch_success', 'btnlaunch')}
            </Row>
                <TextComponent data={constants.land} />
            <Row>
                {get_btns('land_success', 'btnland')}
            </Row>
                <TextComponent data={constants.reset} />
            <Row>
                <Col xs={12} className="col_cls">
                    <Button id="resetbtn" variant="success"
                            onClick={() => getresetdata()}
                        >{constants.reset}</Button>
                </Col>
            </Row>
        </div>             
    );
}

export default LaunchFilters;