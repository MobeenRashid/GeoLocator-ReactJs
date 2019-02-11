import React from 'react';
import { List, Card, Icon, Popconfirm, Skeleton } from 'antd';
import { Link } from 'react-router-dom';

const LocationGridList = (props) => (
    <div>
        {props.fetchingData && <Card size="small" className="location-card" style={{ width: '14vw', height: '38vh' }}>
            <Skeleton loading={true} active />
        </Card>}
        {!props.fetchingData && <List className="location-list" grid={{ gutter: 10, md: 3, sm: 2, xs: 2 }}
            dataSource={props.data}
            renderItem={item => (
                <List.Item key={item.id} className="location-item">
                    <Card title={item.address} className="location-card"
                        actions={
                            [
                                <Link to={`locations/edit/${item.id}`}>
                                    <Icon type="edit" />
                                </Link>,
                                <Popconfirm id="deletePopConfirm" title="Are you sure you want to delete the location?" okText="yes" cancelText="no" onConfirm={() => { props.onLocationDelete(item.id) }}>
                                    <Icon type="delete" />
                                </Popconfirm>
                            ]
                        }>
                        <p className="nowrap-ellip"><b>{item.address}</b></p>
                        <p className="nowrap-ellip">Latitude: {item.lat}</p>
                        <p className="nowrap-ellip">Longitude: {item.lng}</p>
                    </Card>
                </List.Item>
            )}
        />}
    </div>
);


export default LocationGridList;