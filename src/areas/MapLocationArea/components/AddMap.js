import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LocationApi from '../../../api/LocationApi';
import { addNewLocation } from '../../../actions/locationActions';
import { Button, message } from 'antd';
import MapSearchDrawer from './MapSearch/MapSearchDrawer';

export class AddMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLocation: null,
            redirectToReturn: false
        }

        this.locationApi = new LocationApi();

        this.onAddMap = this.onAddMap.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onLocationSelect = this.onLocationSelect.bind(this);
    }

    onLocationSelect(location) {
        this.setState({ selectedLocation: location });
    }

    onAddMap() {
        let { selectedLocation } = this.state
        let { dispatch, locationData } = this.props;

        if (!selectedLocation) {
            message.warn('Please select a location to add');
            return;
        }

        if (locationData.has(selectedLocation.id)) {
            message.warn('Location already exist');
            return;
        }

        dispatch(addNewLocation(selectedLocation));
        this.setState({
            selectedLocation: null,
            redirectToReturn: true
        });
    }

    onClose() {
        this.setState({ redirectToReturn: true });
    }

    handleRedirect() {
        let { redirectToReturn } = this.state;
        if (redirectToReturn) {
            return <Redirect to={this.props.returnUrl || '/locations'}></Redirect>
        }
    }

    render() {
        let { selectedLocation } = this.state;
        return (
            <div className="add-location">
                <MapSearchDrawer
                    visible={true}
                    locations={[selectedLocation]}
                    onLocationSelect={this.onLocationSelect}
                    onClose={this.onClose}
                    footerAction={<Button onClick={this.onAddMap} type="primary">Add Map</Button>}
                />
                {this.handleRedirect()}
            </div>
        );
    }
}

export const mapStateToProps = state => {
    return {
        locationData: state.locations
    }
}

export default connect(mapStateToProps)(AddMap);