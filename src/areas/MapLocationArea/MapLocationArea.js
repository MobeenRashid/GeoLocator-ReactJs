import React, { Component } from 'react';
import PropTypes from 'prop-types';
import locationAreaRoutes from './location.area.routes';
import { connect } from 'react-redux';
import { fetchLocationsIfRequired } from '../../actions/locationActions';

class MapLocationArea extends Component {

    //#region Life Cycle Hooks
    async componentDidMount() {
        await this.props.onDidMount();
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
        onDidMount: async () => {
            return dispatch(fetchLocationsIfRequired());
        }
    }
}

export default connect(null, mapDispatchToProps)(MapLocationArea);