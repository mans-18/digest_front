import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { Event } from '../../models/event';
import { Persona } from '../../models/persona';
import { Kollege } from 'src/app/models/kollege';

import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

export class PersonaComponent implements AfterViewInit, OnInit {
  new_event = "Nova Persona";
  events: Event[] = [];
  // selectedEvent: Event;
  @Input() personas: Persona[] = [];
  kollegen: Kollege[] = [];

  faPlus = faPlus;

  faEdit = faEdit;
  faTrash = faTrash;
  hideme = [];
  eventInformation: any = [];
  Index: any;

  //Mat table wt filter, pag, sort
  displayedColumns: string[] = ['id', 'del', 'edit', 'name', 'mobile', 'whatsapp', 'telephone', 'email', 'street',
                                'complement', 'postalcode', 'dob', 'registerdate', 'comment'];
  dataSource!: MatTableDataSource<Persona>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  newEvent(){
    this.router.navigate(['event-form-modal'],);
  }

  eventClicked(arg: Persona) {}

  //######//
  // filterValues = {};
  // filterSelectObj = [];

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router)  {
      
      //######//
      // Object to create Filter for
    /*this.filterSelectObj = [
      {
        name: 'ID',
        columnProp: 'id',
        options: []
      }, {
        name: 'NOME',
        columnProp: 'name',
        options: []
      }, {
        name: 'CELULAR',
        columnProp: 'mobile',
        options: []
      }, {
        name: 'EMAIL',
        columnProp: 'email',
        options: []
      }, {
        name: 'DN',
        columnProp: 'dob',
        options: []
      }
    ]*/

    }

  ngOnInit(): void {
    const mrToken = this.cookieService.get('mr-token');
    console.log('mrToken on persona:', mrToken);
    if (!mrToken) {
      this.router.navigate(['/auth']);
    } else {
      this.getEvents();
      this.getPersonas();
      this.getKollegen();
      // console.log('personas on Init: ', this.personas);
    }

  }

  //Mat table
  ngAfterViewInit() {
    this.apiService.getPersonas()
    .subscribe(pers => {this.personas = pers,
                          this.dataSource = new MatTableDataSource(this.personas),

                          //######//
                          // Overrride default filter behaviour of Material Datatable
                          //this.dataSource.filterPredicate = this.createFilter();
                          this.dataSource.data = this.personas;
                          //this.filterSelectObj.filter((o) => {
                          //  o.options = this.getFilterObject(this.personas, o.columnProp);
                         // });
                          
                          this.dataSource.paginator = this.paginator,
                          this.dataSource.sort = this.sort
                          });

  }

  //####
  // Get Uniqu values from columns to build filter
  /*getFilterObject(fullObj, key) {
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
    this.dataSource.filter = JSON.stringify(this.filterValues)
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
    this.dataSource.filter = "";
    }
  */

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

  getEvents(): void {
    this.apiService.getEvents()
    .subscribe(events => this.events = events);
    // console.log('events: ', this.events[0].id);
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

  add(title: string, start: Date, color: string,
      insurance: string, resourceId: string, comment: string,
      persona: number, kollege: number): void {

    if (!event) { return; }
    this.apiService.addEvent({ title, start, color,
      insurance, resourceId, comment,
      persona, kollege } as Event)
      .subscribe(event => {
        this.events.push(event);
      });
  }

  // update(persona: Persona) {
  //   this.personas = this.personas.filter(h => h !== persona);
  //   this.apiService.updatePersona(persona).subscribe();
  // }

  // update(id: number, name: string, mobile: number,
  //   whatsapp: number, telephone: number, email: string,
  //   street: string, complement: string, postalcode: string,
  //   dob: Date, registerdate: Date, comment: string) {
  //   // this.personas = this.personas.filter(h => h !== persona);
  //   this.apiService.updatePersona(id, name, mobile, whatsapp, telephone, email, street,
  //                                 complement, postalcode, dob, registerdate, comment).subscribe();
  // }

  delete(persona: Persona): void {
    if (confirm(`Are you sure you want to delete this persona '${persona.name}'`)) {
    this.personas = this.personas.filter(h => h !== persona);
    this.apiService.deletePersona(persona.id).subscribe();
    }
  }

}
