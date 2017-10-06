import React, {Component} from 'react';
import ItemCardList from '../../components/ItemCardList/ItemCardList';

class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemCardData: []
        };
    }

    componentDidMount() {
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

        Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
            fetch(url).then(response => response.json()))))
            .then(json => {
            const [item, users] = json;

            const itemsWithUsers = item.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    imageUrl: item.imageUrl,
                    tags: item.tags,
                    createdOn: item.createdOn,
                    available: item.available,
                    borrower: item.borrower,
                    user: users.find(user => user.id === item.itemOwner)
                }
            })
 
             this.setState({
                 itemCardData: itemsWithUsers
             });
             
         })
         .catch(error => console.log(error));
         
}
        
render() {
    console.log(this.state.itemCardData);
    return ( 
        
        <ItemCardList 
            itemCardData = {this.state.itemCardData}
        />
    );
}
}

export default Items;