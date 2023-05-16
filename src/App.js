import Header from "./components/header";
import "../src/style/index.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Pricing from "./components/pricing";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Testimonial from "./components/testimonial";


function App() {




  return (
    <div className="App">
      <Header />


      <div className="spaceY60 bannerWrap">
        <div className="container">
          <div className="row bannerinner">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xm-12 banleft">
              <h1>
                Your Next Performance Management Platform
              </h1>
              <h2 className="mt20">Fully Customizable Performance management Platform that <br />suits your culture. not the other way around</h2>
              <div className="d-flex banBTNWrap">
                <a href="/#" className="btn linkBtn">Request a Quote</a>
                <a href="/#" className="d-flex ml15 align-items-center text-decoration-none cwhite"><img src="./img/home/play_btn.png" className="h45 mr10 " alt="play icon" />Watch Video</a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12 banright m-dn">
              <img src="./img/home/ban1.png" alt="Banner" className="imgban1" />
            </div>
          </div>
        </div>
      </div>

      {/* *****************v*********************  trust_wrap *************************************************************************** */}
      <div className="trust_wrap">
        <div className="container">
          {/*  Copyright © 2023 Arun singh   */}
          <h3>Trusted by over 47k+ happy customers, including</h3>
          <div className="trustInner">
            <img alt="Slack" src="./img/home/c1.png" />
            <img alt="netfilx" src="./img/home/c2.png" />
            <img alt="google" src="./img/home/c3.png" />
            <img alt="airbnb" src="./img/home/c4.png" />
            <img alt="uber" src="./img/home/c5.png" />
          </div>
        </div>
      </div>
      {/* *****************v************************ trust_wrap end ************************************************************************ */}





      <div className="spaceY80 position-relative">
        <div className="container">
          <h2 className="title ctheme text-center">Our Features</h2>
          <p className="mw700 mcen text-center pb30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 py20">
              {/* <img src="./img/home/3.png" alt="our feature" /> */}
              <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_czj9tlje.json"  speed="1"  loop autoplay></lottie-player>

            </div>
            {/* Arun singh Copyright © 2023   */}
         
            <div className="col-lg-6 col-sm-6 py20">
              <h2 className="title">Manage everything in one workspace</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
          </div>


          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 py20">
              <h2 className="title">Set up in minutes</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className="col-lg-6 col-sm-6 py20">
              {/* <img src="./img/home/2.png" alt="our feature" /> */}
              <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_8ztbxqr1.json"  speed="1"  loop autoplay></lottie-player>
            </div>
{/*  Copyright © 2023 Arun singh   */}
          </div>
        </div>
        <img src="./img/home/vac1.png" alt="vactor1" className="vac1 position-absolute" style={{ "bottom": "-98px" }} />
      </div>





      {/* ####################################################  _Pricing section  ################################################################################################ */}

    
    <Pricing/>

    <Testimonial />

    <FAQ />


    <div className="spaceY60">
      <div className="container p0 ">
        <div className="row subscribeWrap mx1">
          <div className="col-lg-9 col-md-12 col-sm-12">
            <h2 className="title cwhite">Subscribe to get Updated</h2>
            <p className="cwhite "> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          {/*  Copyright © 2023 Arun singh   */}
          <div className="col-lg-3 col-md-12 col-sm-12 text-lg-center text-sm-start">
            <a className="btn" href="/#">Get Start</a>
          </div>
        </div>
      </div>
    </div>

    <Footer />

    </div>
  );
}

export default App;
