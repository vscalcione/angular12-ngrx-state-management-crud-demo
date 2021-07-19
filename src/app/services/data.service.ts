import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'api/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<ReadonlyArray<Movie>> {
    return this.http.get<ReadonlyArray<Movie>>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  addMovies(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.url, movie).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  deleteMovie(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      delay(2000),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.url}/${movie.id}`, movie).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error);
      })
    );
  }
}
