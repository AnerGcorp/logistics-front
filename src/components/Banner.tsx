import { Link } from "react-router-dom";
import useBanner from "../hooks/useBanner";

const Banner = () => {
  const { data, error, isLoading } = useBanner();

  const bannerLast = data?.slice(-1);

  return (
    <div className="container-xxl p-0  custom-navbar">
      <div className="container-xxl hero-header">
        <div className="container px-lg-5">
          {bannerLast?.map((banner) => (
            <div key={banner.id} className="row g-5 align-items-center">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="text-dark mb-4 animated slideInDown text-capitalize">
                  {banner.name}
                </h1>
                <p className="text-dark pb-3 animated slideInDown">
                  {banner.description}
                </p>
                <Link
                  to={banner.link}
                  className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
                >
                  {banner.button}
                </Link>
              </div>
              <div className="col-lg-6 text-center text-lg-start">
                <img
                  className="img-fluid animated zoomIn"
                  src={banner.web_image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
