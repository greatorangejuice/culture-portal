import React, { Component } from 'react';
import './Search.css';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import NativeSelect from '@material-ui/core/NativeSelect';
import i18n from '../../i18n';

class Search extends Component {
  state = {
    value: { value: this.props.value },
  };

  handleChangeName = (e) => {
    const clientRequest = e.target.value;
    this.props.onChangeName(clientRequest.toLowerCase());
  };

  handleChangeCity = (e) => {
    const clientRequest = e.target.value;
    this.props.onChangeCity(clientRequest);
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <Container className="search-container">
          <TextField
            id="outlined-search"
            label={i18n.t('search')}
            type="search"
            className="search"
            margin="normal"
            variant="outlined"
            onChange={this.handleChangeName}
          />
        </Container>
        <Container className="select-container">
          <NativeSelect value={this.state.value} onChange={this.handleChangeCity} className="selectCity" name={this.props.name}>
            <option key={''} value={''}>
              {i18n.t('all_place')}
            </option>
            <option key={'Минск'} value={'Минск'}>
              {i18n.t('minsk')}
            </option>
            <option key={'Витебская область'} value={'Витебская область'}>
              {i18n.t('vitebsk')}
            </option>
            <option key={'Виленская губерния'} value={'Виленская губерния'}>
              {i18n.t('vilna')}
            </option>
          </NativeSelect>
        </Container>
      </>
    );
  }
}

export default Search;
