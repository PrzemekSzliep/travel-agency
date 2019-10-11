import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

class OrderSummary extends React.Component {
  render() {
    const {cost, options} = this.props;
    return (
      <h2 className={styles.component}>{calculateTotal(formatPrice(cost), options)}</h2>
    );
  }
}

OrderSummary.propTypes = {
  cost: PropTypes.node,
  options: PropTypes.object,
};

export default OrderSummary;
