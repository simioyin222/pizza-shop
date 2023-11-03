# PizzaShop

## By Similoluwa Oyinkolade

## Brief Description

PizzaShop is a simple web application that allows users to customize and order pizzas. Users can choose from a selection of toppings and pizza sizes to create their perfect pizza and view the total cost.

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup/Installation Requirements

1. Clone the repository to your local machine using the following command: https://github.com/simioyin222/pizza-shop
2. Navigate to the project directory using: cd pizzashop
3. Open the `index.html` file in your web browser to use the application






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

## Test 4
Test: It should correctly calculate the cost of a medium pizza with multiple toppings"
Code: "const myPizza = new Pizza(["cheese", "pepperoni", "mushrooms"], "medium"); myPizza.calculateCost();"
Expected Output: "14.4"

## Test 5
Test: It should correctly calculate the cost of a medium pizza with no toppings
Code: "const myPizza = new Pizza([], "medium"); myPizza.calculateCost();"
Expected Output: "12"

## Test 6
Test: It should correctly calculate the cost of a large pizza with multiple toppings
Code: "const myPizza = new Pizza(["cheese", "pepperoni", "mushrooms"], "large"); myPizza.calculateCost();"
Expected Output:"16.8"

## Test 7
Test: It should correctly calculate the cost of a large pizza with no toppings
Code: "const myPizza = new Pizza([], "large"); myPizza.calculateCost();"
Expected Output: "14.4"