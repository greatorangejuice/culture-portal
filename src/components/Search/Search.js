import React, { Component } from 'react';
import './Search.css';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import NativeSelect from '@material-ui/core/NativeSelect';

class Search extends Component {
  heldeChangeName = (e) => {
    const clientRequest = e.target.value;
    this.props.onChangeName(clientRequest.toLowerCase());
  };

  heldeChangeCity = (e) => {
    const clientRequest = e.target.value;
    this.props.onChangeCity(clientRequest);
  };

  render() {
    return (
      <>
        <Container className="search-container">
          <TextField
            id="outlined-search"
            label="Поиск"
            type="search"
            className="search"
            margin="normal"
            variant="outlined"
            onChange={this.heldeChangeName}
          />
        </Container>
        <Container className="select-container">
          <NativeSelect
              value=''
              onChange={this.heldeChangeCity}
              className="selectCity"
          >
            <option value="" selected>
              Место рождения
            </option>
            <option value="Минск">Минская область</option>
            <option value="Витебская область">Витебская область</option>
            <option value="Виленская губерния">Виленская губерния</option>
          </NativeSelect>
        </Container>
      </>
    );
  }
}

export default Search;
