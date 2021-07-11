import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Event } from '../models/event';
import { Persona } from '../models/persona';
import { Kollege } from '../models/kollege';
import { User } from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  events: Event[] = [];
  eventos: Event[] = [];
  personas: Persona[] = [];
  kollegen: Kollege[] = [];
  todayEvents: Event[] = [];
  today: number = Date.now();
  evv: Event[] = [];
  users: User[] = [];

  emailForm = new FormGroup({
    kolName: new FormControl(''),
    // kolCrm: new FormControl(''),
    // kolEmail: new FormControl(''),
  });

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router

    // private _util: UtilService,
    // private _http: HttpService,
    ) { }

  ngOnInit() {
    // this.apiService.getDigests().subscribe(
    //   (data: Digest[]) => {
    //     this.digests = data.sort((a ,b) => (a.start > b.start) ? 1 : -1);
    //     console.log(`digests onInit: ${this.digests}`);
    //   },
    //   error => console.log(error)
    //   );
    this.getUsers();
    const mrToken = this.cookieService.get('mr-token');
    console.log('mrToken on events:', mrToken);
    if (!mrToken) {
      this.router.navigate(['/auth']);
    } else {
    this.getEvents();
    this.getPersonas();
    this.getKollegen();
    this.getTodayEvents();
    this.changeVar();
    }
  }

  getUsers(): void {
    this.apiService.getUsers()
      .subscribe(users => this.users = users);
  }

  // Get the data but infinit looping
  // ngAfterContentChecked() {
  //   this.getTodayEvents();
  // }

  getEvents(): void {
    this.apiService.getEvents()
      .subscribe(arg => this.events = arg.slice(0, 15));
      console.log('dash: ', this.events);
      console.log('ev[0]: ', this.events.lastIndexOf);
  }

  getTodayEvents() {
    // let evv: Event[] = [];
    this.apiService.getEvents()
      .subscribe(arg => this.todayEvents = arg.filter(r => new Date(r.start).getTime() > Date.now()-60300000))
    // let today: number = Date.now();
    // console.log('today: ', today)
    // let passed: Event[] = [];
    // for (let evs of evv) {
    //   if (evs.start.getTime() == today) {
    //     passed.push(evs);
    //   }
    // }
  }

  delKol(kol: Kollege): void {
    console.log('kol', kol);
    if (confirm(`Are you sure you want to delete this kollege '${kol.name}'`)) {
      this.kollegen = this.kollegen.filter(h => h !== kol);
      this.apiService.deleteKollege(kol).subscribe();
    }
  }


  changeVar() {
    this.todayEvents = this.evv;
    console.log(this.evv);
  }
  // personas and digests are empty here on console,
  // but are filled up when called by the template
  getPersonas(): void {
    this.apiService.getPersonas()
      .subscribe(data => this.personas = data)
      console.log('personass: ', this.personas)
  }
  getKollegen(): void {
    this.apiService.getKollegen()
      .subscribe(data => this.kollegen = data)
  }

  email_Kollege() {
    this.apiService.emailKollege(
      this.emailForm.value.kolName,
      // this.emailForm.value.crm,
      // this.emailForm.value.email
      ).subscribe();
  }

  logout() {
    this.cookieService.delete('mr-token');
    //this.router.navigate(['/auth']);
    this.router.navigate(['/home']);
    //location.reload();
  }
}