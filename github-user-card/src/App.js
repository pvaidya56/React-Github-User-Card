import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card'
import FollowerCard from './components/FollowerCard';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      pvaidya56: {},
      followers: []
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

    axios.get("https://api.github.com/users/pvaidya56/followers")
      .then((res) => {
        console.log(res);
        res.data.map(item => {
          axios.get(item.url)
          .then((res) => {
            this.setState({
              followers: [...this.state.followers, res.data]
            });
          })
          .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  }
  
  render(){
    return (
     <>
     <Card key={0} user={this.state["pvaidya56"]}/>
     <FollowerCard followers={this.state.followers}/>
     </>
    );
  }
  
}

export default App;
