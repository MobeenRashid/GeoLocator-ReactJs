import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const HeaderActions = (props) => {
    return (
        <Button type="primary" onClick={props.onAddMapClick}>
            <Link to="locations/addnew">Add Map</Link>
        </Button>
    );
}

export default HeaderActions;