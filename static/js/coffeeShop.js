"use strict";

// Adds item to cart
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

// Resets the cart to 0
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

// Increases the cart total by the price passed in to the function
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

// Specifically increases the number of coffee sold
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

// This increments the status bar by the value passed into the function and
// displays an alert to the user which is passed into the function
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//
$('.add-to-order').on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.5);
})

$('#place-order').on('click', () => {
  incrementCoffeeSold($('#cart-items').children().length);
  resetCart();
})