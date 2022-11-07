import { Component, OnInit } from '@angular/core';
import { parseTwoDigitYear } from 'moment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  //Creates a Date obj (today)
  //Gets the year, month, two-digit month if month<10, day, and two-digit day if day<10
  //Gets today date in a format accepted by <input xxx='date'>
  objDate: Date = new Date();
  yearObjDate = this.objDate.getFullYear();
  monthObjDate = this.objDate.getMonth()+1;
  monthObjDateF = (this.monthObjDate<10)?('0'+this.monthObjDate):this.monthObjDate;
  dayObjDate = this.objDate.getDate();
  dayObjDateF = (this.dayObjDate<10)?('0'+this.dayObjDate):this.dayObjDate;
  datetoday = this.yearObjDate + '-' + this.monthObjDateF + '-' + this.dayObjDateF;

  //A similar logic to enddate
  endmonthObjDate = this.objDate.getMonth()+4;
  endmonthObjDateF = (this.endmonthObjDate<10)?('0'+this.endmonthObjDate):this.endmonthObjDate;
  enddate = this.yearObjDate + '-' + this.endmonthObjDateF + '-' + this.dayObjDateF;

  constructor() { }

  ngOnInit(): void {
  }

}
