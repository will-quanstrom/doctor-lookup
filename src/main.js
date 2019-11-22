import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorService } from './doctor-lookup';


$(document).ready(function() {
  $('.doctorName').submit(function(event){
    event.preventDefault;
    let inputName = $('inputName').val();
    getDoctor(inputName);

    (async () => {
        let doctorService = new DoctorService();
        const response = await doctorservice.getDoctor();
        getElements(response);
    })();

  });
});
