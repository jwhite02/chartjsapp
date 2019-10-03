import React from 'react';
import { mount } from 'enzyme';
import Home from '../Home';
import { Container } from 'react-bootstrap';
import  '../../setupTests';

describe('Test for Homepage', () => {
    let wrapper;

    beforeEach(function() {
        wrapper = mount(<Home />)
    });
    
    it('Testing Home', () => {
        const component = wrapper.find(Container);
        expect(component.contains(<h1>Homepage</h1>));
        
    })
});


// <div>
//     <Container>
//         <h1>Homepage</h1>
//         <p> Examples of graphs using Graph.js </p>
//     </Container>
// </div>