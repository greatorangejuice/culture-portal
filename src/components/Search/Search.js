import React from "react";
import "./Search.css"
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";

function Search(props) {
    return (
        <Container className="search-container">
            <TextField
                id="outlined-search"
                label="Поиск"
                type="search"
                className="search"
                margin="normal"
                variant="outlined"
            />
        </Container>
    )
}

export default Search;
