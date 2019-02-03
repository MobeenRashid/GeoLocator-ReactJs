import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import MapLocationArea from '../areas/MapLocationArea/MapLocationArea';

const appRoutes =
    <>
        <Switch>
            <Route exact path="/" render={() => (<Redirect to="/locations" />)} />
            <Route path="/locations" component={MapLocationArea}></Route>
        </Switch>
    </>
export default appRoutes;

