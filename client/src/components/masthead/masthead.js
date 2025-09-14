import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './masthead.module.css';
import { NavLink } from 'react-router-dom';
import LogoImage from '../../images/site-logo.png';
import axios from 'axios';
import { environmentValues } from '../../environments/environment-dev';


function MastheadComponent() {
  const [navItems, setData] = useState([]);

  useEffect(() => {
    getNavItems().then(fetchedData => {
      setData(fetchedData);
    })
  }, []);

  return (
    <div className='row p-0 bg-dark'>
      <div className='container-fluid'>
        <nav className="navbar container p-0" data-bs-theme="dark">
          <div className='container-fluid'>
            <a className="navbar-brand d-flex align-items-center p-0">
              <img src={LogoImage} alt="Logo" width="32" className="d-inline-block align-text-top m-2" />
              Techweb
            </a>
            <ul className="navbar-nav flex-row">
              {navItems.map(function (object, i) {
                return <li id={i} key={object.name} aria-labelledby={object.name}>
                  <NavLink className="nav-link d-block p-3" to={object.href}>{object.name}</NavLink>
                </li>;
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

function getNavItems() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(environmentValues.navItemsUrl);
      resolve(response.data);
    } catch (error) {
      console.error('Error fetching navigation items:', error);
      return [];
    }
  })
}

MastheadComponent.propTypes = {};

MastheadComponent.defaultProps = {};

export default MastheadComponent;
