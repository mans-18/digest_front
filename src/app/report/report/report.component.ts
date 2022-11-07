import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/services/api.service';
import { EventReport } from '../../models/eventReport';
import { Event } from '../../models/event';
import { Partner } from 'src/app/models/partner';
import { Kollege } from 'src/app/models/kollege';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit, AfterViewInit {

  eventReport: EventReport;
  eventReports: EventReport[] = [];
  events: Event[] = [];
  event: Event;
  personas: Persona[];
  partners: Partner[];
  kollegen: Kollege[];
  listTag = true;
  im1ToDisplay = new Image();
  
  photo = null;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private location: Location) { }
  
  
  ngOnInit() {
    // this.photo = document.getElementById('photo');
    // this.getEvents();
    // this.getEventNo404();
    // this.getPersonas();
    // this.getKollegen();
    // this.getPartners();
    // this.getEventReport();
    // this.getEventReports();
    // console.log('report data', this.getPersonas(), this.getKollegen());
    //this.decodeImage();
  }

  ngAfterViewInit() {
    // Calling here prevents undefined upon following the <a> link on the /reportlist template
    // NO, it does not prevent but seems to reduce
    this.getEvents();
    this.getEventNo404();
    this.getPersonas();
    this.getKollegen();
    this.getPartners();
    this.getEventReport();
    this.getEventReports();
  }

  setAttr() {
    var src = this.eventReport.im1
    this.photo.setAttribute('src', src);
  }

  getEventReports(): void {
    this.apiService.getEventReports()
      .subscribe(events => this.eventReports = events);
  
  }

  getEvents() {
    this.apiService.getEvents()
      .subscribe(events => this.events = events);
  }

  getEventNo404() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getEventNo404(id)
      .subscribe(event => this.event = event);
  }

  getEventReport() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getEventReport(id)
      .subscribe(eventReport => this.eventReport = eventReport);
  }

  getPersonas() {
    this.apiService.getPersonas()
      .subscribe(pers => this.personas = pers);
  }

  getPartners() {
    this.apiService.getPartners()
      .subscribe(partners => this.partners = partners);
  }

  getKollegen() {
    this.apiService.getKollegen()
      .subscribe(kols => this.kollegen = kols);
  }

  /* // It was not doing. But no need to decode. Send im.src to db, fetch it back, and set 'src' attrib to it
  decodeImage() {
    // Use createObjectURL to make a URL for the blob
    //var image = new Image();
    // Convert the string to bytes
    var bytes = new Uint8Array(this.eventReport.im1.length / 2);

    for (var i = 0; i < this.eventReport.im1.length; i += 2) {
        bytes[i / 2] = parseInt(this.eventReport.im1.substring(i, i + 2), 16);
    }

    // Make a Blob from the bytes
    var blob = new Blob([bytes], {type: 'image/bmp'});

    this.im1ToDisplay.src = URL.createObjectURL('blob');
    console.log('eventReportIm1', this.eventReport.im1, 'bytes', bytes, 'blob', blob);  
  }
  */   
}

