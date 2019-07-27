import React from 'react';
import data from '../../data/developers'
import Avatar from "../../components/Avatar/Avatar";
import Links from "../../components/Links/Links";

function DevelopersPage(props) {

    return (
        data.map((item, index) => {
            return (
                <div key={index}>
                    <Avatar data={item}/>
                    <Links data={item}/>
                </div>
            );
        })
    )
}

export default DevelopersPage;
