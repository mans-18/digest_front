import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Event } from '../../models/event';
import { EventReport } from '../../models/eventReport';
import { Persona } from '../../models/persona';

@Component({
  selector: 'report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
/* ################# CAPTURE START ################# */
/*WIDTH = 640;
HEIGHT = 480;

@ViewChild("video")
public video: ElementRef;

@ViewChild("canvas")
public canvas: ElementRef;

//  @ViewChild("mycanvas")
//  public mycanvas: ElementRef;

captures: string[] = [];
error: any;
isCaptured: boolean;
*/
blobToForm: any;

photo = null;

/* ################# CAPTURE END ################# */

/* ######## https://www.freakyjolly.com/angular-input-file-image-file-upload-to-base64-tutorial-by-example/ ############ */

imageError: string;
isImageSaved: boolean;
cardImageBase64: string;

/* ######## END ############ */


  // BINDINGS
  //@Input() eventss: Event[];
  personas: Persona[];
  personas$: Observable<Persona[]>;
  events$: Observable<Event[]>;

  /* ### Angular 2 how to make child component wait for async data to be ready 
    https://stackoverflow.com/questions/41389124/angular-2-how-to-make-child-component-wait-for-async-data-to-be-ready ### */
  private _events = new BehaviorSubject<Event[]>([]);
  @Input() set events(value: Event[]) { this._events.next(value)};

  private searchTerms = new Subject<string>();
  faPlus = faPlus;
  id = null;
  //@Input() idComing: number;

  formEvent: FormGroup;
  formReport: FormGroup;
  //formIm: FormGroup;
  //image = new Image();

  // Substitute for directives on the template
  set event(value: Event) {
    /*this.id = value.id;
    console.log('set',value);
    console.log('event', this.event);
    this.formEvent = new FormGroup({
      name: new FormControl(value.persona),
      start: new FormControl(value.start),
      time: new FormControl(value.start),
    });*/
  }
  
    
    
  constructor(
    private renderer: Renderer2, private el: ElementRef,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {

   // this.image.src = './../assets/images/logo_circle.png'
/*
    this.formIm = new FormGroup({
      event: new FormControl(''),
      im1: new FormControl(''),
    });
*/
    this.formReport = new FormGroup({
     // reportUUID: new FormControl(''),
      im1: new FormControl(''),
      drugs: new FormControl(''),
      anest: new FormControl(''),
      assistant: new FormControl(''),
      equipment: new FormControl(''),
      phar: new FormControl(''),
      esop: new FormControl(''),
      stom: new FormControl(''),
      duod: new FormControl(''),
      urease: new FormControl(''),
      biopsy: new FormControl(''),
      hystoResults: new FormControl(''),
      prep: new FormControl(''),
      quality: new FormControl(''),
      colo: new FormControl(''),
      conc1: new FormControl(''),
      conc2: new FormControl(''),
      conc3: new FormControl(''),
      conc4: new FormControl(''),
      conc5: new FormControl(''),
      conc6: new FormControl(''),
      complications: new FormControl(''),
      event: new FormControl(''),
    });
    console.log('formReportConstruct', this.formReport)
    setTimeout(() => console.log('this.eventsConstruct', this.events), 350);
  }

  ngOnInit(): void {
  
    setTimeout(() => console.log('this.events$', this.events$), 1000);
    this.getEvents();
    setTimeout(() => console.log('this.events500', this.events), 500);
    this.getPersonas();
    setTimeout(() => console.log('this.personas500', this.personas), 500);

    //const data = from(Array(this.events));
    //data.subscribe({ next(resp) {console.log('observable getEv', resp)}});

    this.events$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.apiService.searchEvents(term)),
    );

    /* ### Angular 2 how to make child component wait for async data to be ready 
    https://stackoverflow.com/questions/41389124/angular-2-how-to-make-child-component-wait-for-async-data-to-be-ready ### */
    //this._events.subscribe(x => {console.log('xxxx', x)});
    //console.log('_events', this._events);

    setTimeout(() => this.patchForm(), 500);
    
  }


/*
  ngOnChanges() {
    console.log('this.events onChange', this.events, this.route.snapshot.paramMap.get('id'));
    setTimeout(() => this.patchForm(), 1000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.patchForm(), 1000);
    console.log('idCom', this.idComing);
  }
*/

// #################################################################################################### //
  // If does now: keeping both templates on the same page on event.component.html
  // but hiding (see event.conponent.ts) one or another according to function.
  // Breaf: event.com..ts builds event-end-form.html on its template that has a link to a specific event
  // >> event-endo-form.ts snapshots the id param of the url and patches the formReport event field.
  // If the event-endo-form is built on the event-endo-form.ts template, the specific event is undefined.
  // No need to touch the BD as would be the case with setters (set event...).
  patchForm() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
    let ev: Event[] = [];
    this._events.subscribe(e => ev = e)
    this.formReport.patchValue({ event: id, assistant: ev[0].title});
    // Can subscribe to the subject as above or simply get the value directly from it:
    //this.formReport.patchValue({ event: id, assistant: this._events.value[0].title });
    //this.formIm.patchValue({event: id});
  }


  search(term: string): void {
    this.searchTerms.next(term);
  }


  displayFn(ev: Event): string {
 /*   let persName: string;
    console.log(this.personas$);
    //this.getPersonas();
    for (let pers of this.personas) {
      if (pers.id == ev.persona) {
        persName = pers.name;
      }
    }
    */
    return ev && ev.title ? ev.title : '';
  }

  // get getForm() {return this.form.get('name')}

  /* ### Angular 2 how to make child component wait for async data to be ready 
    https://stackoverflow.com/questions/41389124/angular-2-how-to-make-child-component-wait-for-async-data-to-be-ready ### */
  // No need. Values processed at patchForm()
/* getEvs() {
    return this._events.getValue();
  }*/

  getEvents(): any {
    this.apiService.getEvents()
    .subscribe(events => this.events = events);
    // console.log('events: ', this.events[0].id);
  }
/*
  getEvent() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getEvent(id)
      .subscribe(event => this.event = event);
  }
*/
  getPersonas(): void {
    this.apiService.getPersonas()
      .subscribe(data => this.personas = data);
    // let personaName: string;
    // this.personas.forEach(el => {this.eventForm.value.persona==el.id?this.personaName=el.name:null});
    console.log('personaNameInsideGet: ', this.personas);
  }

  saveForm() {
    console.log('ID at formRepo', this.id);
    console.log('into the if clause', this.formReport.value.event);
   /*
    try {
    if (this.formReport.value.title == '') { throw alert('Por favor, informe o procedimento!')};
    if (this.formReport.value.start == '') { throw alert('Por favor, informe a data e hora!')};
    if (this.formReport.value.insurance == '') { throw alert('Por favor, informe o convênio!')};
*/
    //if (this.id) {
    // TOUCHES THE DB
  
    this.apiService.createEventReport(
      //this.id,
    //  this.formReport.value.reportUUID,
      String(this.blobToForm), this.formReport.value.im2, this.formReport.value.im3, this.formReport.value.im4,
      this.formReport.value.im5, this.formReport.value.im6, this.formReport.value.im7,
      this.formReport.value.im8, this.formReport.value.im9, this.formReport.value.im10,
      this.formReport.value.drugs, this.formReport.value.anest, this.formReport.value.assistant, this.formReport.value.equipment,
      this.formReport.value.phar, this.formReport.value.esop, this.formReport.value.stom, this.formReport.value.duod,
      this.formReport.value.urease, this.formReport.value.biopsy, this.formReport.value.hystoResults,
      this.formReport.value.prep, this.formReport.value.quality, this.formReport.value.colo,
      this.formReport.value.conc1, this.formReport.value.conc2, this.formReport.value.conc3,
      this.formReport.value.conc4, this.formReport.value.conc5, this.formReport.value.conc6,
      this.formReport.value.complications,
      this.formReport.value.event).subscribe(
        (result: EventReport) => { console.log('into create EventReport subscribe')
          // This line only updates the view. Commenting it keeps updateDigest but needs manual refreshing.
        //   this.eventUpdated.emit(result);
        },
        // error => console.log(error)
        )
        //location.reload();
      // this.router.navigate(['main'],);
   /* } else {
      this.apiService.createEvent(
        this.eventForm.value.title,
        this.eventForm.value.partner,
        datePlusTime,
        this.eventForm.value.color,
        this.eventForm.value.status,
        this.eventForm.value.insurance,
        this.eventForm.value.resourceId,
        this.eventForm.value.addtitle1,
        this.eventForm.value.addtitle2,
        this.eventForm.value.addtitle3,
        this.eventForm.value.comment,
        persona_id,
        kollege_id).subscribe(
          // Above is sufficient to write on the db. Below shall refresh yhe list
          // (result: Event) => this.eventCreated.emit(result),
          error => console.log(error)
          );
          location.reload();
        // this.router.navigate(['main'],);
    } */
  }
    catch(err) {err}
//  }
  
  createEvent() {}

  save() {}

  close() {}
}
