import moment from 'moment';

const getCurrentDayForecast = data => {
    let date = new Date(data.dt);
    console.log(date);
    console.log(moment(date).format('dddd'));
    return {
        weekday: moment(date).format('dddd'),
        date: moment(date).format('MMMM Do'),
        location: data.name,
        temperature: Math.round(data.main.temp),
        weatherIcon: `https://www.metaweather.com/static/img/weather`,
        weatherDescription: data.weather[0].description,
    };
};
export default getCurrentDayForecast;
