import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from "@angular/material";

import { RescheduleDialogComponent } from "../dialogs/reschedule-dialog/reschedule-dialog.component";

@Component({
  selector: "app-appointments",
  templateUrl: "./appointments.component.html",
  styleUrls: ["./appointments.component.css"]
})
export class AppointmentComponent implements OnInit {
  durationInSeconds = 5;
  loading = true;
  values: Appointment[];

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getValues();
  }

  confirmAppointment(index) {
    console.log(index);

    if (index !== -1) {
      let removed = this.values.splice(index, 1);
      let snackbarRef = this._snackBar.open("Appointment Confirmed", "Undo");
      snackbarRef.onAction().subscribe(() => {
        this.values.splice(index, 0, ...removed);
      });
    }
  }

  getValues() {
    this.http.get("http://localhost:5000/api/appointment").subscribe(
      response => {
        let result = JSON.stringify(response);
        let parsedResult = JSON.parse(result);
        this.values = JSON.parse(parsedResult.stringResult);
        this.loading = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  rescheduleAppointment(index, value) {
    const dialogRef = this.dialog.open(RescheduleDialogComponent, {
      width: "450px",
      data: { value, index }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.index !== -1) {
        let removed = this.values.splice(result.index, 1);

        let snackbarRef = this._snackBar.open(
          "Appointment Rescheduled",
          "Undo"
        );
        snackbarRef.onAction().subscribe(() => {
          this.values.splice(result.index, 0, ...removed);
        });
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
}

interface Appointment {
  appointmentType: string;
  appointmentId: string;
  createDateTime: string;
  requestedDateTimeOffset: string;
  animal: Animal;
  user: User;
}

interface Animal {
  animalId: string;
  firstName: string;
  breed: string;
  species: string;
}

interface User {
  firstName: string;
  lastName: string;
  userId: string;
}
