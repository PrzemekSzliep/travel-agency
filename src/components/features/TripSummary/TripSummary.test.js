import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component Trip Summary', () => {
  it('should get correct link', () => {

    const id = 'abc';
    const component = shallow(<TripSummary id={id}/>);
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(`/trip/${id}`);
  });

  it('should throw error if no props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct title and image', () => {
    const expectedAlt = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} />);


    expect(component.find('.image').prop('src')).toEqual(expectedImage);
    expect(component.find('.image').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, days and cost', () => {
    const expectedName = 'XYZ';
    const expectedDays = 10;
    const expectedCost = '99';

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);

    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);

    const renderedDays = component.find('.details span').at(0).text();
    expect(renderedDays).toEqual(`${expectedDays} days`);

    const renderedCost = component.find('.details span').at(1).text();
    expect(renderedCost).toEqual(`from ${expectedCost}`);
  });

  it('should render tags', () => {
    const tags = ['aa', 'bb', 'cc'];
    const component = shallow(<TripSummary tags={tags} />);

    const firstTag = component.find('.tag').at(0).text();
    const secondTag = component.find('.tag').at(1).text();
    const thirdTag = component.find('.tag').at(2).text();

    expect(firstTag).toEqual(tags[0]);
    expect(secondTag).toEqual(tags[1]);
    expect(thirdTag).toEqual(tags[2]);

  });

  it('should render tags div if tags is truthy', () => {
    const component = shallow(<TripSummary tags={['one', 'two', 'three']} />);

    const renderedTags = component.find('.tags');
    expect(renderedTags).toBeTruthy();
  });

});
