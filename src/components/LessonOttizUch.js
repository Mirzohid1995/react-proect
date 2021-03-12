import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {Modal, ModalBody, ModalFooter} from "reactstrap/es";

class LessonOttizUch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            modalOpen: false,
            selectedIndex: -1
        }
    }

    render() {

        const changeModal = () => {
            this.setState({modalOpen: !this.state.modalOpen})
        }
        const exampleFunctions = () => {
            let numbers = [3, 43, -5, 54, 25, 123, -320];

            for (let i = 0; i < numbers.length; i++) {
                console.log(numbers[i]);
            }

            numbers.forEach((nimadir1, nimadir2, nimadir3) => {
                // console.log("ishladi")
                console.log(nimadir1);
                // console.log(nimadir2);
                // console.log(nimadir3);
            })

            let newNumbers = numbers.map((item, index) => {
                return index + "-son" + item
            })
            console.log(newNumbers);

            // let newNumbers = [];
            // for (let  i = 0; i < numbers.length; i++){
            //     newNumbers.push(i + " - son:" + numbers[i]);
            // }

            let filteredNumber = numbers.filter((item, index) => {
                return item > 0 && item % 2 == 0;
            });
            console.log(filteredNumber)

            let sortedNumber = numbers.sort((number1, number2) => {
                // if (number1%2 ==0)
                // console.log(number1)
                return number1 - number2;
            })
            console.log(sortedNumber)

        }
        exampleFunctions()

        const addProduct = (event, errors, values) => {
            console.log(errors);
            console.log(values);

            this.state.products.push(values);
            this.setState({products: this.state.products});
            console.log(this.state.products);
        }

        const deleteProduct = (index) => {
            this.state.products.splice(index, 1);
            this.setState({products: this.state.products});
        }

        const editProduct = (index) => {
            this.setState({selectedIndex: index});
            changeModal();
        }

        const saveProduct = (event, errors, values) => {
            this.state.products[this.state.selectedIndex] = values;
            this.setState({products: this.state.products});
            changeModal();
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4 offset-4 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <AvForm onSubmit={addProduct}>
                                        <AvField name="productName" type="text" label="Product name" required/>

                                        <AvField name="productPrice" type="number" label="Product price"/>

                                        <AvField name="productColor" type="color" label="Procut color"/>

                                        <button type='submit' className='btn btn-success d-block ml-auto'>Add</button>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.products.map((item, index) => {
                            return (
                                <div className="col-4 mt-3">
                                    <div className="card">
                                        <div className="card-header"><h5>{item.productName}</h5></div>
                                        <div className="card-body">
                                            <p>Color: <b>{item.productColor}</b></p>
                                            <p>Price: <b>{item.productPrice}</b></p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between">
                                            <button type='button' className='btn btn-primary'
                                                    onClick={() => editProduct(index)}>Edit
                                            </button>
                                            <button type='button' className='btn btn-danger'
                                                    onClick={() => deleteProduct(index)}>Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <Modal isOpen={this.state.modalOpen} toggle={changeModal}>
                    <AvForm onSubmit = {saveProduct} model = {this.state.products[this.state.selectedIndex]}>
                        <ModalBody>
                            <AvField name="productName" type="text" label="Product name" required/>

                            <AvField name="productPrice" type="number" label="Product price"/>

                            <AvField name="productColor" type="color" label="Procut color"/>
                        </ModalBody>

                        <ModalFooter>
                            <button type='submit' className='btn btn-primary'>Edit</button>
                            <button type='button' className='btn btn-secondary' onClick={changeModal}>Cancel</button>
                        </ModalFooter>
                    </AvForm>
                </Modal>
            </div>
        );
    }
}

export default LessonOttizUch;