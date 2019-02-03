import React, { Component } from 'react';
import { Card, message } from 'antd';
import LocationGridList from './LocationGridList';
import LocationApi from '../../../../api/LocationApi';
import HeaderActions from './HeaderActions';
import { deleteLocation, initLocations } from '../../../../actions/locationActions';
import { arrayToMap } from '../../../../utils/arrayUtils';

class LocationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchingLocations: false,
        }
        this.containerRef = React.createRef();
        this.locationApi = new LocationApi();

        this.onLocationDelete = this.onLocationDelete.bind(this);
    }


    //#region Life Cycle Hooks
    componentDidMount() {
        let { dispatch } = this.props;
        this.setState({ fetchingLocations: true });
        this.locationApi.GetAll(response => {
            if (response.data) {
                dispatch(initLocations(arrayToMap(response.data, loct => loct.id)));
            }
        }, error => {
            console.log(error);
        }).then(() => {
            this.setState({ fetchingLocations: false });
        });
    }
    //#endregion

    //#region User Actions
    onLocationDelete(id) {
        let { dispatch } = this.props;

        const hide = message.loading('Deleting location...');
        this.locationApi.Delete(id, response => {
            if (response.data && response.data.id) {
                dispatch(deleteLocation(response.data.id));
            }
        }, () => {
            message.error("Failed to delete location");
        }, () => {
            hide();
            message.success('Location is deleted');
        });
    }
    //#endregion

    render() {
        let { fetchingLocations } = this.state;
        let { locationData } = this.props;
        return (
            <div className="location-container" ref={this.containerRef}>
                <Card
                    className="container-card"
                    title="Map Locations"
                    extra={
                        <HeaderActions disables={fetchingLocations}></HeaderActions>
                    }>
                    <LocationGridList
                        fetchingData={fetchingLocations}
                        data={[...locationData.values()]}
                        onLocationDelete={this.onLocationDelete}>
                    </LocationGridList>
                </Card>
            </div>
        );
    }
}


export default LocationContainer;