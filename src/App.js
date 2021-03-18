import './App.css';
import React, { Component } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import AllSchools from './Components/AllSchools';
import SchoolDetail from './Components/School';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
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
          <div>
            <Navbar bg="dark" variant="dark">
              <Link to='/'>
                <Navbar.Brand>Homepage</Navbar.Brand>
              </Link>
              <Link to='/schools'>
                <Navbar.Brand>School List</Navbar.Brand>
              </Link>
            </Navbar>
          </div>
        </nav>
        <main>
          <Switch>
            <Route exact path='/'><br></br>
              <h2>Welcome to the College Selection Big Board!</h2>
              <body className="text-body">
                This is the Database Administrator demo version of an online selection tool for students
                to research and create lists for making a decision on which schools they may want to apply.
                For MVP project requirements this version uses one data table and handles the Create, Read
                and Delete functions in the CRUD model. Click the School List button in the navbar above to 
                launch the demo.
              </body>
            </Route>
            <Route exact path='/schools'>
              <AllSchools schools={this.state.schools} createSchool={this.createSchool} deleteSchool={this.deleteSchool} />
            </Route>
            <Route path='/schools/:id'
              component={(routerProps) => (
                <SchoolDetail schools={this.state.schools} {...routerProps} />
              )}
            />
          </Switch>
        </main>
        <div className="fixed-bottom">
            <div>
             College Selection 'BIG BOARD' List Builder
            </div>
            <div>
             Copyright &copy; 2021
            </div>
        </div>
      </div>
    );
  }
}

export default App;
