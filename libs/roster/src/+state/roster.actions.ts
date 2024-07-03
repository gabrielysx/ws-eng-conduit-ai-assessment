import { createAction, props } from '@ngrx/store';
import { UserStats } from '../data-access/roster.service';

export const loadUserStats = createAction('[Roster] Load User Stats');
export const loadUserStatsSuccess = createAction('[Roster] Load User Stats Success', props<{ userStats: UserStats[] }>());
export const loadUserStatsFailure = createAction('[Roster] Load User Stats Failure', props<{ error: any }>());
