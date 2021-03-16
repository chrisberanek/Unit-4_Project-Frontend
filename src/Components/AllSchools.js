//import './AllSchools.css';
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
        <section className='AllSchools'>
            <h1>All Schools</h1>
            <form onSubmit={props.createSchools}>
                <input placeholder='name' name='name' />
                <input type='submit' value='create school' />
            </form>
            
            <ul>{AllSchools}</ul>
        </section>
    );
}