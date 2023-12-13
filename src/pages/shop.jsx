import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollectios from '../components/NewCollections/NewCollectios'
import NewsLetters from '../components/NewsLetters/NewsLetters'

const shop = () => {
  return (
    <div>
      <Hero/> 
      <Popular/>
      <Offers />
      <NewCollectios />
      <NewsLetters />
    </div>
  )
}

export default shop
