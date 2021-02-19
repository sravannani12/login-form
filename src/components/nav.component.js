import React, { Component } from "react"
import  {Link} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
              <Link className='navbar-brand' to={'/'} >Home</Link>
              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                    <Link to={'/login'} className='nav-link'>Login</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/register'} className='nav-link'>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
           </nav>
        )
    }
}