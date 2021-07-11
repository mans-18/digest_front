

import { Component, Inject, Injector, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ApiService } from '../../../services/api.service';
import { Kollege } from 'src/app/models/kollege';
import { Persona } from 'src/app/models/persona';
import { PersonaFormModalComponent } from '../persona-form-modal/persona-form-modal.component';
import { KollegeFormModalComponent } from '../kollege-form-modal/kollege-form-modal.component';
import { Partner } from '../../models/partner';

/**
 * @title Dialog
 */
@Component({
  selector: 'app-event-form-modal',
  templateUrl: 'event-form-modal.component.html',
  styleUrls: ['event-form-modal.component.css'],
  //providers: [MatDialogRef],
  providers: [

    // ##### provide below may be a mistake!! ####
    // ##### If left on, no data will be passed ####
    // ##### But if off, the calendar doesnt show up!!! ####
    { provide: MAT_DIALOG_DATA, useValue: {}},
    //{ provide: MatDialogRef, useValue: {} }

]
})
export class EventFormModalComponent implements OnInit {

  //public dialogRef: MatDialogRef<EventFormModalComponent>

  // To get data from the calendar parent by input binding to set the form with cal data
  
  //@Input() calStart: Date;
  @Input() calTi: String = '';
  @Input() calTiTest: String;
  @Input() calResource!: String;
  @Input() calSt!: String;
  @Input() calTime!: String;
  //injector = Injector.create([{provide: MAT_DIALOG_DATA, useValue: this.calTi}]);
  //injector = Injector.create([{provide: MAT_DIALOG_DATA, useValue: this.calTi}]);
  filteredPers!: Observable<string[]>;
  
  faPlus = faPlus;

  exData = ['EDA', 'Colonoscopia', 'pHmetria', 'Manometria Esofágica',
            'Manometria Anorretal', 'CPRE', 'EUS com punção', 'EUS sem punção'];
            
  kollegen: Kollege[] = [];
  partners: Partner[] = [];
  
  id: null;

  // From search component
  // From search component
  personas$!: Observable<Persona[]>;
  partners$!: Observable<Partner[]>;
  private searchTerms = new Subject<string>();
  insuranceListRaw = ['Unimed', 'Hapvida', 'Issec', 'IPM', 'Cassi', 'Bradesco', 'Camed',
                  'Geap', 'Petrobrás Asfor', 'Petrobrás Disfor', 'Amil', 'Outro'];
  extraListRaw = ['Polipectomia', 'Hemostasia', 'Ligadura', 'Dilatação', 'Injeção', 'Mucosectomia',
               'Retirada', 'Sonda', 'Esclerose', 'GTT', 'Estenostomia', 'Diverticulotomia',
               'Papilotomia', 'Prótese', 'Tatuagem'];
  insuranceList = this.insuranceListRaw.sort();
  extraList = this.extraListRaw.sort();
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  //form: FormGroup;

  form = new FormGroup({
     title: new FormControl(''),
     partner: new FormControl(''),
     start: new FormControl(''),
     time: new FormControl(''),
     color: new FormControl(''),
     status: new FormControl(''),
     insurance: new FormControl(''),
     resourceId: new FormControl(''),
     addtitle1: new FormControl(''),
     addtitle2: new FormControl(''),
     addtitle3: new FormControl(''),
     comment: new FormControl(''),
     persona: new FormControl(''),
     kollege: new FormControl(''),
  });
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {title: string},
    private apiService: ApiService,
    private dialog: MatDialog,
    //private dialogRef: MatDialogRef<EventFormModalComponent>,
  ) {}

  ngOnInit(): void {
    console.log('calTiTest', this.calTiTest);
    const injector = Injector.create([{provide: String, useValue: this.calTi}]);
    this.getKollegen();
    // From search component
    // this.events$ = this.searchTerms.pipe(
      this.personas$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),
  
        // ignore new term if same as previous term
        distinctUntilChanged(),
  
        // switch to new search observable each time the term changes
        switchMap((term: string) => this.apiService.searchPersonas(term)),
      );
    console.log('calTi onInit: ', this.calTi); //not defined yet
    //this.patchForm();

    this.getPartners();
    this.partners$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.apiService.searchPartners(term)),
    );
    
  }


  ngOnChanges() {//changes: SimpleChanges) {
    console.log('calTi defined??: ', this.calTi); //not defined yet
    setTimeout(() => this.patchForm(), 1000);
  /*  for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      //alert( cur);
      this.form.value.title = this.calTi;
      //alert(this.form.value.title)
      //this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }*/
  }

  displayFn(per: Persona): string {
    return per && per.name ? per.name : '';
  }

  getKollegen(): void {
    this.apiService.getKollegen()
    .subscribe(data => this.kollegen = data);
  }

  patchForm() {
    console.log('calTi on patchForm: ', this.calTi); //undefined!
    this.form.patchValue({title: this.calTi, start: this.calSt, time: this.calTime, resourceId: this.calResource})
  }

  save() {
    let title: String = this.form.value.title;
    let startVal: Date = new Date(this.form.value.start);
    console.log('form.value: ', this.form.value.title, this.form.value.start, title, startVal)
  /*
     this.dialogRef.close(this.form.value);
     this.apiService.createEvent(
     this.form.value.title.toLowerCase(),
     startVal,
     this.form.value.color,
     this.form.value.status,
     this.form.value.insurance,
     this.form.value.resourceId,
     this.form.value.addtitle1,
     this.form.value.addtitle2,
     this.form.value.addtitle3,
     this.form.value.comment,
     this.form.value.persona,
     this.form.value.kollege).subscribe(
       // Above is sufficient to write on the db. Below shall refresh yhe list
       // (result: Event) => this.eventCreated.emit(result),
       // error => console.log(error)
       );
    */
    
     console.log('agein start: ', this.form.value.start);
    // // this.router.navigate(['event-form'],);
    // console.log('dob: ', this.form.value.dob);


    //Create an instance of FormControl (Emit does it on another component) and fill and desired data
    //Create FormControl object here and patch values
    //Create the obj and don't have undefined variables
    //let arg: FormControl;
    //this.formCtrl.emit(arg) //Would require to have a directive on this component (html: (formCtrl))
    
    // Commented
  
    if (this.calTi) {
      //this.form.patchValue({title: this.calTi, start: this.calSt, time: this.calTime, resourceId: this.calResource});
     }
     let persona_name = this.form.value.persona;
     // console.log(persona_name);
     let persona_id = persona_name.id
     // console.log(persona_id);
 
     let kollege_name = this.form.value.kollege;
     // console.log(kollege_name);
     let kollege_id = kollege_name.id
     // console.log(kollege_id);
     
     // Ang-Mat Datetime is not supported by firefox/safari
     // Cocatenate the Datepicker and the Timepicker values to set this.eventForm
     let datePlusTime: Date = new Date((this.form.value.start)+'T'+(this.form.value.time));
     
     if (this.form.value.resourceId == '') {this.form.value.resourceId = 'x'};
     
     //console.log('date+time: ', datePlusTime, this.form.value.start, this.form.value.time);
     //console.log('Start abd time: ', this.form.value.title, this.form.value.start, this.form.value.time, datePlusTime.valueOf());  
     
     try {
     if (persona_id == null || undefined) { throw alert('Por favor, informe o cliente!')};
     if (kollege_id == null || undefined) { throw alert('Por favor, informe o médico!')};
     if (this.form.value.title == '') { throw alert('Por favor, informe o procedimento!')};
     if (this.form.value.start == '') { throw alert('Por favor, informe a data e hora!')};
     if (this.form.value.insurance == '') { throw alert('Por favor, informe o convênio!')};
 
     if (this.id) {
     // TOUCHES THE DB
     this.apiService.updateEvent(
       this.id,
       // the order here. Must be the same as the bd
       this.form.value.title,
       this.form.value.partner,
       //this.eventForm.value.start,
       //this.form.value.start,
       datePlusTime,
       this.form.value.color,
       this.form.value.status,
       this.form.value.insurance,
       this.form.value.resourceId,
       this.form.value.addtitle1,
       this.form.value.addtitle2,
       this.form.value.addtitle3,
       this.form.value.comment,
       persona_id,
       kollege_id).subscribe(
         (result: Event) => {
           // This line only updates the view. Commenting it keeps updateDigest but needs manual refreshing.
         //   this.eventUpdated.emit(result);
         },
         // error => console.log(error)
         )
         location.reload();
       // this.router.navigate(['main'],);
     } else {
       //let datePlusTime1: Date = new Date((this.calSt)+'T'+(this.calTime));
       console.log('date+time1: ', this.calSt);
       let startVal: Date = new Date(this.form.value.start);
       console.log('startVal:', startVal);
       // TOUCHES THE DB
       this.apiService.createEvent(
         this.form.value.title,
         this.form.value.partner,
         // this.eventForm.value.start,
         datePlusTime,
         this.form.value.color,
         this.form.value.status,
         this.form.value.insurance,
         this.form.value.resourceId,
         this.form.value.addtitle1,
         this.form.value.addtitle2,
         this.form.value.addtitle3,
         this.form.value.comment,
         persona_id,
         kollege_id).subscribe(
           // Above is sufficient to write on the db. Below shall refresh yhe list
          // (result: Event) => this.eventCreated.emit(result),
           error => console.log(error)
           );
           location.reload();
         // this.router.navigate(['main'],);
     }
   }
     catch(err) {err}

  
  }

  close() {
   //this.dialogRef.close();
   
   this.form = new FormGroup({
    title: new FormControl(''),
    partner: new FormControl(''),
    start: new FormControl(''),
    time: new FormControl(''),
    color: new FormControl(''),
    status: new FormControl(''),
    insurance: new FormControl(''),
    resourceId: new FormControl(''),
    addtitle1: new FormControl(''),
    addtitle2: new FormControl(''),
    addtitle3: new FormControl(''),
    comment: new FormControl(''),
    persona: new FormControl(''),
    kollege: new FormControl(''),
 });

  }

  //Temp
  //saveForm() {}
  createPersona() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.maxHeight = '400px';
    // dialogConfig.width = '600px';
    // dialogConfig.data = {  // TO PASS DATA to the dialog
    //   id, name, mobile, whatsapp, telephone, email, street,
    //   complement, postalcode, dob, registerdate, comment
    // };

    const dialogRef = this.dialog.open(PersonaFormModalComponent, // TO PASS DATA to the dialog: { data: { id: 1 }});
        dialogConfig);


    dialogRef.afterClosed().subscribe(
      // This returns a plain object { k: v, ...}
        val => console.log("Dialog output:", val)
        // This returns an object Object
        // val => {console.log(`Dialog output: , ${val}`)
        // });
      );
  }
  createKollege() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.maxHeight = '400px';
    // dialogConfig.width = '600px';

    const dialogRef = this.dialog.open(KollegeFormModalComponent, // TO PASS DATA to the dialog: { data: { id: 1 }});
        dialogConfig);


    dialogRef.afterClosed().subscribe(
      // This returns a plain object { k: v, ...}
        val => console.log("Dialog output:", val)
        // This returns an object Object
        // val => {console.log(`Dialog output: , ${val}`)
        // });
      );
  }

  createPartner() {

  }

  getPartners(): void {
    this.apiService.getPartners()
    .subscribe(data => this.partners = data);
  }

}