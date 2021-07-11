import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { FullCalendarComponent, CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput } from '@fullcalendar/angular';

import { ApiService } from '../../services/api.service';
import { CookieService } from 'ngx-cookie-service';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { EventFormModalComponent } from '../mainforms/event-form-modal/event-form-modal.component';

import { CalData } from '../models/caldata';

@Component({
  selector: 'calendar-root',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent; // the #calendar in the template

  calEvents: EventInput[] = [];
  calSt!: string;
  calTime!: string;
  calTi!: string;
  calTiTest = 'test calTI verbose';
  calResource!: string;
  @Output() calData = new EventEmitter<CalData>();
  argTi = null;
  today = new Date();
  nextEvents = [];

  // Create a temp event to pass to event-form component. There, St and Ti shall be extracted.
  // tempEvent: Event;
  // Refresh without reload - dont work
  // subscriptionRefresh: any;

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private dialog: MatDialog,
    private router: Router) {
    }

  ngOnInit(): void {
    document.getElementById("efm").hidden = true;
    const mrToken = this.cookieService.get('mr-token');
    console.log('mrToken on cal:', mrToken);
    if (!mrToken) {
      this.router.navigate(['/auth']);
    } else {

     // Gets all data (type Event), extracts title and start, pushes them into callEvents(type EventInput).
    // This way there is no type conflict. Type error if you try to attribute data to calEvents directly.
    this.apiService.getEvents().subscribe(
      (data) => {
        for (let i=0;i<data.length;i++) {
          let evs = { "id": String(data[i].id), "title": data[i].title, "start": data[i].start,
                    "color": data[i].color, "resourceId": data[i].resourceId, "persona": data[i].persona, "kollege": data[i].kollege }
          this.calEvents.push(evs);
          
          // It does it but inside a FOR LOOP it is inadequate.
          this.calendarOptions.events = this.getEvents(this.calEvents);
          this.calendarOptions.eventColor = evs.color;
          this.calendarOptions.eventResizableFromStart = true;
          this.calendarOptions.slotDuration = 900000;
        }
      },
      error => console.log(error)
      
      );

      this.apiService.getEvents().subscribe(
        (data) => {
          let tempEv = [];
          for (let i=0;i<data.length;i++) {
            let evs = { "id": String(data[i].id), "title": data[i].title, "start": data[i].start,
                      "color": data[i].color, "persona": data[i].persona, "kollege": data[i].kollege }
            tempEv.push(evs);
          }
          let tempToday = [];
          for (let el of tempEv) {if (Date.parse(el.start)>Date.now() && Date.parse(el.start)<Date.now()+86400000) {tempToday.push(el);console.log('el: ', Date.parse(el.start))}}
              this.nextEvents = tempToday;
              // console.log('BBBB: ', 'test', this.todayEvents,tempToday, Date.now());
        },
        error => console.log(error)
      );
    }
  }

  ngAfterViewInit(): void {
    
    // this.calSt = this.eventFormComponent.formSt
    // console.log('@Input vars on cal after: ', this.calSt, this.calTi)
    // this.todayEvents = this.getTodayEvents();
    // console.log('todayEv: ', this.calEvents)

    // Set the eventColor. Fix a bug of eventColor white at times.
    //const calAPI = this.calendarComponent.getApi();
    //calAPI.setOption('eventColor', 'steelblue');
  }
  // sendFormCtrl(arg) { this.eventForm.sendFormCtrl(arg)};

  removeCalendar() {
    const calAPI = this.calendarComponent.getApi();
    calAPI.el.remove();
  }
  showCal = false;
  toggleCalendar() {
    let showCal = !this.showCal;
    const calAPI = this.calendarComponent.getApi();
    calAPI.el.hidden = showCal;
    this.showCal = showCal;
  }

  // Events need to be got by a function on the htlm component
  getEvents(arg: any) {
    let evs = [];
    for (let i=0; i<=arg.length-1; i++) {
      if (arg[i].color!=='#FFFFFF') {
         let el = {"id": arg[i].id, "title": arg[i].title, "start": arg[i].start, "color": arg[i].color,
                "resourceId": arg[i].resourceId, "persona": arg[i].persona, "kollege": arg[i].kollege}
      evs.push(el)
      }
    }
    return evs;
  }

  calendarVisible = true;

  calendarOptions: CalendarOptions = {
    locale: 'pt-br',
    //height: '400',
    //contentHeight: 'auto', // auto >> no scroll bar
    //aspectRatio: 1.5,
    titleFormat: {
      month: 'numeric',
      year: '2-digit',
      day: 'numeric',
      //weekday: 'narrow'
    },
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridDay,resourceTimeline'
    },
    footerToolbar: {
      left: 'today',
      center: '',
      right: 'dayGridMonth,timeGridWeek'
    },
    buttonText: {
      today: 'Hoje',
      month: 'Mês',
      week: 'Semana',
      day: 'Dia',
      resourceTimeline: 'Salas',
    },
    initialView: 'dayGridMonth',
    // eventColor: '#378006', // No effect
    businessHours: [ // specify an array instead
      {
        daysOfWeek: [ 1, 2, 3, 4, 5 ], // Monday, Tuesday, Wednesday, Thursday, Friday
        startTime: '07:00', // 8am
        endTime: '20:00' // 6pm
      },
      {
        daysOfWeek: [ 6 ], // Saturday
        startTime: '7:00', // 10am
        endTime: '13:00' // 4pm
      }
    ],

    /* Some colors
    #1abc9c Verde
    #f5b041 Laranja
    #5dade2 Roxo
    steelblue Azul
    #566573 Cinza
    #008000 Verde escuro
    #f88bc1 Rosa
    #33f399 Verde claro
    #808000; Oliva escuro
    #8edbff; Azul claro
    #0fa1fc; Azul escuro
    #c2c205; Oliva claro
    */
    resources: [
      {
        id: 'a',
        title: 'Sala A',
        eventColor: '#f88bc1',
        constraint: {
          resourceIds: [ 'a', 'b' ] // constrain dragging to these
        },
        businessHours: {
          startTime: '07:00',
          endTime: '13:00'
        }
      },
      {
        id: 'b',
        title: 'Sala B',
        eventColor: '#008000',
        constraint: {
          resourceIds: [ 'a', 'b' ] // constrain dragging to these
        },
        businessHours: {
          startTime: '07:00',
          endTime: '13:00',
          //daysOfWeek: [ 1, 2, 3, 4, 5, 6 ] // Mon,Wed,Fri
        }
      },
      {
        id: 'c',
        title: 'Consultório 1',
        eventColor: '#0fa1fc',
        businessHours: {
          startTime: '07:00',
          endTime: '19:00'
        }
      },
      {
        id: 'd',
        title: 'Consultório 2',
        eventColor: '#808000',
        businessHours: {
          startTime: '07:00',
          endTime: '19:00'
        }
      },
      {
        id: 'e',
        title: 'Sala E',
        eventColor: '#f5b041',
        businessHours: {
          startTime: '13:00',
          endTime: '20:00'
        }
      },
      {
        id: 'x',
        title: 'Sem Sala',
        eventColor: '#566573',
        /*businessHours: {
          startTime: '07:00',
          endTime: '19:00'
        }*/
      },
    ],
    slotMinTime: "07:00:00",
    slotMaxTime: "20:00:00",
    weekends: true,
    editable: true,
    navLinks: true, //no effect
    //initialDate: '2021-02-19', //when loading
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    defaultTimedEventDuration: 1800000,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    // eventResizableFromStart: this.handleResizableFromStart.bind(this),
    // eventDragStop: this.handleEventDragStop.bind(this),
    eventDrop: this.handleEventDrop.bind(this),
    // you can update a remote database when these fire:
    // eventAdd:
    eventChange: this.handleEventChange.bind(this),
    // eventRemove:
    
  };

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  // USE: fill in the event-form;
  // Instead of accessing a property,
  // getFormCtrl captures an empty eventForm instance emitted from event-form
  // component and patches it with the values set in the handleDateSelect
  // function: calTi, calSt, and calTime.
  // The patch needed to be done here, where the values from handleDateSelect
  // are available.
  getFormCtrl(arg: any) {
    // console.log('event arg: ', arg);
    arg.patchValue({title: this.calTi, start: this.calSt, time: this.calTime, resourceId: this.calResource});
    //console.log("patched: ", arg, this.calSt, this.calTime);
  }

  // getCalPersonas(arg) {
  //   console.log('personas emitted form event-form:', arg);
  // }

  createEvent() {
    const dialogConfig = new MatDialogConfig();
  
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.maxHeight = '400px';
    // dialogConfig.width = '600px';
    // dialogConfig.data = {  // TO PASS DATA to the dialog
    //   id, name, mobile, whatsapp, telephone, email, street,
    //   complement, postalcode, dob, registerdate, comment
    // };
  
    const dialogRef = this.dialog.open(EventFormModalComponent, // TO PASS DATA to the dialog: { data: { id: 1 }});
        dialogConfig);
  
  
    dialogRef.afterClosed().subscribe(
      // This returns a plain object { k: v, ...}
        //val => console.log("Dialog output:", val),
        // This returns an object Object
        val => {console.log(`Dialog output: , ${val}`)
         });
  }
  
 openDialog() {
   const dialogRef = this.dialog.open(EventFormModalComponent, {
      data:  {
            title: this.calData.emit()//this.calTi,
            //start: this.calSt
            }
   })
   console.log('title: ', this.calTi, this.calSt, this.calTime, this.calResource);
 }

  handleDateSelect(selectInfo: DateSelectArg) {
    document.getElementById("efm").hidden = false;
    console.log('selectInfo:', selectInfo, 'sel endstr', selectInfo.endStr, 'Date diff', (Date.parse(selectInfo.endStr)-Date.parse(selectInfo.startStr)), 'new Date', new Date(selectInfo.start), 'get:', selectInfo.start.getHours());
  //if (selectInfo.start.getHours() < 20 && selectInfo.start.getHours() > 6) {
    if ((Date.parse(selectInfo.endStr)-Date.parse(selectInfo.startStr))<1800009) {
      const title = prompt('Please enter a new title for your event');

      // Bug: backgroundColor gets white, at times. Corrected when the two line
      // below are commented out
      const calendarApi = selectInfo.view.calendar;
      calendarApi.unselect(); // clear date selection
  
      const date = new Date(selectInfo.start);
      //this.calStart = date;
      calendarApi.zoomTo(date); // goes to the selected day/dayview

      // Set at ngAfterInit
      // calendarApi.setOption('eventColor', 'red'); // Change at runtime

      // Split date and time
      const calStArray = selectInfo.startStr.split('T');
      // Date
      const calSt1 = calStArray[0];
      // Time
      const calSt2 = calStArray[1].slice(0, 5);
      // const color = selectInfo.jsEvent
      // Resource
      const calAPI = this.calendarComponent.getApi();
      // sensored in strict mode
      //calAPI.el = null;

      if (selectInfo.resource) {
        const calRes = selectInfo.resource._resource.id;
        this.calSt = calSt1;
        this.calTime = calSt2;
        this.calTi = title;
        this.calResource = calRes;
      } else {
        if (title) {
    
          // Create bindings to title and start
          // Navigate to 'event-form'
          // Capture them in event-form.component
          // Test the data flow from calendar.component to event-form.component
          // Set the corresponding form fields to them
          // Three items below have already been implemented (could be better, a search instead of select)
          // Search persona
          // If null, fill out the new form
          // Else, set persona
          setTimeout(() => {this.calTi = title}, 2000);
          this.calSt = calSt1;
          this.calTime = calSt2;
          //this.calTi = title;
          this.calResource = 'x';

          console.log("cal var: ", this.calSt, this.calTi, this.calResource);

          // Perhaps refresh and inside a kind of init() call getFormCtrl()
          
          // this.callGetFormCtrl();
          // this.sendFormCtrl();
    
          // When it navigates, there is no data binding on cal..html ([formSt]="calSt")
          // this.router.navigate(['event-form'],)
          // calendarApi.addEvent({
          //   id: createEventId(),
          //   title,
          //   start: selectInfo.startStr,
          //   end: selectInfo.endStr,
          //   allDay: selectInfo.allDay
          // });
        }
        //let calStt = Date.parse(calSt1);
        //let calSttt
        //console.log("cal var: ", this.calSt, this.calTime, this.calTi, this.calResource);

      }
    //} else {alert('Please go to week or day view')}
    //Instead go right to the day view
    } else {
      const date = new Date(selectInfo.start);
      const calendarApi = selectInfo.view.calendar;
      calendarApi.zoomTo(date);
      }
    //} else {alert('Please select another time from 7 AM to 8 PM')}

  //setTimeout(() => this.createEvent(), 1000);

    //Cannot pass data to dialog!!! So navigate to event-form-modal
    //this.openDialog();
    //const calAPI = this.calendarComponent.getApi();
    //calAPI.el.hidden = true;
    //this.router.navigate(['event-form-modal/'],);

  }

  handleEventClick(clickInfo: EventClickArg) {
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove();
    // console.log('clikInfo', clickInfo.event);
    // }
    // Test to pass data to clickroute by the going url. In this cas: event start
    const calendarAPI = clickInfo.event.start

    const idx = clickInfo.event.id;
    const clickRoute = `event-form-detail/${idx}`;
    this.router.navigate([clickRoute, {clickInfo: calendarAPI},]);
    // if (confirm(`Are you sure you want to delete this event '${clickInfo.event.title}'`)) {
    // console.log('getEvents on eventclick: ', this.getEvents(28));
    //   clickInfo.event.color = '#FFFFFF';
    //   // this.eventss = this.eventss.filter(h => h !== event);
    //   // this.apiService.deleteEvent(event).subscribe();
    //   this.apiService.putEventDel(clickInfo.event.id, clickInfo.event.title, clickInfo.event.start, clickInfo.event.color, clickInfo.event.persona, clickInfo.event.kollege).subscribe();
    //   }
    //this.openDialog();
  }

  handleEvents(events: EventApi[]) {
    // this.currentEvents = events;
  }

  handleEventDrop(arg: any) {
    console.log('drAAggin;', arg);
    let evs = this.getEvents(this.calEvents);
    let persona: number = 0;
    let kollege: number = 0;
    for (let e of evs) {
      if (e.id == arg.event.id) { persona = e.persona }
    }
    for (let e of evs) {
      if (e.id == arg.event.id) { kollege = e.kollege }
    }
    // let dragResourceId = arg.newResource._resource.id;
    // console.log(dragResourceId);
    if (arg.newResource) {
      console.log('arg.newRes::', arg.event.id, arg.event.title, arg.event.startStr, arg.newResource._resource.id);
       this.apiService.putEvent(arg.event.id, arg.event.title, arg.event.startStr, arg.newResource._resource.id,
                              persona,
                              kollege).subscribe(
                              )
                              
    } else {
      this.apiService.putEvent_(arg.event.id, arg.event.title, arg.event.startStr,
        persona,
        kollege).subscribe(
        )
    }
   
    ////// PRINT ARG TO SEE ALL THE TREE OF ARG DATA
    // console.log('test arg:', arg);
    // console.log('test:', arg.newResource._resource.id);
    // location.reload();
    // this.router.navigate(['dashboard'],);

    // Does with bug: not always dragging to refresh th table
    // this.router.navigateByUrl('/', {skipLocationChange: true})
    // .then(() => this.router.navigate(['interface']));
  }

  ////// This event may interfere with drop  //////
  handleEventChange(arg: any) {
    // console.log('resizing:', arg.event);
    let evs = this.getEvents(this.calEvents);
    let persona: null;
    let kollege: null;
    for (let e of evs) {
      if (e.id == arg.event.id) { persona = e.persona }
    }
    for (let e of evs) {
      if (e.id == arg.event.id) { kollege = e.kollege }
    }
  
    /////// This code was overriding the putEvent of handleEventDrop above ///////
    // this.apiService.putEvent_(arg.event.id, arg.event.title, arg.event.startStr,
    //   persona,
    //   kollege).subscribe(
    //   )
    // location.reload();
  }

  eviClicked(arg: any) {
    
  }

  // Refresh without reload - dont work
  // ngOnDestroy() {
  //   if (this.subscriptionRefresh) {
  //     this.subscriptionRefresh.unsubscribe();
  //   }
  // }

}