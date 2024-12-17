
let names = prompt("Enter names separated by commas: (e.g., Denz, Vincent, carlo, Kennedy, manilyn)").split(", ");
let ages = prompt("Enter ages separated by commas: (e.g., 20, 19, 20, 19, 19)").split(", ").map(Number);


let originalArray = [names, ages];
let restructuredArray = [];


for (let i = 0; i < names.length; i++) {
  restructuredArray.push([names[i], ages[i]]);
}


console.log("Restructured Multi-Dimensional Array:");
restructuredArray.forEach(pair => console.log(pair));
