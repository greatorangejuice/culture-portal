import React, {Component} from 'react';
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-container">
                    <Link to="/" className="logo">
                        <img style={{ width: "50px", height: "50px"}} src={logo} alt="logo"/>
                    </Link>
                    <div className="header-title-container">
                        <h1 className="header-subtitle">Белорусские поэты</h1>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <Link to="/developers">
                                    Разработчики
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    };
}
