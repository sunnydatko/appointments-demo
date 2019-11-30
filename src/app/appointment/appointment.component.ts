import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { RescheduleDialogComponent } from "../dialogs/reschedule-dialog/reschedule-dialog.component";

@Component({
  selector: "app-appointment",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.css"]
})
export class AppointmentComponent implements OnInit {
  loading = true;
  values: any;

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    this.getValues();
  }

  confirmAppointment(index) {
    console.log(index);

    if (index !== -1) {
      this.values.splice(index, 1);
    }
  }

  getValues() {
    this.http.get("http://localhost:5000/api/appointment").subscribe(
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

  rescheduleAppointment(index, value) {
    const dialogRef = this.dialog.open(RescheduleDialogComponent, {
      width: "500px",
      data: { value }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
