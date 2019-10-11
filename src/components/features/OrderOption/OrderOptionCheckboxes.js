import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const newValueSet = (currentValue, id, checked) => {
  if(checked) {
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};


const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={value.id}>
        <input
          type='checkbox'
          value={value.id}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}/> {value.name} {formatPrice(value.price)}
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.node,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.node,
};

export default OrderOptionCheckboxes;
