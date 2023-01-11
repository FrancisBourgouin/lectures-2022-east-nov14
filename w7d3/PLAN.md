# Watering Plants ( Waterworld )

Plant list with name, watering interval, last watered date, button to water each plant to reset the date.

# User stories

- User should be able to water the plants (update the date)
- User should see a list of plants
- User should quickly see which plant needs watering
- (Stretch) User should be able to water all the plants

# Data Structures

## Plant

```jsx
const plant = {
  id: "",
  name: "",
  type: "",
  wateringInterval: 0,
  lastWateredDate: "Valid String Date",
};
```

## Plants

```jsx
const plantsArr = [plant, plant, plant];

const plantsObj = {
  id: plant,
  id: plant,
  id: plant,
};

ARR IS THE WINNER ! :D
```

# Mock Data

```jsx
const plant1 = {
  id: 1,
  name: "Ghost Pipe (Monotropa Uniflora)",
  type: "Best plant",
  lastWateredDate: "2022-07-04",
  wateringInterval: 30,
};
const plant2 = {
  id: 2,
  name: "Spear Grass",
  type: "Pointy plant",
  lastWateredDate: "2022-06-04",
  wateringInterval: 14,
};

const plant3 = {
  id: 3,
  name: "Hyacinths",
  type: "Pretty flower",
  lastWateredDate: "2022-07-12",
  wateringInterval: 3,
};

const plant4 = {
  id: 4,
  name: "Space Fern",
  type: "Floaty",
  lastWateredDate: "2020-05-12",
  wateringInterval: 9001,
};

// plants

const plantListArr = [plant1, plant2, plant3, plant4];

const plantListObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };
```

# HTML Structure

- body
  - header
    - h1 title
  - main
    - section
      - button WATER ALL PLANTS (stretch)
    - section
      - h1 list of plants
      - ul
        - li
          - h1 name of plant - type
          - p last watered date
          - border green/red depending on well watered or not
          - button water plant

# Component Structure

- App
  - Header
  - PlantList
    - PlantListItem

# Data map

- App
  - Header - NO DATA
  - PlantList INCHARGE: [plantObj, plantObj, plantObj]
    - PlantListItem SHOW: {id,name,type,wateringInterval,lastWateredDate}
