import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import BasicMap from '../../../components/GoogleMap/BasicMap';
import LocationContainer from './LocationList/LocationContainer';

const appSetting = require('../../../app.settings');

class MapAndLocationContainer extends PureComponent {
    render() {
        let { locationData } = this.props;
        return (
            <div className="map-location-container" >
                <Row>
                    <Col className="map-holder" lg={12} md={12} sm={24}>
                        <BasicMap
                            isMarkerShown
                            locations={locationData}
                            googleMapURL={appSetting.google_map_url}
                            loadingElement={<div className="map-loading-div" style={{ height: '100%' }} />}
                            containerElement={<div className="map-container" style={{ height: '100%' }} />}
                            mapElement={<div className="map-element" style={{ height: '100%' }} />}
                        ></BasicMap>
                    </Col>
                    <Col className="locations-holder" lg={12} md={12} sm={24}>
                        <LocationContainer {...this.props}></LocationContainer>
                    </Col>
                </Row>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        locationData: state.locations
    }
}

export default connect(mapStateToProps)(MapAndLocationContainer);