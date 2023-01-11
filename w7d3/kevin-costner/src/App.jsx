import { useState } from "react";
import { plantListArr } from "./data/plantData";

import PlantList from "./components/PlantList";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [plantList, setPlantList] = useState(plantListArr);
  const [count, setCount] = useState(0);

  const addOne = () => setCount((pendingState) => pendingState + 1);
  const addTen = () => {
    let newCount = count;

    for (let i = 0; i < 10; i++) {
      newCount += 1;
    }

    setCount(newCount);

    // addOne(); // count = 0
    // addOne(); // count = 0
    // addOne(); // count = 0
    // addOne(); // count = 0
    // addOne(); // count = 0
    // addOne(); // count = 0
    // addOne(); // count = 0
    // addOne(); // count = 0
    // addOne(); // count = 0
    // addOne(); // count = 0
  };

  const updateWateredDate = (plantId) => {
    const today = new Date().toDateString();
    // Find the plant to change
    const plantToChange = plantList.find((plant) => plant.id === plantId);
    const plantToChangeIndex = plantList.findIndex((plant) => plant.id === plantId);
    // A new plant list
    const updatedPlantList = [...plantList];

    // Create a new plant object based of the old one, and update the key
    const updatedPlant = { ...plantToChange };
    updatedPlant.lastWateredDate = today;

    // Set the state with the new plant list

    updatedPlantList[plantToChangeIndex] = updatedPlant;

    setPlantList(updatedPlantList);
  };
  const updateWateredDateIfWePickedAnObj = (plantId) => {
    const today = new Date().toDateString();

    const plantToChange = { ...plantList[plantId] };

    plantToChange.lastWateredDate = today;

    const updatedPlantList = { ...plantList, [plantId]: plantToChange };
    // updatedPlantList[plantId] = plantToChange

    setPlantList(updatedPlantList);
  };

  const waterEverything = () => {
    const today = new Date().toDateString();
    const updatedPlantList = [];

    for (const plant of plantList) {
      const updatedPlant = { ...plant };
      updatedPlant.lastWateredDate = today;

      updatedPlantList.push(updatedPlant);
    }

    setPlantList(updatedPlantList);
  };

  const waterEverythingButObj = () => {
    const today = new Date().toDateString();
    const updatedPlantList = {};

    for (const key in plantList) {
      const updatedPlant = { ...plantList[key] };
      updatedPlant.lastWateredDate = today;

      updatedPlantList[key] = updatedPlant;
    }

    setPlantList(updatedPlantList);
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addOne}>Add one</button>
      <button onClick={addTen}>Add ten</button>
      <Header />
      <main>
        <section className="WaterAll">
          <button onClick={waterEverything}>Water EVERYTHING</button>
        </section>
        <PlantList plantList={plantList} updateWateredDate={updateWateredDate} />
      </main>
    </div>
  );
}

export default App;
