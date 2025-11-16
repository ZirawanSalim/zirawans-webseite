import React from 'react';

const ShopProductCard = ({ product }) => {
    return (
        <div className="shop-product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart-button">In den Warenkorb</button>
        </div>
    );
};

export default ShopProductCard;