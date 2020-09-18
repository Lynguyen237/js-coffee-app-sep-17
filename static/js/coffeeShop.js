"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};


const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//

// WAY 1 - not using jQuery
// const button = document.querySelector('.add-to-order');

//   button.addEventListener('click', () => {
//     alert('Stop clicking me!');
//     console.log();
// });
// End of Way 1 - not using jQuery


// WAY 2 = Using jQuery the long way
// const button = $('.add-to-order');

// button.on('click', () => {
//   alert ('Handled with jQuery');
// });
// End of WAY 2 = Using jQuery the long way

// Way 3
$('.add-to-order').on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});
// End Way 3


// Way 1 to update # of coffee sold = Using jQuery the short way
// id use '#id and class use '.class'
// $('#place-order').on('click', () => {
//   incrementCoffeeSold($('#cart-items').children().length);
//   resetCart();
// });
// End Way 1 to update # of coffee sold = Using jQuery the short way


// WAY 2 to update # of coffee sold = Using jQuery the long way
// const button = $('#place-order');

// button.on('click', () => {
//   incrementCoffeeSold($('#cart-items').children().length);
//   resetCart();
// })
// End WAY 2 to update # of coffee sold


// Way 3 to update # of coffee sold = Not using jQuery
const button = document.querySelector('#place-order');
    button.addEventListener('click', () => {
      incrementCoffeeSold($('#cart-items').children().length);
      resetCart();
});




