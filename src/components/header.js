import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {



  return (
    <>
     {/* Arun singh Copyright © 2023 */}
    <header className="py20" id="header">
    <Navbar collapseOnSelect expand="lg">
      <div className='container'>
        <div><h3 className="mb0 cwhite">ARUN SINGH</h3></div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
           <a href="/#" className='navLink'>Products</a>
           <a href="/#" className='navLink'>Solutions</a>
           <a href="/#" className='navLink'>Pricing</a>
          </Nav>
         <div>
           {/* Arun singh Copyright © 2023 */}
             <a href="/#" className='navLink'>Products</a>
           <a href="/#" className='btn'>Start Free</a>
         </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </header>
    </>
  )
}

export default Header