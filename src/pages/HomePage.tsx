import Banner from "../components/Banner";
import Certificates from "../components/Certificates";
import ContactUs from "../components/ContactUs";
import InfoPanel from "../components/InfoPanel";
import NavBar from "../components/NavBar";
import News from "../components/News";
import Products from "../components/Products";
import Services from "../components/Services";
import Statistics from "../components/Statistics";

const HomePage = () => {
  return (
    <>
      <InfoPanel />
      <NavBar />
      <div className="container-xxl bg-white p-0">
        <Banner />
        <Certificates />
        <Services />
        <Statistics />
        <Products />
        <ContactUs />
        <News />
        <div>
          {/* <!-- Projects Start --> */}

          {/* <!-- Projects End --> */}

          {/* <!-- Testimonial Start --> */}
          <div
            className="container-xxl py-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="container py-5 px-lg-5">
              <p className="section-title text-secondary justify-content-center">
                <span></span>Our Gallery<span></span>
              </p>
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item bg-light rounded my-4 p-0">
                  <img src="img/banner.png" className="m-auto" alt="" />
                </div>
                <div className="testimonial-item bg-light rounded my-4 p-0">
                  <img src="img/banner.png" alt="" />
                </div>
                <div className="d-flex align-items-center">
                  <div className="testimonial-item bg-light rounded my-4 p-0">
                    <img src="img/banner.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Testimonial End --> */}

          {/* <!-- Footer Start --> */}
          <div
            className="container-fluid bg-secondary text-light footer wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="container py-5 px-lg-5">
              <div className="row g-5">
                <div className="col-md-6 col-lg-4">
                  <p className="section-title text-white h5 mb-4">
                    Address<span></span>
                  </p>
                  <p>
                    <i className="fa fa-map-marker-alt me-3"></i>Ashgabat sh,
                    Taslama Koche
                  </p>
                  <p>
                    <i className="fa fa-phone-alt me-3"></i>+993 61593165
                  </p>
                  <p>
                    <i className="fa fa-envelope me-3"></i>takyk.ulgam@gmail.com
                  </p>
                </div>
                <div className="col-md-6 col-lg-4">
                  <p className="section-title text-white h5 mb-4">
                    Quick Link<span></span>
                  </p>
                  <a className="btn btn-link" href="">
                    About Us
                  </a>
                  <a className="btn btn-link" href="">
                    Contact Us
                  </a>
                  <a className="btn btn-link" href="">
                    Privacy Policy
                  </a>
                  <a className="btn btn-link" href="">
                    Terms & Condition
                  </a>
                  <a className="btn btn-link" href="">
                    Career
                  </a>
                </div>
              </div>
            </div>
            <div className="container px-lg-5">
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy;{" "}
                    <a className="border-bottom" href="#">
                      Your Site Name
                    </a>
                    , All Right Reserved. Designed By
                    <a className="border-bottom" href="https://htmlcodex.com">
                      Takyk Ulgam
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#"
            className="btn btn-lg btn-secondary btn-lg-square back-to-top"
          >
            <i className="bi bi-arrow-up"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
