const addToCartButton = document.getElementById("addToCart");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const valueSpan = document.getElementById("value");
const sizeInputs = document.querySelectorAll('input[name="size"]');
const cartDetailsPrompt = document.getElementById("cartDetailsPrompt");

let value = 0;
let selectedSize = "";

// Event listener for the Add to Cart button
addToCartButton.addEventListener("click", function() {
  // Check if a size is selected
  if (selectedSize !== "") {
    const details = `You have selected the ${selectedSize} size and added ${value} item(s) to the cart.`;
    cartDetailsPrompt.textContent = details;
    cartDetailsPrompt.style.color = "black"; // Set prompt color to yellow
    setTimeout(() => {
      cartDetailsPrompt.textContent = ""; // Clear prompt after a delay
    }, 5000); // Clear after 5 seconds (adjust as needed)
  } else {
    alert("Please select a size before adding to cart.");
  }
});

// Event listener for the minus button
minusButton.addEventListener("click", function() {
  if (value > 0) {
    value--;
    valueSpan.textContent = value;
  }
});

// Event listener for the plus button
plusButton.addEventListener("click", function() {
  value++;
  valueSpan.textContent = value;
});

// Event listener for size inputs
sizeInputs.forEach(input => {
  input.addEventListener("change", function() {
    selectedSize = this.value;
    // You can add further actions here if needed, like updating the UI to reflect the selected size
    // For now, let's just console log it
    console.log("Selected size:", selectedSize);
  });
});
