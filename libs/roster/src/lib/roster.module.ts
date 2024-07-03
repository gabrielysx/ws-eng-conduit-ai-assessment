import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RosterComponent } from './roster.component';
import { ROSTER_ROUTES } from './roster.routes';
import { RosterReducer } from '../+state/roster.reducer';
import { RosterEffects } from '../+state/roster.effects';

@NgModule({
  declarations: [RosterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROSTER_ROUTES),
    StoreModule.forFeature('roster', RosterReducer), 
    EffectsModule.forFeature([RosterEffects]) 
  ]
})
export class RosterModule { }

