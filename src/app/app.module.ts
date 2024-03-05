import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './backOffice/dashboard/dashboard.component';
import { DoctorsTableComponent } from './backOffice/doctors-table/doctors-table.component';
import { PrescriptionComponent } from './backOffice/prescription/prescription.component';
import { ReclamationComponent } from './backOffice/reclamation/reclamation.component';
import {HttpClientModule} from "@angular/common/http";
import { DisplayReclamComponent } from './backOffice/display-reclam/display-reclam.component';
import {MatDialogModule} from "@angular/material/dialog";
import { RecDialogComponent } from './backOffice/rec-dialog/rec-dialog.component';
import { DiscussionComponent } from './backOffice/discussion/discussion.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatComponent } from './backOffice/stat/stat.component';
import { HomeComponent } from './backOffice/home/home.component';
import { DashboardFrontComponent } from './Front-end/dashboard-front/dashboard-front.component';
import { ContactusComponent } from './Front-end/contactus/contactus.component';
import { MyreclamationComponent } from './Front-end/myreclamation/myreclamation.component';
import { ChatComponent } from './Front-end/chat/chat.component';
import { AllreclamationsComponent } from './Front-end/allreclamations/allreclamations.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DoctorsTableComponent,
    PrescriptionComponent,
    ReclamationComponent,
    DisplayReclamComponent,
    RecDialogComponent,
    DiscussionComponent,
    StatComponent,
    HomeComponent,
    DashboardFrontComponent,
    ContactusComponent,
    MyreclamationComponent,
    ChatComponent,
    AllreclamationsComponent,




  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatDialogModule,
        NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
