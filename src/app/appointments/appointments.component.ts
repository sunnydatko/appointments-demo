import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatSnackBar } from "@angular/material";

import { RescheduleDialogComponent } from "../dialogs/reschedule-dialog/reschedule-dialog.component";
import { Appointment } from "../interfaces/appointment";

@Component({
  selector: "app-appointments",
  templateUrl: "./appointments.component.html",
  styleUrls: ["./appointments.component.css"]
})
export class AppointmentsComponent implements OnInit {
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
      let snackbarRef = this._snackBar.open("Appointment Confirmed", "Undo", {
        duration: 1500
      });
      snackbarRef.onAction().subscribe(() => {
        this.values.splice(index, 0, ...removed);
      });
    }
  }

  getValues() {
    this.http.get("http://localhost:5000/api/appointment").subscribe(
      response => {
        let result = JSON.stringify(response);
        this.values = JSON.parse(result);
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
          "Undo",
          {
            duration: 1500
          }
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
