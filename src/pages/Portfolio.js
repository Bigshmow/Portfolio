import React, { useState, Fragment, Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import s from '../styles/app.style';
import { Projectcard } from '../components/Projectcard';

export const Portfolio = (props) => { 
  
  const Projects = require('./Projects.json')

  const [random, setRandom] = useState(7);

  const randNorepeat = () => {
    let newNum = (Math.floor(Math.random() * Projects.length))
    if (newNum != random) {
      setRandom (newNum)
    } else {
      setRandom ((Math.floor(Math.random() * Projects.length)))
    }
  }
      
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
          <button onClick={randNorepeat}>
            Find another project
          </button>
      </Fragment>
        )
      };
        // } 