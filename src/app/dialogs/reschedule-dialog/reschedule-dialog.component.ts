import { Component, Inject } from "@angular/core";
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
  dialogIndex: number;

  constructor(
    public dialogRef: MatDialogRef<RescheduleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialogData = data.value;
    this.dialogIndex = data.index;
  }

  onConfirm(): void {
    this.dialogRef.close({ event: "close", index: this.dialogIndex });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
