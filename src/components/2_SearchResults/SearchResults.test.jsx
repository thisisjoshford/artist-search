import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';

describe('Search component', () => {
  it('renders Search', () => {
    const artists = [
      {
        id: '1234',
        name: 'Tool',
        info: 'Real Tool Band'
      },
      {
        id: '12345',
        name: 'Tool',
        info: 'not so real Tool band'
      }
    ];
    const wrapper = shallow(
      <SearchResults results={artists}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
