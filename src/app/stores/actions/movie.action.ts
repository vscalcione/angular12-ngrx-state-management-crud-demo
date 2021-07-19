import { createAction, props } from '@ngrx/store';
import { Movie } from '../../models/movie';

export const getMovies = createAction('[Movie] Get movie');

export const getMovieSuccess = createAction(
    '[Movie] Get movie success',
    (movies: ReadonlyArray<Movie>) => ({ movies }) 
);

export const addMovie = createAction(
    '[Movie] Add movie',
    (movie: Movie) => ({ movie })
);

export const addMovieSuccess = createAction(
    '[Movie] Add movie success',
    (movie: Movie) => ({ movie })
);

export const assignUser = createAction(
    '[User] assign user',
    (id: number) => ({ id })
);

export const deleteMove = createAction(
    '[Movie] Delete movie',
    (movie: Movie) => ({ movie })
);

export const deleteMovieSuccess = createAction(
    '[Movie] Delete movie success',
    (movie: Movie) => ({ movie })
);

export const updateMovie = createAction(
    '[Movie] Update movie',
    (movie: Movie) => ({ movie })
);

export const updateMovieSuccess = createAction(
    '[Movie] Update movie success',
    (movie: Movie) => ({ movie })
);

export const logout = createAction('[User] logout');