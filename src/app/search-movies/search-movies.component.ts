import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
import { SnackbarService } from '../services/snackbar.service';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss'],
})
export class SearchMoviesComponent implements OnInit {
  movieSearchForm: any = FormGroup;
  movies: any = [];
  constructor(
    private formbuilder: FormBuilder,
    private movieService: MoviesService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.movieSearchForm = this.formbuilder.group({
      title: [
        null,
        [Validators.required, Validators.pattern(GlobalConstants.nameRegex)],
      ],
    });
  }
  // Todo: implement search field
  handleSubmit() {
    let movieTitle = this.movieSearchForm.value.title;
    try {
      this.movieService
        .getMoviesByTitle(movieTitle)
        .subscribe((data) => (this.movies = data));
    } catch (error: any) {
      this.snackbarService.openSnackBar(error, GlobalConstants.error);
    }
  }
}
