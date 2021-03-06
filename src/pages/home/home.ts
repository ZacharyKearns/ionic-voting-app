import { Component, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { PollsService } from '../../app/common/services/polls.service';
import { AppStore } from '../../app/common/models/appstore.model';
import { PollsState } from '../../app/common/stores/polls.store';
import { Poll } from '../../app/common/models/poll.model';
import { PollsList } from '../../app/polls/polls-list.component';
import { ViewPollPage } from '../view-poll/view-poll';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PollsService]
})
export class HomePage implements OnDestroy {
  polls: Observable<PollsState>;

  constructor(
    private pollsService: PollsService,
    private store: Store<AppStore>,
    public navCtrl: NavController
  ) {

    this.polls = pollsService.polls;
    pollsService.loadPolls();
  }

  ngOnDestroy() {
    this.store.dispatch({ type: 'RESET_POLLS' });
  }

  viewPoll(id: string) {
    this.navCtrl.push(ViewPollPage, { id });
  }

}
