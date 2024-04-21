import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

export default function ProductDetail (props) {
    const [selectedProduct, setSelectedProduct] = React.useState()
    let { id } = useParams();

    // component did mount
    React.useEffect(() => {
        // console.log('product id', typeof id)
        fetchProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
            console.log(response)
            setSelectedProduct(response.data)
        })
    }

    // first render (no product in state)
    // componentDidMount or useEffect (fetch product and store in state)
    // Second render after state update (display product as it is stored in state)

    return (
        <div className='product-detail-container'>
            {selectedProduct ?
                <div className='product-flex-container'>
                    <img className='product-detail-image' src={selectedProduct.image} alt={selectedProduct.title} />
                    <div className='product-detail-right-column'>
                        <h1 className='product-detail-title'>{selectedProduct.title}</h1>
                        <p className='product-detail-price'>{selectedProduct.price} €</p>
                        <p className='product-detail-description-title'>Description</p>
                        <p>{selectedProduct.description}</p>
                        {/* The following syntax for function calls should be used if you need to send an 
                        argument to the function to avoid an infinite loop */}
                        <button className='product-detail-button' onClick={() => props.addProductToCart(selectedProduct)}>Add to cart</button>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}


