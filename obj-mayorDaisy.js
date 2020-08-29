
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

function carPassing(cars, speed){ //creat a function carPassing that takes two arguments of cars and sep
  let newObj= {
    time: Date.now(),
    speed: speed
  };
 // console.log(newObj)
  cars.push(newObj)
 //console.log(cars)
return cars;

};
//console.log(carPassing(cars, speed));
// or do this
const carPassing = function (cars, speed) {
  cars.push({time: Date.now(), speed: speed});
  return cars;
};