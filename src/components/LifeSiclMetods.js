import React, {Component} from 'react';
import axios from "axios";

class LifeSiclMetods extends Component {
    constructor(props) {
        super(props);

        console.log("This text from constructor function");

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        console.log("This text from componentDidMount function");

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res);
                this.setState({users: res.data});
            })
    }

    render() {

        console.log("This text from render function");

        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.users.map((item, index) => (
                            <div className='col-4 mt-3'>
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{item.name}</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>City: {item.address.city}</p>
                                        <a href={"http://" + item.website}>{item.website}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default LifeSiclMetods;