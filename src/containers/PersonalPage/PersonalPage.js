import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import Description from '../../components/Description/Descriptipon';
import Container from '@material-ui/core/Container';
import AuthorsTimeline from '../../components/Timeline/AuthorsTimeline';
import data from '../../data/authors';
import dataPhoto from '../../data/gallery';
import Video from '../../components/Video/Video';
import Gallery from '../../components/Gallery/Gallery';
import WorkList from '../../components/WorkList/WorkList';
import YandexMap from "../../components/Map/YandexMap";

function PersonalPage(props) {
  const profile = data[props.person];
  const photo = dataPhoto[props.person];
  return (
    <Container maxWidth="md">
      <div className="personal-page">
        <Avatar data={profile} />
        <Description data={profile} />
        <AuthorsTimeline activities={profile.activity} />
        <Video data={profile} />
        <Gallery data={photo} />
        <WorkList data={profile} />
        <YandexMap data={profile}/>
      </div>
    </Container>
  );
}

export default PersonalPage;
