import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../reducers/productRedux';


const AddToCart = () => {


    const products = useSelector((state) => state.productList)
    const dispatch = useDispatch();

    const getProductCartCount = () => {

        let count = 0;
        products.map((item) => {
            count = count + item.countCart
        });

        return count;
    };

    console.log("getProductCartCount", getProductCartCount())





    return (
        <>
            <nav className="navbar bg-body-tertiary m-2">
                <div className="container">
                    <a className="navbar-brand">iPhone</a>
                    <div >

                        <button type="button" className="btn position-relative " data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" alt="" style={{ width: '50px' }} />
                            <span class="position-absolute top-0 start-100 translate-middle badge  bg-primary">
                                {getProductCartCount()}
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
                                <div className="col ">
                                    <div className="card container d-flex pt-2  rounded-3" style={{ width: '180px' }}>
                                        <img src={m.picture} className="card-img-top  mx-auto" alt="Loding..." style={{ width: '150px' }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{m.model}</h5>
                                            <p className="card-text">${m.price}</p>

                                            {
                                                m.countCart == 0 ?
                                                    <a className="btn btn-primary" onClick={() => { dispatch(addToCart(m.id)) }} >Add To Cart</a> :
                                                    <div className='d-flex'>

                                                        <a className='btn btn-primary rounded-0 rounded-start-2' onClick={() => { dispatch(removeFromCart(m.id)) }} >-</a>

                                                        <span className='w-50 d-flex justify-content-center align-items-center text-center border border-primary'>{m.countCart}</span>

                                                        <a className='btn btn-primary rounded-0 rounded-end-2' onClick={() => { dispatch(addToCart(m.id)) }} >+</a>

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