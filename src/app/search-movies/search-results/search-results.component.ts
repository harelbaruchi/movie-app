import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() moviesList: any;

  displayedColumns: string[] = ['title', 'year', 'poster'];

  constructor() {}

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.moviesList.filter = filterValue.trim().toLowerCase();
  }
}
