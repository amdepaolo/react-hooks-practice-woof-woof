import React, {useState, useEffect} from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelected] = useState(null);
  const [onlyGoodDogs, setGood] = useState(false);
  const goodDogs = dogs.filter(dog => dog.isGoodDog);
  const dogsToShow =  onlyGoodDogs? goodDogs: dogs;

  useEffect(()=>{
    fetch('http://localhost:3001/pups')
    .then(r => r.json())
    .then(pups => setDogs(pups))
  },[]);

  function nameClick(id){
    const chosenDog = dogs.find(dog => dog.id === id);
    setSelected(chosenDog);
  }

  function updateDogs(resp){
    const updatedDogsArr = dogs.map(dog => {
      if(dog.id === resp.id) return resp;
      else return dog;
    })
    setDogs(updatedDogsArr);
    setSelected(resp);
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button 
          onClick={()=> setGood(!onlyGoodDogs)} id="good-dog-filter">
          Filter good dogs: {onlyGoodDogs? 'On': 'Off'}
        </button>
      </div>
      <div id="dog-bar">
        <DogBar handleClick={nameClick} dogs={dogsToShow} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogInfo dog={selectedDog} onUpdateDogs={updateDogs}/>
        </div>
      </div>
    </div>
  );
}

export default App;
