import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './business.js';

$(document).ready(function() {
  $('#convert').click(function() {
    const base = $('#base').val();
    const target = $('#target').val();
    const amount = parseFloat($('#amount').val());
    let promise = ExchangeRate.getRate(base, target);
   
    promise.then(function(response) {
      const body = JSON.parse(response); 
      const convertParseInt=parseFloat(`${body.conversion_rate}`);
      const conversion=(`${convertParseInt}` * `${amount}`);
      $('.showConvertedCurrency').prepend(`Your converted currency is worth $ ${conversion} ${target}`);
      $('.showConvertedCurrency').val('');
    }, function(error) {
      $('#.showErrors').prepend(`Error: ${error}`);
      $('#.showErrors').val('');  
    });
  });
});
