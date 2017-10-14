import React from 'react';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';
import Gravatar from 'react-gravatar';

import './styles.css';


const Profile = ({singleUserData}) => {
        console.log(singleUserData);

    return (

        <div className="profile-card">
            
            <Card>
                <CardTitle title={singleUserData.fullName} subtitle={singleUserData.bio} />
                <CardTitle title="0" subtitle="Items shared" />
                <CardTitle title="5" subtitle="Items borrowed" />
                <CardHeader avatar={<Gravatar email={singleUserData.email} className="gravatar-image"/>}/>
            </Card>
        </div>
        );
    }

export default Profile