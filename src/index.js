import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import exchangeRate from './business';

function showErrors(error) {
  $('#showErrors').show;
  $('#showErrors').text('Error: ${error}');
}

}
