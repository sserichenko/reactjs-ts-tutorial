import React from 'react';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/userContext';
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
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';
import RandomNumber from './components/restriction/RandomNumber';
import Toast from './components/tenplateLiterals/Toast';
import CustomButton from './components/html/Button';
import CustomInput from './components/html/Input';
import CustomComponent from './components/html/CustomComponent';
import TextComponent from './components/polymorphic/Text';

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
      <Greet name="Mario" isLoggedIn={true} messagesCount={14} />
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
      <ButtonWithEvent
        handleClick={(event, id) => {
          console.log('CLICK ON BUTTON WITH EVENT >>>', event.currentTarget.innerHTML, id);
        }}
      />
      <hr />
      <Input value="" />
      <hr />
      <Container
        styles={{ border: '2px solid red', padding: '10px', fontWeight: 'bold', opacity: 0.3 }}
      />
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
      <Private isLoggedIn={true} component={Profile} />
      <hr />
      {/* <List
        items={['Hello', 'Good By', "What's up", 'Go away!']}
        onClick={(item) => console.log('item >>>', item)}
      />
      <hr />
      <List items={[1, 2, 3, 4]} onClick={(item) => console.log('item >>>', item)} />
      <hr /> */}
      <List
        items={[
          { id: 1, first: 'Antonio', last: 'Bachelly' },
          { id: 2, first: 'Enthony ', last: 'Joshua' },
          { id: 3, first: 'Selena', last: 'Gomes' }
        ]}
        onClick={(item) => console.log('item >>>', item)}
      />
      <hr />
      <RandomNumber value={10} isPositive />
      <hr />
        <Toast position="center" />
      <hr />
        <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
          Primary Button
        </CustomButton>
        <CustomInput />
      <hr />
        <CustomComponent isLoggedIn={true} name="FRANCHESKO" />
      <hr />
        <TextComponent as="h1" size="lg">
          Heading
        </TextComponent>
        <TextComponent as="p" size="md">
          Paragraph
        </TextComponent>
        <TextComponent as="label" htmlFor="someId" size="sm" color="secondary">
          Label
        </TextComponent>
      <hr />
    </div>
  );
}

export default App;
