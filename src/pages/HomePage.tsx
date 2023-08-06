const HomePage = () => {
  return (
    <>
      <div className="h-100 d-flex align-items-center custom-light-bg custom-info-panel">
        <div className="h-100 d-flex align-items-center justify-content-between p-1">
          <i className="me-2 fa fa-map-marker-alt me-3"></i>
          <p className="m-0">Ashgabat sh, Taslama koce</p>
        </div>
        <div className="h-100 d-flex align-items-center justify-content-between p-1">
          <i className="me-2 fa fa-phone-alt me-3"></i>
          <p className="m-0">+99361393165</p>
        </div>
      </div>
      <div className="container-xxl bg-white p-0">
        {/* <!-- Spinner Start --> */}
        {/* <div
           id="spinner"
           className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
         >
           <div
             className="spinner-grow text-secondary"
             style={{ width: "3rem", height: "3rem" }}
           >
             <span className="sr-only">Loading...</span>
           </div>
         </div> */}
        {/* <!-- Spinner End --> */}

        {/* <!-- Navbar & Hero Start --> */}
        <div className="container-xxl p-0  custom-navbar">
          <nav className="navbar navbar-expand-lg custom-bottom-shadow navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
            <a href="" className="navbar-brand p-0">
              <svg
                width="77"
                height="77"
                viewBox="0 0 77 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.3076 31.699C49.0646 35.4559 49.0646 41.555 45.3076 45.3183C41.5507 49.0753 35.4516 49.0753 31.6882 45.3183C27.9312 41.5614 27.9312 35.4623 31.6882 31.699C35.4516 27.9356 41.5474 27.9356 45.3076 31.699Z"
                  stroke="#40a9ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M67.375 51.3333L57.75 60.9583L51.3334 54.5416"
                  stroke="#40a9ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38.5 60.9584C26.658 60.9584 15.9165 54.5706 11.0559 44.6344C10.1126 42.7061 9.625 40.6143 9.625 38.5C9.625 36.3857 10.1126 34.2939 11.0559 32.3657C15.9165 22.4295 26.658 16.0417 38.5 16.0417C50.342 16.0417 61.0835 22.4295 65.9441 32.3657C66.8874 34.2939 67.375 36.3857 67.375 38.5"
                  stroke="#40a9ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <a href="index.html" className="nav-item nav-link active">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link">
                  About
                </a>
                <a href="service.html" className="nav-item nav-link">
                  Service
                </a>
                <a href="#" className="nav-item nav-link">
                  Project
                </a>
                <a href="contact.html" className="nav-item nav-link active">
                  Contact
                </a>
              </div>
              <a
                href=""
                className="btn btn-secondary custom-blue-btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block animated slideInLeft"
              >
                Get Started
              </a>
            </div>
          </nav>

          <div className="container-xxl hero-header">
            <div className="container px-lg-5">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="text-dark mb-4 animated slideInDown text-capitalize">
                    Всегда готовы работать
                  </h1>
                  <p className="text-dark pb-3 animated slideInDown">
                    Tempor rebum no at dolore lorem clita rebum rebum ipsum
                    rebum stet dolor sed justo kasd. Ut dolor sed magna dolor
                    sea diam. Sit diam sit justo amet ipsum vero ipsum clita
                    lorem
                  </p>
                  <a
                    href=""
                    className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
                  >
                    ПОДРОБНЕЕ О НАС
                  </a>
                </div>
                <div className="col-lg-6 text-center text-lg-start">
                  <img
                    className="img-fluid animated zoomIn"
                    src="img/slider-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}

        {/* <!-- Feature Start --> */}
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item bg-light rounded text-center p-4">
                  <img
                    src="img/cert.png"
                    className="w-50 border border-5 border-dark"
                    alt=""
                  />

                  <p className="m-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item bg-light rounded text-center p-4">
                  <img
                    src="img/cert.png"
                    className="w-50 border border-5 border-dark"
                    alt=""
                  />

                  <p className="m-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="feature-item bg-light rounded text-center p-4">
                  <img
                    src="img/cert.png"
                    className="w-50 border border-5 border-dark"
                    alt=""
                  />

                  <p className="m-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Feature End --> */}

        {/* <!-- About Start --> */}
        <div className="container-xxl py-5 d-flex align-items-center">
          <div className="container py-5 px-lg-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="mb-5">Перевозка Сборных Грузов</h1>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Качественный сервис</li>
                  <li className="list-group-item">Оптимальные условия</li>
                  <li className="list-group-item">Экономия средств</li>
                  <li className="list-group-item">Широкая география</li>
                  <li className="list-group-item">Удобные графики доставки</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid wow zoomIn"
              data-wow-delay="0.5s"
              src="img/logistic.png"
            />
          </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Facts Start --> */}
        <div
          className="container-xxl fact py-5 wow fadeInUp custom-statistic-bg"
          data-wow-delay="0.1s"
        >
          <div className="container py-5 px-lg-5">
            <div className="row g-4 justify-content-between">
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.1s"
              >
                <svg
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M71.3333 87.5H29.6667C20.4625 87.5 13 80.0375 13 70.8333V29.1667C13 19.9625 20.4625 12.5 29.6667 12.5H71.3333C80.5375 12.5 88 19.9625 88 29.1667V70.8333C88 80.0375 80.5375 87.5 71.3333 87.5Z"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M56.9787 46.7629L48.8745 54.8671L44.0162 50.0046"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.8162 53.3923L33.5829 57.0131L34.1829 61.5173C34.5162 64.0173 36.4787 65.9839 38.9787 66.3173L43.4954 66.9214L47.1121 69.6839C49.1121 71.2131 51.8912 71.2131 53.8912 69.6839L57.5121 66.9173H57.5079L62.0162 66.3173C64.5162 65.9839 66.4829 64.0214 66.8162 61.5214L67.4204 57.0048C67.4204 57.0089 68.8204 55.1756 70.1871 53.3881C71.7162 51.3881 71.7162 48.6089 70.1871 46.6089L67.4204 42.9881L66.8204 38.4839C66.4871 35.9839 64.5246 34.0173 62.0246 33.6839L57.5037 33.0839L53.8871 30.3214C51.8871 28.7923 49.1079 28.7923 47.1079 30.3214L43.4871 33.0839H43.4912L38.9829 33.6798C36.4829 34.0131 34.5162 35.9756 34.1829 38.4756L33.5787 42.9923C33.5787 42.9881 32.1787 44.8214 30.8121 46.6089C29.2871 48.6131 29.2871 51.3881 30.8162 53.3923Z"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h1 className="text-white mb-2" data-toggle="counter-up">
                  1234
                </h1>
                <p className="text-white mb-0">
                  высококвалифицированных и способных работников.
                </p>
              </div>
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.3s"
              >
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.3758 70.7173L41.6925 79.034L33.3758 87.3506"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5793 62.4003V70.7169C12.5793 75.3128 16.3043 79.0336 20.896 79.0336H41.6918"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M87.5512 37.4462V29.1295C87.5512 24.5337 83.8262 20.8129 79.2346 20.8129H58.4387"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M66.7554 29.1293L58.4387 20.8085L66.7554 12.4918"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45.834 37.2125V21.1959C45.834 19.4625 44.909 17.8584 43.409 16.9917L29.534 8.98337C28.034 8.11671 26.184 8.11671 24.6798 8.98337L10.809 16.9917C9.30897 17.8584 8.38397 19.4625 8.38397 21.1959V37.2125C8.38397 38.9459 9.30897 40.55 10.809 41.4167L24.6798 49.425C26.1798 50.2917 28.0298 50.2917 29.534 49.425L43.4048 41.4167C44.909 40.55 45.834 38.9459 45.834 37.2125Z"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.02911 18.7705L27.1083 29.2038L45.1833 18.7705"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.1258 29.2076V50.0826"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M91.6166 78.804V62.7873C91.6166 61.054 90.6916 59.4498 89.1916 58.5831L75.3208 50.5748C73.8208 49.7081 71.9708 49.7081 70.4666 50.5748L56.5958 58.5831C55.0916 59.4498 54.1666 61.0498 54.1666 62.7831V78.7998C54.1666 80.5331 55.0916 82.1373 56.5916 83.004L70.4625 91.0123C71.9625 91.879 73.8125 91.879 75.3166 91.0123L89.1875 83.004C90.6916 82.1373 91.6166 80.5373 91.6166 78.804Z"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M54.8174 60.3579L72.8924 70.7954L90.9716 60.3579"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M72.8757 70.7925V91.6675"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  1234
                </h1>
                <p className="text-white mb-0">
                  международных сертификатов
                  <span /> за производство качественной продукции
                </p>
              </div>
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.5s"
              >
                <svg
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.6667 87.5H50.5"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42.1667 33.3334H58.8334"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.6667 62.5H50.5"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.6667 75H50.5"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M71.3333 50H29.6667V87.5"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M50.5 87.5H13V32.8709C13 29.8459 14.6417 27.0542 17.2875 25.5875L46.4542 9.38337C48.9708 7.98337 52.0333 7.98337 54.55 9.38337L83.7167 25.5875C86.3583 27.0542 88 29.8459 88 32.8709V50"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M67.1667 62.5H88C90.3 62.5 92.1667 64.3667 92.1667 66.6667V87.5C92.1667 89.8 90.3 91.6667 88 91.6667H67.1667C64.8667 91.6667 63 89.8 63 87.5V66.6667C63 64.3667 64.8667 62.5 67.1667 62.5Z"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M79.9997 75H75.1664"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  1234
                </h1>
                <p className="text-white mb-0">
                  опыта в производстве пластиковых пищевых контейнеров
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Facts End --> */}

          {/* <!-- Service Start --> */}
          <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
              <div className="wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title text-secondary justify-content-center">
                  <span></span>НАШИ ПРОДУКТЫ<span></span>
                </p>
                <h1 className="text-center mb-5">ПРОДУКТЫ ВЫСОКОГО КАЧЕСТВА</h1>
                <p className="section-title text-secondary text-center">
                  Узнайте больше о нашей продукции, которая хорошо известна в
                  Туркменистане и за рубежом благодаря своему высокому качеству
                  и удобству
                </p>
              </div>
              <div className="row g-4">
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item d-flex flex-column text-center rounded">
                    <h5 className="mb-3 w-100 text-start">LOGO</h5>
                    <div className="flex-shrink-0">
                      <img src="img/image 16.png" alt="" />
                    </div>
                    <h5 className="mb-3 text-start">МЕШКИ ДЖУТОВЫЕ</h5>
                    <p className="m-0 text-start">
                      Ящик изготовлен из пищевого пластика и может
                      контактировать с продуктами ввиду отсутствия токсичных
                      элементов.
                    </p>
                    <a className="btn btn-square" href="">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item d-flex flex-column text-center rounded">
                    <h5 className="mb-3 w-100 text-start">LOGO</h5>
                    <div className="flex-shrink-0">
                      <img src="img/image 17.png" alt="" />
                    </div>
                    <h5 className="mb-3 text-start">МЕШКИ ДЖУТОВЫЕ</h5>
                    <p className="m-0 text-start">
                      Ящик изготовлен из пищевого пластика и может
                      контактировать с продуктами ввиду отсутствия токсичных
                      элементов.
                    </p>
                    <a className="btn btn-square" href="">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item d-flex flex-column text-center rounded">
                    <h5 className="mb-3 w-100 text-start">LOGO</h5>
                    <div className="flex-shrink-0">
                      <img src="img/image 16.png" alt="" />
                    </div>
                    <h5 className="mb-3 text-start">МЕШКИ ДЖУТОВЫЕ</h5>
                    <p className="m-0 text-start">
                      Ящик изготовлен из пищевого пластика и может
                      контактировать с продуктами ввиду отсутствия токсичных
                      элементов.
                    </p>
                    <a className="btn btn-square" href="">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item d-flex flex-column text-center rounded">
                    <h5 className="mb-3 w-100 text-start">LOGO</h5>
                    <div className="flex-shrink-0">
                      <img src="img/image 16.png" alt="" />
                    </div>
                    <h5 className="mb-3 text-start">МЕШКИ ДЖУТОВЫЕ</h5>
                    <p className="m-0 text-start">
                      Ящик изготовлен из пищевого пластика и может
                      контактировать с продуктами ввиду отсутствия токсичных
                      элементов.
                    </p>
                    <a className="btn btn-square" href="">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item d-flex flex-column text-center rounded">
                    <h5 className="mb-3 w-100 text-start">LOGO</h5>
                    <div className="flex-shrink-0">
                      <img src="img/image 17.png" alt="" />
                    </div>
                    <h5 className="mb-3 text-start">МЕШКИ ДЖУТОВЫЕ</h5>
                    <p className="m-0 text-start">
                      Ящик изготовлен из пищевого пластика и может
                      контактировать с продуктами ввиду отсутствия токсичных
                      элементов.
                    </p>
                    <a className="btn btn-square" href="">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item d-flex flex-column text-center rounded">
                    <h5 className="mb-3 w-100 text-start">LOGO</h5>
                    <div className="flex-shrink-0">
                      <img src="img/image 17.png" alt="" />
                    </div>
                    <h5 className="mb-3 text-start">МЕШКИ ДЖУТОВЫЕ</h5>
                    <p className="m-0 text-start">
                      Ящик изготовлен из пищевого пластика и может
                      контактировать с продуктами ввиду отсутствия токсичных
                      элементов.
                    </p>
                    <a className="btn btn-square" href="">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Service End --> */}

          {/* <!-- Newsletter Start --> */}
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
          {/* <!-- Newsletter End --> */}

          {/* <!-- Projects Start --> */}
          <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
              <div className="wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title text-secondary justify-content-center">
                  БЛОГ И НОВОСТИ
                </p>
                <h1 className="text-center mb-5">НАШИ НОВОСТИ</h1>
              </div>
              <div className="row g-4 portfolio-container">
                <div
                  className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/news.png"
                        alt=""
                      />
                      <div className="portfolio-overlay">
                        <a
                          className="btn btn-square btn-outline-light mx-1"
                          href=""
                        >
                          <i className="fa fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="bg-light p-4">
                      <p className="fw-medium mb-2">2023-05-07</p>
                      <h5 className="lh-base mb-0 ch-limit">
                        Президент Туркменистана Сердар Бердымухамедов и
                        Председатель Китайской...
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/news.png"
                        alt=""
                      />
                      <div className="portfolio-overlay">
                        <a
                          className="btn btn-square btn-outline-light mx-1"
                          href=""
                        >
                          <i className="fa fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="bg-light p-4">
                      <p className="fw-medium mb-2">2023-05-07</p>
                      <h5 className="lh-base mb-0 ch-limit">
                        Президент Туркменистана Сердар Бердымухамедов и
                        Председатель Китайской...
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/news.png"
                        alt=""
                      />
                      <div className="portfolio-overlay">
                        <a
                          className="btn btn-square btn-outline-light mx-1"
                          href=""
                        >
                          <i className="fa fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="bg-light p-4">
                      <p className="fw-medium mb-2">2023-05-07</p>
                      <h5 className="lh-base mb-0 ch-limit">
                        Президент Туркменистана Сердар Бердымухамедов и
                        Председатель Китайской...
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/news.png"
                        alt=""
                      />
                      <div className="portfolio-overlay">
                        <a
                          className="btn btn-square btn-outline-light mx-1"
                          href=""
                        >
                          <i className="fa fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="bg-light p-4">
                      <p className="fw-medium mb-2">2023-05-07</p>
                      <h5 className="lh-base mb-0 ch-limit">
                        Президент Туркменистана Сердар Бердымухамедов и
                        Председатель Китайской...
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/news.png"
                        alt=""
                      />
                      <div className="portfolio-overlay">
                        <a
                          className="btn btn-square btn-outline-light mx-1"
                          href=""
                        >
                          <i className="fa fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="bg-light p-4">
                      <p className="fw-medium mb-2">2023-05-07</p>
                      <h5 className="lh-base mb-0 ch-limit">
                        Президент Туркменистана Сердар Бердымухамедов и
                        Председатель Китайской...
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/news.png"
                        alt=""
                      />
                      <div className="portfolio-overlay">
                        <a
                          className="btn btn-square btn-outline-light mx-1"
                          href=""
                        >
                          <i className="fa fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="bg-light p-4">
                      <p className="fw-medium mb-2">2023-05-07</p>
                      <h5 className="lh-base mb-0 ch-limit">
                        Президент Туркменистана Сердар Бердымухамедов и
                        Председатель Китайской...
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
