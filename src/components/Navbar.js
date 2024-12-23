import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to ="/">{props.homeAbout}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to ="/about">about</Link>
        </li>
           
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 btn-outline-warning" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}


