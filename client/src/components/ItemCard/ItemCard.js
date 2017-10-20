import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';

import './styles.css';

const ItemCard = ({CardsWithUserData}) => {

    const moment = require('moment');
    moment().format();

    return (
        <li className="one-item-card">
            <Card >
                <CardMedia 
                    overlay={!CardsWithUserData.available && <CardTitle subtitle="UNAVAILABLE" />}
                >
                <img src={CardsWithUserData.imageUrl} alt="" />
                </CardMedia>  
                <CardHeader
                    title={CardsWithUserData.itemOwner.fullName}
                    subtitle={(moment(CardsWithUserData.createdOn)).fromNow()}
                    avatar={<Gravatar email={CardsWithUserData.itemOwner.email} className="gravatar-image"/>}
                />
                <CardTitle 
                    title={CardsWithUserData.title} 
                    subtitle={CardsWithUserData.tags.join(', ')}
                />
                <CardText>
                    {CardsWithUserData.description}
                </CardText>  
                <CardActions>
                    {CardsWithUserData.available
                    ? <RaisedButton label="Borrow" primary={true} backgroundColor="black" labelColor="white"/>
                    :false}
                </CardActions>
            </Card>
        </li>
    );
}

ItemCard.propTypes = {
    CardsWithUserData: PropTypes.shape({
        available: PropTypes.bool.isRequired,
        borrower: PropTypes.string,
        createdOn: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        user: PropTypes.shape({
            bio: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            fullname: PropTypes.string,
            id: PropTypes.string.isRequired
        }),
        tags: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired
    })
};

export default ItemCard;