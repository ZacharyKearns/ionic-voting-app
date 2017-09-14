import { PollsState } from '../stores/polls.store';
import { UserState } from '../stores/user.store';

export interface AppStore {
  polls: PollsState;
  user: UserState;
};
