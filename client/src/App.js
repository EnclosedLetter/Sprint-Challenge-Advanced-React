import React from 'react';
// import "./styles.css";
import axios from "axios";
import SoccerPlayers from "./components/SoccerPlayers"

class App extends React.Component { 
  constructor (){
    super();
    this.state = { 
    data: [] 
    };
  }
  componentDidMount(){ //this is basically useEffect, it's going to run once, once the app first loads
// this is where we will fetch our API data  
axios //get our API data
  .get("http://localhost:5000/api/players")
  .then(response => {
    // console.log(response.data);
  this.setState({ data: response.data })
  })
  .catch(err => console.error(err));
}

  render(){ //have to call the render method that comes with from React.Component
    console.log(this.state)
  return (
    <div className="App">
      <h1>Rendered</h1>
      {this.state.data.map(item => {
        return <SoccerPlayers user={item} /> /*for each object we will be calling user*/
      })} {/*This will help us get to our response.data array*/}
    </div>
  );
}
}

export default App;