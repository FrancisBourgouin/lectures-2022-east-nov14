// Immutability

const someArray = [1, 2, 3, 4];
const newArray = someArray; // BAD!
const goodNewArray = [...someArray];

someArray.push(5);

// console.log(someArray, newArray, goodNewArray);

someArray.pop();
someArray.pop();
someArray.pop();
console.log(someArray);

const purePop = (arr) => {
  const newArr = [...arr];

  newArr.pop();

  return newArr;
};

purePop(someArray);
purePop(someArray);
purePop(someArray);
purePop(someArray);
purePop(someArray);

const someObj = {
  name: {
    first: "Bob",
    last: "Morane",
  },
};
const newObj = { ...someObj };

newObj.tall = true;
const newName = { ...newObj.name };
newName.first = "Mister Potato";
newObj.name = newName;

const newnewObj = { ...someObj, tall: true, name: { ...name, first: "Mister Chicken" } };

console.log(someObj, newObj);
