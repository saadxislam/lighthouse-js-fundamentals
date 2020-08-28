const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'restaurant']
];

//Good stations will have at least 20 capacity
//Stations can be schools or community centers

function chooseStations (stations) {
  const goodStations = [];
for (const station of stations) { //this says i'm going thru each station out of all of the stations
const capacity = station [1];
//console.log (station); // prints out the name of all the stations (and all their info) since the for..of loops station goes thru each one of them
//console.log (capacity); // prints out the capacity of all the stations

if (capacity >=20) {
   //I get BLE, Moose, and Pizza, but Pizza is a restaurant so need to filter that

  const type = station[2]; 
  if (type === 'school' || type === 'community centre'){
    goodStations.push(station[0]);
  }
}
}
return goodStations;
}
console.log (chooseStations(stations));


 