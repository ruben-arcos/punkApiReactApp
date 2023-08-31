import React from 'react'
import '../App.css'

export default function beer(props) {
    console.log(props)
    // child component
  return (
    <li className='beerInfo'>
        <img className='beerImg' src={props.beer.image_url}  alt={props.beer.name}/>
        <h3 className='beerName'>{props.beer.name}</h3>
        <p className='description'>{props.beer.description}</p>
    </li>
  )
}

