import React from 'react';

const ProductsList = (props) => {
    const clickMe = function () {
        props.addProduct('nOVI :)');
    };
    return (
        <div>
            <ul>
                {props.products.map(product => (
                    <li key={product.get('id')}>{product.get('name')}</li>
                ))}
            </ul>
            <hr/>
            <input type="button" onClick={clickMe} value="Click Me"/>
        </div>
    );
};

export default ProductsList;