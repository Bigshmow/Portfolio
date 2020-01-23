import React, { Fragment } from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Container, Row, Col } from 'reactstrap';
import { Portfolio } from './Portfolio';
import { Resume } from './Resume';
import Projcaro from '../components/Projcaro';
import s from '../styles/app.style';
import '../styles.css';

export const Dashboard = props => {
  return (

    <div>
      <Container>
        <Row className="main">
          <Col xs='12' md='5' className='profile'>
              <img className='profile' src='circle_profile.png' alt='ProfilePicture' />
          </Col>
          <Col xs='12' md='6' className=''>
            <div className='text-right hiddenMedia'>
              <h1>Hello!</h1>
              <p>You've reached the portfolio page for Devin Stewart.</p>
              <p>MERN stack developer seeking a junior engineer position.</p>
              <i>(part-time mountainbiker and avid gamer)</i>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row className="main">
            <Col xs='12' md='12' className=''>
              <Portfolio />
            </Col>
        </Row>            
        {/* <Row>
            <Col xs='12' md='12' className=''>
              <Resume />
            </Col>
        </Row>
        <Row>
            <Col xs='12' md='12' className=''>
              <Contact />
            </Col>
        </Row> */}
      </Container>
    </div>
  );
  }
  