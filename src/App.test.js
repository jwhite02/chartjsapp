import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import NavagationBar from './components/NavagationBar';
import { mount } from 'enzyme'

import '../src/setupTests'

describe('Test for App Component', () => {
  let wrapper;

  
  beforeEach(function() {
    wrapper = mount(<App />);
  });
    

  it('Verifying NavagationBar in the component', () => {
    const component = wrapper.find(NavagationBar);
    expect(component).toBeDefined();
  });

  
  it('Testing Router Component', function() {
    const component = wrapper.find(Router);
    expect(component.containsMatchingElement(<Route exact path="/" component={Home} />)).toBeTruthy();
  });
    
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// <React.Fragment>
//   <NavagationBar />
//   <Router>
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/line" component={Line} />
//       <Route path="/bar" render={(props) => {
//         console.log(props)
//         return (<Bar />)
//       }
//       } />
//       <Route path="/bubble" component={Bubble} />
//       <Route path="/doughnut" component={Doughnut} />
//     </Switch>
//   </Router>
// </React.Fragment>
//   );