import React, { Component } from 'react';

import './styles.css';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';

class Profile extends Component {

    render() {
        return (
        <div className="profile-card">
            <Card>
                <CardTitle title="NAME" subtitle="Name's description" />
                <CardTitle title="0" subtitle="Items shared" />
                <CardTitle title="5" subtitle="Items borrowed" />
                <CardHeader avatar="images/jsa-128.jpg"/>
            </Card>
        </div>
        );
    }
}

export default Profile;