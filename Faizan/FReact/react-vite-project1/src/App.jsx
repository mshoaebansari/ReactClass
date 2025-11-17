import { useState } from 'react'
import Greeting from './assets/Greeting'
import UserData from './assets/UserData'
import './App.css'
import { Gcard, Rcard, Bcard } from './assets/Card'
import { Table } from './assets/table'
import { Studentform } from './assets/Studentform'



function App() {
  const Username = "Aadil";
  const Age = 21;
  const Gender = "Male";

  let Exame = {
    maths: 90,
    science: 85,
    english: 8,
  };

  let Student = [
    {
      Roll: 1,
      Name: "Danish"
    },
    {
      Roll: 2,
      Name: "Aadil"
    },
    {
      Roll: 3,
      Name: "Faizan"
    }
  ];
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting />
      <UserData u={Username} a={Age} g={Gender} e={Exame} />
      <Gcard />
      <Rcard />
      <Bcard />
      <Table sd={Student} />
      <Studentform />
    </>
  );
}

export default App;
