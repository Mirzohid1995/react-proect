import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <div className='navbar navbar-expand-sm bg-light navbar-light'>
                <Link to="/" className='navbar-brand'>
                    <img src="logo192.png" width='60' alt=""/>
                </Link>


                <ul className='navbar-nav'>
                    <li className='nav-item'><Link to="/products" className='nav-link'>Counter</Link></li>
                    <li className='nav-item'><Link to="/cycle" className='nav-link'>LifeCycle</Link></li>
                    <li className='nav-item'><Link to="/posts" className='nav-link'>News</Link></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;