import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ItemCardList from '../../components/ItemCardList';
import Loader from '../../components/Loader';
import './styles.css';

class Items extends Component {
        
    filterItemsAndTags() {
        const items = this.props.data.items;
        const tags = this.props.tags;


        if(tags.length) {
            return items.filter(item => item.tags.map(tag => tag.title).find(tag => tags.includes(tag)));
        }  
        return items;
    }

    render() {

        const filteredItems = this.filterItemsAndTags()
        if (this.props.data.loading) return <Loader />

        const authUser = this.props.auth.user;
        console.log(authUser);

        return ( 
            <div>
                <ItemCardList CardsWithUserData={filteredItems} AuthData={authUser} />
                <Link to="/share">
                    <FloatingActionButton className="share-button" backgroundColor="black">
                        <ContentAdd />
                    </FloatingActionButton>
                </Link>
            </div>
        );
    }
}

Items.propTypes = {

};


const fetchItems = gql`
  query fetchItems {
        items {
             imageUrl
             itemOwner{
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
`;

const mapStateToProps = state => ({
    tags: state.tags.tagData,
    auth: state.auth
});

const ItemsWithData = connect(mapStateToProps)(Items);

export default graphql(fetchItems)(ItemsWithData);