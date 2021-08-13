import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './business.js';

$(document).ready(function() {
  $('#convert').click(function() {
    let base = parseFloat($('#userBase').val());
    let currency = $('#currency').val();
    let promise = ExchangeRate.getCurrency(currency);

    promise.then(function(response) {
      const body = JSON.parse(response); {
          $('#.showConvertedCurrency').text('Your USD are equal to (${body.currency} * base)');
        }, function(error) {
          $('#.showErrors').text('Error: ${error}');
        }  
    });
  });
});
