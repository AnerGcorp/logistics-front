const ContactUs = () => {
  return (
    <div
      className="container-xxl custom-statistic-bg newsletter py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container py-5 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <h1 className="text-center text-white mb-4">Contact Us</h1>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Your Message..."
              ></textarea>
            </div>
            <div className="position-relative w-100 mt-3">
              <input
                className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                type="text"
                placeholder="Enter Your Email"
                style={{ height: "48px" }}
              />
              <button
                type="button"
                className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
              >
                <i className="fa fa-paper-plane fs-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
