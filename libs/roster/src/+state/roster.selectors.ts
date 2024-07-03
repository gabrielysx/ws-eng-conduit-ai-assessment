import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RosterState } from './roster.reducer';

export const selectRosterState = createFeatureSelector<RosterState>('roster');

export const selectUserStats = createSelector(
  selectRosterState,
  (state: RosterState) => state.userStats
);

export const selectRosterError = createSelector(
  selectRosterState,
  (state: RosterState) => state.error
);