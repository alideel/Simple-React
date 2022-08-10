import React from 'react';

import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';
import PropTypes from 'prop-types';

const CurrentDay = ({ currentDay }) => {
    return (
        <div className="d-flex">
            <div className={styles.img}></div>
            <div className={styles.gradient}></div>
            <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
                <div>
                    <h2 className="font-weight-bold mb-1">{currentDay.weekday}</h2>
                    <p className="mb-0">{currentDay.date}</p>
                    <p className="d-flex align-items-baseline font-weight-lighter mb-1">
                        <img width="10" height="15" src={locationIcon} className="mr-1" alt="location pin icon" />
                        <span>{currentDay.location}</span>
                    </p>
                </div>
                <div>
                    <h2 className="font-weight-bold mb-1">
                        <span>{currentDay.temperature}</span>°C
                    </h2>
                    <h5 className="font-weight-lighter">{currentDay.weatherDescription}</h5>
                </div>
            </div>
        </div>
    );
};

CurrentDay.propTypes = {
    CurrentDay: PropTypes.shape({
        weekday: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        weatherIcon: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired,
        weatherDescription: PropTypes.string.isRequired,
    }),
};

export default CurrentDay;
