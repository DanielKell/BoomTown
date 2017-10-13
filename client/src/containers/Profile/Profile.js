import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';


class Profile extends Component {

//Pull in all the data in here, and load only the profile card based on the URL ID

    render() {

        console.log(this.props);

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

const mapStateToProps = (state) => {
    return {
        itemCardData: state.cardAndUserData.itemCardData,
        // loading: state.cardAndUserData.loading
    };
}

export default connect(mapStateToProps)(Profile);
