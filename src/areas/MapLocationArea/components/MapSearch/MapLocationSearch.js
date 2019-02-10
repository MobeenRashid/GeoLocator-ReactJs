import React, { Component } from 'react';
import { Input } from 'antd';
import GoogleMapSearch from '../../../../components/GoogleMap/GoogleMapSearch';
const defaultState = {
    defaultLocation: null,
    searchInput: null
}

class MapLocationSearch extends Component {

    constructor(props) {
        super(props);
        this.state = defaultState;

        this.onLocationSelect = this.onLocationSelect.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.reset) {
            return defaultState;
        }

        let searchInput;
        if (state.searchInput === null || state.searchInput === undefined) {
            searchInput = (props.defaultLocation && props.defaultLocation.address);
        }
        return {
            defaultLocation: props.defaultLocation,
            searchInput: searchInput || state.searchInput
        }
    }

    componentDidMount() {
        let { defaultLocation } = this.state;
        defaultLocation = defaultLocation || this.props.defaultLocation;
        let searchInput = (defaultLocation && defaultLocation.address);

        this.setState({ searchInput });
    }


    onChange(e) {
        if (e && e.target) {
            this.setState({ searchInput: e.target.value });
        }
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
            this.setState({ searchInput: selectedLocation.address });
        }
    }

    render() {
        let { searchInput } = this.state;
        return (
            <div className="search-box-holder">
                <GoogleMapSearch
                    onPlaceSelect={this.onLocationSelect}>
                    <Input className="location-input" disabled={this.props.disabled} placeholder="search location" value={searchInput} onChange={this.onChange}>
                    </Input>
                </GoogleMapSearch>
            </div>);
    }
}
export default MapLocationSearch;