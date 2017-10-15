import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.css';
import Profile from '../../components/Profile';
import Loader from '../../components/Loader';
import {fetchProfile} from '../../redux/modules/profile_data';
import NotFound from '../NotFound'; 

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchProfile(this.props.match.params.id));
        console.log(this.props.match.params.id);
    }

    render() {

        if (this.props.loading) return <Loader />

        if (this.props.singleUserData.id == null) return <NotFound />

        return (
            <Profile singleUserData = {this.props.singleUserData}/>
        );
    }
}

Profile.propTypes = {
    singleUserData: PropTypes.shape({
        bio: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        fullname: PropTypes.string,
        id: PropTypes.string.isRequired
    })
};

const mapStateToProps = (state) => {
    return {
        singleUserData: state.singleUserData.usersData,
        loading: state.singleUserData.loading
    };
}

export default connect(mapStateToProps)(ProfileContainer);