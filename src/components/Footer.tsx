import { Link } from "react-router-dom";
import useAboutCompany from "../hooks/useAboutCompany";
import useCategories from "../hooks/useCategories";
import useContacts from "../hooks/useContacts";

const Footer = () => {
  const {
    data: company,
    error: companyError,
    isLoading: companyIsLoading,
  } = useAboutCompany();
  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesIsLoading,
  } = useCategories();
  const {
    data: contacts,
    error: contactsError,
    isLoading: categoryIsLoading,
  } = useContacts();

  const lastContacts = contacts?.slice(-1);
  const lastCompany = company?.slice(-1);

  return (
    <div
      className="container-fluid bg-secondary text-light footer wow fadeIn"
      data-wow-delay="0.1s"
    >
      {/* Address */}
      <div className="container py-5 px-lg-5">
        {lastContacts && (
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <p className="section-title text-white h5 mb-4">
                Address<span></span>
              </p>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>
                {lastContacts[0].address}
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>
                {lastContacts[0].phone_numbers}
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>
                {lastContacts[0].emails}
              </p>
            </div>

            {/* Categories */}
            <div className="col-md-6 col-lg-4">
              <p className="section-title text-white h5 mb-4">
                Categories<span></span>
              </p>
              {categories?.map((c) => (
                <Link key={c.id} className="btn btn-link" to={c.link}>
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* About us section */}

      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;
              <Link className="border-bottom" to="#">
                Takyk Ulgam
              </Link>
              , All Right Reserved. Designed By
              <Link className="border-bottom" to="https://htmlcodex.com">
                Takyk Ulgam
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
