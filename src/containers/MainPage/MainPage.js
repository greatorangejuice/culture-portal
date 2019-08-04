import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Typography from "@material-ui/core/Typography";
// import authors from "../../data/authors";
import PersonCard from '../../components/personCard/PersonCard';
import './MainPage.css';
import ClientSearch from '../../components/Search/ClientSearch';
import data from '../../data/authors';

class MainPage extends React.Component {
  state = { searchData: data, rememberName: data, rememberCity: data, request: '' };

  changeName = (clientRequest) => {
    let value;
    if (this.props.currentLang === 'ru') {
      value = this.state.rememberCity.filter((item) => item.name.toLowerCase().includes(clientRequest));
    } else if (this.props.currentLang === 'en') {
      value = this.state.rememberCity.filter((item) => item.englishName.toLowerCase().includes(clientRequest));
    } else if (this.props.currentLang === 'by') {
      value = this.state.rememberCity.filter((item) => item.belarusianName.toLowerCase().includes(clientRequest));
    }

    if (!clientRequest) {
      this.setState({ rememberName: data, searchData: this.state.rememberCity });
    } else {
      this.setState({ rememberName: value, searchData: value, request: clientRequest });
    }
  };

  changeCity = (clientRequest) => {
    const value = this.state.rememberName.filter((item) => item.birthPlace.includes(clientRequest));
    if (!clientRequest) {
      this.setState({ rememberCity: data, searchData: this.state.rememberName });
    } else {
      this.setState({ rememberCity: value, searchData: value, request: clientRequest });
    }
  };
  render() {
    return (
      <Container maxWidth="xl">
        <div className="main-page-container">
          <ClientSearch onChangeName={this.changeName} onChangeCity={this.changeCity} />
          <div className="authors-list">
            <Grid container direction="row" justify="space-evenly" alignItems="center">
              <PersonCard onButtonClick={this.props.onButtonClick} onSearch={this.state.searchData} />
            </Grid>
          </div>
        </div>
      </Container>
    );
  }
}

export default MainPage;
