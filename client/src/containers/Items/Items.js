import React, {Component} from 'react';
import ItemCardList from '../../components/ItemCardList/ItemCardList';

import axios from 'axios';


const url = "http://localhost:3001/items";
const request = axios.get(url);

console.log(request);

class Items extends Component {
    constructor(props) {
        super(props);

        // this.state = { 
        //     items: 
        // };
    }

    componentDidMount() {
        // fetch
    }

    render() {
        return (
            <ItemCardList />
        );
    }
}

export default Items;