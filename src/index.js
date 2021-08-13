import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './business';

function getElements(response) {
  if (response.result === "success") {
    $('.showConvertedCurrency').text('Your USD are equal to ${response.conversion_result} ${response.target_code}')
  } else if (response["error-type"] === "unsupported-code") {
    $('.showUnsupportedErrors').text("You did something weird and caused a super weird error. Please try another currency. That one was way too weird for us.");
  } else {
    $('.showErrors').text('Error: ${response.message}. Please try again.');
  }  
}  

$(document).ready(function() {
  $('#convert').click(function() {
    let amount = parseInt($('input#amount').val());
    let currency = $('#currency').val();
    ExchangeRate.getRate(currency, amount).then(function(response) {
      getElements(response);
    });
  });
});
