import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { AngmatModule } from '../shared/angmat.module';
import { AngutilsModule } from '../shared/angutils.module';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { ReportModule } from '../report/report.module';

import { AuthComponent } from '../auth/auth.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MessagesComponent } from '../messages/messages.component';
import { TraceboardComponent } from '../traceboard/traceboard.component';
import { EventComponent, EventStatusDialogComponent } from './event/event.component';
import { KollegeComponent } from './kollege/kollege.component';
import { PersonaComponent } from './persona/persona.component';




FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  resourceTimelinePlugin,
  //resourceTimeGridPlugin,
  //resourceDayGridPlugin,
]);

@NgModule({
  declarations: [
    MessagesComponent,
    AuthComponent,
    DashboardComponent,
    TraceboardComponent,
    EventComponent,
    EventStatusDialogComponent,
    PersonaComponent,
    KollegeComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngmatModule,
    AngutilsModule,
    ReportModule
  ],
  exports: [
  ]
})
export class MainModule { }
