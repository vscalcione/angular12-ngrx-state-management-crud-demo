import { Component, OnInit } from '@angular/core';
import { select, Store  } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { Movie } from '../../models/movie';
import { MovieState } from '../../stores/reducers/movie.reducer';
import { movie } from '../../stores/selectors/movie.selector';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie$ = this.store.pipe(select(movie));

  constructor(private store: Store<MovieState>) { }

  ngOnInit(): void {
  }

}
