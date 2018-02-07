import React, { Component } from 'react';

import './normalize.css';
import './assets/css/font-awesome.css';

import Navigation from './components/navigation';
import Lead from './components/lead';
// import Icopartners from './components/icopartners';
// import About from './components/about';
import Comparison from './components/comparison'; // Rename for generic table
// import Mission from './components/mission';
// import Terms from './components/terms';
// import Roadmap from './components/roadmap';
// import Team from './components/team';
// import Press from './components/press';
// import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Lead/>
        {/* <Icopartners/> */}
        {/* <About/> */}
        <Comparison/>
        {/* <Mission/> */}
        {/* <Terms/> */}
        {/* <Roadmap/> */}
        {/* <Team/> */}
        {/* <Press/> */}
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;

// subscribe?
// team xp
// coop