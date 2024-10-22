//arrays

//task 1

let newYearsResolutions = ["new", "Year", "Resolution"];

//task2

let newYearsResolution = newYearsResolutions[0];

//task3

console.log(newYearsResolutions[2]);

//more arrays

//task1

const months = [
  "Jon",
  "Feb",
  "Mar",
  "Apr",
  "Jun",
  "May",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
];
months[0] = "jan";

console.log(months);

//task2
months[4] = "may";
months[5] = "jun";

console.log(months);

//task3

console.log(months.length);

//task4

months.push("dec");

console.log(months);

//task5

months.pop();

console.log(months);

//task6

months.splice(6, 1);

console.log(months);

//iteration

//task1

const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"];

const printDogName = (dogName) => {
  console.log("The " + dogName + " barks.");
};

dogs.forEach(printDogName);

//task2

const printDogNameUpperCase = (dogName) => {
  console.log("The " + dogName.toUpperCase() + " barks.");
};

dogs.forEach(printDogNameUpperCase);

//task3

const printdogwalk = (dogwalk) => {
  console.log("The " + dogwalk + " needs to go for a walk");
};
dogs.forEach(printdogwalk);

//maps

//task1 && //task2
// without the "return" in function i get back undefined
const doggieWalks = dogs.map((dogName) => {
  return "The " + dogName + " needs to go for a walk!";
});

console.log(doggieWalks); //it becomes undefined because of forEach method but it worked with map()

//task3

const shoutyDogName = dogs.map((dogName) => {
  return dogName.toUpperCase();
});
console.log(shoutyDogName);

//objects

//task1

const person = {
  studentAt: "Chas",
};

person.name = "Ali";
person.age = 25;

console.log(person);

//task2

person.favoritefood = ["Ramen", "Sushi", "Hamburger", "wagybeef"];

//task3
console.log(person.name);
console.log(person.age);

//task4
person.eyecolor = "black";

//task5

const dog = {
  labrador: {
    adult: {
      name: "Marley",
    },
    puppy: {
      name: "Buster",
    },
  },
};

console.log(dog.labrador.puppy);

//array-objects

//task1

const products = [
  { name: "Camera", brand: "Canon", model: "EOS 70D" },
  { name: "Camera", brand: "Nikon", model: "D3400" },
  { name: "Camera", brand: "GoPro", model: "Hero 4" },
  { name: "Drone", brand: "DJI", model: "Phantom" },
  { name: "Drone", brand: "GoPro", model: "Karma" },
];

products.forEach((product) => {
  console.log(product.name);
  console.log(product.brand);
});

//task2

const models = products.map((product) => {
  return product.model;
});

console.log(models);
