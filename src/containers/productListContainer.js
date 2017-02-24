import {connect} from 'react-redux';
import ProductsList from './../components/ProductsList';
import {addProduct} from './../actions/productActions';

const ProductsListContainer = connect(
    function mapStateToProps(state) {
        return {
            products: state
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            addProduct: text => dispatch(addProduct(text))
        };
    }
)(ProductsList);

export default ProductsListContainer;