import React from 'react'
import Bar from '../Bar';
import ChartHolder from '../ChartHolder';
import { Container} from 'react-bootstrap'
import { mount, shallow } from 'enzyme';
import '../../setupTests'

describe('Testing the Bar Component ', () => {

  let wrapper;

   beforeEach(() => {
      wrapper = mount(<Bar />);
      //console.log('this is my wrapper:' + wrapper)
   });
    
    test('Testing Container...', () => {
        const component = wrapper.find(Container);
        expect(component).toBeDefined()
        expect(component).toHaveLength(1)
        expect(component.containsMatchingElement(ChartHolder)).toEqual(true)
        expect(component).toBeTruthy();
        console.log(component.prop('refType')) // instead ofq toExist()
        
    });

    test('CardHolder texting ...', () => {
        const component = wrapper.find(ChartHolder);
        expect(component).toBeDefined();
        expect(component).toBeTruthy();
        expect(component).toHaveLength(1);
        const myref = component.prop('refType')
        expect(myref).toBeDefined()
        //console.log(component.prop('refType'))
    });
});