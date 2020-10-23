import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { constants } from '../constants';
import '../styles/LaunchItem.css';

const LaunchItem = (props) => {   
    const {
        flight_number,
        mission_name,
        launch_year,
        launch_success,
        links,
        mission_id,
        rocket
    } = props.launchdata
    
    return(
        <>
            <Card className='cardbox' key={`${mission_name}_${flight_number}`} >
                {links.mission_patch_small && (
                    <Card.Img variant="top" 
                    className="cardImg"
                    src={links.mission_patch_small} 
                    alt={mission_name} />
                )}                    
                <Card.Body id='cardbody' >
                    <Card.Title id='cardtitle'>
                        {`${mission_name} #${flight_number}`}
                    </Card.Title>                       
                    <div>
                        <div className='mission_text'>{'Mission Ids:'}</div>
                        <ul className='missioncls'>
                            {Array.isArray(mission_id) && mission_id.length > 0 ? (
                                mission_id.map((item, idx) => (
                                    <li key={`missionId_${idx}`}>{item}</li>
                                ))
                                ) : (
                                <li>{'No data present'}</li>
                                )
                            }                            
                        </ul>
                    </div>
                    <Row >
                        <Col className='textfont'  xs={7} >{`${constants.year}:`}</Col>
                        <Col xs={5} >{launch_year}</Col>
                    </Row>                   
                    <Row >
                        <Col className='textfont'  xs={7} >{`${constants.launch}:`}</Col>
                        <Col  xs={5} >{launch_success.toString()}</Col>
                    </Row>               
                    <Row >
                        <Col className='textfont'  xs={7} >{`${constants.land}:`}</Col>
                        <Col  xs={5} >
                        {(rocket.first_stage.cores[0].land_success) === null
                        ? "No data"
                        : (rocket.first_stage.cores[0].land_success).toString()
                        }
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default LaunchItem;