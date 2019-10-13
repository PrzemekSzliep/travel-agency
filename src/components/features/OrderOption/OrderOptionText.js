import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({setOptionValue}) => (
  <div>
    <input required className={styles.input} type='text' onChange={event => setOptionValue(event.currentTarget.value)}/>
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.any,
};

export default OrderOptionText;
