import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';
import Header from './components/Header';
import Form from './components/Form'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Header />
          <Form />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
