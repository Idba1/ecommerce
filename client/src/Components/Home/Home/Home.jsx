import React from 'react'
import HomeCarosel from '../HomeCarosel/HomeCarosel'
import FeaturedSection from '../FeaturedSection/FeaturedSection'
import Promotions from '../Promotions/Promotions'
import Newsletter from '../Newsletter/Newsletter'
import ProductListing from '../../Product/ProductListing/ProductListing'

const Home = () => {
  return (
    <div>
      <HomeCarosel></HomeCarosel>
      <FeaturedSection></FeaturedSection>
      <Promotions></Promotions>
      <ProductListing></ProductListing>
      <Newsletter></Newsletter>
    </div>
  )
}

export default Home
