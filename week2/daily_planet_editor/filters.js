//Step 1: Create 10 rows of test data from the sample data.
let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    },
    {
        "color": "blue",
        "type": "sedan",
        "registration": new Date('2020-05-11'),
        "capacity": 5
    },
    {
        "color": "black",
        "type": "coupe",
        "registration": new Date('2018-06-12'),
        "capacity": 5
    },      {
        "color": "red",
        "type": "suv",
        "registration": new Date('2021-10-09'),
        "capacity": 8
    },
    {
        "color": "red",
        "type": "convertible",
        "registration": new Date('1963-02-28'),
        "capacity": 5
    },
    {
        "color": "silver",
        "type": "truck",
        "registration": new Date('2018-09-21'),
        "capacity": 5
    },
    {
        "color": "white",
        "type": "sedan",
        "registration": new Date('2010-12-24'),
        "capacity": 5
    },
    {
        "color": "black",
        "type": "minivan",
        "registration": new Date('2021-11-22'),
        "capacity": 7
    },
    {
        "color": "green",
        "type": "sedan",
        "registration": new Date('2019-03-30'),
        "capacity": 5
    }
];

//Step 2: Create a call back function to filter all cars with color="red".
for(i = 0; i < cars.length; i++){
    if(cars[i].color == "red"){
        console.log(cars[i].type);
    }
}
console.log("");

//Step 3: Use this call back function to filter all the collections of cars.     Show all of the cars?? 
for(i = 0; i < cars.length; i++){
    if(cars[i].capacity >= 0){
        console.log(cars[i].type);
    }
}
console.log("");

//Step 4: Convert the call back function to use the Ärrow Functions.
const convertFunc = cars.filter(car => car.color === "red");
console.log(convertFunc);
console.log("");

//Step 5: Use an inline arrow function to filter the cars by colors ("red" and "green")
const redGreen = cars.filter(car => car.color === "red" || car.color === "green");
console.log(redGreen);