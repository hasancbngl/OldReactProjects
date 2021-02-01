import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor.');
  }

  state = {
    persons: [
      {id:'acv', name: "hasan", age: 24},
      {id:'asd', name: "jack", age: 35},
      {id:'aqw', name: "hun", age: 88}
    ],
    otherState: 'some value',
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  }

 static getDerivedStateFromProps(props, state) {
   console.log('[App.js] getDerivedStateFromProps', props);
  return state;
 }

 componentDidMount() {
   //http request done
     console.log('[App.js] Componentdidmount.');
 }

 shouldComponentUpdate(nextProps, nextState) {
   console.log('[App.js] shouldComponentUpdate.');
   return true;
 }

  componentDidUpdate() {
     console.log('[App.js] componentDidUpdate.');
 }

  inputChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter : prevState.changeCounter +1
      };
    });
  };

  ageInputChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    person.age = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    //remove one element
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  };

  togglePersonHandler = () => {
    const isShowing = this.state.showPersons;
    this.setState({showPersons: !isShowing});
  };
  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
     console.log('[App.js] render.');
    let persons = null;
    if(this.state.showPersons) {
      persons = <Persons 
      persons = {this.state.persons}
      delete = {this.deletePersonHandler}
      changed = {this.inputChangedHandler}
      changedAge = {this.ageInputChangedHandler}
      isAuthenticated = {this.state.authenticated}
      />
    }

  return (
   <WithClass>
     <AuthContext.Provider 
     value = {{
       authenticated: this.state.authenticated, 
       login: this.loginHandler
     }}>
       <Cockpit
       title = {this.props.appTitle}
       personsLength = {this.state.persons.length}
       toggle = {this.togglePersonHandler}
       showPersonsStyle = {this.state.showPersons}
       />
     {persons} 
     </AuthContext.Provider>
    </WithClass> 
  );
  }
}

export default App;