import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({ currentValue, setOptionValue, limits}) => (
  <div className={styles.input}  >
    <input type='number' className={styles.inputSmall} value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)}/>
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.string,
  limits: PropTypes.object,
};

export default OrderOptionNumber;
