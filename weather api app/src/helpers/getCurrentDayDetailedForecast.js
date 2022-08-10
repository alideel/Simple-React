const currentDayForecast = data => [
    {
        name: 'predictability',
        value: 40,
        unit: '%',
    },
    {
        name: 'humidity',
        value: data.main.humidity,
        unit: '%',
    },
    {
        name: 'wind',
        value: Math.round(data.wind.speed),
        unit: 'km/h',
    },
    {
        name: 'air pressure',
        value: data.main.pressure,
        unit: 'mb',
    },
    {
        name: 'max temp',
        value: Math.round(data.main.temp_max),
        unit: '°C',
    },
    {
        name: 'min temp',
        value: Math.round(data.main.temp_min),
        unit: '°C',
    },
];

export default currentDayForecast;
