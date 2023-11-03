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

    default:
      console.error("Invalid size")
      return 0
  }
}
