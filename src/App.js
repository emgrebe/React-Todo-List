import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  render() {
    return(
      <div>
      <input calue={this.state.term} onChane={this.onChange} />
      </div>
    )
  }
}

export default App;
