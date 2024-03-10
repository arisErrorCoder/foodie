import React, { useEffect, useState } from 'react';
import Popularmenu from '../Popularmenu/Popularmenu'
import Hero from '../Hero/Hero'
import Chooseus from '../ChooseUs/Chooseus'
import MenuPack from '../Menu/MenuPack'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import HomePageL from '../Loader/HomePageL'
import ContactUs from '../ContactUs/ContactUs';
const Home = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
<>
{loading ? (
        <HomePageL/>
      ) : (
         <> 
<Header/>
<Hero/>
<Popularmenu/>
<Chooseus/>
<MenuPack/>
<ContactUs/>
<Testimonials/>
<Footer/>
</>

     )}
</>

    )
}

export default Home