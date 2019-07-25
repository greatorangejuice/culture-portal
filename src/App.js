import React, {Component} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './containers/MainPage/MainPage';
import PersonalPage from './containers/PersonalPage/PersonalPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
            <Footer/>
          </div>
        </Router>
    );
  }
}
