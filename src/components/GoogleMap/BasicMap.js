import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const BasicMap = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={8}
        center={{ lat: (props.locations[0] && +props.locations[0].lat) || (52.5200), lng: (props.locations[0] && +props.locations[0].lng) || (13.4050) }}>
        {props.isMarkerShown &&
            <React.Fragment>
                {props.locations && props.locations.map(location => {
                    if (location) {
                        return <Marker key={location.id} title={location.address} position={{ lat: +location.lat, lng: +location.lng }} />
                    }
                    return null;
                })}
            </React.Fragment>
        }
    </GoogleMap>
));


export default BasicMap;