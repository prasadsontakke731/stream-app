import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='navbar navbar-expand-lg  border border-black rounded p-2'>
      <div className='container-fluid ms-5 '>
        <Link className='navbar-brand text-danger' href='#'>
          Movie-app
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav m-auto mb-2 mb-lg-0  '>
            <li className='nav-item'>
              <Link to='/' className='nav-link ' aria-current='page'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>
                Contact
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <Link to='/about' className='nav-link'>
                ABout US
              </Link>
            </li>
          </ul>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
