import useGallery from "../hooks/useGallery";

const Gallery = () => {
  const { data, error, isLoading } = useGallery();
  const galleryList = data?.slice(-1);

  return (
    <div>
      {galleryList?.map((g) => (
        <div key={g.id} className="container py-5 px-lg-5">
          <p className="section-title text-secondary justify-content-center">
            <span />
            {g.title}
            <span />
          </p>
          {g.gallery.map((gal) => (
            <div key={gal.id} className=" testimonial-carousel">
              {/* <div className="testimonial-item bg-light rounded my-4 p-0">
              <img src="img/banner.png" className="m-auto" alt="" />
            </div>
            <div className="testimonial-item bg-light rounded my-4 p-0">
              <img src="img/banner.png" alt="" />
            </div> */}
              <div className="d-flex align-items-center">
                <div className="testimonial-item bg-light rounded my-4 p-0">
                  <img src={gal.image} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
