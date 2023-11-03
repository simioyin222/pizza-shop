//Business Logic
function Pizza(toppings, size) {
  this.toppings = toppings
  this.size = size
}

Pizza.prototype.calculateCost = function () {
  const basePrice = 10
  const toppingPrice = 2
  let sizeMultiplier = 1

  switch (this.size) {
    case "small":
      sizeMultiplier = 0.8
      break
    case 'medium':
      sizeMultiplier = 1;
      break;
      
    case 'large':
      sizeMultiplier = 1.2;
      break; 

    default:
      console.error("Invalid size")
      return 0
  }
  return (basePrice + (this.toppings.length * toppingPrice)) * sizeMultiplier;
};

//UI Logic
function getSelectedToppings() {
  const selectedToppings = [];
  const checkboxes = document.querySelectorAll('.topping-checkbox:checked');
  checkboxes.forEach(function(checkbox) {
    selectedToppings.push(checkbox.id);
  });
  return selectedToppings;
}

function getSelectedSize() {
  return document.getElementById('size').value;
}

function displayCost(cost) {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Total Cost: $${cost.toFixed(2)}`;
}

document.getElementById('calculate').addEventListener('click', function() {
  const selectedToppings = getSelectedToppings();
  const selectedSize = getSelectedSize();
  const pizza = new Pizza(selectedToppings, selectedSize);
  const cost = pizza.calculateCost();
  displayCost(cost);
});