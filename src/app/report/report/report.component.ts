import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { EventReport } from '../../models/eventReport';
import { Event } from '../../models/event';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit, AfterViewInit {

  eventReport: EventReport;
  eventReports: EventReport[] = [];
  events: Event[] = [];
  im1ToDisplay = new Image();
  
  photo = null;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,) { }
  
  
  ngOnInit() {
    this.photo = document.getElementById('photo');
    this.getEvents();
    this.getEventReport();
    this.getEventReports();
    //this.decodeImage();
  }

  ngAfterViewInit() {
    
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

  getEventReport() {
    const ix = +this.route.snapshot.paramMap.get('ix');
    this.apiService.getEventReport(ix)
      .subscribe(event => this.eventReport = event);
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

