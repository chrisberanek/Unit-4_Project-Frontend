import './AllSchools.css';
import React from 'react';
import { Link } from 'react-router-dom';

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
        <section className='AllSchools'><br></br>
            <h3>School Selection List</h3>
            <br></br>
            <ul>{AllSchools}</ul>
            <br></br>
            <form onSubmit={props.createSchool}>
                <input type='text' placeholder='School Name' name='name' /><br></br>
                <input type='text' placeholder='US Region' name='region' /><br></br>
                <input type='text' placeholder='Academic Program' name='program' /><br></br>
                <input type='text' placeholder='Sport' name='sport' /><br></br>
                <input type='text' placeholder='Image URL' name='img' /><br></br>
                <br></br>
                <input type='submit' value='Create School' />
            </form>
        </section>
    );
}