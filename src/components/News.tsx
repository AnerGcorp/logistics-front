import { Link } from "react-router-dom";
import useNews from "../hooks/useNews";

const News = () => {
  const { data, error, isLoading } = useNews();

  const latestNews = data?.slice(-6);
  // if (latestNews) return null;

  const truncate = (str: string) => {
    return str.length > 50 ? str.substring(0, 50) + "..." : str;
  };

  // console.log(latestNews);
  // latestNews?.map((n) => console.log(n.news));

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
              key={news.id}
              className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  {news.news &&
                    news.news.map((n) => (
                      <img
                        key={n.id}
                        className="img-fluid w-100"
                        src={n.image}
                        alt=""
                      />
                    ))}

                  <div className="portfolio-overlay">
                    <Link
                      className="btn btn-square btn-outline-light mx-1"
                      to="/"
                    >
                      <i className="fa fa-eye"></i>
                    </Link>
                  </div>
                </div>
                <div className="bg-light p-4">
                  <p className="fw-medium mb-2">{news.created}</p>
                  <h5 className="lh-base mb-0 ch-limit">
                    {truncate(news.description)}
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
