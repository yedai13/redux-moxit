import { compose, pipe } from "lodash/fp";

let input = "   JavaScript    ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

// const transform = compose(wrapInDiv, toLowerCase, trim);

const transform = pipe(trim, toLowerCase, wrap("div"));

console.log(transform(input));

// const result = wrapInDiv(toLowerCase(trim(input)));

//updating objects
const person = {
  name: "Facundo",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};
// const updated = Object.assign({}, person, { name: "Pedro", age: 30 });
const updated = {
  ...person,
  address: {
    ...person.address,
    city: "New York",
  },
  name: "Bob",
};
console.log(updated);

//Updating arrays

const numbers = [1, 2, 3];

//adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

console.log("Added 3", added);

//removing
const remove = numbers.filter((n) => n !== 2);
console.log("Remove 2", remove);

//updating
const updateNumbers = numbers.map((n) => (n === 2 ? 20 : n));
console.log("update 2", updateNumbers);
