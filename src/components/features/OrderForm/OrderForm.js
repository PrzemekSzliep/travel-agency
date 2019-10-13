import React from 'react';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing';

import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripName, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const name = options.name;
  const contact = options.contact;

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  if (name != '' && contact != '') {
    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json();
      }).then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  }


};

class OrderForm extends React.Component {
  render() {
    const {tripCost, options, setOrderOption, tripName, tripId, countryCode} = this.props;
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
            <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, countryCode)}>Order now!</Button>
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
  tripName: PropTypes.node,
  countryCode: PropTypes.node,
  tripId: PropTypes.string,
};

export default OrderForm;
