/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Set month names
var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

// Show current date
date = new Date();
y = date.getFullYear();
m = date.getMonth();
d = date.getDate();

if(document.querySelector(".date")) {
  document.querySelector(".date").innerHTML = d + " " + monthNames[m] + " " + y;
}

// Show future date
newDate = new Date();
var numberOfDaysToAdd = 14;
newDate.setDate(newDate.getDate() + numberOfDaysToAdd);
ny = newDate.getFullYear();
nm = newDate.getMonth();
nd = newDate.getDate();

if(document.querySelector(".new-date")) {
  document.querySelector(".new-date").innerHTML = nd + " " + monthNames[nm] + " " + ny;
}




// Show repayment amount
if(document.querySelector(".repayment-amount")) {
  var loan = document.querySelector(".loan-amount").innerHTML;
  var discount = (12 / 100 * loan).toFixed(2);

  document.querySelector(".repayment-amount").innerHTML=discount;
}
