import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import Profile from '../../components/Profile/Profile';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';
import {fetchCardAndUserData} from '../../redux/modules/card_data';


class ProfileContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCardAndUserData());
    }

    render() {
        return (
            <Profile itemCardData = {this.props.itemCardData}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemCardData: state.cardAndUserData.itemCardData,
        loading: state.cardAndUserData.loading
    };
}

export default connect(mapStateToProps)(ProfileContainer);
