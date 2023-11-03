## Test 
Describe: Pizza()

## Test 1
Test: It should return a Pizza object with two properties for toppings and size
Code:"const myPizza = new Pizza(["anchovies", "pineapple"], "medium");"
Expected Output: "Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }"

Describe: Pizza.prototype.calculateCost()

## Test 1
Test: It should correctly calculate the cost of a small pizza with no toppings
Code: "const myPizza = new Pizza([], "small"); myPizza.calculateCost();"
Expected Output: "8"