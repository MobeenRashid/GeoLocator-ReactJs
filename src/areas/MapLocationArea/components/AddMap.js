import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LocationApi from '../../../api/LocationApi';
import { addOrUpdateLocation } from '../../../actions/locationActions';
import { Button, message } from 'antd';
import MapSearchDrawer from './MapSearch/MapSearchDrawer';
class AddMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestingServer: false,
            selectedLocation: null,
            redirectToReturn: false
        }

        this.locationApi = new LocationApi();

        this.onAddMap = this.onAddMap.bind(this);
        this.onLocationSelect = this.onLocationSelect.bind(this);
    }

    onLocationSelect(location) {
        this.setState({ selectedLocation: location });
    }

    onAddMap() {
        let { selectedLocation } = this.state
        let { dispatch, locationData } = this.props;

        if (!selectedLocation) {
            message.warn('No any location is selected');
            return;
        }

        if (locationData.has(selectedLocation.id)) {
            message.warn('Location already exist');
            return;
        }

        this.setState({ requestingServer: true });
        this.locationApi.AddNew(selectedLocation, respone => {
            if (respone.data && respone.data.id) {
                dispatch(addOrUpdateLocation(respone.data));
                this.setState({
                    selectedLocation: null,
                    redirectToReturn: true
                });
                message.success('Location added successfully')
            }
        }, () => {
            message.error("Failed to add new location");
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
            <div className="add-location">
                <MapSearchDrawer
                    visible={true}
                    disabled={requestingServer}
                    locations={[selectedLocation]}
                    onLocationSelect={this.onLocationSelect}
                    footerAction={<Button loading={requestingServer} disabled={requestingServer} onClick={this.onAddMap} type="primary">Add Map</Button>}
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

export default connect(mapStateToProps)(AddMap);