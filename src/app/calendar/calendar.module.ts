import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngutilsModule } from '../shared/angutils.module';
import { MainformsModule } from '../mainforms/mainforms.module';

import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarRoutingModule } from './calendar-routing.module';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { CalendarComponent } from './calendar.component';


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
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    AngutilsModule,
    MainformsModule,
    CalendarRoutingModule,
  ]
})
export class CalendarModule { }
