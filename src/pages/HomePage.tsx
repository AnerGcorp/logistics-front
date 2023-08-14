import Banner from "../components/Banner";
import Certificates from "../components/Certificates";
import ContactUs from "../components/ContactUs";
import Gallery from "../components/Gallery";
import News from "../components/News";
import Products from "../components/Products";
import Services from "../components/Services";
import Statistics from "../components/Statistics";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Certificates />
      <Services />
      <Statistics />
      <Products />
      <ContactUs />
      <News />
      <Gallery />
    </>
  );
};

export default HomePage;
