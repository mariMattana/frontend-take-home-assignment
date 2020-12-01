import React, { Component } from 'react'
import House from '../../../icons/house.svg'


// styles
import './buyHouse.scss'

class BuyHouse extends Component {
  render() {
    return(
      <div className='buy-house'>
        <div className='buy-house-img'><img src={House}/></div>
        <div className='buy-house-text'>
          <p className='buy-house-title'>Buy a house</p>
          <p className='buy-house-subtitle'>Saving goal</p>
        </div>
      </div>
    )
  }
}

 export default BuyHouse