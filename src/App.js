import React from 'react';
import './App.css';

import SelectorPage from './pages/SelectorPage';
import ResultsPage from './pages/ResultsPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      becomeResultPage: false
    }
  }

  render() {
    if (this.state.becomeResultPage) {
      return <ResultsPage />
    } else {
      return <SelectorPage />
    }
  }

}

export default App;
