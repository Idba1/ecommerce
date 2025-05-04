import React from 'react'
import HomeCarosel from '../HomeCarosel/HomeCarosel'
import FeaturedSection from '../FeaturedSection/FeaturedSection'
import Promotions from '../Promotions/Promotions'
import Newsletter from '../Newsletter/Newsletter'
import ProductListing from '../../Product/ProductListing/ProductListing'
import HeroSection from '../Hero/HeroSection'
import Navbar from '../../Navbar'
import Footer from '../../Footer'

const Home = () => {
  return (
    <div>
        {/* <HeroSection></HeroSection> */}
        {/* <Navbar></Navbar> */}
      <HomeCarosel></HomeCarosel>
      <FeaturedSection></FeaturedSection>
      <Promotions></Promotions>
      <ProductListing></ProductListing>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  )
}

export default Home
