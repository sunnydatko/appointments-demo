import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-reschedule-dialog",
  templateUrl: "reschedule-dialog.component.html"
})
export class RescheduleDialogComponent {
  dialogData: any;

  constructor(
    public dialogRef: MatDialogRef<RescheduleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialogData = data.value;
    console.log(this.dialogData);
  }

  onConfirm(): void {
    this.dialogRef.close();
  }
}
