import React, { Component } from 'react';
import MapSearchBox from './MapSearchBox';
import { GOOGLE_MAP_URL } from '../../common/constants';


class GoogleMapSearch extends Component {
    constructor(props) {
        super(props);
        this.searchboxRef = null;
    }


    onSearchBoxMounted = ref => {
        this.searchboxRef = ref;
    };

    onPlacesChanged = () => {
        const places = this.searchboxRef.getPlaces();
        this.props.onPlaceSelect(places[0]);
    };

    render() {
        return (<MapSearchBox
            googleMapURL={GOOGLE_MAP_URL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `0` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            onPlacesChanged={this.onPlacesChanged}
            onSearchBoxMounted={this.onSearchBoxMounted}>
            {this.props.children}
        </MapSearchBox>);
    }

}

export default GoogleMapSearch;