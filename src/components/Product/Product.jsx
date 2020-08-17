import React from 'react';
import './Product.css';
import {useContextValue} from '../../Context/StateProvider';

const Product = ({ id, title, price, rating, image }) => {
    const [{basket},dispathch] = useContextValue();

    const getRating = () => {
        let stars = []
        for (let i = 0; i < 5; i++) {
            stars.push(<p>⭐</p>)
        }
        return stars;
    }

    const handleAddtoBusket = () => {
        dispathch({
            title: 'ADD_TO_BUSKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        })
    }


    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {getRating()}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={handleAddtoBusket}>Add to busket</button>
        </div>
    )
}

export default Product
