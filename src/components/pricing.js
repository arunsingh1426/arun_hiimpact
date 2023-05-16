import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../style/index.scss"


function Pricing() {
  window.addEventListener('resize', function(event){
    if(window.innerWidth <= 901){
        document.getElementById("priceActive").classList.remove("active");
    }
    else{
        document.getElementById("priceActive").classList.add("active");
        
    }
});
  return (
    <>
      <div className="spaceY60">
        <h2 className="title text-center ctheme px15">Choose the right plan for you</h2>
        <p className="mw700 mcen text-center px15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
 {/* Arun singh Copyright © 2023 */}
        <div className="container">
          <div className="pricingtab">
            <Tabs
              defaultActiveKey="Monthly"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Monthly" title="Monthly">

              <div className="pricboxes">
                  <div className="items">
                   <h4>Free</h4>
                   <p>Have a go test your superpowers</p>
                   <h3><span>$</span>0</h3>
                   <div className="inerbox">
                        <ul>
                          <li>2 User </li>
                          <li>2 All app</li>
                          <li>unlimited</li>
                          <li>Chat support</li>
                          <li>New Income apps</li>
                          <li>Lifetime Access</li>
                        </ul>
                        <a className="btn pricelink" href="/#">Signup for free</a>
                    </div>
                  </div>
                  <div className="items active" id="priceActive">
                   <h4>Pro</h4>
                   <p>Experiment the power of infinite possibilities</p>
                   <h3><span>$</span>3</h3>
                   <div className="saveing"> <a href="/#" className="btn">Save $2 a Monthly</a></div>
                    <div className="inerbox">
                        <ul>
                          <li>2 User </li>
                          <li>2 All app</li>
                          <li>unlimited</li>
                          <li>Chat support</li>
                          <li>New Income apps</li>
                         
                        </ul>
                        <a className="btn pricelink" href="/#"> Go to pro</a>
                    </div>
                  </div>
                  <div className="items">
                   <h4>Business</h4>
                   <p>Unveil new superpoers and join the Design League</p>
                   <h3><span>$</span>7</h3>
                   <div className="inerbox">
                        <ul>
                          <li>2 User </li>
                          <li>2 All app</li>
                          <li>unlimited</li>
                          <li>Chat support</li>
                          <li>New Income apps</li>
                          <li>Lifetime Access</li>
                        </ul>
                        <a className="btn pricelink" href="/#">Go to business</a>
                    </div>
                  </div>
              </div>

              </Tab>
              <Tab eventKey="Yearly" title="Yearly">
              <div className="pricboxes">
                  <div className="items">
                   <h4>Free</h4>
                    {/* Arun singh Copyright © 2023 */}
                   <p>Have a go test your superpowers</p>
                   <h3><span>$</span>0</h3>
                   <div className="inerbox">
                        <ul>
                          <li>2 User </li>
                          <li>2 All app</li>
                          <li>unlimited</li>
                          <li>Chat support</li>
                          <li>New Income apps</li>
                          <li>Lifetime Access</li>
                        </ul>
                        <a className="btn pricelink" href="/#">Signup for free</a>
                    </div>
                  </div>
                  <div className="items active" id="priceActive">
                   <h4>Pro</h4>
                   <p>Experiment the power of infinite possibilities</p>
                   <h3><span>$</span>12</h3>
                   <div className="saveing"> <a href="/#" className="btn">Save $21 a yearly</a></div>
                    <div className="inerbox">
                        <ul>
                          <li>2 User </li>
                          <li>2 All app</li>
                          <li>unlimited</li>
                          <li>Chat support</li>
                          <li>New Income apps</li>
                         
                        </ul>
                        <a className="btn pricelink" href="/#"> Go to pro</a>
                    </div>
                  </div>
                   {/* Arun singh Copyright © 2023 */}
                  <div className="items">
                   <h4>Business</h4>
                   <p>Unveil new superpoers and join the Design League</p>
                   <h3><span>$</span>46</h3>
                   <div className="inerbox">
                        <ul>
                          <li>2 User </li>
                          <li>2 All app</li>
                          <li>unlimited</li>
                          <li>Chat support</li>
                          <li>New Income apps</li>
                          <li>Lifetime Access</li>
                        </ul>
                        <a className="btn pricelink" href="/#">Go to business</a>
                    </div>
                  </div>
              </div>

              </Tab>
            </Tabs>
          </div>
        </div>

      </div>
    </>
  )
}

export default Pricing