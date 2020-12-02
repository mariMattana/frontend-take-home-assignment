import React, { Component } from 'react'
import CurrencyInput from 'react-currency-input'
import moment from 'moment'
import BuyHouse from './buyHouse'
import Arrow from '../../icons/arrow.svg'
import RightArrow from '../../icons/rightArrow.svg'
import Dollar from '../../icons/dollarSign.svg'

// styles
import './savingPlans.scss'

class SavingPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '0',
      date: moment(),
    };

    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.decreaseMonth = this.decreaseMonth.bind(this);
    this.increaseMonth = this.increaseMonth.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.keyPressed === 'right') {
      this.increaseMonth()
    } else if (this.props.keyPressed === 'left') {
      this.decreaseMonth()
    }
  }

  handleAmountChange(event, maskedvalue, floatvalue){
    this.setState({amount: maskedvalue});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  decreaseMonth(event) {
    let month = moment()
    if (month < this.state.date) {
      this.setState(
        prevState => ({ date: prevState.date.subtract(1, 'month') })
      )
    }
  }

  increaseMonth(event) {
    this.setState(prevState => ({
      date: prevState.date.add(1, 'month') })
    )
  }

  handleKeyDown(e) {
    if(this.props.keyPressed === 'right'){
      this.increaseMonth
    } else if (this.props.keyPressed === 'left') {
      this.decreaseMonth
    }
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
            <div className='goal'>
              <label>
                Reach goal by
              </label>
              <div className='form-input variable-input input-goal'>
                <span onClick={this.decreaseMonth}><img src={Arrow}/></span>
                <div className='goal-date'>
                  <span className='goal-month'>{this.state.date.format('MMMM')}</span>
                  <span className='goal-year'>{this.state.date.format('YYYY')}</span>
                </div>
                <span onClick={this.increaseMonth}><img src={RightArrow}/></span>
              </div>
            </div>
          </div>
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
          <input type="submit" value="Confirm" className='confirm-button'/>
        </form>
      </div>
    )
  }
}

 export default SavingPlans