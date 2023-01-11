import PlantListItem from "./PlantListItem";

// [plantObj, plantObj, plantObj]
export default function PlantList(props) {
  const { plantList, updateWateredDate } = props;

  console.log("RENDERED");

  const plant = plantList[0];

  // const parsedPlantListItem = plantList.map((plant) => (
  //   <PlantListItem
  //     key={plant.id}
  //     id={plant.id}
  //     name={plant.name}
  //     type={plant.type}
  //     wateringInterval={plant.wateringInterval}
  //     lastWateredDate={plant.lastWateredDate}
  //   />
  // ));
  const parsedPlantListItem = plantList.map((plant) => (
    <PlantListItem
      key={plant.id}
      {...plant}
      waterPlant={() => updateWateredDate(plant.id)}
    />
  ));

  return (
    <section className="PlantList">
      <h1>All the plants!</h1>
      <ul>{parsedPlantListItem}</ul>
    </section>
  );
}
