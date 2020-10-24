let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  brisbane: {
    temp: 20.9,
    humidity: 95,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter city");
let found = false;

city = city.toLowerCase("");
city = city.trim("");

for (let place in weather) {
  if (city === place) {
    found = true;
    alert(
      `It is currently ${weather[place].temp} in ${place} with a humidity of ${weather[place].humidity}%`
    );
  }
}

if (found === false) {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
