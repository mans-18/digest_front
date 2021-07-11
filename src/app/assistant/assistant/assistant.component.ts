
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
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})
export class AssistantComponent implements OnInit {
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
                                'persona', 'kollege', 'partner', 'status', 'addtitle1', 'addtitle2', 'comment'];
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
    public dialogextra: MatDialog,
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
        name: 'DATA',
        columnProp: 'start',
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

  eventClicked(arg: Event) {
    const id = arg.persona;
    // console.log('color', arg.color)
    //this.router.navigate([`persona-form-detail/${id}`],);
  }

  //######//
  filterValues = {};
  filterSelectObj = [];

  ngOnInit(): void {   
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
    }
  }

  //Mat table
  ngAfterViewInit() {
    if (this.toggleDel) {
    //Dates filtered: less than 4h from now and more than 12h from now
    const today = Date.now();
    this.apiService.getEvents()
    .subscribe(events => {this.eventss = events.filter(ev => (ev.status == 'confirmado' || ev.status == 'agendado') && ev.color !== '#FFFFFF' && (new Date(ev.start).getTime() > today-14400000 && new Date(ev.start).getTime() < today + 43200000)),
                          this.utilsService.dataSource = new MatTableDataSource(this.eventss),
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

  openDialogx(action, dataobj) {
    console.log('at openDialogx', dataobj, dataobj.action);//event obj, undefined
    dataobj.action = action;
    console.log('at openDialogx', dataobj);//str, str
    const dialogRefx = this.dialogx.open(AssistantStatusDialogComponent, {
      width: '250px',
      data: dataobj
    });

    dialogRefx.afterClosed().subscribe(result => {
     // console.log('result.event', result, result.event);
      if(result.event == 'Novo'){
      }else if(result.event == 'Atualizar'){
      //  console.log('afterclose', result, result.data);
        this.updateRowData(result.data);//passes an event
      }else if(result.event == 'Apagar'){
        this.deleteRowData(result.data);
      }
    });    
  }

  openDialogExtra(action, dataobj) {
    console.log('at openDialogx', dataobj, dataobj.action);//event obj, undefined
    dataobj.action = action;
    console.log('at openDialogx', dataobj);//str, str
    const dialogRefx = this.dialogextra.open(AssistantExtraDialogComponent, {
      width: '250px',
      data: dataobj
    });

    dialogRefx.afterClosed().subscribe(result => {
     // console.log('result.event', result, result.event);
      if(result.event == 'Novo'){
      }else if(result.event == 'Atualizar'){
      //  console.log('afterclose', result, result.data);
        this.updateRowData(result.data);//passes an event
      }else if(result.event == 'Apagar'){
        this.deleteRowData(result.data);
      }
    });    
  }

  updateRowData(row_obj: Event){
    //Needs to touch db
    this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter((valu,key)=>{
      if(valu.id == row_obj.id){
        console.log('value:', valu.id, valu, row_obj, this.utilsService.dataSource.data);
        // value and row_obj are two differ obj with the same values. So need to make the below binding
        valu.status = row_obj.status;
        valu.addtitle2 = row_obj.addtitle2;
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
    }

  }

  @Component({
    selector: 'assistant-status-dialog',
    templateUrl: 'assistant-status-dialog.html',
  })
  
  export class AssistantStatusDialogComponent {
    action: string;
    local_data: any;
  
    constructor(
      public dialogRefx: MatDialogRef<AssistantStatusDialogComponent>,
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

  @Component({
    selector: 'assistant-extra-dialog',
    templateUrl: 'assistant-extra-dialog.html',
  })
  
  export class AssistantExtraDialogComponent {
    action: string;
    local_data: any;
  
    constructor(
      public dialogRefx: MatDialogRef<AssistantExtraDialogComponent>,
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