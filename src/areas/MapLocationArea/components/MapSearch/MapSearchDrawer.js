import React from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'antd';
import MapLocationSearch from './MapLocationSearch';
import BasicMap from '../../../../components/GoogleMap/BasicMap';
import DrawerFooter from './DrawerFooter';

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
                <MapLocationSearch
                    disabled={props.disabled}
                    reset={!props.visible}
                    onLocationSelect={props.onLocationSelect}
                    defaultLocation={props.selectedLocation} />
                <BasicMap locations={props.locations} />
            </div>
            <DrawerFooter {...props}></DrawerFooter>
        </Drawer>
    );
}

function mapStateToProps(state) {
    return {
        mapKey: state.googleMapKey
    }
}

export default connect(mapStateToProps)(MapSearchDrawer);
