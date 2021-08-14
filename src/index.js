import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './business.js';

$(document).ready(function() {
  $('#convert').click(function() {
    let base_code = $('#base_code').val();
    let target_code = $('#target_code').val();
    let promise = ExchangeRate.getRate(target_code, base_code);
    //const parseIntConversion=parseFloat(${body.conversion_rate});
    //const convertedCurrency=(${parseIntConversion}*${base_code});

    promise.then(function(response) {
      const body = JSON.parse(response); 
      $('.showConvertedCurrency').text(`Your USD are equal to ${body.conversion_rate}`);
    }, function(error) {
      $('#.showErrors').text(`Error: ${error}`);  
    });
  });
});
