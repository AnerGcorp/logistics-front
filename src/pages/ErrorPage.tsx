import Footer from "../components/Footer";
import InfoPanel from "../components/InfoPanel";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  return (
    <>
      <InfoPanel />
      <NavBar />
      <h1 className="ms-5 mt-5 pt-5">Oops!, We can't find the page </h1>;
      <Footer />
    </>
  );
};

export default ErrorPage;
