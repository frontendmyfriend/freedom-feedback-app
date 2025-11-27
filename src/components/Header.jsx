import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import Card from './shared/Card';


function Header({text}) {

    const headerStyle = {
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: '#ff6a95'
    }
  return (
    <header style={headerStyle}>
    
        <h1 className="container">
          Feedback UI
        </h1>
         
      <NavLink activeClassName={'active'} to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>. About</NavLink>
      

    </header>
  )
};


Header.defaultProps = {
     text: 'Feedback UI',
}


export default Header
