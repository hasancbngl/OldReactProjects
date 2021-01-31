import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) => {
          return <Person
          click = {props.delete.bind(this, index)}
          name = {person.name} 
          age = {person.age}
          key = {person.id}
          changed = {(event) => props.changed(event, person.id)}
          changedAge = {(event) => props.changedAge(event,person.id)}/>
        });

export default Persons;