import { Component, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { UserService } from '../../app/common/services/user.service';
import { AppStore } from '../../app/common/models/appstore.model';
import { UserState } from '../../app/common/stores/user.store';
import { User } from '../../app/common/models/user.model';
import { Login } from '../../app/common/models/login.model';
import { UserError } from '../../app/common/stores/user.store';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage implements OnDestroy {
  user: Observable<UserState>;
  error: UserError;
  formValues: Login;

  constructor(
    private userService: UserService,
    private store: Store<AppStore>
  ) {

    this.user = userService.user;
    this.user.subscribe(user => this.error = user.error);
    this.formValues = {
      username: null,
      password: null
    }
  }

  login() {
    this.userService.loginUser(this.formValues);
    if (this.error) {
      this.store.dispatch({ type: 'RESET_LOGIN_ERROR' });
    }
  }

  ngOnDestroy() {
    this.store.dispatch({ type: 'RESET_LOGIN_ERROR' });
  }

}
