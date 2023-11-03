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

## Test 2
Test: It should correctly calculate the cost of a small pizza with no toppings
Code: "const myPizza = new Pizza([], "small"); myPizza.calculateCost();"
Expected Output: "8"

## Test 3
Test: It should correctly calculate the cost of a small pizza with toppings
Code: "const myPizza = new Pizza(["cheese", "pepperoni"], "small"); myPizza.calculateCost();"
Expected Output: "12"