import { Component, ElementRef, Inject, Input, OnInit, Optional, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventReport } from 'src/app/models/eventReport';
import { Event } from '../../models/event';
import { ApiService } from 'src/services/api.service';
import { Persona } from 'src/app/models/persona';
import { Kollege } from 'src/app/models/kollege';
import { Partner } from 'src/app/models/partner';
import { UtilsService } from 'src/services/utils.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reportlist',
  templateUrl: './reportlist.component.html',
  styleUrls: ['./reportlist.component.css']
})
export class ReportlistComponent implements OnInit {

  eventReports: EventReport[] = [];
  eventss: Event[] = [];
  @Input() personas: Persona[] = [];
  @Input() kollegen: Kollege[] = [];
  @Input() partners: Partner[] = [];

  //displayedColumns: string[] = ['start', 'title', 'insurance',
    //                            'persona', 'kollege', 'partner', 'laudo'];
  
displayedColumns: string[] = ['start', 'persona', 'title', 'kollege'];
  
  dataSource!: MatTableDataSource<EventReport>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

   //######//
   filterValues = {};
   filterSelectObj = [];
  
  constructor(
    //public dialogRef: MatDialogRef<EventComponent>,
    private apiService: ApiService,
    //private cookieService: CookieService,
    //private router: Router,
    public dialog : MatDialog,
    public dialogx: MatDialog,
    public utilsService: UtilsService,
    private route: ActivatedRoute,
    private location: Location) {
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
  
  
  ngOnInit() {
    this.getEvents();
    this.getEventReports();
    this.getPersonas();
    this.getKollegen();
  }

  ngAfterViewInit() {
    this.apiService.getEventReports()
    .subscribe(evreports => {this.eventReports = evreports,
                          this.dataSource = new MatTableDataSource(this.eventReports),

                          //######//
                          // Overrride default filter behaviour of Material Datatable
                          //this.dataSource.filterPredicate = this.createFilter();
                          this.dataSource.data = this.eventReports;
                          //this.filterSelectObj.filter((o) => {
                          //  o.options = this.getFilterObject(this.personas, o.columnProp);
                         // });
                          
                          this.dataSource.paginator = this.paginator,
                          this.dataSource.sort = this.sort
                          });

  }

  getEventReports(): void {
    this.apiService.getEventReports()
      .subscribe(events => this.eventReports = events);
  
  }

  getEvents() {
    this.apiService.getEvents()
      .subscribe(events => this.eventss = events);
  }

  getPersonas(): void {
    this.apiService.getPersonas()
    .subscribe(data => this.personas = data);
  }

  getKollegen(): void {
    this.apiService.getKollegen()
    .subscribe(data => this.kollegen = data);
    // console.log('kollegen: ', this.kollegen);
  }

  //####//Filter slected value in columns
  //https://www.freakyjolly.com/angular-material-table-custom-filter-using-select-box/#.YEWVquZv8Wo

  //Doesnt function with the custom filters
  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eventClicked(arg: Event) {}

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
  
  openDialogx(action, dataobj) {
    console.log('at openDialogx', dataobj, dataobj.action);//event obj, undefined
    dataobj.action = action;
    console.log('at openDialogx', dataobj);//str, str
    // const dialogRefx = this.dialogx.open(EventStatusDialogComponent, {
    //   width: '250px',
    //   data: dataobj
    // });

    // dialogRefx.afterClosed().subscribe(result => {
    //  // console.log('result.event', result, result.event);
    //   if(result.event == 'Novo'){
    //     this.addRowData(result.data);
    //   }else if(result.event == 'Atualizar'){
    //   //  console.log('afterclose', result, result.data);
    //     this.updateRowData(result.data);//passes an event
    //   }else if(result.event == 'Apagar'){
    //     this.deleteRowData(result.data);
    //   }
    // });    
  }

}


// @Component({
//   selector: 'event-status-dialog',
//   templateUrl: 'event-status-dialog.html',
// })

// export class EventStatusDialogComponent {
//   action: string;
//   local_data: any;

//   constructor(
//     public dialogRefx: MatDialogRef<EventStatusDialogComponent>,
//     @Optional() @Inject(MAT_DIALOG_DATA) public data: Event) {
//       this.local_data = {...data};
//       this.action = this.local_data.action;
//     }

//     doAction(){
//       this.dialogRefx.close({event:this.action,data:this.local_data});
//     }
  
//     closeDialogx(){
//       this.dialogRefx.close({event:'Cancel'});
//     }

// }

