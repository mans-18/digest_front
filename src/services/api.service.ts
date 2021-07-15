import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../app/models/persona';
import { CookieService } from 'ngx-cookie-service';
import { Kollege } from '../app/models/kollege';
import { Event } from '../app/models/event'
import { MessageService } from './message.service';
import { Partner } from 'src/app/models/partner';
import { EventReport } from 'src/app/models/eventReport';
import { User } from 'src/app/models/user';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  //baseUrl = 'http://127.0.0.1:8000/';
  baseUrl = 'https://digestback.herokuapp.com/'
  baseDigestUrl = `${this.baseUrl}api/persona/events/`; // TO BE DELETED
  baseEventUrl = `${this.baseUrl}api/persona/events`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ApiService: ${message}`);
  }

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private messageService: MessageService
  ) { }

  // ######## API SERVICES ###########

  createEvent(title: string, partner: string, start: Date, color: string, status: string, insurance: string, resourceId: string,
              addtitle1: string, addtitle2: string, addtitle3: string, comment: string, persona: number,
              kollege: number) {

    const body = JSON.stringify({title, partner, start, color, status, insurance, resourceId, addtitle1, addtitle2,
                                 addtitle3, comment, persona, kollege})

    return this.httpClient.post(`${this.baseEventUrl}/`, body, {headers: this.getAuthHeaders()})
    }

  getEvents(): Observable<Event[]> {
    // this.messageService.add('ApiService: fetched events');
    // return of(events);
    console.log(this.headers);
    return this.httpClient.get<Event[]>(this.baseEventUrl)
      .pipe(
        tap(_ => this.log('fetched events')),
        catchError(this.handleError<Event[]>('getEvents', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getEventNo404<Data>(id: number): Observable<Event> {
    const url = `${this.baseEventUrl}/?id=${id}`;
    return this.httpClient.get<Event[]>(url)
      .pipe(
        map(events => events[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} event id=${id}`);
        }),
        catchError(this.handleError<Event>(`getEvent id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getEvent(id: number): Observable<Event> {
    const url = `${this.baseEventUrl}/${id}/`;
    return this.httpClient.get<Event>(url).pipe(
      tap(_ => this.log(`fetched event id=${id}`)),
      catchError(this.handleError<Event>(`getEvent id=${id}`))
    );
  }

  /** POST: add a new hero to the server */
  addEvent(event: Event): Observable<Event> {
    return this.httpClient.post<Event>(this.baseEventUrl, event, this.httpOptions)
      .pipe(
        tap((newEvent: Event) => this.log(`added event w/ id=${newEvent.id}`)),
        catchError(this.handleError<Event>('addEvent'))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteEvent(event: Event | number): Observable<Event> {
    const id = typeof event === 'number' ? event : event.id;
    const url = `${this.baseEventUrl}/${id}/`;

    return this.httpClient.delete<Event>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted event id=${id}`)),
      catchError(this.handleError<Event>('deleteEvent'))
    );
  }

  updateEvent(id: number, title: string, partner: string, start: Date, color: string, status: string, insurance: string, resourceId: string,
              addtitle1: string, addtitle2: string, addtitle3: string, comment: string, persona: number,
              kollege: number) {

    const body = JSON.stringify({title, partner, start, color, status, insurance, resourceId, addtitle1, addtitle2,
                                  addtitle3, comment, persona, kollege})
    console.log('body api_serv:', body);
    console.log(typeof(start), typeof(Date), typeof(new Date()));
    return this.httpClient.put(`${this.baseEventUrl}/${id}/`, body, {headers: this.getAuthHeaders()})
  }

  putEvent(id: number, title: string, start: Date, resourceId: string, persona: number, kollege: number) {
    const body = JSON.stringify({title, start, resourceId, persona, kollege})
    console.log('body api_serv:', body);
    return this.httpClient.put(`${this.baseEventUrl}/${id}/`, body, {headers: this.getAuthHeaders()})
  }

  putEvent_(id: number, title: string, start: Date, persona: number, kollege: number) {
    const body = JSON.stringify({title, start, persona, kollege})
    // console.log('body api_serv___:', body);
    return this.httpClient.put(`${this.baseEventUrl}/${id}/`, body, {headers: this.getAuthHeaders()})
  }

  putEventByAssistant(id: number, title: string, persona: number, kollege: number, status: string) {
    const body = JSON.stringify({title, persona, kollege, status})
    // console.log('body api_serv___:', body);
    return this.httpClient.put(`${this.baseEventUrl}/${id}/`, body, {headers: this.getAuthHeaders()})
  }

  putEventDel(id: number, title: string, start: Date, color: string, status: string, persona: number, kollege: number) {
    const body = JSON.stringify({id, title, start, color, status, persona, kollege})
    // console.log('body api_serv:', body);
    return this.httpClient.put(`${this.baseEventUrl}/${id}/`, body, {headers: this.getAuthHeaders()})
  }

  putEventConf(id: number, title: string, partner: string, start: Date, color: string, status: string, addtitle2: string, persona: number, kollege: number, genericChar1: string, genericNumber1: number) {
    const body = JSON.stringify({id, title, partner, start, color, status, addtitle2, persona, kollege, genericChar1, genericNumber1})
    // console.log('body api_serv:', body);
    return this.httpClient.put(`${this.baseEventUrl}/${id}/`, body, {headers: this.getAuthHeaders()})
  }

  createPersona(name: string, mobile: number, whatsapp: number, telephone: number,
    email: string, street: string, complement: string, postalcode: string,
    dob: Date, registerdate: Date, comment: string) {
    const body = JSON.stringify({name, mobile, whatsapp, telephone, email, street,
                      complement, postalcode, dob, registerdate, comment});
    return this.httpClient.post(`${this.baseUrl}api/persona/personas/`, body, {headers: this.getAuthHeaders()})
  }

  getPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(`${this.baseUrl}api/persona/personas/`, {headers: this.getAuthHeaders()})
      .pipe(
        tap(_ => this.log('fetched personas')),
        catchError(this.handleError<Persona[]>('getPersonas', []))
      );
  }

  getPersona(id: number): Observable<Persona> {
    const url = `${this.baseUrl}api/persona/personas/${id}/`;
    return this.httpClient.get<Persona>(url).pipe(
      tap(_ => this.log(`fetched persona id=${id}`)),
      // this does not solve the incomplete form problem on personaFormDetail
      // delay(5000),
      catchError(this.handleError<Persona>(`getPersona id=${id}`))
    );
  }

  // Headers ok???? No authorization key?
  updatePersona(id: number, name: string, mobile: number,
                whatsapp: number, telephone: number, email: string,
                street: string, complement: string, postalcode: string,
                dob: Date, registerdate: Date, comment: string) {
    const body = JSON.stringify({ name, mobile, whatsapp, telephone, email, street,
                                  complement, postalcode, dob, registerdate, comment})
    return this.httpClient.put(`${this.baseUrl}api/persona/personas/${id}/`, body, { headers: this.headers })
  }

  deletePersona(persona: Persona | number): Observable<Persona> {
    const id = typeof persona === 'number' ? persona : persona.id;
    const url = `${this.baseUrl}api/persona/personas/${id}/`;

    return this.httpClient.delete<Persona>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted persona id=${id}`)),
      catchError(this.handleError<Persona>('deletePersona'))
    );
  }

  createKollege(name: string, crm: string, email: string) {
    const body = JSON.stringify({name, crm, email});
    return this.httpClient.post(`${this.baseUrl}api/persona/kollegen/`,
                                body, {headers: this.getAuthHeaders()}).pipe(
                                  catchError(this.handleError<Kollege>('Bad request'))
                                )
  }

  /// To send email 31-8-20
  updateKollege(id: number, name: string, crm: string, email: string) {
    const body = JSON.stringify({name, crm, email});
    return this.httpClient.put(`${this.baseUrl}api/persona/kollegen/${id}`, body, {headers: this.getAuthHeaders()})
  }

  getKollegen() {
    return this.httpClient.get<Kollege[]>(`${this.baseUrl}api/persona/kollegen/`, {headers: this.getAuthHeaders()});
  }

  deleteKollege(kollege: Kollege | number): Observable<Kollege> {
    const id = typeof kollege === 'number' ? kollege : kollege.id;
    const url = `${this.baseUrl}api/persona/kollegen/${id}/`;

    return this.httpClient.delete<Kollege>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted kollege id=${id}`)),
      catchError(this.handleError<Kollege>('deleteKollege'))
    );
  }

  createPartner(name: string, crm: string, email: string, mobile: number, whatsapp: number, telephone: number) {
    const body = JSON.stringify({name, crm, email, mobile, whatsapp, telephone});
    // console.log(body);
    // console.log(this.headers);
    return this.httpClient.post(`${this.baseUrl}api/persona/partners/`,
                                body, {headers: this.getAuthHeaders()}).pipe(
                                  catchError(this.handleError<Partner>('Bad request'))
                                )
  }
  
  getPartners() {
    return this.httpClient.get<Partner[]>(`${this.baseUrl}api/persona/partners/`, {headers: this.getAuthHeaders()});
  }

  // ######## API: EMAIL SERVICES ###########
  emailKollege(name: string) {
    // return this.httpClient.get(`${this.baseUrl}api/persona/email/`, {headers: this.getAuthHeaders()}).subscribe();
    const body = name //JSON.stringify({name});
    alert("email sent!");
    return this.httpClient.post(`${this.baseUrl}api/persona/email/`, body, {headers: this.getAuthHeaders()});
  }

  emailFromSite(name: string, mobile: string, email: EmailValidator, body: string) {
    // return this.httpClient.get(`${this.baseUrl}api/persona/email/`, {headers: this.getAuthHeaders()}).subscribe();
    const bodie = {'name':name, 'mobile': mobile, 'email': email, 'body':body}; //JSON.stringify({name});
    //console.log('body', bodie);
    alert("email sent!");
    return this.httpClient.post(`${this.baseUrl}api/persona/emailserv/`, bodie, {headers: this.getAuthHeaders()});
  }

  // ######## API: SEARCH SERVICES ###########
  /* GET heroes whose name contains search term */
  searchEvents(term: string): Observable<Event[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.httpClient.get<Event[]>(`${this.baseEventUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found events matching "${term}"`) :
         this.log(`no events matching "${term}"`)),
      catchError(this.handleError<Event[]>('searchEvents', []))
    );
  }

  searchPersonas(term: string): Observable<Persona[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.httpClient.get<Persona[]>(`${this.baseUrl}api/persona/personas?search=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found personas matching "${term}"`) :
         this.log(`no personas matching "${term}"`)),
      catchError(this.handleError<Persona[]>('searchPersonas', []))
    );
  }

  searchPartners(term: string): Observable<Partner[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.httpClient.get<Partner[]>(`${this.baseUrl}api/persona/partners?search=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found partners matching "${term}"`) :
         this.log(`no partners matching "${term}"`)),
      catchError(this.handleError<Partner[]>('searchPartners', []))
    );
  }


// ######## API: AUTH SERVICES ###########
  getUsers(): Observable<User[]> {
    // this.messageService.add('ApiService: fetched events');
    // return of(events);
    return this.httpClient.get<User[]>(this.baseUrl+`api/user/users`)
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }
  loggedUser: string;
  loginUser(authData: any) {
    this.loggedUser = authData.username;
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}auth/`, body, {headers: this.headers})
  }

  registerUser(authData: any) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}users/`, body, {headers: this.headers})
  }

  getAuthHeaders() {
    const token = this.cookieService.get('mr-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
      // Authorization: 'Token 805da997ba4ef2e3ab206d851c388eaeb3ff1e3f'
    })
  }
  
  /** PUT: update the hero on the server */
  // updateEvent(event: Event): Observable<any> {
  //   return this.httpClient.put(this.baseEventUrl, event, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated event id=${event.id}`)),
  //     catchError(this.handleError<any>('updateEvent'))
  //   );
  // }

  // ######## HANDLE ERROR SERVICES ###########
  //   /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      alert(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // deleteEvent(id: number) {
  //   return this.httpClient.delete(`${this.baseEventUrl}${id}/`, {headers: this.getAuthHeaders()})
  // }

  rateEvent(nome: any, rate: number, paciente: any, user: any, digestId: number) {
    /*OK if the full url (http...) is passed. Template literal uses backticks
    not single/double quotes. ${expression} syntax embed an expression in the 
    literal. Post is not allowed by the API on /pacientes/id/*/
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    // console.log(digestId);
    const body = JSON.stringify({nome: nome, staff: rate, paciente: paciente, user: user});
    return this.httpClient.put(`${this.baseEventUrl}${digestId}/`,
          body,
          {headers: this.getAuthHeaders()});
  }

  // TO IMPLEMENT THE URL SEARCHING THE API: TABLE ON MOVIE-LIST
  // ORIGINAL:
  //  eventInfo(productId) {  
    //          this.url = 'http://localhost:49661/api/Company/getProductCountryInformation?productId='+productId;  
    //          return this.http.get<any[]>(this.url);  
    //      }  
  eventInfo(event: Event | number): Observable<Event> {
      const id = typeof event === 'number' ? event : event.id;
      const url = `${this.baseEventUrl}/${id}`;
      // this.eventUrl = 'this.baseEventUrl/?id='+productId;
    return this.httpClient.get<Event>(url, {headers: this.getAuthHeaders()});  
  }

// ######## REPORT SERVICES ###########

createEventReport(//id: number,
  // reportUUID: string,
   im1: String, im2: ImageBitmap, im3: ImageBitmap, im4: ImageBitmap, im5: ImageBitmap,
   im6: ImageBitmap, im7: ImageBitmap, im8: ImageBitmap, im9: ImageBitmap, im10: ImageBitmap,
   drugs: string, anest: string, assistant: string, equipment: string,
   phar: string, esop: string, stom: string, duod: string, urease: string, biopsy: string, hystoResults: string,
   prep: string, quality: string,
   colo: string,
   conc1: string, conc2: string, conc3: string, conc4: string, conc5: string, conc6: string,
   complications: string,
   event: number) {
const body = JSON.stringify({ //reportUUID,
im1, im2, im3, im4, im5, im6, im7, im8, im9, im10,
drugs, anest, assistant, equipment,
phar, esop, stom, duod,
urease, biopsy, hystoResults,
prep, quality,
colo, conc1, conc2, conc3, conc4, conc5, conc6, complications, event});
console.log('into create service', body);
// console.log(this.headers);
return this.httpClient.post(`${this.baseUrl}api/persona/eventreports/`,
                     body, {headers: this.getAuthHeaders()}).pipe(
                       catchError(this.handleError<EventReport>('Bad request'))
                     )
}

updateEventReport(id: number,
event: number,
// reportUUID: string,
im1: String, im2: ImageBitmap, im3: ImageBitmap, im4: ImageBitmap, im5: ImageBitmap,
im6: ImageBitmap, im7: ImageBitmap, im8: ImageBitmap, im9: ImageBitmap, im10: ImageBitmap,
drugs: string, anest: string, assistant: string, equipment: string,
phar: string, esop: string, stom: string, duod: string, urease: string, biopsy: string, hystoResults: string,
prep: string, quality: string,
colo: string,
conc1: string, conc2: string, conc3: string, conc4: string, conc5: string, conc6: string,
complications: string) {
const body = JSON.stringify({ id, event, //reportUUID,
im1, im2, im3, im4, im5, im6, im7, im8, im9, im10,
drugs, anest, assistant, equipment,
phar, esop, stom, duod,
urease, biopsy, hystoResults,
prep, quality,
colo, conc1, conc2, conc3, conc4, conc5, conc6, complications});
console.log('into create service', body);
// console.log(this.headers);
return this.httpClient.put(`${this.baseUrl}api/persona/eventreports/${id}`,
           body, {headers: this.getAuthHeaders()}).pipe(
             catchError(this.handleError<Partner>('Bad request'))
           )
}

getEventReports() {
return this.httpClient.get<EventReport[]>(`${this.baseUrl}api/persona/eventreports/`, {headers: this.getAuthHeaders()});
}

/*  getEventReport(id: number) {
return this.httpClient.get<EventReport[]>(`${this.baseUrl}api/persona/eventreport/${id}`, {headers: this.getAuthHeaders()});
} */

getEventReport(id: number): Observable<EventReport> {
// this.messageService.add('ApiService: fetched events');
// return of(events);
const url = `${this.baseUrl}api/persona/eventreports/${id}/`
return this.httpClient.get<EventReport>(url)
.pipe(
tap(_ => this.log('fetched reports')),
catchError(this.handleError<EventReport>(`getReport id=${id}`))
);
}

// ######## CAPTURE SERVICES ###########
read_camera_capture(id: number, index_camera: number) {
  //index_camera = 0;
  //const body = JSON.stringify({id});
  console.log('index_camera', index_camera, typeof(index_camera));
  return this.httpClient.put(`${this.baseEventUrl}/${id}/`, index_camera, {headers: this.getAuthHeaders()})
}

// ####################### https://efficientcoder.net/angular-tutorial-example-upload-files-with-formdata-httpclient-rxjs-and-material-progressbar/
  public upload(formData) {

    return this.httpClient.post<any>(`${this.baseUrl}api/persona/eventreports/`, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
  }
  
}
