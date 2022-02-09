import React from 'react';
import {ThemeContextProvider} from "./components/context/ThemeContext";
import {UserContextProvider} from "./components/context/userContext";
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import ButtonWithEvent from './components/ButtonWithEvent';
import Input from './components/Input';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import Counter from './components/state/Counter';
import Box from './components/context/Box';
import UserWithCtx from './components/context/UserWithCtx';
import DomRef from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';

function App() {
  const personName = {
    first: 'Antonio',
    last: 'Bachelly',
  };

  const namesList = [
    { first: 'Antonio', last: 'Bachelly' },
    { first: 'Enthony ', last: 'Joshua' },
    { first: 'Selena', last: 'Gomes' },
  ];

  const clickOnTheButton = () => {
    console.log('CLICK ON THE BUTTON');
  };


  return (
    <div className="App">
      <Greet name="Mario" isLoggedIn={true} messagesCount={14}/>
      <hr />
      <Person name={personName} />
      <hr />
      <PersonList names={namesList} />
      <hr />
      <Status status="loading" />
      <hr />
      <Heading>Placeholder text</Heading>
      <hr />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <hr />
      <Button handleClick={clickOnTheButton} />
      <hr />
      <ButtonWithEvent handleClick={(event, id) => {
          console.log('CLICK ON BUTTON WITH EVENT >>>', event.currentTarget.innerHTML, id);
      }}/>
      <hr />
        <Input value="" />
      <hr />
        <Container styles={{border: '2px solid red', padding: '10px', fontWeight: 'bold', opacity: 0.3}}/>
      <hr />
      <LoggedIn />
      <hr />
        <User />
      <hr />
      <Counter />
      <hr />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <hr />
      <UserContextProvider>
        <UserWithCtx />
      </UserContextProvider>
      <hr />
        <DomRef />
      <hr />
        <MutableRef />
      <hr />
    </div>
  );
}

export default App;
