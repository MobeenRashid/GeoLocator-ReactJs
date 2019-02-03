import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LocationApi from '../../../api/LocationApi';
import { addOrUpdateLocation } from '../../../actions/locationActions';
import { Button, message } from 'antd';
import MapSearchDrawer from './MapSearch/MapSearchDrawer';


class EditMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestingServer: false,
            selectedLocation: null,
            redirectToReturn: false
        }

        this.locationApi = new LocationApi();

        this.onUpdateMap = this.onUpdateMap.bind(this);
        this.onLocationSelect = this.onLocationSelect.bind(this);
    }

    componentDidMount() {
        let { match, locationData } = this.props;
        let selectedLocation = locationData.get(match.params.id);
        this.setState({ selectedLocation });
    }

    onLocationSelect(location) {
        let { selectedLocation } = this.state;
        this.setState({
            selectedLocation: {
                id: selectedLocation && selectedLocation.id,
                lat: location.lat,
                lng: location.lng,
                address: location.address
            }
        });
    }

    onUpdateMap() {
        let { selectedLocation } = this.state
        let { dispatch, locationData } = this.props;

        if (!selectedLocation) {
            message.warn('No any location is selected');
            return;
        }

        if (!locationData.has(selectedLocation.id)) {
            message.warn('Selected location not exist');
            return;
        }

        this.setState({ requestingServer: true });
        this.locationApi.Update(selectedLocation, respone => {
            if (respone.data && respone.data.id) {
                dispatch(addOrUpdateLocation(respone.data));
                this.setState({
                    selectedLocation: null,
                    redirectToReturn: true
                });
                message.success('Location updated successfully');
            }
        }, () => {
            message.error("Failed to update location");
        }, () => {
            this.setState({ requestingServer: false });
        });
    }

    handleRedirect() {
        let { redirectToReturn } = this.state;
        if (redirectToReturn) {
            return <Redirect to={this.props.returnUrl || '/locations'}></Redirect>
        }
    }

    render() {
        let { selectedLocation, requestingServer } = this.state;
        return (
            <div className="edit-location">
                <MapSearchDrawer
                    visible={true}
                    disabled={requestingServer}
                    locations={[selectedLocation]}
                    selectedLocation={selectedLocation}
                    onLocationSelect={this.onLocationSelect}
                    footerAction={<Button loading={requestingServer} disabled={requestingServer} onClick={this.onUpdateMap} type="primary">Update Map</Button>}
                />
                {this.handleRedirect()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        locationData: state.locations
    }
}

export default connect(mapStateToProps)(EditMap);