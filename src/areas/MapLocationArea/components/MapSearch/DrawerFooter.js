import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const DrawerFooter = (props) => {
    return (
        <div className="footer-actions"
            style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e8e8e8',
                padding: '10px 16px',
                textAlign: 'right',
                left: 0,
                background: '#fff',
                borderRadius: '0 0 4px 4px',
            }}
        >
            <Button
                style={{
                    marginRight: 8,
                }}
                disabled={props.disabled}
                onClick={props.onCancel}
            >
                <Link to={props.returnUrl || '/locations'}>Cancel</Link>
            </Button>
            {props.footerAction}
        </div>
    );
}

export default DrawerFooter;