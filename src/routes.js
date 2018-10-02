import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Intro from './components/Intro';
import DecryptionSimple from './components/DecryptionSimple';

export default (
    <Switch>
        <Route path='/' component={Intro} exact />
        <Route path='/reveal' component={DecryptionSimple} />
    </Switch>
)