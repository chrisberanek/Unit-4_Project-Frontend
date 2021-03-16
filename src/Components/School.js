//import './Schools.css';
// import React from 'react';
import { Link } from 'react-router-dom';

import React, { Component } from "react";

class SchoolDetail extends Component {
  render() {
    const schoolDetail = this.props.schools.find((school) => {
      return school.id == this.props.match.params.id;
    });

    return (
        <section className='Schools'>
            <h1>School Details</h1>
            { schoolDetail.name }
        </section>
    );
 }
}

export default SchoolDetail;