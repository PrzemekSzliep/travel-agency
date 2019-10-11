import React from 'react';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing';

import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';

class OrderForm extends React.Component {
  render() {
    const {tripCost, options, setOrderOption} = this.props;
    return (
      <div>
        <Row>
          {pricing.map(pricingData => (
            <Col md={4} key={pricingData.id}>
              <OrderOption {...pricingData} currentValue={options[pricingData.id]} setOrderOption={setOrderOption}/>
            </Col>
          ))}
          <Col xs={12}>
            <OrderSummary cost={tripCost} options={options}/>
          </Col>
        </Row>
      </div>
    );
  }
}

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
  setOrderOption: PropTypes.node,
};

export default OrderForm;
