# Drinking beverage function

Considering a beverage mug object, I want to be able to drink from the mug and lower the amount of beverage.

```jsx
const someMug = {
  capacityInMl: 500,
  currentVolume: 300,
  typeOfBeverage: "Coffee",
};
const sipSize = 100;
const modifiedMug = drinkBeverage(someMug, sipSize);
const modifiedMug2 = drinkBeverage(modifiedMug, sipSize);

console.log(modifiedMug);
// {
//   capacityInMl: 500,
//   currentVolume: 200,
//   typeOfBeverage: "Coffee",
// };
```

# Data Types

## Mug

```jsx
const someMug = {
  capacityInMl: 500,
  currentVolume: 300,
  typeOfBeverage: "Coffee",
};
```

# In / Out

## In

- mug (object)
- sip size (number)

## Out

- modified mug (object) or return the modified current volume (TNMT - Mutations)

# How

- modify the currentVolume key by removing the sipSize ( -= )
- return the object

# Test cases (gain trust of the fct)

What could go right

- Proper input goes in, proper output goes out (Sanity check)
- Mug object goes in, new object comes out (mutation / immutability)

What could go wrong

- Sip too big (negative volume at the end)
- Invalid mug (negative volume from the start)
- Invalid mug / no mug
- Mug is empty
- Negative sip (no backwash)
- Sip is invalid (NaN or undefined)
