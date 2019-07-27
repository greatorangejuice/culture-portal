import React from 'react';
import data from '../../data/developers'
import Avatar from "../../components/Avatar/Avatar";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";

function DevelopersPage(props) {

    return (
        data.map((item, index) => {
            return (
                <div key={index}>
                    <Avatar data={item}/>
                    <PersonalInfo data={item}/>
                </div>
            );
        })
    )
}

export default DevelopersPage;
