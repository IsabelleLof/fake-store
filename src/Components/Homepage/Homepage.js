import React from 'react';
import axios from 'axios';
import Product from "../Product/Product";
import './Homepage.css';

function Homepage (props) {
    // Experiment with state in react
    // React use state is a react hook
    const [products, setProducts] = React.useState([]);

    // React useEffect hook

    // componentDidMount example (api calls or functions when the page loads)
    React.useEffect(() => {
        console.log('we are fetching our products')
        fetchProducts()
    }, []);

    // runs every render (runs every time props or state changes)
    // React.useEffect(() => {});

    // runs after update of products but can be used for any state value
    React.useEffect(() => {
        console.log('We have a full list of products')
    }, [products]);

    // componentWillUnmount
    // React.useEffect(() => {
        
    //     return () => {

    //     }
    // })
  

    const fetchProducts = () => {
        // experiment with calling the api
        // combine the api and state
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            setProducts(response.data)
        })
    }

    return (
        <div>
            {/* Within react you need to return a value or null */}
            {/* For loop / if statement are statements */}
            {/* ternary operators and array methods return a value */}
            {/* <button onClick={fetchProducts}>Show Products</button> */}
            <div className='product-container'>
                {
                // Put some products inside the state and map them with or without an api
                products
                .filter((product) => {
                    return props.productSearchValue !== '' && props.isSearchConfirmed 
                    ? product.title.toLowerCase().includes(props.productSearchValue.toLowerCase()) ? product : null
                    : product
                })
                .map((productObject) => 
                    <Product key={productObject.id}  product={productObject} />
                )  
                }
            </div>
            
        </div>
    )
}

export default Homepage;