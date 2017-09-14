import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Poll } from '../common/models/poll.model';

@Component({
  selector: 'polls-list',
  templateUrl: './polls-list.component.html'
})
export class PollsList {
  @Input() polls: Poll[];
  @Output() selectedPoll = new EventEmitter();
}
