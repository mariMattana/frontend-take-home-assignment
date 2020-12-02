import React, { Component } from 'react';
import SavingPlans from '../savingPlans';

// styles
import './main.scss';

class Main extends Component {
  render() {
    return (
      <div className="main" tabIndex="0">
        <h3>
          Let&apos;s plan your <span>saving goal.</span>
        </h3>
        <SavingPlans />
      </div>
    );
  }
}

export default Main;
