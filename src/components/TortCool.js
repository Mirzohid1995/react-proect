import React from 'react';

const TortCool = (props) => {
    return (
        <div className='d-flex justify-content-center'>
            <div className="card border-0">
                <div className="card-header bg-white">
                    <h5>{props.text}</h5>
                    <p>{props.text1}</p>
                </div>
                <img src={props.rasm} alt=""/>
            </div>
        </div>
    );
};

export default TortCool;