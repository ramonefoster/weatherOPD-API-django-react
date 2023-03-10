import React from 'react'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Weather | OPD</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home LNA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://200.131.64.237:8090/graficos/dashboard" target="_blank">OPD Monitor</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="/docs">API Refs</a>
            </li> 
          </ul>          
        </div>
      </div>
    </nav>
  )
}
