import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import authors from "../../data/authors";
import PersonCard from "../../components/personCard/PersonCard";
import './MainPage.css';
import Search from "../../components/Search/Search";

function MainPage(props) {
    return (
        <Container maxWidth="xl">
            <div className="main-page-container">
                <Search />
                <div className="authors-list">
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                    >
                        <PersonCard onButtonClick={props.onButtonClick}/>
                    </Grid>
                </div>
            </div>
        </Container>
    )
}

export default MainPage;
