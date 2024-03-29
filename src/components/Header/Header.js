import React, {Component} from 'react';
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';
import './Header.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import i18n from '../../i18n';

export default class Header extends Component {
    render() {
        return (
            <Container maxWidth="xl">
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Grid container
                              direction="row"
                              justify="space-between"
                              alignItems="center">
                            <Typography variant="h6" color="inherit">
                                <Link to="/" className="logo">
                                    <img style={{ width: "50px", height: "50px"}} src={logo} alt="logo"/>
                                </Link>
                            </Typography>
                            <Typography variant="h4" align="center" color="inherit">
                                <span className="header-title">{i18n.t('header')}</span>
                            </Typography>
                            <Typography variant="h6" align="right" color="inherit">
                                <Button color="inherit">
                                    <Link to="/">
                                        {i18n.t('mainPage')}
                                    </Link>
                                </Button>
                                <Button color="inherit">
                                    <Link to="/developers">
                                        {i18n.t('developers')}
                                    </Link>
                                </Button>
                            </Typography>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Container>
        );
    };
}
