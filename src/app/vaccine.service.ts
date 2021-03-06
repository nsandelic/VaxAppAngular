import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import { VACCINES } from './mock-vaccine';
import { Vaccine } from './vaccine';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  private vaccineUrl = 'http://localhost:8080/vaccine';
  
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',})
  };




  constructor(
    private http: HttpClient
  ) { }

 /* getVaccines(): Observable<Vaccine[]> {
    return of(VACCINES);
  }*/

 getVaccineSpring(): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]> (this.vaccineUrl)
    .pipe(
      tap(_ => console.log('fetched vaccines')),
      catchError(this.handleError<Vaccine[]>('getVaccines',[]))
    );
  }

  addVaccine(vaccine: Vaccine): Observable<Vaccine> {
    return this.http.post<Vaccine>(this.vaccineUrl, vaccine, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
    .pipe(
      tap((newVaccine: Vaccine) => console.log(`added vaccine w/ manufacturersName=${newVaccine.manufacturersName}`)),
      catchError(this.handleError<Vaccine>('addVaccine'))
    );
  }

  deleteVaccine(vaccine: Vaccine): Observable<Vaccine> {
    const delteUrl = `${this.vaccineUrl}/${vaccine.manufacturersName}`;

    return this.http.delete<Vaccine>(delteUrl, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })   })
    .pipe(
      tap(_ => console.log('Vaccine Deleted')),
      catchError(this.handleError<Vaccine>('deleteVaccine'))
    );
    

  }





  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.error(operation);
        console.error(error);
        return of(result as T);
    };
}


getByManName(manufacturersName: string | null): Observable<any> {
  const url = `${this.vaccineUrl}/${manufacturersName}`;
  return this.http.get(url)
  .pipe(
    catchError(this.handleError<any>('Error'))
  )

}



}
