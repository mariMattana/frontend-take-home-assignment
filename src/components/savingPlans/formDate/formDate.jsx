import React, { Component } from 'react'
import moment from 'moment'
import Arrow from '../../../icons/arrow.svg'
import RightArrow from '../../../icons/rightArrow.svg'

// styles
import './formDate.scss'

class FormDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      key: '',
    };

    this.decreaseMonth = this.decreaseMonth.bind(this);
    this.increaseMonth = this.increaseMonth.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.state.key === 'right') {
      this.increaseMonth()
    } else if (this.state.key === 'left') {
      this.decreaseMonth()
    }
    if (this.state.key !== '') {
      this.setState({key: ''})
    }
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
    if(e.keyCode === 39){
      this.setState({
        key: 'right'
      })
    } else if(e.keyCode === 37){
      this.setState({
        key: 'left'
      })
    }
  }

  render() {
    return(
      <div className='goal'>
        <label>
          Reach goal by
        </label>
        <div
          className='form-input variable-input input-goal'
          tabIndex="0"
          onKeyDown={(e) => this.handleKeyDown(e)}
        >
          <span onClick={this.decreaseMonth}><img src={Arrow}/></span>
          <div className='goal-date'>
            <span className='goal-month'>{this.state.date.format('MMMM')}</span>
            <span className='goal-year'>{this.state.date.format('YYYY')}</span>
          </div>
          <span onClick={this.increaseMonth}><img src={RightArrow}/></span>
        </div>
      </div>
    )
  }
}

 export default FormDate