import React from 'react';
import {render} from 'react-dom';
import ProductsList from './components/ProductsList';
import dummyProducts from './simpleData';

render(
    <ProductsList products={dummyProducts}/>,
    document.getElementById('app')
);