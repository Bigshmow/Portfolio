import React, { Fragment } from 'react';

import { Infocard } from '../components/Infocard';

import s from '../styles/app.style';

export const Dashboard = props => (
  <div style={s.dashboard}>
    <h1>Dashboard Page</h1>
    <Infocard>Look a card!</Infocard>
  </div>
    )
;
