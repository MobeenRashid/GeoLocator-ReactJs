import React from 'react';
import { withScriptjs, withGoogleMap } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';


const MapSearchBox = withScriptjs(withGoogleMap((props) =>
    (<div data-standalone-searchbox="">
        <StandaloneSearchBox
            ref={props.onSearchBoxMounted}
            onPlacesChanged={props.onPlacesChanged}>
            {props.children}
        </StandaloneSearchBox>
    </div>)
));

export default MapSearchBox
