import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';
import Gravatar from 'react-gravatar';

const ItemCard = ({CardAndUserData}) => {

const moment = require('moment');
moment().format();

    return (
        <li className="one-item-card">
            <Card >
                <CardMedia 
                    overlay={!CardAndUserData.available?<CardTitle subtitle="UNAVAILABLE" />:false}
                >
                <img src={CardAndUserData.imageUrl} alt="" />
                </CardMedia>  
                <CardHeader
                    title={CardAndUserData.user.fullName}
                    subtitle={(moment.unix(CardAndUserData.createdOn)).fromNow()}
                    avatar={<Gravatar email={CardAndUserData.user.email} className="gravatar-image"/>}
                />
                <CardTitle 
                    title={CardAndUserData.title} 
                    subtitle={CardAndUserData.tags.join(', ')}
                />
                <CardText>
                    {CardAndUserData.description}
                </CardText>  
                <CardActions>
                    {CardAndUserData.available
                    ? <RaisedButton label="Borrow" primary={true} backgroundColor="black" labelColor="white"/>
                    :false}
                </CardActions>
            </Card>
        </li>
    );
}

export default ItemCard;