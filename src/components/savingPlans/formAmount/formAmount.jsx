import React, { Component } from 'react'
import CurrencyInput from 'react-currency-input'
import Dollar from '../../../icons/dollarSign.svg'

// styles
import './formAmount.scss'

class FormAmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '0',
    };

    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleAmountChange(event, maskedvalue, floatvalue){
    this.setState({amount: maskedvalue});
  }

  render() {
    return(
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
    )
  }
}

 export default FormAmount
