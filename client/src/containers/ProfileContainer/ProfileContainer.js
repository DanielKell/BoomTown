import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import './styles.css';
import Profile from '../../components/Profile';
import Loader from '../../components/Loader';
import NotFound from '../NotFound'; 

class ProfileContainer extends Component {

    render() {
        if (this.props.data.loading) return <Loader /> 
        if (this.props.data == null) return <NotFound />
        console.log(this.props.data);
        const authUser = this.props.auth.user;
        return (
          <Profile singleUserData = {this.props.data.user} AuthData={authUser} />
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

//Unable to pull in items data from here but not sure why
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
        items {
            imageurl
            itemowner{
                fullName
                email
                bio
                id
            }
            createdOn
            title
            tags {
                title
            }
            description
            borrower {
                id 
                fullName
            }
            
        }
    }
}
`;

const mapStateToProps = state => ({
    auth: state.auth
});

const ProfileContainerWithAuth = connect(mapStateToProps)(ProfileContainer);

const UsersWithData = graphql(profileData, {
    options: ownProps => ({
        variables: { 
            id: ownProps.match.params.id
        }
    })
})(ProfileContainerWithAuth);

export default UsersWithData;
