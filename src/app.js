import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ProductsListContainer from './containers/productListContainer';
import reducer from './reducers/productReducer';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <ProductsListContainer />
    </Provider>,
    document.getElementById('app')
);