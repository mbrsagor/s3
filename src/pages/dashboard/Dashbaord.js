import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import ReportList from '../../contagion/ReportList';

class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="page_title">
                    <div className="card">
                        <Row className="m-0">
                            <Col md={8}>
                                <div className="card-body">Dashboard</div>
                            </Col>
                            <Col className="text-right" md={4}>
                                <div className="card-body">
                                    <a href="/">Homepage</a> <FeatherIcon icon="chevrons-right" /> Dashboard
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="page-container m-2 p-2">

                    <Row>
                        <Col md={6}>
                            <ReportList header_title="Today Total Test" country_name="Bangaldesh" bg_name="bg-info text-light" count="15030" date="06/06/2020" />
                        </Col>

                        <Col md={6}>
                            <ReportList header_title="Today Total Effected" country_name="Bangaldesh" bg_name="bg-warning text-light" count="3500" date="06/06/2020" />
                        </Col>

                        <Col md={6}>
                            <ReportList header_title="Today Total Dies" country_name="Bangaldesh" bg_name="bg-danger text-light" count="120" date="06/06/2020" />
                        </Col>

                        <Col md={6}>
                            <ReportList header_title="Today Total Improve" country_name="Bangaldesh" bg_name="bg-success text-light" count="1620" date="06/06/2020" />
                        </Col>

                    </Row>
                </div>
            </>
        );
    }
}

export default Dashboard;
