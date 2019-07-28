import React from 'react';
import data from '../../data/developers'
import Avatar from "../../components/Avatar/Avatar";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import './DevelopersPage.css';

function DevelopersPage() {
    const devepolers = data.map((item, index) => {
        return (

            <div className="dev-card" key={index}>
                <Card>
                    <CardContent>
                        <Avatar data={item}/>
                        <PersonalInfo data={item}/>
                    </CardContent>
                </Card>
            </div>
        );
    });

    return (
        <Container maxWidth="lg">
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                wrap="wrap"
            >
                {devepolers}
            </Grid>
        </Container>
    )
}

export default DevelopersPage;
