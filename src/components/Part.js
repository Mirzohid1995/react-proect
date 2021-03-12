import React from 'react';
import './main.scss';
// import {Container, Row, Col} from "reactstrap";
const Part = (props) => {
    return (
        <div className='d-flex justify-content-center'>
            <div className="card p-4 card-item">
                {props.icon}
                <h5 className='font-family-Semi-bold mt-3'>{props.text}</h5>
                <p className='font-family-Light'>{props.matn}</p>
            </div>
        </div>
    );
};

export default Part;