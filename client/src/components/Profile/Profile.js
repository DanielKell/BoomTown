import React from 'react';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';
import Gravatar from 'react-gravatar';

import './styles.css';

const Profile = ({singleUserData}) => {
        console.log(singleUserData);

    return (

        <div className="profile-card">
            <Card>
                <div className="card-structure">
                    <div className="profile-name">
                        <CardTitle title={singleUserData.fullName} subtitle={singleUserData.bio} />
                    </div>
                    <div className="profile-item-data">
                        <CardTitle title="2" subtitle="Items shared" />
                        <CardTitle title="4" subtitle="Items borrowed" />
                    </div>
                    <div className="profile-gravatar">
                        <Gravatar size={150} email={singleUserData.email} className="gravatar-image"/>
                    </div>
                </div>
            </Card>

        </div>
        );
    }

export default Profile