import AboutBrands from "../components/AboutBrands";
import AboutDescription from "../components/AboutDescription";
import AboutIntro from "../components/AboutIntro";
import BusinessPartner from "../components/BusinessPartner";
import CustomerCount from "../components/CustomerCount";
import PageFlag from "../components/PageFlag";
import TeamEmployee from "../components/TeamEmployee";
const AboutPage = () => {
  return (
    <>
      <PageFlag />
      <AboutDescription />
      <CustomerCount />
      <AboutIntro />
      <TeamEmployee />
      <AboutBrands />
      <BusinessPartner />
    </>
  );
};

export default AboutPage;
