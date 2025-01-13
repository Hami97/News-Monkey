import PropTypes from "prop-types";
import React, { Component } from "react";

import { Link } from "wouter";

export class Navbar extends Component {
  // static propTypes = {
  //   onCountryChange: PropTypes.func.isRequired,
  // }

  // handleCountrySelect = (countryCode) => {
  //   this.props.onCountryChange(countryCode);
  // };

  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                NewsMonkey
              </a>
              {/* <Link className="navbar-brand" to="/">
                NewsMonkey
              </Link> */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li> */}

                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      General
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/business" className="nav-link">
                      Business
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/entertainment" className="nav-link">
                      Entertainment
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/health" className="nav-link">
                      Health
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/science" className="nav-link">
                      Science
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/sports" className="nav-link">
                      Sports
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/technology" className="nav-link">
                      Technology
                    </Link>
                  </li>

                  {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Country</a>
          <ul className="dropdown-menu">
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('ar')}>Argentina</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('at')}>Austria</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('au')}>Australia</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('be')}>Belgium</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('bg')}>Bulgaria</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('br')}>Brazil</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('ca')}>Canada</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('ch')}>Switzerland</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('cn')}>China</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('ae')}>United Arab Emirates</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('co')}>Colombia</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('cu')}>Cuba</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('cz')}>Czech Republic</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('de')}>Germany</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('eg')}>Egypt</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('fr')}>France</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('gb')}>United Kingdom</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('gr')}>Greece</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('hk')}>Hong Kong</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('id')}>Indonesia</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('ie')}>Ireland</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('il')}>Israel</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('in')}>India</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('it')}>Italy</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('jp')}>Japan</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('kr')}>South Korea</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('lt')}>Lithuania</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('lv')}>Latvia</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('ma')}>Morocco</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('mx')}>Mexico</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('my')}>Malaysia</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('ng')}>Nigeria</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('nl')}>Netherlands</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('no')}>Norway</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('nz')}>New Zealand</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('ph')}>Philippines</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('pl')}>Poland</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('pt')}>Portugal</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('ro')}>Romania</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('rs')}>Serbia</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('ru')}>Russia</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('sa')}>Saudi Arabia</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('se')}>Sweden</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('sg')}>Singapore</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('si')}>Slovenia</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('sk')}>Slovakia</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('th')}>Thailand</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('tr')}>Turkey</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('tw')}>Taiwan</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('ua')}>Ukraine</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('us')}>United States</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('ve')}>Venezuela</button></li>
          <li><button className="dropdown-item" onClick={() => this.handleCountrySelect('za')}>South Africa</button></li> 

          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" to="#">Something else here</a></li>
          </ul>
          </li>*/}

                  {/* <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> */}
                </ul>
                {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
