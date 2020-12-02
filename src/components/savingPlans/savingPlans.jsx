import React, { Component } from 'react';
import BuyHouse from './buyHouse';
import FormAmount from './formAmount';
import FormDate from './formDate';
import Confirmation from './confirmation';

// styles
import './savingPlans.scss';

class SavingPlans extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="saving-plans">
        <BuyHouse />
        <form onSubmit={this.handleSubmit}>
          <div className="simulation">
            <FormAmount />
            <FormDate />
          </div>
          <Confirmation />
          <input type="submit" value="Confirm" className="confirm-button" />
        </form>
      </div>
    );
  }
}

export default SavingPlans;
