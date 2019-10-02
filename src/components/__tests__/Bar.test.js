import React from 'react'
import Bar from '../Bar';
import ChartHolder from '../ChartHolder';
import { mount, shallow } from 'enzyme';
import '../../setupTests'

describe('should display Bar ', () => {
    
  let wrapper;

   beforeEach(() => {
      wrapper = shallow(<Bar />);
   });
    
    test('should behave...', () => {
        expect(1).toEqual(1);
        const component = wrapper.find(ChartHolder);
        expect(component).toBeDefined()
    });
});