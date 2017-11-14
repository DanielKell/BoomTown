import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import './styles.css';
import Profile from '../../components/Profile';
import Loader from '../../components/Loader';
import NotFound from '../NotFound'; 

class ProfileContainer extends Component {

    render() {
        if (this.props.data.loading) return <Loader /> 
        if (this.props.data == null) return <NotFound />
        console.log(this.props.data);
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
            imageUrl
            itemOwner{
                fullName
                email
                bio
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

const UsersWithData = graphql(profileData, {
    options: ownProps => ({
        variables: { 
            id: ownProps.match.params.id
        }
    })
})(ProfileContainer);

export default UsersWithData;
