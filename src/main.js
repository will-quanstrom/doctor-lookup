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
          if(response.data.length == 0) {
            alert('Sorry there were no matches for you search within 100 miles of Seattle.')
          }
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
        if(response.data.length == 0) {
          alert('Sorry there were no matches for you search within 100 miles of Seattle.')
        }
    })();

    function getElements(response) {

      let newPatients;
      let website;
      for(let i = 0; i < response.data.length; i++) {
        if(response.data[i].practices.accepts_new_patients){
          newPatients = 'do';
        } else{
          newPatients =  'do not';
        }

        if(response.data[i].practices[0].website == undefined){
          website = 'They do not have a website on record.';
        } else {
          website = `Their website can be found at ${response.data[i].practices[0].website}.`;
        }
      $('#specialistList').append(`<li>${response.data[i].profile.first_name} ${response.data[i].profile.last_name}. Their address is ${response.data[i].practices[0].visit_address.street} in ${response.data[i].practices[0].visit_address.city}. They ${newPatients} accept new patients and ${website}  </li>`)
      }
    }
  });
});
