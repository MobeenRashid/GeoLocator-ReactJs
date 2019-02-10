import React, { Component } from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';
import LocationGridList from './LocationGridList';
import HeaderActions from './HeaderActions';
import { deleteLocation } from '../../../../actions/locationActions';

class LocationContainer extends Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }

    render() {
        let { locationData, requestingLocations } = this.props;
        return (
            <div className="location-container" ref={this.containerRef}>
                <Card
                    className="container-card"
                    title="Map Locations"
                    extra={
                        <HeaderActions disables={requestingLocations}></HeaderActions>
                    }>
                    <LocationGridList
                        fetchingData={requestingLocations}
                        data={locationData}
                        onLocationDelete={this.props.onLocationDelete}>
                    </LocationGridList>
                </Card>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        requestingLocations: state.requestingLocations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLocationDelete: (id) => {
            return dispatch(deleteLocation(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer);