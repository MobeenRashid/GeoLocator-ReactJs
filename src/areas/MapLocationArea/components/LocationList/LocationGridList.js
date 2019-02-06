import React from 'react';
import { List, Card, Icon, Popconfirm, Spin } from 'antd';
import { Link } from 'react-router-dom';


const LocationGridList = (props) => (
    <Spin tip="loading..." spinning={props.fetchingData}>
        <div>
            <List className="location-list" grid={{ gutter: 10, md: 3, sm: 2, xs: 2 }}
                dataSource={props.data}
                renderItem={item => (
                    <List.Item className="location-item">
                        <Card title={item.address} className="location-card"
                            actions={
                                [
                                    <Link to={`locations/edit/${item.id}`}>
                                        <Icon type="edit" />
                                    </Link>,
                                    <Popconfirm title="Are you sure you want to delete the location?" okText="yes" cancelText="no" onConfirm={() => { props.onLocationDelete(item.id) }}>
                                        <Icon type="delete" />
                                    </Popconfirm>]
                            }>
                            <p className="nowrap-ellip"><b>{item.address}</b></p>
                            <p className="nowrap-ellip">Latitude: {item.lat}</p>
                            <p className="nowrap-ellip">Longitude: {item.lng}</p>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    </Spin>
);


export default LocationGridList;