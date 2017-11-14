import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';
import Masonry from 'react-masonry-component';

import ItemCard from '../ItemCard';
import './styles.css';

const Profile = ({singleUserData}) => {
        console.log(singleUserData);

        const { items } = singleUserData;
        console.log(items);

    return (
        <div>
            <div className="profile-card">
                <Card>
                    <div className="card-structure">
                        <div className="profile-name">
                            <CardTitle title={singleUserData.fullName} subtitle={singleUserData.bio} />
                        </div>
                        <div className="profile-item-data">
                            <CardTitle title={items.length} subtitle="Items shared" />
                            <CardTitle title={singleUserData.borrowedItems.length} subtitle="Items borrowed" />
                        </div>
                        <div className="profile-gravatar">
                            <Gravatar size={150} email={singleUserData.email} className="gravatar-image"/>
                        </div>
                    </div>
                </Card>
            </div>
            <Masonry
                className={'masonry-styling'}
                elementType={'ul'}
                >
                { items.map((item) => (
                    <ItemCard 
                        CardsWithUserData={item} 
                        key={item.title} 
                    />
                )) }
            </Masonry>
        </div>
    );
}

Profile.propTypes = {
    singleUserData: PropTypes.shape({
        bio: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        fullname: PropTypes.string,
        id: PropTypes.string.isRequired
    })
};

export default Profile