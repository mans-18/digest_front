import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { AssistantGuard } from './guards/assistant.guard';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventFormDetailComponent } from './mainforms/event-form-detail/event-form-detail.component';
import { EventFormModalComponent } from './mainforms/event-form-modal/event-form-modal.component';
import { EventComponent } from './main/event/event.component';
import { KollegeFormModalComponent } from './mainforms/kollege-form-modal/kollege-form-modal.component';
import { KollegeComponent } from './main/kollege/kollege.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonaFormDetailComponent } from './mainforms/persona-form-detail/persona-form-detail.component';
import { PersonaFormModalComponent } from './mainforms/persona-form-modal/persona-form-modal.component';
import { PersonaComponent } from './main/persona/persona.component';
import { TraceboardComponent } from './traceboard/traceboard.component';
import { ReportComponent } from './report/report/report.component';
import { ReportFormComponent } from './report/report-form/report-form.component';
import { CaptureComponent } from './capture/capture/capture.component';
import { AssistantComponent } from './assistant/assistant/assistant.component';
import { ReceptionGuard } from './guards/reception.guard';
import { AdminGuard } from './guards/admin.guard';
import { HomeComponent } from './home/home/home.component';
import { ModalExComponent } from './home/hometree/modalEx.component';
import { ThemesComponent } from './home/themes/themes.component';
import { TeamComponent } from './home/team/team.component';
import { ProductsComponent } from './home/products/products.component';
import { InsuranceComponent } from './home/insurance/insurance.component';
import { AppointmentComponent } from './home/appointment/appointment.component';
import { ReportlistComponent } from './report/reportlist/reportlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'modalEx', component: ModalExComponent },
  { path: 'themes', component: ThemesComponent },
  { path: 'appointment', component: AppointmentComponent},
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'traceboard', component: TraceboardComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'events', component: EventComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'event-form-detail/:ix', component: EventFormDetailComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'event-form-modal', component: EventFormModalComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'persona', component: PersonaComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'persona-form-detail/:id', component: PersonaFormDetailComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'persona-form-modal', component: PersonaFormModalComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'kollege', component: KollegeComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'kollege-form-modal', component: KollegeFormModalComponent, canActivate: [AuthGuard, ReceptionGuard] },
  //{ path: 'deleted-dialog', component: DeletedDialog },
  { path: 'reportlist', component: ReportlistComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'report', component: ReportComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'report/:id', component: ReportComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'capture', component: CaptureComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'report-form/:id', component: ReportFormComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'assistant', component: AssistantComponent, canActivate: [AuthGuard, AssistantGuard] },
  { path: 'assistant/:ix', component: AssistantComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
