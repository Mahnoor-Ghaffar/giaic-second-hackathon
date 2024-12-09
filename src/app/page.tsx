import React from 'react'
import AnnouncementBar from './components/HomeComponents/Announcmentbar'
import Header from './components/HomeComponents/header';
import Hero from './components/HomeComponents/Hero'
import FourCards from './components/HomeComponents/FourCards';
import ProductCard from './components/HomeComponents/Products-Cards';

const Home = () => {
  return (
   <main>
    <AnnouncementBar />
    <Header />
    <Hero />
    <FourCards />
    <ProductCard />
   </main>
  )
}

export default Home