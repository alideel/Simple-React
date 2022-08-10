import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';
import styles from './Page.module.css';
import useForecast from '../../hooks/useForecast';
const Page = () => {
    const { isError, isLoading, forecast, submitLocation } = useForecast();

    const submitRequest = location => {
        submitLocation(location);
    };
    return (
        <Fragment>
            <Header />
            {!forecast && (
                <div className={`${styles.box} position-relative`}>
                    {!isLoading && <Form submitMethod={submitRequest} />}
                    {isError && <Error message={isError} />}
                    {isLoading && <Loader />}
                </div>
            )}

            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
};

export default Page;
