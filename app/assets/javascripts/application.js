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

// Show payment date
paymentDate = new Date();
var numberOfDaysToAdd = 7;
paymentDate.setDate(paymentDate.getDate() + numberOfDaysToAdd);
ny = paymentDate.getFullYear();
nm = paymentDate.getMonth();
nd = paymentDate.getDate();

if(document.querySelector(".payment-date")) {
  document.querySelector(".payment-date").innerHTML = nd + " " + monthNames[nm] + " " + ny;
}

// Show review deadline date
reviewDate = new Date();
var numberOfDaysToAdd = 28;
reviewDate.setDate(reviewDate.getDate() + numberOfDaysToAdd);
ny = reviewDate.getFullYear();
nm = reviewDate.getMonth();
nd = reviewDate.getDate();

if(document.querySelector(".review-date")) {
  document.querySelector(".review-date").innerHTML = nd + " " + monthNames[nm] + " " + ny;
}

// Show repayment amount
if(document.querySelector(".repayment-amount")) {
  var loan = document.querySelector(".loan-amount").innerHTML;
  var discount = (2 / 100 * loan).toFixed(2);

  document.querySelector(".repayment-amount").innerHTML=discount;
}

// Partial loan amount - single
if(document.querySelector(".loan-amount-partial-single")) {

  var loan = document.querySelector(".loan-amount").innerHTML;
  var discount = (348 - 100).toFixed(2);

  document.querySelector(".loan-amount-partial-single").innerHTML=discount;
}

// Partial loan amount - partner
// if(document.querySelector(".loan-amount-partial-partner")) {
//
//   var loan = document.querySelector(".loan-amount").innerHTML;
//   var discount = (464 - 100).toFixed(2);
//
//   document.querySelector(".loan-amount-partial-partner").innerHTML=discount;
// }

// Partial loan amount - child
if(document.querySelector(".loan-amount-partial-child")) {

  var loan = document.querySelector(".loan-amount").innerHTML;
  var discount = (812 - 528).toFixed(2);

  document.querySelector(".loan-amount-partial-child").innerHTML=discount;
}

// Partial loan repayment amount
if(document.querySelector(".loan-amount-partial")) {
  var loan = document.querySelector(".loan-amount-partial").innerHTML;
  var discount = (2 / 100 * loan).toFixed(2);

  document.querySelector(".repayment-amount").innerHTML=discount;
}

// Multiple loan lower offer
if(document.querySelector(".loan-amount-lower")) {

  var lowerloan = document.querySelector(".loan-amount").innerHTML;
  var discount = (95 / 100 * lowerloan).toFixed(2);

  document.querySelector(".loan-amount-lower").innerHTML=discount;
}

// Multiple loan higher repayment
if(document.querySelector(".loan-amount-lower")) {
  var loan = document.querySelector(".loan-amount").innerHTML;
  var discount = (2.8 / 100 * loan).toFixed(2);

  document.querySelector(".repayment-amount-higher").innerHTML=discount;
}


// Multiple loan lowest offer
if(document.querySelector(".repayment-amount-lowest")) {

  var lowestloan = document.querySelector(".loan-amount").innerHTML;
  var discount = (90 / 100 * lowestloan).toFixed(2);

  document.querySelector(".loan-amount-lowest").innerHTML=discount;
}

// Multiple loan lowest repayment
if(document.querySelector(".loan-amount-lowest")) {
  var lowestloan = document.querySelector(".loan-amount-lowest").innerHTML;
  var discount = (2 / 100 * lowestloan).toFixed(2);

  document.querySelector(".repayment-amount-lowest").innerHTML=discount;
}


// Accessible Modal
$(document).ready(function() {
  var findModal = function(elem) {

    var tabbable = elem.find('select, input, textarea, button, a').filter(':visible');

    var firstTabbable = tabbable.first();
    var lastTabbable = tabbable.last();
    // set focus on first tabbable element
    firstTabbable.focus();

    // send last tabbable back to first
    lastTabbable.on('keydown', function (e) {
       if ((e.which === 9 && !e.shiftKey)) {
           e.preventDefault();
           firstTabbable.focus();
       }
    });

    // send last shift tabbable back to last
    firstTabbable.on('keydown', function (e) {
        if ((e.which === 9 && e.shiftKey)) {
            e.preventDefault();
            lastTabbable.focus();
        }
    });

    // allow esc to close Modal
    elem.on('keyup', function(e){
      if (e.keyCode === 27 ) {
        elem.hide();
        $('.govuk-modal-overlay').hide();
        $('html').removeClass("noscroll");
      };
    });
  };

  // show modal and overlay and lock scroll
  // $('.show-modal').click(function(e){
  //   e.preventDefault();
  //
  //   $('.govuk-modal').show();
  //   $('.govuk-modal-overlay').show();
  //   $('html').addClass("noscroll");
  //   findModal($('.govuk-modal'));
  // });

  if(document.querySelector(".govuk-modal")){
    setTimeout(function(){
      $('.govuk-modal').show();
      $('.govuk-modal-overlay').show();
      $('html').addClass("noscroll");
      findModal($('.govuk-modal'));
    }, 2000);
  }



  //hide modal and overlay
  $('.close-modal').click(function(e){
    e.preventDefault();

    $('.govuk-modal').hide();
    $('.govuk-modal-overlay').hide();
    $('html').removeClass("noscroll");
  });


});
