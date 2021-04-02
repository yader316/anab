import React from 'react';
import { 
    Accordion, 
    Card, 
} from 'react-bootstrap';

// Bootstrap style
import 'bootstrap/dist/css/bootstrap.min.css';

// styles accordion
import 'assets/sass/accordionStyles.scss';

// icon fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function InfoAccordion({id,title,description}) {
    return (
       <>
            <Accordion defaultActiveKey='1' className='contentAccordion'>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle 
                            as='Button' 
                            variant='link'
                            eventKey={`${id}`}
                            className='contentAccordion__btnHeader'
                        >
                            <h4 className='contentAccordion__title'>{title}</h4>
                            <FontAwesomeIcon 
                                icon={faAngleDown} 
                                className='contentAccordion__icon'    
                            />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={`${id}`}>
                        <Card.Body>
                            {description}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                {/* <Card>
                    <Card.Header>
                        <Accordion.Toggle 
                            as='Button' 
                            variant='link' 
                            eventKey='1'
                        >
                            <FontAwesomeIcon icon={faAngleUp} />
                            <h4>Vision</h4>

                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                            aqui va la Vision
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        
                        <Accordion.Toggle 
                            as='Button' 
                            variant='link' 
                            eventKey='2'
                        >
                            <h4>Valores</h4>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='2'>
                        <Card.Body>
                            aqui va la Valores
                        </Card.Body>
                    </Accordion.Collapse>
                </Card> */}
            </Accordion>
       </>
    )
}

export default InfoAccordion;
