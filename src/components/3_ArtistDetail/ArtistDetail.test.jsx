import React from 'react';
import { shallow } from 'enzyme';
import ArtistDetail from './ArtistDetail';

describe('Search component', () => {
  it('renders Search', () => {
    const artistDetail = [
      {
        id: '1234',
        title: 'album 1',
        cover_art: 'http://coverarturl.jpg'
      },
      {
        id: '12345',
        title: 'album 2',
        cover_art: 'http://coverarturl.jpg'
      }
    ];

    const wrapper = shallow(
      <ArtistDetail artistName='Tool' artistDetail={artistDetail}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
