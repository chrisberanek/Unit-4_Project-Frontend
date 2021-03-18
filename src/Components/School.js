import './School.css';

import React, { Component } from "react";

class SchoolDetail extends Component {
  render() {
      console.log('school',this.props)
    const schoolDetail = this.props.schools.find((school) => {
      return school.id == this.props.match.params.id;
    });

      return (
          <div className='school_container'>
              {schoolDetail ?
                  <div><br></br>
                      <h3>School Details Page</h3>
                      <section className='school_info'>
                           <span>College: </span> {schoolDetail.name}<br></br>
                           <span>US Region: </span> {schoolDetail.region}<br></br>
                           <span>Program: </span> {schoolDetail.program}<br></br>
                           <span>Sport Of Interest: </span>{schoolDetail.sport}<br></br>
                      </section>
                      <div className='image'><br></br>
                          <img src={schoolDetail.img} />
                      </div>
                  </div>
                  : null
              }
          </div>
      );
 }
}

export default SchoolDetail;