import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { Event } from '../../models/event';
import { Persona } from '../../models/persona';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: [ './event-search.component.css' ]
})
export class EventSearchComponent implements OnInit {
  personas: Persona[] = [];
  events$: Observable<Event[]>;
  personas$: Observable<Persona[]>;
  private searchTerms = new Subject<string>();

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    
    // const searchBox = document.getElementById('search-box');
    // const typeahead = fromEvent(searchBox, 'input').pipe(
    //   map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
    //   filter(text => text.length > 2),
    //   debounceTime(10),
    //   distinctUntilChanged(),
    //   switchMap(() => ajax(`http://127.0.0.1:8000/api/persona/personas/12/`))
    // );
    // typeahead.subscribe(data => {
    //   console.log('ajax data: ', data);
    // });

    // this.events$ = this.searchTerms.pipe(
    this.personas$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.apiService.searchPersonas(term)),
    );
    console.log('this: ', this.personas$);
  }

  ///// Tentando navegar do item da lista de busca para o detalhe da persona  /////////
  // goPersDetail() {

  //   for (let pers of this.personas) {
  //     this.apiService.getPersonas().subscribe
  //   }
  //   const idx = +this.route.snapshot.paramMap.get('id')
  //   this.router.navigate([`/persona-form-detail/${idx}`],);
  // }


}