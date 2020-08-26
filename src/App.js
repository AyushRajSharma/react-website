import React from 'react';
import PageWrapper from './component/pagewrapper';
import Home from './component/pages/home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './component/pages/about';
import Contact from './component/pages/contact';


function App() {
  return (
    <Router>
    <PageWrapper>
   
        <Route
        exact = {true}
        path="/"
        component={Home}
        />
        <Route
            path="/about"
            component={About}
            />

       
        <Route
            path ="/contact"
            component= {Contact}
          />
        
    </PageWrapper>
    </Router>
  );
}

export default App;
