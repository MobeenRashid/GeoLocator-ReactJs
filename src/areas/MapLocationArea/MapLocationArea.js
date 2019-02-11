import React, { Component } from 'react';
import PropTypes from 'prop-types';
import locationAreaRoutes from './location.area.routes';
import { connect } from 'react-redux';
import { fetchLocationsIfRequired } from '../../actions/locationActions';
import { getGoogleMapKey } from '../../actions/authActions';

class MapLocationArea extends Component {

    //#region Life Cycle Hooks
    componentDidMount() {
        this.props.onDidMount();
    }
    //#endregion

    render() {
        return (<div className="map-location-area">
            {locationAreaRoutes}
        </div>);
    }
}

MapLocationArea.propTypes = {
    onDidMount: PropTypes.func.isRequired
}


const mapDispatchToProps = dispatch => {
    return {
        onDidMount: () => {
            dispatch(fetchLocationsIfRequired());
            dispatch(getGoogleMapKey());
        }
    }
}

export default connect(null, mapDispatchToProps)(MapLocationArea);