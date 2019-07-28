import React, { Component } from 'react';
import Search from './Search';

class ClientSearch extends Component {
  changeName = (data) => {
    this.props.onChangeName(data);
  };

  changeCity = (data) => {
    this.props.onChangeCity(data);
  };

  render() {
    return <Search onChangeName={this.changeName} onChangeCity={this.changeCity} />;
  }
}
export default ClientSearch;
