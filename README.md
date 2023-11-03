## Test 
Describe: Pizza()

## Test 1
Test: It should return a Pizza object with two properties for toppings and size
Code:"const myPizza = new Pizza(["anchovies", "pineapple"], "medium");"
Expected Output: "Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }"

Describe: Pizza.prototype.calculateCost()

## Test 1
Test: It should return 0 if an invalid size is provided
Code: "const myPizza = new Pizza(["cheese"], "invalidSize");"
Expected Output: "0"