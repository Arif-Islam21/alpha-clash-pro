const fruits = ["Mango", "Apple", "Grape", "Jackfruit"];
//Write your code here
const fruit = fruits.join(",");
console.log(fruits);
console.log(fruit);

for (const fruit of fruits) {
  document.getElementById("fruitOption").innerText = fruit;
}
