import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = (props) => {
  
  return (
    <>
    <Main/>
    <Row title='Popular' url={requests.requestPopular} onClick={props.onClick}/>
    <Row title='Now Playing' url={requests.requestNow} onClick={props.onClick}/>
    <Row title='Top Rated' url={requests.requestTop} onClick={props.onClick}/>
    <Row title='Upcoming' url={requests.requestUpcoming} onClick={props.onClick}/>
    </>
  )
}

export default Home