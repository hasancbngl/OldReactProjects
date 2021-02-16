import React,{ useEffect, useState } from 'react';
import Airtable from 'airtable';
import Goal from './components/Goal/Goal';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import styled from 'styled-components';
import { GlobalStyle } from './styles/Global.styles';

const StyledH1 = styled.h1` 
  text-align: center;
  font-size: 4rem;
  margin: 1rem 0;
`;

const base = new Airtable({ apiKey: apikey}).base("baseid");

function App() {
  const [goals, setGoals] = useState([]);
  const [updates, setUpdates] = useState([]);

  //run only at inital render
  useEffect(() => {
    base("goals")
    .select({view: "Grid view"})
    .eachPage((records, fetchNextPage) => {
      setGoals(records);
      fetchNextPage();
    });

    base("updates")
    .select({view: "Grid view"})
    .eachPage((records, fetchNextPage) => {
      setUpdates(records);
      fetchNextPage();
    })
  }, []);
  
  return (
    <>
    <GlobalStyle />
    <StyledH1>My Goals</StyledH1>
    {goals.map(goal => (
     <ErrorBoundary>
     <Goal
      key={goal.id}
      goal = {goal}
      updates = {updates.filter(
        (update) => update.fields.goalid[0] === goal.id
        )}
      />
      </ErrorBoundary>
    )
    )}
    </>
  );
}

export default App;
