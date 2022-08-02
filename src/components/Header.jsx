import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <header>
          <h1>Expensify</h1>
          <NavLink to="/" activeClassName= "is-active">Dashboard</NavLink>
          <Link to = "/Add">Add</Link>
      </header>
  )
}

export default Header