import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// angular material
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";

import { AppComponent } from "./app.component";
import { AppointmentComponent } from "./appointment/appointment.component";
import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
import { RescheduleDialogComponent } from "./dialogs/reschedule-dialog/reschedule-dialog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    LoadingScreenComponent,

    // dialogs
    RescheduleDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // angular material
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  entryComponents: [
    RescheduleDialogComponent
  ],
  exports: [
    RescheduleDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
