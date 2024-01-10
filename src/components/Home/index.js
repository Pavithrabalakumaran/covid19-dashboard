import {Component} from 'react'

import Header from '../Header'
import Footer from '../Footer'
import LoaderSpinner from '../LoaderSpinner'
import covidSearchBar from '../CovidSearchBar'

const Home = () => (
  <>
    <Header />
    <covidSearchBar />
    <Footer />
  </>
)

export default Home
