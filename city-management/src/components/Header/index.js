import React, { Component } from 'react';
import './index.less';
import { Row, Col } from 'antd';
import Util from '../../Utils/util';
import axios from '../../axios';

class Header extends Component {
    constructor() {
        super();
        this.state = {sysTime: Util.formateDate(new Date().getTime())};
    }

    componentDidMount() {
        this.setState({
            username: 'YUFAN'
        });
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({sysTime});
        }, 1000);
        this.getWeatherAPIDate();
    }

    getWeatherAPIDate() {
        let city = '北京';
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=XML&ak=FK9mkfdQsloEngodbFl4FeY3' 
        }).then((res) => {
            if (res && res.status === 'success') {
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                });
            }
        });
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>Welcome, {this.state.username}</span>
                        <a href="#">Sign out</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        Home
                    </Col>
                    {
                            this.state.weather ? 
                            <Col span={20} className="weather">
                                <span className="date">{this.state.sysTime}</span>
                                <span className="weather-img">
                                    <img src={this.state.dayPictureUrl} alt="" />
                                </span>
                                <span className="weather-detail">{this.state.weather}</span>
                            </Col> : 
                            <Col span={20} className="weather">
                                <span className="date">{this.state.sysTime}</span>
                                <span>Sunny</span>
                            </Col>
                    }
                </Row>
            </div>
        );
    }
}

export default Header;