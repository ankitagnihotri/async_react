import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
       <ul>
         {this.state.data.map(dataList => (
           <li key={dataList.id}>
            {dataList.name}: {dataList.price_usd}
           </li>
         ))}
       </ul>
      </div>
    );
  }
}

export default App;
