import React from 'react'
import HomeCarosel from '../HomeCarosel/HomeCarosel'
import FeaturedSection from '../FeaturedSection/FeaturedSection'
import Promotions from '../Promotions/Promotions'
import Newsletter from '../Newsletter/Newsletter'

const Home = () => {
  return (
    <div>
      <HomeCarosel></HomeCarosel>
      <FeaturedSection></FeaturedSection>
      <Promotions></Promotions>
      <Newsletter></Newsletter>
    </div>
  )
}

export default Home
