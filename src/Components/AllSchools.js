//import './AllSchools.css';
import React from 'react';
import { Link } from 'react-router-dom';
// import { FormControl } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

export default function AllSchools(props) {
    console.log(props)
    const AllSchools = props.schools.map(school => {
        return <li key={school.id}><Link to={`/schools/${school.id}`}>{school.name}</Link>
        <button onClick={(e) => props.deleteSchool(school.id)}>
                DELETE
            </button>
        </li>
    });

    return (
        <section className='AllSchools'>
            <h1>All Schools</h1>
            <br></br>           
           <ul>{AllSchools}</ul> 
           <br></br>
           <form onSubmit={props.createSchool}>
                <input type='text' placeholder='School Name' name='name' />
                <input type='text' placeholder='US Region' name='region' />
                <input type='text' placeholder='Academic Program' name='program' />
                <input type='text' placeholder='Sport' name='sport' />
                <input type='text' placeholder='Image URL' name='img' />
                <input type='submit' value='Create School' />
            </form>           
            
        </section>
    );
}