import React, { Component } from 'react'

export class HeaderComponent extends Component {
  render() {
    return (
      <div>
          <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">&nbsp
    <a className="navbar-brand text-white ndata2" href="/">PRODUCT MANAGEMENT APPLICATION</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link text-white ndata1" href="/create">REGISTER</a>
        <a className="nav-link text-white ndata1" href="/products">VIEW-ALL</a>
      </div>
    </div>
  </div>
</nav>
          </header>
      </div>
    )
  }
}

export default HeaderComponent