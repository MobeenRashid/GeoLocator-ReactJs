import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateLocation } from '../../../actions/locationActions';
import { Button, message } from 'antd';
import MapSearchDrawer from './MapSearch/MapSearchDrawer';

const DEFAULT_STATE = {
    selectedLocation: null,
    selectedLocationNew: null,
    redirectToReturn: false
}

class EditMap extends Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;

        this.onUpdateMap = this.onUpdateMap.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onLocationSelect = this.onLocationSelect.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        let { match, locationData } = props;

        if (state.selectedLocation) {
            return {
                selectedLocation: state.selectedLocation
            }
        }

        if (locationData.length && match && match.params) {

            let selectedLocation = locationData.find(loct => loct && loct.id === match.params.id);
            if (!selectedLocation) {
                message.warn('Oops, looks like an incorrect location is selected');
                return { redirectToReturn: true }
            }
            return { selectedLocation };
        }
        return null;
    }

    onLocationSelect(location) {
        this.setState({
            selectedLocationNew: {
                id: location.id,
                lat: location.lat,
                lng: location.lng,
                address: location.address
            }
        });
    }

    onClose() {
        this.setState({ redirectToReturn: true });
    }

    onUpdateMap() {
        let { selectedLocation, selectedLocationNew } = this.state
        let { dispatch, locationData } = this.props;

        if (!locationData || !locationData.length) {
            message.warn('No locations are loaded, please add a new location');
            this.setState({ redirectToReturn: true });
            return;
        }

        if (!selectedLocation) {
            message.warn('Please select a location to update');
            this.setState({ redirectToReturn: true });
            return;
        }

        if (!locationData.find(loct => loct && loct.id === selectedLocation.id)) {
            message.warn('Oops! location to edit is removed from location data');
            return;
        }

        if (!selectedLocationNew || locationData.find(loct => loct && loct.id === selectedLocationNew.id)) {
            message.warn('Oops! looks like the location already exist, choose another location');
            return;
        }

        dispatch(updateLocation(selectedLocation, selectedLocationNew));
        this.setState({
            selectedLocation: null,
            redirectToReturn: true,
        });
    }

    handleRedirect() {
        let { redirectToReturn } = this.state;
        if (redirectToReturn) {
            return <Redirect to={this.props.returnUrl || '/locations'}></Redirect>
        }
    }

    render() {
        let { selectedLocationNew, selectedLocation } = this.state;
        return (
            <div className="edit-location">
                <MapSearchDrawer
                    visible={true}
                    locations={[selectedLocationNew || selectedLocation]}
                    selectedLocation={selectedLocationNew || selectedLocation}
                    onLocationSelect={this.onLocationSelect}
                    onClose={this.onClose}
                    footerAction={<Button id="btnUpdateLocation" onClick={this.onUpdateMap} type="primary">Update Map</Button>}
                />
                {this.handleRedirect()}
            </div>
        );
    }
}

EditMap.defaultProps = {
    locationData: []
}

export const mapStateToProps = state => {
    return {
        locationData: state.locations
    }
}

export default connect(mapStateToProps)(EditMap);