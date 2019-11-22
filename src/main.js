import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorService, SpecialistService } from './doctor-lookup';

$(document).ready(function() {
  $('.doctorName').submit(function(event){
    event.preventDefault();
    let inputName = $('#inputName').val();

    (async () => {
        let doctorService = new DoctorService();
        const response = await doctorService.getDoctor(inputName);
        getElements(response);
    })();

    function getElements(response) {
      console.log(response);
      for(let i = 0; i < response.data.length; i++) {
        $('#doctorList').append('<li>' + response.data[i].name + ', ' + response.data[i].visit_address.street + ', ' + response.data[i].location_slug + ', ' + response.data[i].phones[0].number + ', ' + response.data[i].accepts_new_patients + ', ' + response.data[i].doctors_pagination_url + '</li>');
      }
    }
  });
  $('.doctorSpecialty').submit(function(event){
    event.preventDefault();
    let query = $('#inputCondition').val();

    (async () => {
      let specialistService = new SpecialistService;
      const response = await specialistService.getDoctor(query);
      getElements(response);
    })();

    function getElements(response) {
      console.log(response);
    }
  });
});
