import { createReducer, on } from '@ngrx/store';
import * as RosterActions from './roster.actions';
import { UserStats } from '../data-access/roster.service';

export interface RosterState {
  userStats: UserStats[];
  error: any;
}

export const initialState: RosterState = {
  userStats: [],
  error: null
};

export const RosterReducer = createReducer(
  initialState,
  on(RosterActions.loadUserStatsSuccess, (state, { userStats }) => ({ ...state, userStats })),
  on(RosterActions.loadUserStatsFailure, (state, { error }) => ({ ...state, error }))
);
