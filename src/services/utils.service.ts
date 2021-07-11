import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './api.service';
import { Event } from 'src/app/models/event';

@Injectable({
  providedIn: 'root'
})

export class UtilsService {

  eventss: Event[] = [];
  dataSource: MatTableDataSource<Event>;

  constructor(
    private apiService: ApiService,
  ) { }

  ngAfterViewInit() {
    this.apiService.getEvents().subscribe(
      event => { this.eventss = event.filter(ev => ev.color !== 'FFFFFF'),
      this.dataSource = new MatTableDataSource(this.eventss)
      });
  }

}
