const Services = () => {
  // More about us -> comes as a header
  // Work -> comes as a list of items
  return (
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
  );
};

export default Services;
