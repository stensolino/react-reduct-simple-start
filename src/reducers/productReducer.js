import {List, Map} from 'immutable';

export default function (products = List(), actions) {
    switch (actions.type) {
        case 'ADD_PRODUCT':
            return [...products, Map(actions.payload)];
            break;
        default:
            return products;
            break;
    }
}