import React, {Component} from 'react';
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
class Person extends Component {
    render() {
    console.log('[Person.js] rendering.');
    return (
        <StyledDiv>
        <p 
        onClick = {this.props.click}>
            I'm {this.props.name} and {this.props.age} years old!
            </p>
        <p>{this.props.children}</p>
        <input 
        type="text" 
        value = {this.props.name} 
        onChange = {this.props.changed}/>
        <br></br>
        <input type="text" 
        value = {this.props.age} 
        onChange = {this.props.changedAge}/>
        </StyledDiv>
    )};
}

export default Person;