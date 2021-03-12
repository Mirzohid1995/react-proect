import React from 'react';
import './main.scss';

const UchCard = (props) => {
    return (
        <div>
            <div className="card cole mt-4 p-5 mb-5">
                <div className='d-flex justify-content-center'>
                    {props.iconcha}
                </div>
                <p>{props.text}</p>
                <h5 className='text-center font-family-bold'>{props.support}</h5>
                <div className='d-flex justify-content-center mt-4 defel'>
                    <button type='button' className='btn border-warning text-warning w-75'>{props.buttonn}</button>
                </div>
            </div>
        </div>
    );
};

export default UchCard;