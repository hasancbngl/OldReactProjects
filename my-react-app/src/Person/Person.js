import React from 'react';
import './Person.css';
import styled from 'styled-components'

const StyledDiv = styled.div`
   width: 40%;
    margin: 20px auto;
    border: 1px solid #000;
    box-shadow: 1px 2px 4px #325684;
    padding: 16px;
    text-align: center;
    background: #ccc;
`;
const person = (props) => {
    return (
        // <div className="Person" style={myStyle}>
        <StyledDiv>
        <p 
        onClick = {props.click}>
            I'm {props.name} and {props.age} years old!
            </p>
        <p>{props.children}</p>
        <input 
        type="text" 
        value = {props.name} 
        onChange = {props.changed}/>
        <br></br>
        <input type="text" 
        value = {props.age} 
        onChange = {props.changedAge}/>
        </StyledDiv>
    )};

export default person;