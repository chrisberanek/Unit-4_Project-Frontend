import './App.css';
import React, { Component } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import AllSchools from './Components/AllSchools';
import SchoolDetail from './Components/School';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.schoolsBaseUrl = 'http://localhost:3001/schools';
    this.state = {
      schools: []
    }
  }
  getAllSchools = async () => {
    const response = await axios.get(this.schoolsBaseUrl);
    this.setState({ schools: response.data.schools });
    console.log(this.state.schools)
  }
  componentDidMount = async () => {
    await this.getAllSchools()
  }

  deleteSchool = async (schoolId) => {
    const response = await axios.delete(`${this.schoolsBaseUrl}/${schoolId}`);
    this.getAllSchools()
  }

  render() {
    return (
      <div className="App">
        <nav className='App-nav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/schools'>Schools</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <h1>Welcome to the College Big Board!</h1>
          </Route>
          <Route exact path='/schools'>
            <AllSchools schools={this.state.schools} createSchools={this.addSchool} deleteSchool={this.deleteSchool} />
          </Route>
          <Route path='/schools/:id'
            component={(routerProps) => (
            <SchoolDetail schools={this.state.schools} {...routerProps} />
            )}
            />
        </Switch>
      </div>
    );
  }
}

export default App;
