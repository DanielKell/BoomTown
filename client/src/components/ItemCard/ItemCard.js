import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';

import './styles.css';

const ItemCard = ({CardsWithUserData, AuthData}) => {
    const moment = require('moment');
    moment().format();

    const itemTags = CardsWithUserData.tags.map(a => a.title);

    return (
        <li className="one-item-card">
            <Card >
                <CardMedia 
                    overlay={!CardsWithUserData.borrower && <CardTitle subtitle="UNAVAILABLE" />}
                >
                <img src={CardsWithUserData.imageurl} alt="" />
                </CardMedia>  
                <CardHeader
                    title={CardsWithUserData.itemowner.fullName}
                    subtitle={(moment(CardsWithUserData.createdOn)).fromNow()}
                    avatar={<Gravatar email={CardsWithUserData.itemowner.email} className="gravatar-image"/>}
                />
                <CardTitle 
                    title={CardsWithUserData.title} 
                    subtitle={itemTags.join(', ')}
                />
                <CardText>
                    {CardsWithUserData.description}
                </CardText>  
                <CardActions>
                    {CardsWithUserData.borrower && (AuthData.uid !== CardsWithUserData.itemowner.id)
                    ? <RaisedButton label="Borrow" primary={true} backgroundColor="black" labelColor="white"/>
                    :false}
                </CardActions>
            </Card>
        </li>
    );
}

ItemCard.propTypes = {
    CardsWithUserData: PropTypes.shape({
        borrower: PropTypes.object,
        createdOn: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        // id: PropTypes.number.isRequired,
        imageurl: PropTypes.string.isRequired,
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