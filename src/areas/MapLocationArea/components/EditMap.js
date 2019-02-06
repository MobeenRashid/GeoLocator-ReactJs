import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LocationApi from '../../../api/LocationApi';
import { updateLocation } from '../../../actions/locationActions';
import { Button, message } from 'antd';
import MapSearchDrawer from './MapSearch/MapSearchDrawer';


export class EditMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLocation: null,
            redirectToReturn: false
        }

        this.locationApi = new LocationApi();

        this.onUpdateMap = this.onUpdateMap.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onLocationSelect = this.onLocationSelect.bind(this);
    }

    componentDidMount() {
        let { match, locationData } = this.props;
        let selectedLocation = locationData.find(loct => loct.id === match.params.id);
        if (!selectedLocation) {
            message.warn('Oops! looks like select location not exist');
            this.setState({ redirectToReturn: true });
        }
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

    onClose() {
        this.setState({ redirectToReturn: true });
    }

    onUpdateMap() {
        let { selectedLocation } = this.state
        let { dispatch, locationData } = this.props;

        if (!selectedLocation) {
            message.warn('Please select a location to add');
            return;
        }

        if (!locationData.find(loct => loct.id === selectedLocation.id)) {
            message.warn('Oops! looks like selected location not exist');
            return;
        }

        dispatch(updateLocation(selectedLocation));
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
        let { selectedLocation } = this.state;
        return (
            <div className="edit-location">
                <MapSearchDrawer
                    visible={true}
                    locations={[selectedLocation]}
                    selectedLocation={selectedLocation}
                    onLocationSelect={this.onLocationSelect}
                    onClose={this.onClose}
                    footerAction={<Button onClick={this.onUpdateMap} type="primary">Update Map</Button>}
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