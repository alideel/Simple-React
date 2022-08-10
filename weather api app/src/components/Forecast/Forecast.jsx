import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';

import styles from './Forecast.module.css';
import PropTypes from 'prop-types';

const Forecast = ({ forecast }) => {
    return (
        <Container className={styles.box}>
            <Row>
                <Col xs={12} md={4}>
                    <div className={styles.card}>
                        <CurrentDay currentDay={forecast.currentDay} />
                    </div>
                </Col>
                <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                    <CurrentDayDescription forecast={forecast.currentDayDetails} />
                    <UpcomingDaysForecast days={forecast.upcomingDays} />
                </Col>
            </Row>
        </Container>
    );
};
Forecast.propTypes = {
    forecast: PropTypes.shape({
        currentDay: PropTypes.object,
        currentDayDetails: PropTypes.array,
        upcomingDays: PropTypes.array,
    }),
};
export default Forecast;
