import React from 'react';
import { connect } from 'react-redux';
import { getGoogleMapUrl } from '../../utils/mapUtils';
import { Spin, Icon } from 'antd';

export default function withDefaultSetitngs(MapComponent) {
    const MapWithDefaulSettings = (props) => {

        if (!props.mapKey) {
            return <div className="map-holder">
                <Spin tip="Loading Google Map..." size="large" indicator={<Icon type="loading" />} />
            </div>
        }
        return <MapComponent
            {...props}
            isMarkerShown
            googleMapURL={getGoogleMapUrl(props.mapKey)}
            loadingElement={<div className="map-loading-div" style={{ height: '100%' }} />}
            containerElement={<div className="map-container" style={{ height: '100%' }} />}
            mapElement={<div className="map-element" style={{ height: '100%' }} />}
        />
    }

    const mapStateToProps = state => {
        return {
            mapKey: state.googleMapKey
        }
    }

    return connect(mapStateToProps)(MapWithDefaulSettings);
}