import React, { Component } from 'react'

// styles
import './confirmation.scss'

class Confirmation extends Component {
  render() {
    return(
      <div className='confirmation form-input'>
        <div className='installments'>
          <p className='installment-text'>Monthly amount</p>
          <p className='installment-value'>$521</p>
        </div>
        <div className='confirmation-text'>
          <p>You're planning
            <span> 48 monthly deposits </span>
            to reach your
            <span> $25,000 </span>
            goal by 
            <span> October 2020</span></p>
        </div>
      </div>
    )
  }
}

 export default Confirmation