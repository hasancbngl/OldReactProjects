import React, {Component, Fragment} from 'react';
import './Person.css';
import styled from 'styled-components';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

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
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log("authenticated: " ,this.context.authenticated);
    }

    static contextType = AuthContext;

    render() {
    console.log('[Person.js] rendering.');
    return (
        //Aux returns childrens and can use elements next to each other also Built in React.Freagment can be used!
      <StyledDiv>
         {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Login</p>}
        <p 
        onClick = {this.props.click}>
            I'm {this.props.name} and {this.props.age} years old!
            </p>
        <p>{this.props.children}</p>
        <input
        ref={this.inputElementRef}
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

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    changedAge: PropTypes.func
}

export default Person;