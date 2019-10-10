import React from 'react';
import PropTypes from 'prop-types';

import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

class OrderForm extends React.Component {
  render() {
    const {tripCost, options} = this.props;
    return (
      <div>
        <Row>
          <Col xs={12}>
            <OrderSummary cost={tripCost} options={options}/>
          </Col>
        </Row>
      </div>
    );
  }
}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.object),
};

export default OrderForm;
