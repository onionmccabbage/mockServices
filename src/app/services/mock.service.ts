import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// for error handling in Http calls
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient) { }

  mockURL = 'https://json.extendsclass.com/bin'
  APItoken = '73e5ea8a-f416-11ea-8742-0242ac110002'

  // service to get stock codes
  // getStock(): Observable<any[]> {
  //   return this.http.get<any[]>(this.stockURL)
  //     .pipe(
  //       tap(_ => console.log(`fetched stock from ${this.stockURL}`)),
  //       catchError(this.handleError<any[]>('getStock', []))
  //     )
  // }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console for now
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // POST
  doPOST(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.APItoken
      })
    };
    return this.http.post(this.mockURL, data, httpOptions)
      .pipe(
        catchError(this.handleError('doPOST', data))
      );

  }

  doGET() {

  }
}
