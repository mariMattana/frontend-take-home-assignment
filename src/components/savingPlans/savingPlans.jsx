import React, { Component } from 'react'
import CurrencyInput from 'react-currency-input'
import BuyHouse from './buyHouse'
import FormDate from './formDate'
import Confirmation from './confirmation'
import Dollar from '../../icons/dollarSign.svg'

// styles
import './savingPlans.scss'

class SavingPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '0',
    };

    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAmountChange(event, maskedvalue, floatvalue){
    this.setState({amount: maskedvalue});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <div className='saving-plans'>
        <BuyHouse/>
        <form onSubmit={this.handleSubmit}>
          <div className='simulation'>
            <div className='amount'>
                <label>
                  Total amount
                </label>
                <div className='form-input variable-input'>
                  <img className='dollar-sign' src={Dollar}/>
                  <CurrencyInput
                    className='dollar-input'
                    value={this.state.amount}
                    onChangeEvent={this.handleAmountChange}
                    precision="2"
                  />
                </div>
            </div>
            <FormDate/>
          </div>
          <Confirmation/>
          <input type="submit" value="Confirm" className='confirm-button'/>
        </form>
      </div>
    )
  }
}

 export default SavingPlans