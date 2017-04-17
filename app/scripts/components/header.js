'use strict';
const React = require('react');

// Use this import when eventually adding real links.
// import {Link} from 'react-router-dom';

/**
 * Defines a Header for the application.
 */
function Header () {
  return (
    <header className="doc-mast">
      <div className="container">
        <div className="eui-masthead-logo eui-application-logo">
          <h1>
            <a href="#">GIBS Ops Dashboard</a>
            <span className="eui-badge--sm">BETA</span>
          </h1>
        </div>

        <nav className="main-nav" role="navigation">
          <ul className="main-nav-list">
            <li>
              {/* We'll eventually use links like this <Link to="/foo">Foo</Link> */}
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
