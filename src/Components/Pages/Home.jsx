import React, { useEffect, useState } from 'react';
import Popularmenu from '../Popularmenu/Popularmenu';
import Hero from '../Hero/Hero';
import Chooseus from '../ChooseUs/Chooseus';
import MenuPack from '../Menu/MenuPack';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ContactUs from '../ContactUs/ContactUs';
import HomePageLoder from '../Loader/LoderAnimation';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // If the load event has already occurred, handle it immediately
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {loading ? (<HomePageLoder/>) 
      : (
        <>
          <Header />
          <Hero />
          <Popularmenu />
          <Chooseus />
          <MenuPack />
          <ContactUs />
          <Testimonials />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
