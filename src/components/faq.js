import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

function FAQ() {
    const [show, setShow] = useState(true);

  return (
   <>
    <div className='spaceY60'>
       
        <div className='mw1000 mcen px15'>
        <h2 className='title ctheme text-center'>Frequently Asked Questions</h2>
        <p className=' text-center'>can't able to find answers you're looking for? Reach out to <a href="/#">Our Team</a></p>
        {show && (
            <div className='py30'>
                 <Alert className='alartFAQ' onClose={() => setShow(false)} dismissible>
             <Alert.Heading>Will we be charged when the free trial is over?</Alert.Heading>
             <p>
             We do not collect credit card information during your free trial or if you decide to use Hive Solo. If you choose to upgrade,
             we will then collect credit card information and bill based on your subscription type. </p>
           </Alert>
            </div>
        )}
            <div className="accorwraper mt30">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What if we need more than 14 days to test out Hive?</Accordion.Header>
                    <Accordion.Body>
                  <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How do I upgrade my trial account?</Accordion.Header>
                    <Accordion.Body>
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How can I pay for Hive ?</Accordion.Header>
                    <Accordion.Body>
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Does Hive offer discounts for non-profits?</Accordion.Header>
                    <Accordion.Body>
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>What is your refund policy?</Accordion.Header>
                    <Accordion.Body>
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>I have more questions. Can I talk to someone?</Accordion.Header>
                    <Accordion.Body>
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
        </div>
    </div>
   </>
  )
}

export default FAQ