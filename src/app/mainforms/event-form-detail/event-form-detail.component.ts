import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Event } from '../../models/event';
import { Persona } from '../../models/persona';
import { Kollege } from 'src/app/models/kollege';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { EventReport } from '../../models/eventReport';

@Component({
  selector: 'app-event-form-detail',
  templateUrl: './event-form-detail.component.html',
  styleUrls: ['./event-form-detail.component.css']
})
export class EventFormDetailComponent implements OnInit {

  // Testing get params from calendar in the comeing url
  clickInfo$: Observable<{}>;

  events: Event[] = [];
  eventReport: EventReport;
  actualEvent: Event;
  // selectedEvent: Event;
  personas: Persona[] = [];
  kollegen: Kollege[] = [];
  // personaName: String;

  faPlus = faPlus;

  // persona_name = null;
  // persona_id = null;

  eventFormDetail: FormGroup;
  id = null;
  /*
  set event(value: Event) {
    
    this.id = value.id;
    
    // if (this.id) {

    // May be better: makes eventsForms an array of all personas
    // let x: string;
    // this.personas.forEach(el => {this.eventForm.value.persona==el.id?x=el.name:null});

    this.eventFormDetail = new FormGroup({
      title: new FormControl(value.title),
      start: new FormControl(value.start),
      color: new FormControl(value.color),
      status: new FormControl(value.status),
      insurance: new FormControl(value.insurance),
      resourceId: new FormControl(value.resourceId),
      addtitle1: new FormControl(value.addtitle1),
      addtitle2: new FormControl(value.addtitle2),
      addtitle3: new FormControl(value.addtitle3),
      comment: new FormControl(value.comment),
      persona: new FormControl(value.persona),
      kollege: new FormControl(value.kollege),
    
    });
    // } else {
    //   this.eventForm = new FormGroup({
    //     title: new FormControl('TEXT'),
    //     start: new FormControl(''),
    //     color: new FormControl(''),
    //     insurance: new FormControl(''),
    //     resourceId: new FormControl(''),
    //     comment: new FormControl(''),
    //     persona: new FormControl(''),
    //     kollege: new FormControl(''),
    //   });
    // }
    // }
  }
  */
 day: string;
 month: string;
 year: string;
 set event(value: Event) {
  this.day = value.start.toLocaleString().split('T')[0].split('-')[2];
  this.month = value.start.toLocaleString().split('T')[0].split('-')[1];
  this.year = value.start.toLocaleString().split('T')[0].split('-')[0];
  let date = new Date(Date.parse(this.day+'/'+this.month+'/'+this.year));
  let datee = this.year + '-' + this.month + '-' + this.day;
  this.id = value.id;
  
  this.eventFormDetail = new FormGroup({
    title: new FormControl(value.title),
    partner: new FormControl(value.partner),
    //startDate: new FormControl(date.toISOString().substring(0, 10)), //doesnt get into the input as date, but it does as a str
    startDate: new FormControl(datee), //doesnt get into the input as date, but it does as a str
    startTime: new FormControl(value.start.toLocaleString().split('T')[1].slice(0,5)),
    color: new FormControl(value.color),
    status: new FormControl(value.status),
    insurance: new FormControl(value.insurance),
    resourceId: new FormControl(value.resourceId),
    addtitle1: new FormControl(value.addtitle1),
    addtitle2: new FormControl(value.addtitle2),
    addtitle3: new FormControl(value.addtitle3),
    comment: new FormControl(value.comment),
    persona: new FormControl(value.persona),
    kollege: new FormControl(value.kollege),
  });
  console.log('event', value.id, this.eventFormDetail.get('title')); // event is undefined
}

  // ngAfterContentChecked(): void {
  //   alert("5. after content check called");
  //   }

    // Called once after view has initialized
    //Commented because of error undefined name: 82, 83, 210-213, 223-226
  ngAfterViewInit(): void {
    //this.eventFormDetail.patchValue({persona: this.getActualPersona()});
    //this.eventFormDetail.patchValue({kollege: this.getActualKollege()});
  // alert('6. after view init called');
  // console.log('actual kol: ', this.getActualKollege());
  // this.getPersonas();
  // this.getEvents();
  // this.getKollegen();

  }

  //   ngAfterViewChecked(): void {
  //   alert('7. after view init checked');
  //   }

  //   ngOnDestroy(): void {
  //   alert('8. on destroy called');
  //   }

  // ngAfterContentInit(): void {
  //   alert("4. after content init called");
  //   }

  // ngDoCheck(): void {
  //   alert("3. do check is called");
  //   }

  // ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
  // }

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router) { }//private router: Router) {alert("1. First on change") }

  ngOnInit(): void {
    // this.eventFormDetail.patchValue({persona: 5})
    // alert("2. on init is called");
    this.getEvent();
    this.getPersonas();
    this.getEvents();
    this.getKollegen();
    this.getActualEvent(this.events);
    //this.getEventReport();

    // this.getActualPersona();
    // this.getActualKollege();
    // Testing get params from calendar in the comeing url
    this.clickInfo$ = this.route.paramMap;
    console.log('clickInfo: ', this.clickInfo$);
    console.log('eventformdetail: ', this.eventFormDetail);
    // console.log('actual pers: ', this.getActualPersona());
    console.log('actual kol: ', this.getActualKollege());
  }

  // Getters fot use in the template - just for reference. No use actually
  get persona() { return this.eventFormDetail.get('persona')}

  get kollege() { return this.eventFormDetail.get('kollege')}


  // get pers_id() {
  //   this.persona_name = this.eventFormDetail.value.persona;
  //   console.log('name per: ', this.persona_name); 
  //   this.persona_id = this.persona_name.id;  //undef
  //   console.log('id per: ', this.persona_id);
  //   return this.persona_id;
  // }

  // get kollege_id() {
  //   let kollege_name = this.eventFormDetail.value.kollege;
  // console.log('name kol: ', kollege_name);
  //   let kollege_id = kollege_name.id;  //undef
  // console.log('id kol: ', kollege_id);
  //   return kollege_id;
  // }
 


  // Test the value of reactive form --TO DELETE
  valChange() {
    this.eventFormDetail.valueChanges.pipe
      (
      map((value) => {
        value.title = value.title.toUppercase();
        return value;
      }),
      filter((value) => this.eventFormDetail.valid)
      )
      .subscribe((value) => {
        console.log("Model driven form valid value: vm = ",
        JSON.stringify(value));
      });
  }


  getEvent(): void {
    // const ids = this.route.snapshot;
    // console.log('snapS', ids)
    // The name ix is defined at the app-routing module
    const ix = +this.route.snapshot.paramMap.get('ix');
    this.apiService.getEvent(ix)
      .subscribe(event => this.event = event);
  }

  getEvents(): void {
    this.apiService.getEvents()
    .subscribe(events => this.events = events);
    // console.log('events: ', this.events[0].id);
  }

  getEventReport() {
    const ix = +this.route.snapshot.paramMap.get('ix');
    this.apiService.getEventReport(ix)
      .subscribe(event => this.eventReport = event);
  }

  getPersonas(): void {
    this.apiService.getPersonas()
      .subscribe(data => this.personas = data);
    // let personaName: string;
    // this.personas.forEach(el => {this.eventForm.value.persona==el.id?this.personaName=el.name:null});
    console.log('personaName: ', this.personas);
  }

  getKollegen(): void {
    this.apiService.getKollegen()
    .subscribe(data => this.kollegen = data);
    console.log('kollegen: ', this.kollegen);
  }

  // Iterate across events and get the actual event
  getActualEvent(events: Event[]) {
    let passed = [];
    for (let item of events) {
      if (item.id == this.id) {
        passed.push(item);
      }
    }
    return passed;
  }
  // Iterate across personas and get the persona of the actual event
  // Show the name of the persona
  getActualPersona() {
    //let actualEvent = this.getActualEvent(this.events); //this.events.filter(ev => ev.id == this.id);
    //let actualPersona = this.personas.filter(ps => ps.id ==  actualEvent[0].persona);
    // console.log('show name: ', actualPersona[0].name);
    //return actualPersona[0].name
  }

  getActualPersonaId() {
    let actualEvent = this.getActualEvent(this.events);
    let persona_id = actualEvent[0].persona;
    return persona_id;
  }

  getActualKollege() {
    //let actualEvent = this.getActualEvent(this.events); //this.events.filter(ev => ev.id == this.id);
    //let actualKollege = this.kollegen.filter(ps => ps.id ==  actualEvent[0].kollege);
    //console.log('show kol: ', actualKollege[0].name);
    //return actualKollege[0].name
  }

  getActualKollegeId() {
    let actualEvent = this.getActualEvent(this.events);
    let kollege_id = actualEvent[0].kollege;
    return kollege_id;
  }

  saveForm() {

    let persona_name = this.eventFormDetail.value.persona;
    
    let persona_id = persona_name.id;  //undef
    // console.log('id per: ', persona_id);

    let kollege_name = this.eventFormDetail.value.kollege;
    // console.log('name kol: ', kollege_name);
    let kollege_id = kollege_name.id;  //undef
    // console.log('id kol: ', kollege_id);
    
    let dayy = this.eventFormDetail.value.startDate//.split('/')[0];
    let time = this.eventFormDetail.value.startTime;
    let recoposeStartStr = dayy+'T'+time;

    //let month = this.eventFormDetail.value.startDate.split('/')[1];
    //let year = this.eventFormDetail.value.startDate.split('/')[2];
    //let recoposeStartStr = year+'-'+month+'-'+day+'T'+time;
    let recoposeStartNumber = Date.parse(recoposeStartStr);
    let recoposeStart = new Date(recoposeStartNumber);

    console.log('start1: ', this.eventFormDetail.value.startDate);
    console.log('start2: ', this.eventFormDetail.value.startDate.split('-'));
    console.log('start3: ', recoposeStartStr, recoposeStart);

    try {
      let stEx = /\b20/g;
      if (stEx.test(recoposeStart.toString()) == false) { throw alert('Por favor, informe a data!')};
      if (this.eventFormDetail.value.title == '' || null) { throw alert('Por favor, informe o procedimento!')};
      if (this.eventFormDetail.value.insurance == '') { throw alert('Por favor, informe o convênio!')};
      if (this.getActualPersonaId() == null || undefined) {"Preencha o 'cliente' por favor!"};
      if (this.getActualKollegeId() == null || undefined) {"Preencha o 'médico' por favor!"};
      if (this.getActualKollegeId() !== this.eventFormDetail.value.kollege) {confirm("deseja realmente trocar o médico?")}
    if (this.id) {
    // TOUCHES THE DB
    
    this.apiService.updateEvent(
      this.id,
      // the order here. Must be the same as the bd
      this.eventFormDetail.value.title,
      this.eventFormDetail.value.partner,
      recoposeStart,
      this.eventFormDetail.value.color,
      this.eventFormDetail.value.status,
      this.eventFormDetail.value.insurance,
      this.eventFormDetail.value.resourceId,
      this.eventFormDetail.value.addtitle1,
      this.eventFormDetail.value.addtitle2,
      this.eventFormDetail.value.addtitle3,
      this.eventFormDetail.value.comment,
      this.getActualPersonaId(),
      //this.getActualKollegeId()),
      this.eventFormDetail.value.kollege).subscribe(
        (result: Event) => {
          // This line only updates the view. Commenting it keeps updateDigest but needs manual refreshing.
        //   this.eventUpdated.emit(result);
        },
        // error => console.log(error)
        )
      // The alert below also allowed the list on 'events' update! No need to manually refresh now.
      //alert('Event updated');
      // location.reload();
      this.router.navigate(['events'],);
    } else {
      // TOUCHES THE DB
      this.apiService.createEvent(
        this.eventFormDetail.value.title,
        this.eventFormDetail.value.partner,
        this.eventFormDetail.value.start,
        this.eventFormDetail.value.color,
        this.eventFormDetail.value.status,
        this.eventFormDetail.value.insurance,
        this.eventFormDetail.value.resourceId,
        this.eventFormDetail.value.addtitle1,
        this.eventFormDetail.value.addtitle2,
        this.eventFormDetail.value.addtitle3,
        this.eventFormDetail.value.comment,
        this.getActualPersonaId(),
        this.getActualKollegeId()).subscribe(
          // Above is sufficient to write on the db. Below shall refresh yhe list
          // (result: Event) => this.eventCreated.emit(result),
          // error => console.log(error)
          );
        alert('Event created');
        // location.reload();
        this.router.navigate(['events'],);
      }
    }
    catch(err) {err}
  }

  // Capture
  /*
  saveFormX() {

    let persona_name = this.eventFormDetail.value.persona;
    
    let persona_id = persona_name.id;  //undef
    // console.log('id per: ', persona_id);

    let kollege_name = this.eventFormDetail.value.kollege;
    // console.log('name kol: ', kollege_name);
    let kollege_id = kollege_name.id;  //undef
    // console.log('id kol: ', kollege_id);
    
    let dayy = this.eventFormDetail.value.startDate//.split('/')[0];
    let time = this.eventFormDetail.value.startTime;
    let recoposeStartStr = dayy+'T'+time;

    //let month = this.eventFormDetail.value.startDate.split('/')[1];
    //let year = this.eventFormDetail.value.startDate.split('/')[2];
    //let recoposeStartStr = year+'-'+month+'-'+day+'T'+time;
    let recoposeStartNumber = Date.parse(recoposeStartStr);
    let recoposeStart = new Date(recoposeStartNumber);

    console.log('start1: ', this.eventFormDetail.value.startDate);
    console.log('start2: ', this.eventFormDetail.value.startDate.split('-'));
    console.log('start3: ', recoposeStartStr, recoposeStart);

    try {
      let stEx = /\b20/g;
      if (stEx.test(recoposeStart.toString()) == false) { throw alert('Por favor, informe a data!')};
      if (this.eventFormDetail.value.title == '' || null) { throw alert('Por favor, informe o procedimento!')};
      if (this.eventFormDetail.value.insurance == '') { throw alert('Por favor, informe o convênio!')};
      if (this.getActualPersonaId() == null || undefined) {"Preencha o 'cliente' por favor!"};
      if (this.getActualKollegeId() == null || undefined) {"Preencha o 'médico' por favor!"};
      if (this.getActualKollegeId() !== this.eventFormDetail.value.kollege) {confirm("deseja realmente trocar o médico?")}
    if (this.id) {
    // TOUCHES THE DB
    
    this.apiService.read_camera_capture(
      this.id,
      // the order here. Must be the same as the bd
      0,
      ).subscribe(
        (result: Event) => {
          // This line only updates the view. Commenting it keeps updateDigest but needs manual refreshing.
        //   this.eventUpdated.emit(result);
        },
        // error => console.log(error)
        )
      // The alert below also allowed the list on 'events' update! No need to manually refresh now.
      //alert('Event updated');
      // location.reload();
      this.router.navigate(['calendar'],);
      }
    }
    catch(err) {err}
  }
*/

  // confirmEvent(event: Event): void {
  //   if (confirm(`Are you sure you want to CONFIRM this event '${event.title}'`)) {
  //   event.color = '#1abc9c';
  //   // this.eventss = this.eventss.filter(h => h !== event);
  //   // this.apiService.deleteEvent(event).subscribe();
  //   this.apiService.putEventConf(event.id, event.title, event.start, event.color, event.persona, event.kollege).subscribe();
  //   }
  //   this.router.navigate(['calendar'],);
  // }

  newKollege() {
    this.router.navigate(['kollege'],);
  }

  newPersona() {
    this.router.navigate(['persona'],);
  }

}
