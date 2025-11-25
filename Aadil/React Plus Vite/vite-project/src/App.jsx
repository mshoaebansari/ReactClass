import { useState } from 'react'
import Greeting from './Greeting.jsx'
import './App.css'
import { RedButton, GreenButton, BlueButton } from './components/Buttons.jsx' 
import UserData from './UserData.jsx'
import { Card1 } from './card.jsx'
import { Card2 } from './card.jsx'
import { Card3 } from './card.jsx'
import List from './List.jsx'
import Table from './Table.jsx'
import Weather from './Weather.jsx'
import ListMap from './ListMap.jsx'
import {StudentForm} from './SudentForm.jsx'
import { Cardy } from './Cardy.jsx'
import { AllCards } from './components/AllCards.jsx'
import { Container } from './Container.jsx'
function App() {
  const [count, setCount] = useState(0)
  let name = "Aadil"
  let age = 23;
  let roll = 35;
  let marks ={
    english: 90,
    math: 95,
    science: 89

  };
  let students = [
    {name: "Aadil", age: 23, roll: 35},
    {name: "Faizan", age: 23, roll: 34},
    {name: "Danish", age: 19, roll: 36}
  ];
  let weatherData = [{
        city: "Malegaon",
        realfeel: 24,
        wind: "ESE 10 km/h",
        windgusts: "25 km/h",
        humidity: "78%",
        airquality:"Poor"
    },
    {
        city: "Nashik",
        realfeel: 24,
        wind: "ESE 10 km/h",
        windgusts: "25 km/h",
        humidity: "78%",
        airquality:"Poor"
    }];
    let cardname=[
      {
        name:"Aadil",
      },
      {
        name:"Faizan",
      },
      {
        name:"Danish",
      }
    ]
  
  return (
    <>
      <Greeting />
      <RedButton />
      <GreenButton />
      <BlueButton />
      <UserData n={name} a={age} r={roll} marks={marks}/>
      <Card1 />
      <Card2 />
      <Card3 />
      <List s={students}/>
      <Table stable={students}/>
      <Weather weater={weatherData}/>
      <ListMap st={students}/>
      <StudentForm />
      <Cardy students={students}/>
      <AllCards cardType="blueCard" cardTitle="Blue"/>
      <AllCards cardType="redCard" cardTitle="Red"/>
      <AllCards cardType="greenCard" cardTitle="Green"/>
      <Container cardTitle={cardname}/>
    </>
  )
}

export default App
