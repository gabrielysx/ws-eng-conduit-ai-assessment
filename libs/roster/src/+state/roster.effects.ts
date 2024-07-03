import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RosterService } from '../data-access/roster.service';
import { loadUserStats, loadUserStatsSuccess, loadUserStatsFailure } from './roster.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RosterEffects {

  loadUserStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserStats),
      mergeMap(() => this.rosterService.getUserStats().pipe(
        map(userStats => loadUserStatsSuccess({ userStats })),
        catchError(error => of(loadUserStatsFailure({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private rosterService: RosterService
  ) { }
}