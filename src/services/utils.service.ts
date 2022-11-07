import { AfterViewInit, Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './api.service';
import { Event } from 'src/app/models/event';

@Injectable({
  providedIn: 'root'
})

export class UtilsService implements AfterViewInit {

  eventss: Event[] = [];
  dataSource: MatTableDataSource<Event>;

  constructor(
    private apiService: ApiService,
  ) { }

  ngAfterViewInit(): void {
    this.apiService.getEvents().subscribe(
      event => { this.eventss = event.filter(ev => ev.color !== 'FFFFFF'),
      this.dataSource = new MatTableDataSource(this.eventss);
      });
  }

}
