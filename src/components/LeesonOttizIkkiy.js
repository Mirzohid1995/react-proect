import React, {Component} from 'react';

import Cart from "./Cart";

import {Container, Row, Col} from 'reactstrap';

class LeesonOttizIkkiy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }
    }

    render() {

        // let number=0;

        const numberniOshirish = () =>{

            this.setState({number: this.state.number+1})
            // number++;
            // console.log(number)
        }

        const numberniKamaytirish = ()=>{

            this.setState({number: this.state.number-1})
            // number--;
            // console.log(number)
        }

        const range = (h)=>{
            this.setState({number: h.target.value})
        }

        return (
            <div>
                <Container>
                    <Row className='mt-3'>
                        <Col xs='4'>
                            <Cart sarlavha="Hello world!" rasm='IMG_20190424_164444.jpg'/>
                        </Col>
                        <Col xs='4'>
                            <Cart sarlavha="Privet mir!" rasm='IMG_20190424_164444.jpg'/>
                        </Col>
                        <Col xs='4'>
                            <Cart sarlavha="Salom dunyo!" rasm='IMG_20190424_164444.jpg'/>
                        </Col>

                        <div className="col-4 offset-4 my-5">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className='text-center'>{this.state.number}</h1>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <button type='button' className='btn btn-primary' onClick={numberniOshirish}>+</button>
                                    <input type="range" value={this.state.number} onChange={range} className='form-control'/>
                                    <button type='button' className='btn btn-danger' onClick={numberniKamaytirish}>-</button>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LeesonOttizIkkiy;