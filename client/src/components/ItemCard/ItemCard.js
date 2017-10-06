import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';

const ItemCard = ({itemCardData}) => {

    return (
        <Card style={{display:"inline-block", margin: "20px 10px"}} className="one-item-card" >
            <CardMedia>
            {/*overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}*/}
            <img src={itemCardData.imageUrl} alt="" />
            </CardMedia>  
            <CardHeader
            title="Daniel Kell"
            subtitle="3 days ago"
            />

            <CardTitle title={itemCardData.title} subtitle={itemCardData.tags[0]} />

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