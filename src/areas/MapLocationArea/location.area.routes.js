import React from 'react';
import { Route, Switch } from 'react-router-dom'
import MapAndLocationContainer from './components/MapLocationContainer';
import AddMap from './components/AddMap';
import EditMap from './components/EditMap';

const locationAreaRoutes =
    <Switch>
        <Route exact path="/locations" component={MapAndLocationContainer} />
        <Route exact path="/locations/addnew" component={AddMap} />
        <Route exact path="/locations/edit/:id" component={EditMap} />
    </Switch>
export default locationAreaRoutes; 