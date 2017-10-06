import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    let courses = [
      { name: 'Complete Ios10 dev course', price:199},
      { name: 'Complete pentesting course', price:299},
      { name: 'Complete Front-end dev course', price:499},
      { name: 'Complete Bug Bounty and web app pentesting', price:99},
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course Sales</h2>
        </div>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
