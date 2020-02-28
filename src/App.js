import React from 'react';
import Nav from './components/Nav';
import Error404 from './components/Error404';
import {Switch, Route} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'moment';
import {Link} from "react-router-dom";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  render() {
    const headerStyle = {
      textAlign: "center",
      width: "60%",
      backgroundColor: "#4e504d",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      marginLeft: "20%",
      marginRight: "20%",
      marginTop: "20px",
      border: "3px solid #ff751a",
    }
    const buttonStyle = {
      border: "3px solid #ff751a",
      color: "white",
      backgroundColor: "#cc0000",
      marginLeft: "10px"
    }
  return (
    <div className="App">
    <header style={headerStyle} className="App-header">
    <Nav/>
    <Button style={buttonStyle} onClick={() => this.purchase()}>Buy our collection!</Button>
    </header>
    <div>
    <Switch>
      <Route exact path='/' render={() =>< AleList aleTotal = {this.state.masterAleList} />}/>
      <Route component={Error404} />
    </Switch>
    </div>
    </div>
  );
}
}

export default App;
