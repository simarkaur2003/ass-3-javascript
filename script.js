// Function to calculate the total price
function calculatePrice() {
  const smoothieOptions = {
    strawberry: { name: "Strawberry Smoothie", price: 5 },
    banana: { name: "Banana Smoothie", price: 4.5 },
    mango: { name: "Mango Smoothie", price: 6 },
    // Add more smoothie options with their names and prices as needed
  };

  const size = document.querySelector('input[name="size"]:checked').value;
  const smoothie = document.getElementById('smoothie').value;
  const quantity = parseInt(document.getElementById('quantity').value);
  const proteinTopUp = document.getElementById('protein').checked;
  const greensTopUp = document.getElementById('greens').checked;

  const smoothiePrice = smoothieOptions[smoothie].price;
  let totalPrice = smoothiePrice;

  if (proteinTopUp) {
    totalPrice += 2;
  }
  if (greensTopUp) {
    totalPrice += 1.5;
  }

  totalPrice *= quantity;

  const greeting = `Thank you for ordering ${quantity} ${size} ${smoothieOptions[smoothie].name} smoothie(s)!`;
  const description = `Your total amount is $${totalPrice.toFixed(2)}. Enjoy your smoothie!`;

  document.getElementById('greeting').textContent = greeting;
  document.getElementById('description').textContent = description;

  // Show the invoice section
  document.getElementById('invoice').classList.remove('hidden');
}

// Event listener for the order button
document.getElementById('orderButton').addEventListener('click', calculatePrice);
