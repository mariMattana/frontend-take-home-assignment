import * as React from 'react';
import './App.scss';
import { Main, Header } from './components'

const App: React.FunctionComponent = () => {
  return ( 
    <div>
      <Header/>
      <Main/>
    </div>
  )
};

export default App;
