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
