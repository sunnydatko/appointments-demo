import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  loading = true;
  values: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValues();
  }

  confirmAppointment(index) {
    console.log(index);

    if (index !== -1) {
      this.values.splice(index, 1);
    }
  }

  rescheduleAppointment(event, item) {}

  getValues() {
    this.http.get('http://localhost:5000/api/appointment').subscribe(
      response => {
        this.values = JSON.stringify(response);
        this.values = JSON.parse(this.values);
        this.values = JSON.parse(this.values.stringResult);
        this.loading = false;
      },
      error => {
        console.log(error);
      }
    );
  }
}
