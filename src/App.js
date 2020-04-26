import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Skills from './components/Skills';
import Project from './components/Project';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <Navigation/>
        <Content/>
        <Project/>
        <Skills/>
      </div>
    );
  }
};


export default App;
