import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUserStats } from '../+state/roster.actions';
import { selectUserStats } from '../+state/roster.selectors';
import { UserStats } from '../data-access/roster.service';

@Component({
  selector: 'realworld-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [],
  imports: [RouterModule, CommonModule],
  standalone: true,
})
export class RosterComponent implements OnInit {

  users$: Observable<UserStats[]>;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectUserStats);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUserStats());
  }

}
