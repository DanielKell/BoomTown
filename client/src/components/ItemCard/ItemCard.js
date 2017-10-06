import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';
import Gravatar from 'react-gravatar';

const ItemCard = ({CardAndUserData}) => {

    return (
        <Card style={{display:"inline-block", margin: "20px 10px"}} className="one-item-card" >
            <CardMedia 
                overlay={!CardAndUserData.available?<CardTitle subtitle="UNAVAILABLE" />:false}
            >
            <img src={CardAndUserData.imageUrl} alt="" />
            </CardMedia>  
            <CardHeader
                 title={CardAndUserData.user.fullName}
                 subtitle={CardAndUserData.createdOn}
                 avatar={<Gravatar email={CardAndUserData.user.email} />}
            />
            <CardTitle 
                title={CardAndUserData.title} 
                subtitle={CardAndUserData.tags.map( ( anObjectMapped, index ) => {
                    return <p key={index}>{anObjectMapped}</p>
                } ) }
            />
            <CardText>
                {CardAndUserData.description}
            </CardText>  
            <CardActions>
                <RaisedButton label="Borrow" primary={true} backgroundColor="black" labelColor="white"/>
            </CardActions>
        </Card>
    );
}

export default ItemCard;