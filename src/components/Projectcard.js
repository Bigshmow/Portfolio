import React, { Fragment } from 'react';
// import { Card } from 'reactstrap';
import { Card, Container, Row, Col } from 'reactstrap';
import s from '../styles/app.style';
import '../styles.css';

export const Projectcard = props => (
    <Fragment>
        <Row>
            <Col xs='12'>
                <Card>
                    <img className='projectImg' src={props.src} alt='Project Picture'></img>
                    <h1>{props.header}</h1>
                    <h2><a href={props.link}>Visit the project</a></h2>
                    <h2><a href={props.git}>See the Git</a></h2>
                    <p>{props.desc}</p>
                </Card>
            </Col>
        </Row>
    </Fragment>
);