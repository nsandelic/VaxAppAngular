import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User;
  private usersURL = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.usersURL}/current-user`);
  }

  isRoleAdmin(): boolean {
    if (this.currentUser) {
      return this.currentUser.authorities.some((authority: string) => authority === 'ROLE_ADMIN');
    } else {
      return false;
    }
  }



  


}
