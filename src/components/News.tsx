import useNews from "../hooks/useNews";

const News = () => {
  const { data, error, isLoading } = useNews();
  const latestNews = data?.slice(-6);
  console.log(latestNews);
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            БЛОГ И НОВОСТИ
          </p>
          <h1 className="text-center mb-5">НАШИ НОВОСТИ</h1>
        </div>
        <div className="row g-4 portfolio-container">
          {latestNews?.map((news) => (
            <div
              className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={news.link} alt="" />
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
                    Президент Туркменистана Сердар Бердымухамедов и Председатель
                    Китайской...
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
