import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './backOffice/dashboard/dashboard.component';
import {  PrescriptionComponent } from './backOffice/prescription/prescription.component'
import {ReclamationComponent} from "./backOffice/reclamation/reclamation.component";
import {DisplayReclamComponent} from "./backOffice/display-reclam/display-reclam.component";
import {RecDialogComponent} from "./backOffice/rec-dialog/rec-dialog.component";
import {DiscussionComponent} from "./backOffice/discussion/discussion.component";
import {StatComponent} from "./backOffice/stat/stat.component";
import {HomeComponent} from "./backOffice/home/home.component";
import {DashboardFrontComponent} from "./Front-end/dashboard-front/dashboard-front.component";
import {ContactusComponent} from "./Front-end/contactus/contactus.component";
import {MyreclamationComponent} from "./Front-end/myreclamation/myreclamation.component";
import {ChatComponent} from "./Front-end/chat/chat.component";
import {AllreclamationsComponent} from "./Front-end/allreclamations/allreclamations.component";

const routes: Routes = [
  {path: '', component: DashboardComponent , children :[
      {path: 'NewPrescription', component: PrescriptionComponent} ,
      {path: 'reclamation', component: ReclamationComponent , children :[
            { path: 'RecDialog', component: RecDialogComponent}]},
            {path: 'displayreclam', component: DisplayReclamComponent},
            {path: 'discussion/:id', component: DiscussionComponent},
            {path: 'Stat', component: StatComponent},
            {path: 'home', component: HomeComponent}]},
      {path: 'dashFront', component: DashboardFrontComponent},
      {path:'contactus',component :ContactusComponent},
      {path:'myreclam',component :MyreclamationComponent},
      {path:'chat/:id',component :ChatComponent},
      {path:'allreclam',component :AllreclamationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
