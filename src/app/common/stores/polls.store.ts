import { Poll } from '../models/poll.model';

export interface PollsState {
  activePollList: Poll[];
  activePoll: Poll;
}

const initialState: PollsState = {
  activePollList: [],
  activePoll: null
}

export const polls = (state: PollsState = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_POLLS':
      return Object.assign({}, state, { activePollList: payload });
    case 'RESET_POLLS':
      return Object.assign({}, state, { activePollList: [] });
    case 'LOAD_POLL':
      return Object.assign({}, state, { activePoll: payload });
    case 'RESET_POLL':
      return Object.assign({}, state, { activePoll: null });
    default:
      return state;
  }
};
