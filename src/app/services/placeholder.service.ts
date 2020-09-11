import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// for error handling in Http calls
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {
  placeholderURL = 'https://jsonplaceholder.typicode.com'
  constructor(private http: HttpClient) { }
  
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
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${this.placeholderURL}/albums`, data, httpOptions)
      .pipe(
        catchError(this.handleError('doPOST', data))
      );
  }

  // GET
  doGET(whichCategory='albums', whichId=1): Observable<any> {
    return this.http.get(`${this.placeholderURL}/${whichCategory}/${whichId}`)
    .pipe(
      catchError(this.handleError('doPOST'))
    );
  }
}
