import React, { Component } from 'react';
import GoogleMapSearchBox from '../../../../components/GoogleMap/GoogleMapSearchBox';


class MapLocationSearch extends Component {

    constructor(props) {
        super(props);

        this.onLocationSelect = this.onLocationSelect.bind(this);
    }

    onLocationSelect(place) {
        if (place) {
            let selectedLocation = {
                id: place.place_id,
                address: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            };
            this.props.onLocationSelect(selectedLocation);
        }
    }

    render() {
        return (<div className="search-box-holder">
            <GoogleMapSearchBox
                {...this.props}
                onLocationSelect={this.onLocationSelect}>
            </GoogleMapSearchBox>
        </div>);
    }
}
export default MapLocationSearch;