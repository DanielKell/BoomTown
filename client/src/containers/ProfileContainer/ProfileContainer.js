import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import './styles.css';
import Profile from '../../components/Profile';
import Loader from '../../components/Loader';
import {fetchProfile} from '../../redux/modules/profile_data';
import NotFound from '../NotFound'; 

class ProfileContainer extends Component {

    componentDidMount() {
        //this.props.dispatch(fetchProfile(this.props.match.params.id));
        console.log(this.props);
    }

    render() {

        if (this.props.data.loading) return <Loader /> //Will need to refactor this for graphql
        //Refer to slide 55. Need to copy the structure, and use match.params.id
        if (this.props.singleUserData.id == null) return <NotFound />

        return (
            <Profile singleUserData = {this.props.data.singleUserData}/>
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

// const mapStateToProps = (state) => {
//     return {
//         singleUserData: state.singleUserData.usersData,
//         loading: state.singleUserData.loading
//     };
// }

// export default connect(mapStateToProps)(ProfileContainer);

const profileData = gql`
query fetchProfile($id: ID!) {
    user(id: $id) {
      fullname
      bio
      id
      email
    }
  }
`;

export default graphql(profileData)(ProfileContainer);