let alex = 5;

let result = alex;

alex = 10;

const props = {
  name: "Swen",
  city: "Utrecht",
  school: "Codaisseur",
  pets: ["Piet", "Jos"]
};

// const name = props.name;
// const city = props.city;

const { name, city, pets } = props;
