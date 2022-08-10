import React from 'react';

import styles from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({submitMethod}) => {
    const [location , setLocation] = React.useState('');
    const submit = (e) => {
        e.preventDefault();
        if(!location || location === '') return 
        submitMethod(location);
    }
    
    return (
        <form onSubmit={submit}>
            <input onSubmit={submit}
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button}>
                SEARCH
            </button>
        </form>
    );
};
Form.propTypes = {
    submitMethod: PropTypes.func.isRequired,
};
export default Form;
