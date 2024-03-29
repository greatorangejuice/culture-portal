import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import MainPage from './containers/MainPage/MainPage';
import PersonalPage from './containers/PersonalPage/PersonalPage';
import DevelopersPage from './containers/DevelopersPage/DevelopersPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
// import Developers from "./components/Developers/Developers";

class App extends Component {
  state = {
    person: 0,
    lang: 'ru',
  };

  onButtonClick = (event) => {
    this.setState({
      person: event.target.id,
    });
  };

  changeLang = (lng) => {
    this.setState({ lang: lng });
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <LanguageSelector changeLang={this.changeLang} />
          <Header />
          <Route path="/" render={(props) => <MainPage onButtonClick={this.onButtonClick} currentLang={this.state.lang} />} exact />
          <Route path="/personalpage" render={(props) => <PersonalPage person={this.state.person} />} exact />
          <Route path="/developers" render={(props) => <DevelopersPage />} exact />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default withNamespaces()(App);
