
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Event } from '../../models/event';
import { Persona } from '../../models/persona';
import { Kollege } from 'src/app/models/kollege';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-persona-form-detail',
  templateUrl: './persona-form-detail.component.html',
  styleUrls: ['./persona-form-detail.component.css']
})
export class PersonaFormDetailComponent implements OnInit {


  events: Event[] = [];
  personaEvents: Event[] = [];
  personas: Persona[] = [];
  kollegen: Kollege[] = [];
  
  faPlus = faPlus;

  @Output() personaUpdated = new EventEmitter<Persona>();
  @Output() personaCreated = new EventEmitter<Persona>();

  personaFormDetail: FormGroup;
  id = null;
  // person: Observable<Persona>;
  set persona(value: Persona) {
    
  this.id = value.id;

  // A simple *ngIf on the template solved the problemof incomplete form loading!
  
  // Does not solve the incomplete form loading problem
  // this.personaFormDetail = this.formBuider.group({
  //   name: [value.name, Validators.required],
  //   mobile: [value.mobile, Validators.required],
  //   whatsapp: [value.whatsapp, Validators.required],
  //   telephone: [value.telephone, Validators.required],
  //   email: [value.email, Validators.required],
  //   street: [value.street, Validators.required],
  //   complement: [value.complement, Validators.required],
  //   postalcode: [value.postalcode, Validators.required],
  //   dob: [value.dob, Validators.required],
  //   registerdate: [new Date(), Validators.required],
  //   comment: [value.comment, Validators.required],
  // });

      this.personaFormDetail = new FormGroup({
        name: new FormControl(value.name),
        mobile: new FormControl(value.mobile),
        whatsapp: new FormControl(value.whatsapp),
        telephone: new FormControl(value.telephone),
        email: new FormControl(value.email),
        street: new FormControl(value.street),
        complement: new FormControl(value.complement),
        postalcode: new FormControl(value.postalcode),
        dob: new FormControl(value.dob),
        registerdate: new FormControl(new Date()),
        comment: new FormControl(value.comment),
      });
    
  }

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuider: FormBuilder
              )
              { }

  ngOnInit(): void {
    // Seems id is null
    // this.personaFormDetail = this.formBuider.group({
    //   name: ["", Validators.required],
    //   mobile: ["", Validators.required],
    //   whatsapp: ["", Validators.required],
    //   telephone: ["", Validators.required],
    //   email: ["", Validators.required],
    //   street: ["", Validators.required],
    //   complement: ["", Validators.required],
    //   postalcode: ["", Validators.required],
    //   dob: ["", Validators.required],
    //   registerdate: [new Date(), Validators.required],
    //   comment: ["", Validators.required],
    // });
    // this.apiService
    //   .getPersona(this.id)
    //   .pipe(tap(persona => this.personaFormDetail.patchValue
    //     (persona)));
    
    this.getPersonas();
    // To prevent the form not getting the value: get it async? Observable?
    // Or put the form inside a life cycle function (did not do it)
    this.getPersona();
    this.getEvents();
    this.getKollegen();
    // console.log('form persona: ', this.persona);
    console.log('persEvents', this.getPersonaEvents());

  }

  ngAfterViewInit(): void {
    
  }

  getEvents(): void {
    this.apiService.getEvents()
    .subscribe(events => this.events = events);
    console.log('events on pers: ', this.events);
  }

  getPersonaEvents(): void {
    this.apiService.getEvents()
    .subscribe(events => this.personaEvents = events.filter(event => String(event.persona) == this.route.snapshot.paramMap.get('id')));
    // console.log('events on pers: ', this.events);
  }

  getPersonas(): void {
    this.apiService.getPersonas()
      .subscribe(data => this.personas = data);
      console.log('On PersFormDet:', this.personas);
    // let personaName: string;
    // this.personas.forEach(el => {this.eventForm.value.persona==el.id?this.personaName=el.name:null});
    console.log('personaName: ', this.personas);
  }

  getPersona(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getPersona(id)
      .subscribe(persona => this.persona = persona);
  }

  getKollegen(): void {
    this.apiService.getKollegen()
    .subscribe(data => this.kollegen = data);
    console.log('kollegen: ', this.kollegen);
  }

  saveForm() {

    if (this.id) {
    // TOUCHES THE DB
    this.apiService.updatePersona(
      this.id,
      // the order here. Must be the same as the bd
      this.personaFormDetail.value.name,
      this.personaFormDetail.value.mobile,
      this.personaFormDetail.value.whatsapp,
      this.personaFormDetail.value.telephone,
      this.personaFormDetail.value.email,
      this.personaFormDetail.value.street,
      this.personaFormDetail.value.complement,
      this.personaFormDetail.value.postalcode,
      this.personaFormDetail.value.dob,
      this.personaFormDetail.value.registerdate,
      this.personaFormDetail.value.comment).subscribe(
        (result: Persona) => {
          // This line only updates the view. Commenting it keeps updateDigest but needs manual refreshing.
          this.personaUpdated.emit(result);
        },
        error => console.log(error)
        )
      // this.router.navigate(['calendar'],);
      // Does not refresh
      this.router.navigate(['events'],);
    } else {
      // TOUCHES THE DB
      this.apiService.createPersona(
        this.personaFormDetail.value.name,
        this.personaFormDetail.value.mobile,
        this.personaFormDetail.value.whatsapp,
        this.personaFormDetail.value.telephone,
        this.personaFormDetail.value.email,
        this.personaFormDetail.value.street,
        this.personaFormDetail.value.complement,
        this.personaFormDetail.value.postalcode,
        this.personaFormDetail.value.dob,
        this.personaFormDetail.value.registerdate,
        this.personaFormDetail.value.comment).subscribe(
          // Above is sufficient to write on the db. Below shall refresh yhe list
          (result: Persona) => this.personaCreated.emit(result),
          error => console.log(error)
          );
        // this.router.navigate(['event-form'],);
        this.router.navigate(['events'],);
    }
  }
  newKollege() {
    this.router.navigate(['kollege'],);
  }

  newPersona() {
    this.router.navigate(['persona'],);
  }

}

