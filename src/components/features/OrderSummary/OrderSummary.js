import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import calculateTotal from '../../../utils/calculateTotal';
import formatPrice from '../../../utils/formatPrice';

class OrderSummary extends React.Component {
  render() {
    const {cost, options} = this.props;
    calculateTotal(formatPrice({cost}, {options}));
    return (
      <h2 className={styles.component}>{cost}</h2>
    );
  }
}

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.object),
};

export default OrderSummary;
