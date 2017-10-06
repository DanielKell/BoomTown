import React, {
    Component
} from 'react';
import ItemCardList from '../../components/ItemCardList/ItemCardList';

// import axios from 'axios';


// const url = "http://localhost:3001/items";
// const request = axios.get(url);

// console.log(request);
// console.log(request.data);

class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemCardData: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/items')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    itemCardData: data,
                });
            console.log(this.state);
            console.log(this.state.itemCardData);
            })
}

render() {
    return ( 
        <ItemCardList 
            itemCardData = {this.state.itemCardData}
        />
    );
}
}

export default Items;