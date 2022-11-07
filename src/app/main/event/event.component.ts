
import { Component, OnInit, Input, ViewChild, Inject, Optional } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { Event } from '../../models/event';
import { Persona } from '../../models/persona';
import { Kollege } from 'src/app/models/kollege';
import { faPlus, faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Partner } from '../../models/partner';
import { UtilsService } from 'src/services/utils.service';


const statusList = ['Agendado', 'Confirmado', 'Cancelado',
'Aguardando', 'Em Atendimento', 'Finalizado']

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  //no effect
  //@ViewChild('eef') eventComponent: EventComponent;
  new_event = "New Event";
  eventsFiltered: Event[] = [];
  @Input() eventss: Event[] = [];
  // For Dialog with deleted events
  eventsAll: Event[] = [];
  // selectedEvent: Event;
  //idComing: number;
  @Input() personas: Persona[] = [];
  @Input() kollegen: Kollege[] = [];
  @Input() partners: Partner[] = [];
  eventsDel: Event[] = [];// = this.eventss.filter(c => c.color=="#FFFFFF");
  toggleDel: boolean = true;
  toggleEvs(ev: Event): boolean {
 //   if (ev.color == '#FFFFFF' && this.toggleDel==true) {
      return true
   // }
    return true
  }
  toggleName;
  faPlus = faPlus;

  faEdit = faEdit;
  faCheck = faCheck;
  faTrash = faTrash;
  trashOn = true;
  titleOn = true;
  hideme = [];
  eventInformation: any = [];
  Index: any;

  apagarLabel = ' Apagar';

  //Mat table wt filter, pag, sort
  displayedColumns: string[] = ['confirm', 'start', 'title', 'insurance',
                                'persona', 'kollege', 'partner', 'status', 'comment', 'action', 'laudo'];
  //dataSource!: MatTableDataSource<Event>;

  // Gets a reference to the table evtable. Has not been used (see deleteEvent())
  @ViewChild(MatTable, {static: true}) evtable: MatTable<any>;
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  
  constructor(
    //public dialogRef: MatDialogRef<EventComponent>,
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router,
    public dialog : MatDialog,
    public dialogx: MatDialog,
    public utilsService: UtilsService,
    ) {
      //######//
      // Object to create Filter for
    this.filterSelectObj = [
      // {
      //   name: 'ID',
      //   columnProp: 'id',
      //   options: []
      // },
      {
        name: 'EXAME',
        columnProp: 'title',
        options: []
      },
      {
        name: 'CONVÊNIO',
        columnProp: 'insurance',
        options: []
      },
      {
        name: 'MÉDICO',
        columnProp: 'genericChar2',
        options: []
      },
      {
        name: 'PACIENTE',
        columnProp: 'genericChar1',
        options: []
      }
    ]
    }

  // eventForm: FormGroup;
  // id = null;
  // set event(value: Event) {
  //   this.id = value.id;
    
  //   // May be better: makes eventsForms an array of all personas
  //   // let x: string;
  //   // this.personas.forEach(el => {this.eventForm.value.persona==el.id?x=el.name:null});

  //   this.eventForm = new FormGroup({
  //     title: new FormControl(value.title),
  //     start: new FormControl(value.start),
  //     color: new FormControl(value.color),
  //     insurance: new FormControl(value.insurance),
  //     resourceId: new FormControl(value.resourceId),
  //     comment: new FormControl(value.comment),
  //     persona: new FormControl(value.persona),
  //     kollege: new FormControl(value.kollege),
  // });
  // }

  // newKollege() {}
  // newPersona() {}
  // saveForm() {}

  newEvent(){
    // this.router.navigate(['event-form'],);
  }
  editEvent(arg: Event) {}
  // public showEventInfo(index,productId) {
  //   this.apiService.eventInfo(productId).subscribe((res:any)=>{
  //     this.eventInformation[index] = res;
  //   })
  //   this.hideme[index] = !this.hideme[index];
  //   this.Index = index;  
  // }
  // deleteEvent(event: Event) {}
  eventClicked(arg: Event) {
    const id = arg.persona;
    // console.log('color', arg.color)
    //this.router.navigate([`persona-form-detail/${id}`],);
  }

  /*
  catchEvent(arg: Event) {

    document.getElementById('ec').hidden = true;
    // always 1
    //const idx = document.getElementById('evID').textContent

    const id = arg.id;
    console.log('got id', id);
    //this.router.navigate([`event-endo-form/${id}`],);

    //return this.idComing = id //? id : idx.slice(6,9999999).trim()
  }
  */

  //######//
  filterValues = {};
  filterSelectObj = [];

  ngOnInit(): void {
    this.toggleName = "Show deleted";
    //hide event-endo-form
    document.getElementById('eef').hidden = true;
    const mrToken = this.cookieService.get('mr-token');
    console.log('mrToken on events:', mrToken);
    if (!mrToken) {
      this.router.navigate(['/auth']);
    } else {
      //this.getEvents();
      this.getPersonas();
      this.getKollegen();
      this.getEventsDel();
      this.getPartners();
      console.log('eventss on Init: ', this.eventss);
      // console.log('eventsDel: ', this.eventsDel);
    }
  }

  //Mat table
  ngAfterViewInit() {
    // If toggleDel is false, table shows only 'deleted'
    if (this.toggleDel) {
    //Dates filtered: less than 12h from now and more than 7days from now
    const today = Date.now();
    this.apiService.getEvents()
    .subscribe(events => {this.eventss = events.filter(ev => ev.color !== '#FFFFFF' && (new Date(ev.start).getTime() > today-684000000 && new Date(ev.start).getTime() < today + 604800000)),
                          this.utilsService.dataSource = new MatTableDataSource(this.eventss),
                          //console.log('ddd',this.utilsService.dataSource.data, this.utilsService.dataSource.filteredData, this.utilsService.dataSource)
                          //this.displayedColumns.push('restore');
                           //######//
                          // Overrride default filter behaviour of Material Datatable
                          this.utilsService.dataSource.filterPredicate = this.createFilter(),
                          this.utilsService.dataSource.data = this.eventss,
                          this.addPersonaNameToFilter(),
                          this.addKollegeNameToFilter(),
                          this.filterSelectObj.filter((o) => {
                            o.options = this.getFilterObject(this.eventss, o.columnProp);
                          });
                          this.sincColorDel();
                  //console.log('toggleDel', this.toggleDel);
                          this.utilsService.dataSource.paginator = this.paginator,
                          this.utilsService.dataSource.sort = this.sort
                          });
  } else {
    this.apiService.getEvents()
    .subscribe(events => {this.eventss = events.filter(ev => ev.color == '#FFFFFF'),
                          this.utilsService.dataSource = new MatTableDataSource(this.eventss),
                          this.displayedColumns.pop();
                            //######//
                          // Overrride default filter behaviour of Material Datatable
                          this.utilsService.dataSource.filterPredicate = this.createFilter(),
                          this.utilsService.dataSource.data = this.eventss,
                          //this.addPersonaNameToFilter(),
                          //this.addKollegeNameToFilter(),
                          this.filterSelectObj.filter((o) => {
                            o.options = this.getFilterObject(this.eventss, o.columnProp);
                          });
                          this.sincColorDel();
                    //console.log('toggleDel', this.toggleDel);
                          this.utilsService.dataSource.paginator = this.paginator,
                          this.utilsService.dataSource.sort = this.sort
                          });
          }
          // For dialog with deleted events
          this.apiService.getEvents()
          .subscribe(events => {this.eventsAll = events});

  }

  addPersonaNameToFilter() {
    for (let item of this.utilsService.dataSource.data) {
      for (let per of this.personas) {
        if (item.persona === per.id) {
          item.genericChar1 = per.name;
        }
      }
    }
  }
  addKollegeNameToFilter() {
    for (let item of this.utilsService.dataSource.data) {
      for (let kol of this.kollegen) {
        if (item.kollege === kol.id) {
          item.genericChar2 = kol.name;
        }
      }
    }
  }
  
  //####
  // Get Uniqu values from columns to build filter
  getFilterObject(fullObj, key) {
    const uniqChk = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  //####
   // Called on Filter change
   filterChange(filter, event) {
    //let filterValues = {}
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.utilsService.dataSource.filter = JSON.stringify(this.filterValues)
  }

  //####
  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      //console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 &&
                  word !== 'de' &&
                  word !== 'do' &&
                  word !== 'da' &&
                  isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }

  //####
  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value, key) => {
      value.modelValue = undefined;
    })
    this.utilsService.dataSource.filter = "";
  }

  //Doesnt function with the custom filters
  applyFilter(event: any) {
    //persona is a number so the name is not detected
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('filterValue:', filterValue, this.personas, this.utilsService.dataSource);
    this.utilsService.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.utilsService.dataSource.paginator) {
      this.utilsService.dataSource.paginator.firstPage();
    }
  }

  //////////eventss por events
  getEvents(): void {
    this.apiService.getEvents()
    .subscribe(events => this.eventss = events);
    // .subscribe(events => this.eventss = events.filter(ev => ev.color="#FFFFFF"));    // .subscribe(events => {for (let ev of events) {if (ev.title == 'eda') {}}});
    // this.eventsFiltered = this.eventss.filter(ev => ev.title=='eda');
    // console.log('events: ', this.eventss);
  }

  getEventsDel(): void {
    this.apiService.getEvents()
    .subscribe(events => this.eventsDel = events.filter(c => c.color=='#FFFFFF'));
    // .subscribe(events => this.eventss = events.filter(ev => ev.color="#FFFFFF"));    // .subscribe(events => {for (let ev of events) {if (ev.title == 'eda') {}}});
    // this.eventsFiltered = this.eventss.filter(ev => ev.title=='eda');
    console.log('eventsDel: ', this.eventsDel);
  }


  getPersonas(): void {
    this.apiService.getPersonas()
    .subscribe(data => this.personas = data);
    // console.log('personas: ', this.personas);
  }

  getKollegen(): void {
    this.apiService.getKollegen()
    .subscribe(data => this.kollegen = data);
    // console.log('kollegen: ', this.kollegen);
  }

  getPartners(): void {
    this.apiService.getPartners()
    .subscribe(data => this.partners = data);
  }

  // onSelect(event: Event) {
  //   this.selectedEvent = event;
  //   this.messageService.add(`ApiService: Selected event id=${event.id}`);
  // }

  add(title: string, start: Date, color: string,
      insurance: string, resourceId: string, comment: string,
      persona: string, kollege: string): void {

    // if (!event) { return; }
    // this.apiService.addEvent({ title, start, color,
    //   insurance, resourceId, comment,
    //   persona, kollege } as Event)
    //   .subscribe(event => {
    //     this.events.push(event);
    //   });
  }

  //////////eventss por events
  deleteEvent(event: Event): void {
    if (confirm(`Are you sure you want to DELETE this event '${event.title}'`)) {
    event.color = '#FFFFFF';
    event.status = 'cancelado'
    // this.eventss = this.eventss.filter(h => h !== event);
    // this.apiService.deleteEvent(event).subscribe();
    this.apiService.putEventDel(event.id, event.title, event.start, event.color, event.status, event.persona, event.kollege).subscribe();
    }
    //location.reload();
    // Does function with data still in the db
    //this.evtable.renderRows();
  }

  sincColorDel() {
    for (let ev of this.eventss) {
      if (ev.color == '#FFFFFF') {
        ev.status = 'cancelado';
        this.apiService.putEventConf(ev.id, ev.title, ev.partner, ev.start, ev.color,
                                    ev.status, ev.addtitle2, ev.persona, ev.kollege,
                                    ev.genericChar1, ev.genericNumber1).subscribe();
      }
    }
  }
  
  confirmEvent(event: Event): void {
    if (confirm(`Are you sure you want to CONFIRM this event '${event.title}'`)) {
    event.color = '#008000';
    event.status = 'confirmado';
    console.log('passed event', event.status)
    // this.eventss = this.eventss.filter(h => h !== event);
    // this.apiService.deleteEvent(event).subscribe();
    this.apiService.putEventConf(event.id, event.title, event.partner, event.start, event.color, event.status, event.addtitle2, event.persona, event.kollege, event.genericChar1, event.genericNumber1).subscribe();
    }
    // this.router.navigate(['calendar'],);
    //location.reload();
  }

  toggleDelShow() {
     this.toggleDel = !this.toggleDel;
     
     if (this.toggleDel == false) {
      if (!this.displayedColumns.includes('restore')) {
        this.displayedColumns.push('restore');
      }
      this.toggleName = "Hide deleted";
      document.getElementById("toggleDelBt").textContent = "Hide deleted";
      this.apagarLabel = '';
      // TO SELECT THE DELETED ROWS
      let local_data: Event[];

      this.apiService.getEvents()
      .subscribe(events => {local_data = events.filter(ev => ev.color == '#FFFFFF');
                            this.utilsService.dataSource = new MatTableDataSource(local_data);
                            });
     } else {
       this.toggleActiveFunction();
        this.toggleName = "Show deleted";
        document.getElementById("toggleDelBt").textContent = "Show deleted";
        this.apagarLabel = ' Apagar';
     }
    //location.reload();
  }

toggleActiveFunction() {
  
  this.apiService.getEvents()
  .subscribe(events => {this.eventss = events.filter(ev => ev.color !== '#FFFFFF'),
                        this.utilsService.dataSource = new MatTableDataSource(this.eventss);
                        //console.log('ddd',this.utilsService.dataSource.data, this.utilsService.dataSource);
                        const displayedColumns: string[] = ['confirm', 'start', 'title', 'insurance',
                              'persona', 'kollege', 'partner', 'status', 'comment', 'action', 'laudo'];
                        this.displayedColumns = displayedColumns;
                          //######//
                        // Overrride default filter behaviour of Material Datatable
                        this.utilsService.dataSource.filterPredicate = this.createFilter(),
                        this.utilsService.dataSource.data = this.eventss,
                        this.addPersonaNameToFilter(),
                        this.addKollegeNameToFilter(),
                        this.filterSelectObj.filter((o) => {
                          o.options = this.getFilterObject(this.eventss, o.columnProp);
                        });
                       // this.sincColorDel();
                //console.log('toggleDel', this.toggleDel);
                        this.utilsService.dataSource.paginator = this.paginator
                      //  this.dataSource.sort = this.sort
                        });
 
       
}

toggleDelFunction() {
  /*
    this.apiService.getEvents()
    .subscribe(events => {this.eventss = events.filter(ev => ev.color == '#FFFFFF'),
                          this.dataSource = new MatTableDataSource(this.eventss),

                            //######//
                          // Overrride default filter behaviour of Material Datatable
                          this.dataSource.filterPredicate = this.createFilter(),
                          this.dataSource.data = this.eventss,
                          this.addPersonaNameToFilter(),
                          this.addKollegeNameToFilter(),
                          this.filterSelectObj.filter((o) => {
                            o.options = this.getFilterObject(this.eventss, o.columnProp);
                          });
                         // this.sincColorDel();
                    //console.log('toggleDel', this.toggleDel);
                          this.dataSource.paginator = this.paginator
                        //  this.dataSource.sort = this.sort
                          });
          */
}

/*
  openDialog() {
    //let local_evs = this.eventss;
    console.log('evss on dial',this.eventss);
    const dialogRef = this.dialog.open(DeletedDialog, {
      width: '450px',
      maxHeight: '400px',
      data: this.eventsAll.filter(x => x.color == '#FFFFFF'),
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.router.navigate(['calendar'],);
      //location.reload();
      //local_evs = result;
      //this.eventss = result;
      console.log('res',result);
      // Inadequate but cannot show cancelados again if not refresshed
      // Corrected with local variables above or not resetting eventss wth 'this.eventss = result'
      //location.reload();
    });
  }
  */

  openDialogx(action, dataobj) {
    console.log('at openDialogx', dataobj, dataobj.action);//event obj, undefined
    dataobj.action = action;
    console.log('at openDialogx', dataobj);//str, str
    const dialogRefx = this.dialogx.open(EventStatusDialogComponent, {
      width: '250px',
      data: dataobj
    });

    dialogRefx.afterClosed().subscribe(result => {
     // console.log('result.event', result, result.event);
      if(result.event == 'Novo'){
        this.addRowData(result.data);
      }else if(result.event == 'Atualizar'){
      //  console.log('afterclose', result, result.data);
        this.updateRowData(result.data);//passes an event
      }else if(result.event == 'Apagar'){
        this.deleteRowData(result.data);
      }
    });    
  }

  addRowData(row_obj){
  /*  var d = 1;
    this.dataSource.data.push({
      id:d,
      title:row_obj.title
      ...
      ...
    });
    this.evtable.renderRows();
    */
  }
  updateRowData(row_obj: Event){
    //Needs to touch db
    this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter((valu,key)=>{
      if(valu.id == row_obj.id){
        console.log('value:', valu.id, valu, row_obj, this.utilsService.dataSource.data);// value and row_obj are two differ obj with the same values
        valu.status = row_obj.status;
        this.apiService.putEventConf(valu.id, valu.title, valu.partner, valu.start,
                                    valu.color, valu.status, valu.addtitle2, valu.persona,
                                    valu.kollege, valu.genericChar1, valu.genericNumber1)
                                    .subscribe();
      }
      return true;
    });
  }


  putBackDeletedEvent(arg: Event) {
    //console.log('arg putback: ', arg);
    //console.log('data deletedDial: ', this.data);
    //this.toggleActiveFunction();
    this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter(
      (value, key) => { if (value.id == arg.id) {
        console.log(value.id, arg.id)
        const color = '';
        const status = 'agendado';
        this.apiService.putEventConf(
                        arg.id, arg.title, arg.partner, arg.start,
                        color, status, arg.addtitle2, arg.persona,
                        arg.kollege, arg.genericChar1, arg.genericNumber1
                        ).subscribe();
        //this.dialogRef.close();
      }
      return true;
    });
    this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter((value,key)=>{
      return value.id !== arg.id;
    });

    if (this.utilsService.dataSource.data.length < 1) {
      setTimeout(() => this.toggleActiveFunction(), 300);
      this.toggleName = "Show deleted";
      document.getElementById("toggleDelBt").textContent = "Show deleted";
    }
    
    //setTimeout(() => this.toggleActiveFunction(), 4000);
    //setTimeout(() => this.router.navigate(['/calendar']), 5000);
    
    // toggleActiveFunction needs to be assync. So, an observable shall be better
    // without a delay, the view does not change and does not show up with the retored evento
    //setTimeout(_ => this.toggleActiveFunction(), 500);

  }

  deleteRowData(row_obj: Event){
    // Just hide but doesnt touch db. This bit of code changes the view without refreshing.
    // For this to happen, return false to the filter
    this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter((value,key)=>{
      return value.id !== row_obj.id;
    });
    // Even if there is no change in color or status, the view drops the pseudodeleted row that shows up again after refreshing
    row_obj.color = '#FFFFFF';
    row_obj.status = 'cancelado'
    this.apiService.putEventConf(row_obj.id, row_obj.title, row_obj.partner, row_obj.start, row_obj.color,
                                row_obj.status, row_obj.addtitle2, row_obj.persona, row_obj.kollege, row_obj.genericChar1, row_obj.genericNumber1).subscribe();

    
    // This way needs refreshing to change view
    // SO, needs to change the passed arg, row_obj?
 /*   this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      if (value.id == row_obj.id) {
      value.color = '#FFFFFF';
      value.status = 'cancelado';
      row_obj.color = '#FFFFFF';
      row_obj.status = 'cancelado';
      this.apiService.putEventConf(value.id, value.title, value.partner, value.start,
                                  value.color, value.status, value.persona,
                                  value.kollege, value.genericChar1, value.genericNumber1)
                                  .subscribe();
      }
      return true;
    });
 */   
    }

  }

  @Component({
    selector: 'event-status-dialog',
    templateUrl: 'event-status-dialog.html',
  })
  
  export class EventStatusDialogComponent {
    action: string;
    local_data: any;
  
    constructor(
      public dialogRefx: MatDialogRef<EventStatusDialogComponent>,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: Event) {
        this.local_data = {...data};
        this.action = this.local_data.action;
      }
  
      doAction(){
        this.dialogRefx.close({event:this.action,data:this.local_data});
      }
    
      closeDialogx(){
        this.dialogRefx.close({event:'Cancel'});
      }
  
  }
  
 /* 
    @Component({
      selector: 'deleted-dialog',
      templateUrl: 'deleted-dialog.html',
    })
  
    export class DeletedDialog {
      local_data: Event[];
      toggleDel: boolean = true;

      constructor(public dialogRef: MatDialogRef<DeletedDialog>,
                  @Optional() @Inject(MAT_DIALOG_DATA) public data: Event[],
                  private apiService: ApiService,
                  public utilsService: UtilsService)
                  { this.local_data = data; }

      onNoClick(): void {
        this.dialogRef.close();
      }

      ngAfterViewInit() {
        // If toggleDel is false, table shows only 'deleted'
        if (this.toggleDel) {
        this.apiService.getEvents()
        .subscribe(events => {this.local_data = events.filter(ev => ev.color == '#FFFFFF'),
                              this.utilsService.dataSource = new MatTableDataSource(this.local_data),
                              console.log('ddd',this.utilsService.dataSource.data, this.utilsService.dataSource.filteredData, this.utilsService.dataSource)
                              });
      } else {
        this.apiService.getEvents()
        .subscribe(events => {this.local_data = events.filter(ev => ev.color == '#FFFFFF'),
                              this.utilsService.dataSource = new MatTableDataSource(this.local_data)
                              });
              }
      }

      putBackDeletedEvent(arg: Event) {
        //console.log('arg putback: ', arg);
        //console.log('data deletedDial: ', this.data);

        this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter(
          (value, key) => { if (value.id == arg.id) {
            console.log(value.id, arg.id)
            const color = '';
            const status = 'agendado';
            this.apiService.putEventConf(
                            arg.id, arg.title, arg.partner, arg.start,
                            color, status, arg.persona,
                            arg.kollege, arg.genericChar1, arg.genericNumber1
                            ).subscribe();
            this.dialogRef.close();
          }
          return true;
        });

        this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter((value,key)=>{
          return value.id !== arg.id;
        });

      }
      
    }
    */