import React, { useState, Fragment, Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import s from '../styles/app.style';
import { Projectcard } from '../components/Projectcard';

export const Portfolio = (props) => { 
  
  const Projects = require('./Projects.json')

  const [random, setRandom] = useState(7);
      
      return (
      
      <Fragment>
        <Projectcard
        src = {Projects[random].src}
        header = {Projects[random].header}
        link = {Projects[random].link}
        git = {Projects[random].git}
        desc = {Projects[random].desc}
        >
        </Projectcard>
          <button onClick={() => setRandom (Math.floor(Math.random() * Projects.length))}>
            Find another project
          </button>
      </Fragment>
        )
      };
        // } 