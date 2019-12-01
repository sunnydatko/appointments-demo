import { Component, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
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
  scheduleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RescheduleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialogData = data.value;
    this.dialogIndex = data.index;
    this.createForm();
  }

  createForm() {
    this.scheduleForm = this.fb.group({
       date: ['', Validators.required ],
       time: ['', Validators.required ]
    });
  }

  onConfirm(): void {
    this.dialogRef.close({ event: "close", index: this.dialogIndex });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
