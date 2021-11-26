import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  signIn(data: any): Observable<User>{
    return of({username: data.username});
  }
}
