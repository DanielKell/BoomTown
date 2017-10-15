import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ItemCardList from '../../components/ItemCardList';
import Loader from '../../components/Loader';
import './styles.css';
import {fetchCardAndUserData} from '../../redux/modules/card_data';

class Items extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCardAndUserData());
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

Items.propTypes = {
    CardsWithUserData: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired
};

//Note: Should try to refactor and separate item data and user data, and then put them together in the below function
const mapStateToProps = (state) => {
    return {
        CardsWithUserData: state.cardAndUserData.CardsWithUserData,
        loading: state.cardAndUserData.loading
    };
}

export default connect(mapStateToProps)(Items);