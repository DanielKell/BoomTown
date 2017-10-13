import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ItemCardList from '../../components/ItemCardList/ItemCardList';
import Loader from '../../components/Loader';
import './styles.css';
import {fetchCardData} from '../../redux/modules/card_data';

class Items extends Component {

    componentDidMount() {

        this.props.dispatch(fetchCardData());

        // fetch('http://localhost:3001/items')
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({
        //             itemCardData: data,
        //         });
        //     console.log(this.state);
        //     console.log(this.state.itemCardData);
        // })
        
        // fetch('http://localhost:3001/users')
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({
        //             itemUserData: data,
        //         });
        //     console.log(this.state.itemUserData);
        //     })

        // Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
        //     fetch(url).then(response => response.json()))))
        //     .then(json => {
        //     const [item, users] = json;

        //     const itemsWithUsers = item.map(item => {
        //         return {
        //             id: item.id,
        //             title: item.title,
        //             description: item.description,
        //             imageUrl: item.imageUrl,
        //             tags: item.tags,
        //             createdOn: item.createdOn,
        //             available: item.available,
        //             borrower: item.borrower,
        //             user: users.find(user => user.id === item.itemOwner)
        //         }
        //     })
 
        //      this.setState({
        //          itemCardData: itemsWithUsers,
        //          loading: false
        //      });
             
        //  })
        //  .catch(error => console.log(error));

}
        
render() {

    if (this.props.loading) return <Loader />

    return ( 
        <div>
        <ItemCardList itemCardData = {this.props.itemCardData} />
            <Link to="/share">
                <FloatingActionButton className="share-button" backgroundColor="black">
                    <ContentAdd />
                </FloatingActionButton>
            </Link>
        </div>
    );
}
}

const mapStateToProps = (state) => {
    return {
        itemCardData: state.cardAndUserData.itemCardData,
        loading: state.cardAndUserData.loading
    };
}

export default connect(mapStateToProps)(Items);

// export default Items;