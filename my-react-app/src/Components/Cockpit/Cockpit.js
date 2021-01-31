import React from 'react';
import styled from 'styled-components';
import './Cockpit.css';

const Cockpit = (props) => {
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
    if(props.persons.length <=2) {
      cssClasses.push('red'); //classes = ['red'];
    }
       
    if(props.persons.length <=1) {
      cssClasses.push('bold'); //classes = ['red', bold];
    }
    return(
       <div className="Cockpit">
         <h1>Yo I started!</h1>
         <p className = {cssClasses.join(' ')}>Wanna get better ? Read,Read,read and Code, code, code!</p>
         <br/>
         <StyledButton showPersonsStyle = {props.showPersonsStyle}
         onClick={props.toggle}>Change Name</StyledButton>
         <br/>
       </div>
    );
};

export default Cockpit;