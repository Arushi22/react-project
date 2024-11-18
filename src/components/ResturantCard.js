import React from 'react';
import { CDN_URL } from '../utils/constants';

function ResturantCard(props) {
    const { resData } = props;

    const {
        cloudinaryImageId = '',
        name = 'Unknown',
        cuisines = [],
        avgRating = 'N/A',
    } = resData?.info || {};

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{resData?.info?.sla?.deliveryTime || 'N/A'}</h4>
        </div>
    );
};

// Higher Order Component
// input - ResturantCard ==> ResturantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default ResturantCard;
