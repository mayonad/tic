import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='my-app' >
        <Item/>
      </div>
    );
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {amount:0};
    this.buy = this.buy.bind(this);
  }

  buy() {
    this.setState({amount: this.state.amount + 1});
  }

  render() {
    return (

    <div>
      <h4>Fruits</h4>
      <p>1. Apple</p>
      <p>  30/Kilo</p>
      <p>2. Orange</p>
      <p>  40/Kilo</p>
      <p>3. Grapes</p>
      <p>  50/Kilo</p>

      <button onClick={this.buy}>Buy</button>
      <span> Per Kilo:</span>
      <span> (Cart: {this.state.amount} items.)</span>
     <hr/>
    </div>

);
}
}

export default App;
