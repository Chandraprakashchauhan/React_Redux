import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { incNumber, decNumber } from '../action/index';
const Inc_decrement = () => {
    const myState = useSelector((state) => state.changeTheNumber)
    const dispatch = useDispatch();
    return (
        <>
            <h1>Increment/Decremet</h1>
            <div>
                <button onClick={() => dispatch(decNumber())}><span>-</span></button>
                <input type="text" value={myState} />
                <button onClick={() => dispatch(incNumber())}><span>+</span></button>
            </div>

        </>
    )
}

export default Inc_decrement