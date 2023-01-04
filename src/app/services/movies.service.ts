import {
  HttpClient,
  HttpClientJsonpModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url: string = environment.moviesUrl;
  apiKey: string = environment.apikey;

  constructor(private http: HttpClient) {}

  getMoviesByTitle(title: string): Observable<any> {
    return this.http
      .jsonp(this.url + `${this.apiKey}&s=` + title, 'callback')
      .pipe(
        map((res: any) => {
          return res.Search;
        })
      );
  }
}
