import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
    <Main/>
    <Row title='Popular' url={requests.requestPopular} />
    <Row title='Now Playing' url={requests.requestNow} />
    <Row title='Top Rated' url={requests.requestTop} />
    <Row title='Upcoming' url={requests.requestUpcoming} />
    </>
  )
}

export default Home