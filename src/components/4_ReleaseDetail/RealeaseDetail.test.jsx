import React from 'react';
import { shallow } from 'enzyme';
import ReleaseDetail from './ReleaseDetail';

describe('Search component', () => {
  it('renders Search', () => {
    const releaseDetail = [
      {
        id: '1234',
        title: 'track1',
      },
      {
        id: '12345',
        title: 'track2'
      }
    ];

    const wrapper = shallow(
      <ReleaseDetail artistName='Tool' albumName='Album1' releaseDetail={releaseDetail}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
