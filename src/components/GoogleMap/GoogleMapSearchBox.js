import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapStandAloneSearch from './MapStandAloneSearch';
import { getGoogleMapUrl } from '../../utils/mapUtils';
import { Input } from 'antd';

class GoogleMapSearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInputText: null,
            defaultLocation: null
        }
        this.searchboxRef = null;
        this.onChange = this.onChange.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.reset) {
            return null;
        }
        let searchInputText = state.searchInputText;
        if (props.defaultLocation) {
            if (state.defaultLocation) {
                if (props.defaultLocation !== state.defaultLocation) {
                    return {
                        defaultLocation: props.defaultLocation,
                        searchInputText: props.defaultLocation.address
                    }
                }
            }
            debugger;
            if (searchInputText === null || searchInputText === undefined) {
                searchInputText = props.defaultLocation.address
            }
        }

        return {
            defaultLocation: props.defaultLocation,
            searchInputText
        }
    }

    onChange(e) {
        if (e && e.target) {
            this.setState({ searchInputText: e.target.value });
        }
    }

    onSearchBoxMounted = ref => {
        this.searchboxRef = ref;
    };

    onPlacesChanged = () => {
        const places = this.searchboxRef.getPlaces();
        this.props.onLocationSelect(places[0]);
    };

    render() {
        let { searchInputText: searchInput } = this.state;
        let { mapKey, disabled } = this.props;
        if (!mapKey) {
            return <Input disabled placeholder="Loading Google Map Search..." />
        }
        return (<MapStandAloneSearch
            googleMapURL={getGoogleMapUrl(mapKey)}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `0` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            onPlacesChanged={this.onPlacesChanged}
            onSearchBoxMounted={this.onSearchBoxMounted}>
            <Input className="location-input"
                disabled={disabled}
                placeholder="Search Google Map..."
                value={searchInput} onChange={this.onChange} />
        </MapStandAloneSearch>);
    }

}

const mapStateToProps = state => {
    return {
        mapKey: state.googleMapKey
    }
}

export default connect(mapStateToProps)(GoogleMapSearchBox);