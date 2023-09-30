import React from 'react'
// import AddToCart from './AddToCart';

import { useDispatch, useSelector } from 'react-redux';

import { addToCartd, addToCarti } from '../action/index';


const ViewCart = () => {

    const dispatch = useDispatch();
    const mycart = useSelector((state) => state.countCart);
    return (
        <>

            <div>

                <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog me-5 mt-5 " style={{ maxWidth: '300px' }}>
                        <div className="modal-content  ">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 " id="exampleModalLabel">Add To Cart</h1>
                                <span class=" badge  bg-primary mx-2">{mycart}

                                </span>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="container text-center">
                                    <div className="row g-2">

                                        <div className="col-6">
                                            <div className="card">
                                                <img src="https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">iPhone 11</h5>
                                                    <p className="card-text">$1100</p>


                                                    {/* <a className="btn btn-primary">Remove</a> */}
                                                    <div className='d-flex '>

                                                        <a className='btn btn-primary rounded-0 rounded-start-2 p-1' onClick={() => dispatch(addToCartd())} >-</a>

                                                        <span className=' w-25 d-flex justify-content-center align-items-center text-center border border-primary'>{mycart}</span>

                                                        <a className='btn btn-primary rounded-0 rounded-end-2 p-1' onClick={() => dispatch(addToCarti())} >+</a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <a className="btn btn-primary mt-2">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


    )
}

export default ViewCart