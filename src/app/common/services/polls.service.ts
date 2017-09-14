import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { AppStore } from '../models/appstore.model';
import { PollsState } from '../stores/polls.store';

const BASE_URL = 'https://shielded-dawn-63022.herokuapp.com/api/polls/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class PollsService {
  polls: Observable<PollsState>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.polls = store.select('polls');
  }

  loadPolls() {
    this.http.get(`${BASE_URL}`)
      .map(res => res.json())
      .map(payload => ({ type: 'LOAD_POLLS', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  loadPoll(id) {
    this.http.get(`${BASE_URL}${id}`)
      .map(res => res.json())
      .map(payload => ({ type: 'LOAD_POLL', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

}
