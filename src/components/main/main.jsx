import React, { Component } from 'react'
import SavingPlans from '../savingPlans'

// styles
import './main.scss'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.state.key !== '') {
      this.setState({key: ''})
    }
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
      <div
        className='main'
        tabIndex="0"
        onKeyDown={(e) => this.handleKeyDown(e)}
      >
        <h3>Let's plan your <span>saving goal.</span></h3>
        <SavingPlans keyPressed={this.state.key}/>
      </div>
    )
  }
}

 export default Main