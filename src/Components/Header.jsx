import React from 'react'
import {  NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
    <div className="content-container">
    <div className="header__content">
          <h1>Expensify</h1>
          <NavLink
          className="header__title"
            to="/"
            activeClassName="is-active">
            Dashboard
          </NavLink>

          <NavLink
          className="header__title"
            to="/Add"
            activeClassName="is-active"
          >

            Add
          </NavLink>
          </div>
     </div>
      </header>
  )
}

export default Header