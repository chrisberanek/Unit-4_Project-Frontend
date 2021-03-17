import './App.css';
import React, { Component } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import AllSchools from './Components/AllSchools';
import SchoolDetail from './Components/School';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.schoolsBaseUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001/schools';
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
  
  createSchool = async (e) => {
    e.preventDefault();
    await axios.post(`${this.schoolsBaseUrl}`,{
      name:e.target.name.value,
      region:e.target.region.value,
      program:e.target.program.value,
      sport:e.target.sport.value,
      img:e.target.img.value,
    }); 
    this.getAllSchools()
  }

  deleteSchool = async (schoolId) => {
    await axios.delete(`${this.schoolsBaseUrl}/${schoolId}`);
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
            <AllSchools schools={this.state.schools} createSchool={this.createSchool} deleteSchool={this.deleteSchool}/>
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
