import React, { useEffect, useState } from 'react';
import AboutMeSection from '../../components/Sections/AboutMeSection/AboutMeSection';
import ContactMeSection from '../../components/Sections/ContactMeSection/ContactMeSection';

import HomeSection from '../../components/Sections/HomeSection/HomeSection';
import Services from '../../components/Sections/ServicesSection/Services';
import TechnologiesSection from '../../components/Sections/TechnologiesSection/TechnologiesSection';
import WorksSection from '../../components/Sections/WorksSection/WorksSection';
import Layout from '../../hoc/Layout/Layout';


import './Home.css';

const Home = () => {
  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(`${process.env.REACT_APP_FIREBASE_URL}/.json`)
      .then((response) => response.json())
      .then((responseData) => {
        setResponseData(responseData);
        setLoading(false);
      });
  }, []);

  const rendredComponent = loading ? (
    <h1 style={{ textAlign: 'center' }}>Loading ...</h1>
  ) : (
    <Layout responseData={responseData.toolBar}>
      <HomeSection responseData={responseData.homeSection} />
      <AboutMeSection responseData={responseData.aboutSection} />
      <Services responseData={responseData.servicesSection} />
      <TechnologiesSection responseData={responseData.technologiesSection} />
      <WorksSection responseData={responseData.worksSection} />
      <ContactMeSection list={responseData.homeSection.socialNetworkLinks}/>
    </Layout>
  );

  return <div>{rendredComponent}</div>;
};

export default Home;
