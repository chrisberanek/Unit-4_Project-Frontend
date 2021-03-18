import './School.css';

import React, { Component } from "react";

class SchoolDetail extends Component {
  render() {
      console.log('school',this.props)
    const schoolDetail = this.props.schools.find((school) => {
      return school.id == this.props.match.params.id;
    });

    return (
        <div>
            <section className='Schools'>
                <h1>School Details</h1>
                {schoolDetail.name}<br></br>
                {schoolDetail.region}<br></br>
                {schoolDetail.program}<br></br>
                {schoolDetail.sport}<br></br>
            </section>
            <div className='image'>
                <img src={schoolDetail.img} />
            </div>
        </div>
    );
 }
}

export default SchoolDetail;