import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ItemCardList from '../../components/ItemCardList/ItemCardList';
import Loader from '../../components/Loader';
import './styles.css';
import {fetchCardAndUserData} from '../../redux/modules/card_data';

class Items extends Component {

    componentDidMount() {

        this.props.dispatch(fetchCardAndUserData());

        // fetch('http://localhost:3001/items')
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({
        //             CardsWithUserData: data,
        //         });
        //     console.log(this.state);
        //     console.log(this.state.CardsWithUserData);
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
        //          CardsWithUserData: itemsWithUsers,
        //          loading: false
        //      });
             
        //  })
        //  .catch(error => console.log(error));

}
        
render() {

    if (this.props.loading) return <Loader />

    return ( 
        <div>
        <ItemCardList CardsWithUserData = {this.props.CardsWithUserData} />
            <Link to="/share">
                <FloatingActionButton className="share-button" backgroundColor="black">
                    <ContentAdd />
                </FloatingActionButton>
            </Link>
        </div>
    );

}
}

//Note: Should try to refactor and separate item data and user data, and can them put them together in the below function
const mapStateToProps = (state) => {
    return {
        CardsWithUserData: state.cardAndUserData.CardsWithUserData,
        loading: state.cardAndUserData.loading
    };
}



export default connect(mapStateToProps)(Items);

// export default Items;