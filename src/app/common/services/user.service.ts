import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { AppStore } from '../models/appstore.model';
import { UserState } from '../stores/user.store';
import { Login } from '../models/login.model';

const BASE_URL = 'https://shielded-dawn-63022.herokuapp.com/api/users/login';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class UserService {
  user: Observable<UserState>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.user = store.select('user');
  }

  loginUser(values: Login) {
    this.http.post(`${BASE_URL}`, values, HEADER)
      .map(res => res.json())
      .map(payload => ({ type: 'LOGIN_USER', payload }))
      .subscribe(
        action => this.store.dispatch(action),
        error => this.store.dispatch({ type: 'LOGIN_ERROR', payload: JSON.parse(error._body) })
      );
  }

}
