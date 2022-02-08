import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';

function App() {
  const personName = {
    firstName: 'Antonio',
    lastName: 'Bachelly',
  };

  const namesList = [
    { first: 'Antonio', last: 'Bachelly' },
    { first: 'Enthony ', last: 'Joshua' },
    { first: 'Selena', last: 'Gomes' }
  ];

  return (
    <div className="App">
      <Greet name="Mario" messagesCount={12} isLoggedIn={true} />
      <hr />
      <Person name={personName} />
      <hr />
      <PersonList names={namesList}/>
      <hr />
      <Status status="loading"/>
      <hr />
      <Heading>Placeholder text</Heading>
      <hr />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
