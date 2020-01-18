import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      pvaidya56: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/pvaidya56')
      .then(res => {
        // console.log(res);
        this.setState({ pvaidya56: res.data})
        // console.log(this.state)
      })
    .catch(err => console.log("Data was not returned", err));
  }
  
  render(){
    return (
     <>
     <Card user={this.state["pvaidya56"]}/>
     </>
    );
  }
  
}

export default App;
