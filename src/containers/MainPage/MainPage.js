import React from 'react';
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import authors from "../../data/authors";
import PersonCard from "../../components/personCard/PersonCard";
import './MainPage.css';
import Search from "../../components/Search/Search";

function MainPage(props) {
    return (
        <div className="main-page-container">
            <Search />
            <div className="authors-list">
                <PersonCard onButtonClick={props.onButtonClick}/>
            </div>
        </div>
    )
}

export default MainPage;
