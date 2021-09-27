import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VACCINES } from './mock-vaccine';
import { Vaccine } from './vaccine';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  constructor() { }

  getVaccines(): Observable<Vaccine[]> {
    return of(VACCINES);
  }
}
