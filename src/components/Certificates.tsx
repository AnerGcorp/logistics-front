import useCertificates from "../hooks/useCertificates";

const Certificates = () => {
  const { data, error, isLoading } = useCertificates();

  const certificates = data?.slice(-3);
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          {certificates?.map((certificate) => (
            <div
              key={certificate.id}
              className="col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="feature-item bg-light rounded text-center p-4">
                <img
                  src={certificate.image}
                  className="w-50 border border-5 border-dark"
                  alt=""
                />

                <p className="m-0">{certificate.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
