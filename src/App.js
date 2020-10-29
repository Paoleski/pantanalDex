import Navbar from './components/Navbar'
import Main from './components/Main'
import React, {useState, useEffect} from 'react'
import axios from 'axios'



function App() {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/Paoleski/pantanalDex/animals')
      .then(response => {
        setAnimals(response.data);
      })
  }, [])

  
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid-container">
      {animals && animals.map(animal => {
        return <Main key={animal.id} animal={animal}></Main>
      })}
      </div>
      
    </div>
  )

}

export default App;
