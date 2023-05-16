import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Footer() {
  return (
    <>
    <footer>
        <div className='container'>
          <div className='fwraper '>
            <div className='footerinnr m-fww'>
               {/* Arun singh Copyright © 2023 */}
              <div className='w30 inerbox m-w100'>
                  <h2 className='mb25'>ARUN SINGH</h2>
                <p>Web Developer with expert knowledge of Html, Css, Scss, React, Next.js, Java Script, jQuery, & Bootstrap and basic knowledge of MongoDB, MySQL, SEO and web analytics. </p>

                <div className='footerInput'>
                  <input  type="email" placeholder='Your Email Address' />
                  <button type="submit" >Register</button>
                </div>
              </div>

              <div className='inerbox w100 d-dn'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>catagories</Accordion.Header>
                    <Accordion.Body>
                    <ul>
                  <li><a href="/#">Product Management</a></li>
                  <li><a href="/#">Design / Creatives</a></li>
                  <li><a href="/#">Product Management</a></li>
                  <li><a href="/#">Education / Training</a></li>
                 </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>About</Accordion.Header>
                    <Accordion.Body>
                    <ul>
                  <li><a href="/#">About us</a></li>
                  <li><a href="/#">Partnerships</a></li>
                  <li><a href="/#">Finance Experts</a></li>
                  <li><a href="/#">Projects Management</a></li>
                 </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Follow us</Accordion.Header>
                    <Accordion.Body>
                    <ul>
                  <li><a href="https://www.facebook.com/profile.php?id=100009111036688" target='_blank' rel="noreferrer">Facebook</a></li>
                  <li><a href="https://twitter.com/ArunSin42964077" rel="noreferrer" target='_blank'>Twitter</a></li>
                  <li><a href="https://www.instagram.com/v.arun_singh/" rel="noreferrer" target='_blank'>Instagram</a></li>
                  <li><a href="https://www.linkedin.com/in/arun-singh-00486b151/" rel="noreferrer" target='_blank'>Linkedin</a></li>
                 </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                </div>
              <div className='w20 inerbox m-dn'>
                
                 <ul>
                  <li><a href="/#">Product Management</a></li>
                  <li><a href="/#">Design / Creatives</a></li>
                  <li><a href="/#">Product Management</a></li>
                  <li><a href="/#">Education / Training</a></li>
                 </ul>
                </div>
                <div className='w20 inerbox m-dn'>
                <h4>About</h4>
                <ul>
                  <li><a href="/#">About us</a></li>
                  <li><a href="/#">Partnerships</a></li>
                  <li><a href="/#">Finance Experts</a></li>
                  <li><a href="/#">Projects Management</a></li>
                 </ul>
                </div>
                <div className='w15 inerbox m-dn'>
               <h4> Follow us</h4>
               <ul>
                  <li><a href="https://www.facebook.com/profile.php?id=100009111036688" target='_blank' rel="noreferrer">Facebook</a></li>
                  <li><a href="https://twitter.com/ArunSin42964077" rel="noreferrer" target='_blank'>Twitter</a></li>
                  <li><a href="https://www.instagram.com/v.arun_singh/" rel="noreferrer" target='_blank'>Instagram</a></li>
                  <li><a href="https://www.linkedin.com/in/arun-singh-00486b151/" rel="noreferrer" target='_blank'>Linkedin</a></li>
                 </ul>
                </div>

              
            </div>
          </div>
        </div>
        {/* Arun singh Copyright © 2023 */}
        <div className='copyright theme'>
            <p className='mb0 text-center py15 cwhite flato'>Copyright © 2023 all rights reserved</p>
        </div>
    </footer>
    </>
  )
}

export default Footer