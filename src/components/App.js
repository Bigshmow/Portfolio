import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { About } from './About';
import { Contact } from './Contact';
import { Portfolio } from './Portfolio';
import PageNotFound from './PageNotFound';
import s from '../styles/app.style';

export default function App() {
  return (
    <div style={s.root}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
