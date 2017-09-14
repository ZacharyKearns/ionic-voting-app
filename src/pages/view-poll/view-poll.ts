import { Component, OnDestroy } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { PollsService } from '../../app/common/services/polls.service';
import { AppStore } from '../../app/common/models/appstore.model';
import { PollsState } from '../../app/common/stores/polls.store';
import { Poll } from '../../app/common/models/poll.model';

@Component({
  selector: 'page-view-poll',
  templateUrl: 'view-poll.html',
  providers: [PollsService]
})
export class ViewPollPage {
  polls: Observable<PollsState>;
  id: string;
  poll: Poll;

  constructor(
    private pollsService: PollsService,
    private store: Store<AppStore>,
    private navParams: NavParams
  ) {
    this.id = this.navParams.get('id');
    this.polls = pollsService.polls;
    pollsService.loadPoll(this.id);
    this.polls.subscribe(polls => this.poll = polls.activePoll);
  }

  ngOnDestroy() {
    this.store.dispatch({ type: 'RESET_POLL' });
  }

}
