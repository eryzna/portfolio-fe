import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './components/Contact'
import Dev from './components/Dev'
import Art from './components/Art'
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
  
  <React.StrictMode>
    <Router>
     
     <Route exact path="/portfolio-fe"component={App} />
     <Route exact path="/art" component={Art} />
     <Route exact path="/development" component={Dev} />
     <Route exact path="/contact" component={Contact} />
     
  
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
