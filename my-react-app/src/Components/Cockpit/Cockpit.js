import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import './Cockpit.css';
import WithClass from '../../hoc/WithClass';
import AuthContext from '../../context/auth-context';


const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);
 

  console.log('cockpit.js UseEffect');
    useEffect(()=>{
      toggleButtonRef.current.click();

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
       <WithClass classes="Cockpit">
         <h1>{props.title}</h1>
         <p className = {cssClasses.join(' ')}>Wanna get better ? Read,Read,read and Code, code, code!</p>
         <br/>
         <StyledButton ref={toggleButtonRef} showPersonsStyle = {props.showPersonsStyle}
         onClick={props.toggle}>Show Persons</StyledButton>
         <AuthContext.Consumer>
         {(context) => <button onClick={context.login}>Log in</button> }
         </AuthContext.Consumer>
       </WithClass>
    );
};

export default React.memo(Cockpit);