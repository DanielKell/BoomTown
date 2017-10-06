import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';
import Gravatar from 'react-gravatar';

const ItemCard = ({itemCardData}) => {

    return (
        <Card style={{display:"inline-block", margin: "20px 10px"}} className="one-item-card" >
            <CardMedia 
                overlay={<CardTitle subtitle="UNAVAILABLE" />}
                >
            <img src={itemCardData.imageUrl} alt="" />
            </CardMedia>  
            {/*<CardHeader
                 title={itemCardData.itemOwner.fullName}
                 subtitle="Subtitle"
                 avatar={<Gravatar email={itemCardData.itemOwner.email} />}
            />*/}

            <CardTitle 
                title={itemCardData.title} 
                subtitle={itemCardData.tags.map( ( anObjectMapped, index ) => {
                    return <p key={index}>{anObjectMapped}</p>
                } ) }
            />
            <CardText>
                {itemCardData.description}
            </CardText>  
            <CardActions>
                <RaisedButton label="Borrow" primary={true} backgroundColor="black" labelColor="white"/>
            </CardActions>
        </Card>
    );
}

export default ItemCard;