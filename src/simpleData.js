import {List, Map} from 'immutable';

const dummyProducts = List([
    Map({id: 0, active: true, name: 'Laptop'}),
    Map({id: 1, active: false, name: 'Play Station'}),
    Map({id: 2, active: false, name: 'Television'}),
    Map({id: 3, active: true, name: 'Bicycle'})
]);

export default dummyProducts;