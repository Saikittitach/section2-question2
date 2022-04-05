import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface data {
  count: number
  categories: Array<string>
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  $getData = (): Observable<data> => {
    return this._http.get<data>('https://api.publicapis.org/categories').pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  };
}
