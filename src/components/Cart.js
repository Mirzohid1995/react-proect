import React from 'react';

const Cart = (props) => {
    console.log(props.sarlavha)
    return (
        <div className='card card1'>
            <div className="card-header">
                <h3 className='text-center'>{props.sarlavha}</h3>
            </div>
            <div className="card-body">
                <img src={props.rasm} className='w-100' alt=""/>
            </div>
            <div className='card-footer'>
                <button type='button' className='btn btn-success'>Click me!</button>
            </div>
        </div>
    );
};

export default Cart;