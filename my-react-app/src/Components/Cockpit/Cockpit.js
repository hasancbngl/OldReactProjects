import React, {useEffect} from 'react';
import styled from 'styled-components';
import './Cockpit.css';

const Cockpit = (props) => {
  console.log('cockpit.js UseEffect');
    useEffect(()=>{
      setTimeout(() => {
        alert('Cockpit.js => useEffect');
       }, 1000); 
       return () => {
         console.log('Cleanup work in UseEddect(Cockpit.js)');
       };
    }, []);
     //[] makes it run only first time. [props.person] it run first time and every time person related data changed.
  
     const StyledButton = styled.button`
  background-color: ${props.showPersonsStyle ? 'red' : 'blue'};
  color: white;
  font: inherit;
  border: 2px solid black;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props.showPersonsStyle ? 'salmon' :'green'}; 
    color: black;
  }
  `;

    const cssClasses = [];
    if(props.personsLength <=2) {
      cssClasses.push('red'); //classes = ['red'];
    }
       
    if(props.personsLength <=1) {
      cssClasses.push('bold'); //classes = ['red', bold];
    }
    return(
       <div className="Cockpit">
         <h1>{props.title}</h1>
         <p className = {cssClasses.join(' ')}>Wanna get better ? Read,Read,read and Code, code, code!</p>
         <br/>
         <StyledButton showPersonsStyle = {props.showPersonsStyle}
         onClick={props.toggle}>Change Name</StyledButton>
         <br/>
       </div>
    );
};

export default React.memo(Cockpit);