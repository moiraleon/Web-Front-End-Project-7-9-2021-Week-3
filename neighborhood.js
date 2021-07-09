const restaurant = ["The Brickyard Downtown", "San Tan Brewing", "The Hidden House", "The Perch Brewery", "Craft 64 Chandler", "Downtown Chandler Cafe and Bakery", "DC Steak House"];

function randomRestaurant(restaurant){
    return restaurant[Math.floor(Math.random()*restaurant.length)]
    
}
// console.log(randomRestaurant)
// const random = Math.floor(Math.random()*restaurants.length);
// alert(random, restaurants[random]);

// restaurants.prototype.sample = random(){
//     return this[Math.floor(Math.random()*this.length)];
//   }
//for reference
//let ritualBtn = document.querySelector('#ritual');
// ritualBtn.addEventListener("click", () => {alert("Meditation is my favorite ritual")});
let suggestionBtn = document.querySelector('#suggestion');
suggestionBtn.addEventListener("click", () => {alert(randomRestaurant)});