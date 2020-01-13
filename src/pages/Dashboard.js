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
      <Row>
      <Col xs='12' md='5' className='d-flex justify-content-center align-items-center profile'>
        <div className='d-flex justify-content-center'>
          <img className='profile' src='circle_profile.png' alt='ProfilePicture' />
        </div>
      </Col>
      <Col xs='12' md='5' className='d-flex justify-content-center align-items-center'>
        <div className='text-center hiddenMedia'>
          <h1>Hello!</h1>
          <p>You've reached the portfolio page for Devin Stewart.</p>
          <p>MERN stack developer seeking a junior engineer position.</p>
          <i>(part-time mountainbiker and gamer too)</i>
        </div>
      </Col>
      </Row>
      <Row>
        <Col>
          <About />
        </Col>
      </Row>
      <Row>
        <Col xs='12' className='d-flex justify-content-center'>

        </Col>
      </Row>
        <Portfolio />
        <Resume />
        <Contact />
      </Container>
    </div>
  );
  }
  