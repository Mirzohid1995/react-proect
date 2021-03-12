import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")

            .then((res) => {
                this.setState({posts: res.data})
            })
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.posts.map((item, index) => (
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <div className="card-body">
                                        {item.title} <Link to={'/posts/' + item.id}>more...</Link>
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

export default Posts;