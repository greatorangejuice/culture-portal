import React, {Component} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './containers/MainPage/MainPage';
// import CommonPage from './containers/CommonPage/CommonPage';
import PersonalPage from './containers/PersonalPage/PersonalPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Persons from "./containers/Persons/Persons";

export default class App extends Component {
  state={
    person: 0
  };
  onButtonClick = (event) => {
    this.setState({
      person: event.target.id
    })
  };

  render() {
    return (
        <Router>
          <div>
            <Header/>
            <Route path="/"
                   render={(props) => <MainPage
                       onButtonClick={this.onButtonClick}/>}
                   exact/>
            <Route path="/personalpage"
                   render={(props) => <PersonalPage person={this.state.person}/>}
                   exact/>
            <Route path="/persons"
                   render={(props) => <Persons person={this.state.person}/>}
                   exact/>
            <Footer/>
          </div>
        </Router>
    );
  }
}
