function loadCart(){
  // Get the cart from local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Loop through the items and display them in the cart
  const cartTable = document.getElementById('cart-table');
  cartTable.innerHTML = ''; // clear the cart table before re-populating
  cart.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.land}</td>
      <td>$${item.pris}</td>
    `;
    cartTable.appendChild(row);
  });
}

function clearCart() {
  let cart = [];
  localStorage.removeItem('cart');
  console.log("Items cleared from cart.");

  const cartTable = document.getElementById('cart-table');
  while (cartTable.firstChild) {
    cartTable.removeChild(cartTable.firstChild);
  }
}