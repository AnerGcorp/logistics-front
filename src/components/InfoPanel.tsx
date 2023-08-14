import useInfoPanel from "../hooks/useInfoPanel";

const InfoPanel = () => {
  const { data, error, isLoading } = useInfoPanel();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  // Get last element of InfoPanel
  const panel = data?.slice(-1);

  return (
    <>
      {data &&
        panel?.map((info) => (
          <div
            key={info.id}
            className="h-100 d-flex align-items-center custom-light-bg custom-info-panel"
          >
            <div className="ms-3 h-100 d-flex align-items-center justify-content-between p-1">
              <i className="me-2 fa fa-map-marker-alt me-3"></i>
              <p className="m-0">{info.address}</p>
            </div>
            <div className="ms-3 h-100 d-flex align-items-center justify-content-between p-1">
              <i className="me-2 fa fa-phone-alt me-3"></i>
              <p className="m-0">{info.phone_number}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default InfoPanel;
