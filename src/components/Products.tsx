import useProducts from "../hooks/useProducts";

const Products = () => {
  const { data, error, isLoading } = useProducts();
  const products = data?.slice(-6);

  const truncate = (str: string) => {
    return str.length > 50 ? str.substring(0, 50) + "..." : str;
  };

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            <span></span>НАШИ ПРОДУКТЫ<span></span>
          </p>
          <h1 className="text-center mb-5">ПРОДУКТЫ ВЫСОКОГО КАЧЕСТВА</h1>
          <p className="section-title text-secondary text-center">
            Узнайте больше о нашей продукции, которая хорошо известна в
            Туркменистане и за рубежом благодаря своему высокому качеству и
            удобству
          </p>
        </div>
        <div className="row g-4">
          {products?.map((product) => (
            <div
              key={product.id}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item d-flex flex-column text-center rounded">
                <h5 className="mb-3 w-100 text-start">
                  <img src={product.logo} height="30rem" />
                </h5>
                <div className="flex-shrink-0">
                  <img src={product.image} alt={product.name} height="300px" />
                </div>
                <h5 className="mb-3 text-start">{product.name}</h5>
                <p className="m-0 text-start">
                  {truncate(product.description)}
                </p>
                <a className="btn btn-square" href="">
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
