import React from 'react';
import { shallow } from 'enzyme';
import SongLyrics from './SongLyrics';

describe('Search component', () => {
  it('renders Search', () => {
    const songLyrics = {
      lyrics: 'doo doo doo'
    };

    const wrapper = shallow(
      <SongLyrics artistName='Tool' songName='Song1' songLyrics='doo doo doo doo' SongLyrics={songLyrics}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
