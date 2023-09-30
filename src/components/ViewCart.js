import React from 'react'
// import AddToCart from './AddToCart';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../reducers/productRedux';



const ViewCart = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.productList)

    const getCartProductList = () => {
        return products.filter((item) => {
            return item.countCart > 0
        });
    }

    const getProductCartCount = () => {

        let count = 0;
        products.map((item) => {
            count = count + item.countCart
        });

        return count;
    };


    console.log("sum: ", products.price)


    return (
        <>

            <div>

                <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable me-5" style={{ maxWidth: '380px' }}>
                        <div className="modal-content  ">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 " id="exampleModalLabel"> View Cart</h1>
                                <span className=" badge  bg-primary mx-2">{getProductCartCount()}

                                </span>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">

                                <div className="container text-center">


                                    <div className="row g-2">

                                        {
                                            getCartProductList().map((m) => {
                                                return (
                                                    <div className="col-6">
                                                        <div className="card pt-2">
                                                            <img src={m.picture} className="card-img-top" alt="loading..." />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{m.model}</h5>
                                                                <p className="card-text">${m.price}</p>
                                                                <div className='d-flex mx-auto'>
                                                                    <a className='btn btn-primary rounded-0 rounded-start-2' onClick={() => { dispatch(removeFromCart(m.id)) }} >-</a>
                                                                    <span className='w-50 d-flex justify-content-center align-items-center text-center border border-primary'>{m.countCart}</span>
                                                                    <a className='btn btn-primary rounded-0 rounded-end-2' onClick={() => { dispatch(addToCart(m.id)) }} >+</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })

                                        }
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