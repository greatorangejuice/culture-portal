import React from 'react';
import Avatar from '../../components/Avatar/Avatar'
import Description from '../../components/Description/Descriptipon';
import Container from "@material-ui/core/Container";
import AuthorsTimeline from '../../components/Timeline/AuthorsTimeline'
import data from '../../data/authors';

function PersonalPage(props) {
    let profile = data[props.person];
    return (
        <Container maxWidth="md">
            <div className="personal-page">
                <Avatar data={profile}/>
                <Description data={profile}/>
                <AuthorsTimeline activities = {profile.activity}/>
            </div>
        </Container>
    );
}

export default PersonalPage;
