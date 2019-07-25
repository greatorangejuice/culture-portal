import React from 'react';
import Avatar from '../../components/Avatar/Avatar'
import Description from '../../components/Description/Descriptipon';

import data from '../../data/authors';

function PersonalPage(props) {
    let profile = data[props.person];
    return (
        <div className="personal-page">
            <Avatar data={profile}/>
            <Description data={profile}/>

        </div>
    );
}

export default PersonalPage;
