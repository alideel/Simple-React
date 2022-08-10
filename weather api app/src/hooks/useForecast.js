import { useState } from 'react';
import axios from 'axios';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
// import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';
// base url for find latitude and longitude for locations
const BASE_URL = 'http://api.openweathermap.org/geo/1.0/direct';
const APP_ID = '350f4d2b10a04c54374ceb1cb802eac8';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const REQUEST_WEATHER = `${CROSS_DOMAIN}/${WEATHER_URL}`;

const useForecast = () => {
    const [isError, setIsError] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [forecast, setForecast] = useState(null);

    const findLatitudeAndLongitude = async location => {
        const { data } = await axios(`${REQUEST_URL}`, { params: { q: location, appid: APP_ID, limit: 4 } });
        if (!data || data.length === 0) {
            setIsError('there is no such location');
            setIsLoading(false);
            return;
        }
        return data;
    };

    const getForecastData = async (lat, lon) => {
        const { data } = await axios(REQUEST_WEATHER, {
            params: { lat, lon, appid: APP_ID },
        });
        if (!data || data.length === 0) {
            setIsError('something went wrong');
            setIsLoading(false);
            return;
        }
        return data;
    };

    const gatherForecastData = data => {
        const currentDay = getCurrentDayForecast(data);
        const currentDayDetails = getCurrentDayDetailedForecast(data);
        // const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);
        const upcomingDays = [
            {
                imgUrl: 'no image',
                temperature: Math.round(40),
                weekday: 'Sun',
            },
            {
                imgUrl: 'no image',
                temperature: Math.round(38),
                weekday: 'Mon',
            },
            {
                imgUrl: 'no image',
                temperature: Math.round(36),
                weekday: 'Wed',
            },
            {
                imgUrl: 'no image',
                temperature: Math.round(43),
                weekday: 'Fri',
            },
            {
                imgUrl: 'no image',
                temperature: Math.round(33),
                weekday: 'Sat',
            },
        ];
        setForecast({ currentDay, currentDayDetails, upcomingDays });

        setIsLoading(false);
    };
    const submitLocation = async location => {
        setIsLoading(true);
        setIsError(false);
        let response = await findLatitudeAndLongitude(location);
        if (!response) return;
        let data = await getForecastData(response[0].lat, response[0].lon);
        setIsLoading(false);
        if (!data) return;
        console.log(data);
        gatherForecastData(data);
    };
    return {
        isError,
        isLoading,
        forecast,
        submitLocation,
    };
};

export default useForecast;
