import React, {useState, useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import LaunchItem from './LaunchItem';
import { getApidata } from '../apicalls';
import Loader from '../components/Loader';
import { constants } from '../constants';
import '../styles/Launches.css';

const Launches = (props) => {
    let loaded = props.data.length ? false : true;
    const [launch_data, setlaunchdata] = useState(props.data);    
    const [isLoading, setLoading] = useState(loaded);
    const pathname = props.historyInfo.location.pathname;

    const setFinalState = (data) => {
        setlaunchdata(data);   
        setLoading(false);  
    }

    const getFilterApidata = (url) => {
        getApidata(url)
        .then(res => {
            setFinalState(res.data);        
        })
        .catch(err => console.log(err))
    }

    const getFinaldata = (isYear, isLaunch, isLand) => {
        if(isYear && isLaunch && isLand) {
            isLaunch = isLaunch === "fals" ? false : true
            isLand = isLand === "fals" ? false : true
            const url = constants.all.replace("{isYear}", isYear).replace("{isLaunch}",isLaunch).replace("{isLand}", isLand);
            getFilterApidata(url);
        } else if(isYear && isLaunch) {
            isLaunch = isLaunch === "fals" ? false : true
            let filterdata = props.data.filter(item => {
                return (item.launch_year ===  isYear
                    && item.launch_success === isLaunch
                    );
            });
            setFinalState(filterdata);
        } else if(isYear && isLand) {
            isLand = isLand === "fals" ? false : true
            let filterdata = props.data.filter(item => {
                return (item.launch_year ===  isYear
                    && item.rocket.first_stage.cores[0].land_success === isLand
                    );
            });
            setFinalState(filterdata);
        } else if(isLaunch && isLand) {
            isLaunch = isLaunch === "fals" ? false : true
            isLand = isLand === "fals" ? false : true
            const url = constants.launch_landurl.replace("{isLaunch}",isLaunch).replace("{isLand}", isLand);
            getFilterApidata(url);
        } else if(isYear) {
            let ldata = props.data.filter(element => {
                return element.launch_year === isYear
            });
            setFinalState(ldata)
        } else if(isLaunch) {
            isLaunch = isLaunch === "fals" ? false : true
            const url = constants.launchurl.replace("{isLaunch}",isLaunch);
            getFilterApidata(url);
        } else if(isLand) {
            isLand = isLand === "fals" ? false : true
            let ldata = props.data.filter(element => {
                return element.rocket.first_stage.cores[0].land_success === isLand
            })
            setFinalState(ldata);
        }
    }

    useEffect(() => {
        if(props.data.length > 0 && pathname === "/") {
            setFinalState(props.data);
        }
        if(props.historyInfo && props.historyInfo.location && pathname !== "/") { 
            let {isYear, isLaunch, isLand} = {isYear: '', isLaunch: '', isLand: ''};
            let propSearch = props.historyInfo.location.search;
            if(propSearch.indexOf('launch_year') !== -1){               
                isYear = propSearch.substr(propSearch.indexOf("launch_year") + 12, 4);
            }
            if(propSearch.indexOf('launch_success') !== -1){              
                isLaunch = propSearch.substr(propSearch.indexOf("launch_success") + 15, 4);                
            }
            if(propSearch.indexOf('land_success') !== -1){              
                isLand = propSearch.substr(propSearch.indexOf("land_success") + 13, 4);                
            }   
            getFinaldata(isYear, isLaunch, isLand);     
        }        
    }, [launch_data.length, props.data, props.historyInfo, pathname])
   
    return(
        <>
            {!isLoading ? (
                <Row>
                    {launch_data && launch_data.length > 0 ? launch_data.map(item => {
                        return (
                            <Col xs={12} md={6} lg={3} 
                                className='cardParent' 
                                key={item.mission_name} 
                                >
                                <LaunchItem  launchdata = {item} />
                            </Col>
                        )               
                    }) :<div className='nodata' >
                            {'No data available for this filter'}
                        </div>
                    }
                </Row>
            ) : 
            <div><Loader /></div>            
            }        
        </>
    );    
}

export default Launches;