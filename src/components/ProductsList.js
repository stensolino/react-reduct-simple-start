import React from 'react';

const ProductList = (props) => {
    return (
        <div>
            <ul>
                {props.products.map(product => (
                    <li key={product.get('id')}>{product.get('name')}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;