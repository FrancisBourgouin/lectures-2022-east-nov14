import { calculateDayDifference } from "../helpers/plantHelpers";

// {id,name,type,wateringInterval,lastWateredDate}
export default function PlantListItem(props) {
  const { id, name, type, wateringInterval, lastWateredDate, waterPlant } = props;

  const isWellWatered = wateringInterval > calculateDayDifference(lastWateredDate);

  return (
    <li
      className="PlantListItem"
      style={{ border: "5px solid black", borderColor: isWellWatered ? "green" : "red" }}
    >
      <h1>
        {name} - {type}
      </h1>
      <p>{lastWateredDate}</p>
      <button onClick={waterPlant}>Water the plant</button>
    </li>
  );
}
