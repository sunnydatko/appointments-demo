import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

// angular material
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatSnackBarModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { AppointmentsComponent } from "./appointments/appointments.component";
import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
import { RescheduleDialogComponent } from "./dialogs/reschedule-dialog/reschedule-dialog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    LoadingScreenComponent,

    // dialogs
    RescheduleDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    // angular material
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  entryComponents: [RescheduleDialogComponent],
  exports: [RescheduleDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
