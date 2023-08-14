import useServices from "../hooks/useServices";

const Services = () => {
  // More about us -> comes as a header
  // Work -> comes as a list of items
  const { data, error, isLoading } = useServices();

  const service = data?.slice(-1);

  return (
    <div className="container-xxl py-5 d-flex align-items-center">
      {service && (
        <div className="container py-5 px-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="mb-5">{service[0].title}</h1>
              <ul className="list-group list-group-flush">
                {service[0].works &&
                  service[0].works.map((work) => (
                    <li key={work.id} className="list-group-item">
                      {work.title}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {service && (
        <div className="col-lg-6">
          <img
            className="img-fluid wow zoomIn"
            data-wow-delay="0.5s"
            src={service[0].thumbnail}
          />
        </div>
      )}
    </div>
  );
};

export default Services;
