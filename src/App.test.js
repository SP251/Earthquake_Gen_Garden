import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import Profile from './components/profile';
import Feature from './components/feature';
import { data } from './data/data.js';

describe("Home page ", () => {

  test('Header loaded', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Earthquake Zen Garden/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Logo loaded', () => {
    const { getByAltText } = render(<App />);
    const linkElement = getByAltText(/Realtor-logo/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('List of earthquakes title loaded', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/USGS All Earthquakes, Past Hour/i);
    expect(linkElement).toBeInTheDocument();
  });

})

describe("Profile page", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Profile profile={data.profile} />);
  });

  test("should render a <Profile /> and profile container", () => {
    expect(wrapper.find('.profile-container')).toHaveLength(1);   // Some other tests
  });
  test("should render a <Profile /> and load profile image", () => {
    expect(wrapper.find('.profileImg')).toHaveLength(1);   // Some other tests
  });

})

describe("Detail page", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Feature featureId={"1"} featureData={data.data} />);
  });

  test("should render a <Feature /> and feature container", () => {
    expect(wrapper.find('.feature-container')).toHaveLength(1);   // Some other tests
  });

})

