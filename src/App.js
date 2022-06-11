import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import SignUp from './components/pages/SignUp';
import Video from './components/pages/Video';
import Rishikesh from './components/pages/rishikesh';
import Dehradun from './components/pages/Dehradun';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/Projects' component={Projects} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/video' component={Video} />
          <Route path='/rishikesh' component={Rishikesh} />
          <Route path='/Dehradun' component={Dehradun} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
