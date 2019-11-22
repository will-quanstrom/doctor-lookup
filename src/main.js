import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorService } from './doctor-lookup';

$(document).ready(function() {
  $('.doctorName').submit(function(event){
    event.preventDefault();
    // let inputName = $('inputName').val();

    (async () => {
        let doctorService = new DoctorService();
        const response = await doctorService.getDoctor();
        getElements(response);
    })();

    function getElements(response) {
      console.log(response);
      for(let i = 0; i < response.data.length; i++) {
        $('#doctorList').append('<li>' + response.data[i].name + '</li>');

      }
    }

  });
});
