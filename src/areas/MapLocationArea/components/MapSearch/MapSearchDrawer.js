import React from 'react';
import { Drawer } from 'antd';
import MapLocationSearch from './MapLocationSearch';
import BasicMap from '../../../../components/GoogleMap/BasicMap';
import DrawerFooter from './DrawerFooter';

const appSetting = require('../../../../app.settings');

const MapSearchDrawer = (props) => {
    return (
        <Drawer
            className="search-drawer"
            title="Search Location"
            placement="top"
            onClose={props.onClose}
            visible={props.visible}
            height={window.innerHeight}
        >
            <div className="drawer-content">
                <MapLocationSearch disabled={props.disabled} reset={!props.visible} onLocationSelect={props.onLocationSelect} defaultLocation={props.selectedLocation}></MapLocationSearch>
                <BasicMap
                    isMarkerShown
                    locations={props.locations}
                    googleMapURL={appSetting.google_map_url}
                    loadingElement={<div className="map-loading-div" style={{ height: '100%' }} />}
                    containerElement={<div className="map-container" style={{ height: '100%' }} />}
                    mapElement={<div className="map-element" style={{ height: '100%' }} />}
                >
                </BasicMap>
            </div>
            <DrawerFooter {...props}></DrawerFooter>
        </Drawer>
    );
}

export default MapSearchDrawer;
