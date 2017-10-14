import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import Profile from '../../components/Profile/Profile';
import Loader from '../../components/Loader';
// import {fetchCardAndUserData} from '../../redux/modules/card_data';
import {fetchProfile} from '../../redux/modules/profile_data';
import NotFound from '../NotFound/NotFound'; 

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchProfile(this.props.match.params.id));
        console.log(this.props.match.params.id) 
    }

    render() {

        if (this.props.singleUserData.id == null) return <NotFound />

        if (this.props.loading) return <Loader />

        return (
            <Profile singleUserData = {this.props.singleUserData}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        singleUserData: state.singleUserData.usersData,
        loading: state.singleUserData.loading
    };
}

export default connect(mapStateToProps)(ProfileContainer);