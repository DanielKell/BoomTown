import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';

const ItemCard = () => {

    return (
                <Card className="one-item-card">
                        {/*<CardMedia
                            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                        > NEED TO MAKE THIS OVERLAY LOAD CONDITIONALLY ON WHETHER SOMETHING IS BORROWED*/}
                            {/*<img src="images/nature-600-337.jpg" alt="" />
                        </CardMedia>  */}
                        <CardHeader
                        title="Daniel Kell"
                        subtitle="3 days ago"
                        />

                    <CardTitle title="Card title" subtitle="Card subtitle" />

                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <RaisedButton label="Borrow" />
                    </CardActions>
                </Card>
    );
}

export default ItemCard;