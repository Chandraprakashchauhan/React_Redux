import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { addToCartd, addToCarti } from '../action/index';
import Product from '../models/Product';

const AddToCart = () => {
    const [products, setProducts] = useState([]);


    const mycart = useSelector((state) => state.countCart)
    const dispatch = useDispatch();


    const addToCart = (id) => {
        // Create a new array with the updated countCart values
        const updatedProducts = products.map((item) => {
            if (item.id === id) {
                // Create a new object with an updated countCart property
                return { ...item, countCart: item.countCart + 1 };
            }
            return item;
        });

        // Update the state with the new array
        setProducts(updatedProducts);
    };
    const addToCartD = (id) => {
        // Create a new array with the updated countCart values
        const updatedProducts = products.map((item) => {
            if (item.id === id) {
                // Create a new object with an updated countCart property
                return { ...item, countCart: item.countCart - 1 };
            }
            return item;
        });

        // Update the state with the new array
        setProducts(updatedProducts);
    };





    useEffect(() => {

        const list = [
            new Product(1, "iPhone 15", 1500, "https://m.media-amazon.com/images/I/71nvkHnPpZL._SL1500_.jpg"),
            new Product(2, "iPhone 14", 1400, "https://m.media-amazon.com/images/I/71nvkHnPpZL._SL1500_.jpg"),
            new Product(3, "iPhone 13", 1300, "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg"),
            new Product(4, "iPhone 12", 1200, "https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg"),
            new Product(5, "iPhone 11", 1100, "https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg"),
            new Product(6, "iPhone X", 1000, "http://reliabledukan.com/wp-content/uploads/2020/07/61pu8v9oXrL._SL1000_.jpg")
        ];


        setProducts(list);
    }, []);


    return (
        <>
            <nav className="navbar bg-body-tertiary m-2">
                <div className="container">
                    <a className="navbar-brand">iPhone</a>
                    <div >

                        <button type="button" className="btn position-relative " data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" alt="" style={{ width: '50px' }} />
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                {mycart}
                            </span>
                        </button>
                        <button type="button" class="btn ">

                        </button>
                    </div>
                </div>
            </nav>

            <div class="container text-center ">
                <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

                    {
                        products.map((m) => {
                            return (
                                <div class="col">
                                    <div className="card container d-flex" style={{ width: '180px' }}>
                                        <img src={m.picture} className="card-img-top  mx-auto" alt="..." style={{ width: '150px' }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{m.model}</h5>
                                            <p className="card-text">${m.price}</p>

                                            {
                                                m.countCart == 0 ?
                                                    <a className="btn btn-primary" onClick={() => { addToCart(m.id); dispatch(addToCarti(m)) }} >Add To Cart</a> :
                                                    <div className='d-flex'>

                                                        <a className='btn btn-primary rounded-0 rounded-start-2' onClick={() => { addToCartD(m.id); dispatch(addToCartd(m)) }} >-</a>

                                                        <span className='w-25 d-flex justify-content-center align-items-center text-center border border-primary'>{m.countCart}</span>

                                                        <a className='btn btn-primary rounded-0 rounded-end-2' onClick={() => { addToCart(m.id); dispatch(addToCarti(m)) }} >+</a>

                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>

                            )
                        })

                    }

                </div>
            </div>


        </>
    )
}

export default AddToCart