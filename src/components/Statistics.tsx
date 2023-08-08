import useStatistics from "../hooks/useStatistics";

const Statistics = () => {
  const { data, error, isLoading } = useStatistics();
  const stats = data?.slice(-3);
  return (
    <div
      className="container-xxl fact py-5 wow fadeInUp custom-statistic-bg"
      data-wow-delay="0.1s"
    >
      <div className="container py-5 px-lg-5">
        <div className="row g-4 justify-content-between">
          {stats?.map((stat) => (
            <div
              key={stat.id}
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.1s"
            >
              <img
                src={stat.icon}
                alt={stat.description}
                height="100rem"
                className="mb-3"
              />

              <h1 className="text-white mb-2" data-toggle="counter-up">
                {stat.number}
              </h1>
              <p className="text-white mb-0">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
