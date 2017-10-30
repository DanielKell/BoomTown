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

    render() {
        console.log(this.props.data);
        if (this.props.data.loading) return <Loader /> //Will need to refactor this for graphql
        //Refer to slide 55. Need to copy the structure, and use match.params.id
        // if (this.props.data == null) return <NotFound />

        return (
          <Profile singleUserData = {this.props.data.user}/>
        );
    }
}

Profile.propTypes = {
    singleUserData: PropTypes.shape({
        bio: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        fullName: PropTypes.string,
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
query getUser($id: ID!) {
  user(id: $id) {
      fullName
      bio
      id
      email
      borrowedItems {
          title
      }
    }
}
`;

const UsersWithData = graphql(profileData, {
    options: ownProps => ({
        variables: { 
            id: ownProps.match.params.id
        }
    })
})(ProfileContainer);

export default UsersWithData;
