import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SideEffect } from './sideEffect';

@Injectable({
  providedIn: 'root'
})
export class SideEffectService {

  private sideEffectUrl = 'http://localhost:8080/sideEffect';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',})
  };


  constructor(
    private http: HttpClient
  ) { }


  getSideEffects(): Observable<SideEffect[]> {
    return this.http.get<SideEffect[]> (this.sideEffectUrl)
    .pipe(
      tap(_ => console.log('fetched side effects')),
      catchError(this.handleError<SideEffect[]>('getSideEffect',[]))
    );
  }




  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.error(operation);
        console.error(error);
        return of(result as T);
    };
}

}
