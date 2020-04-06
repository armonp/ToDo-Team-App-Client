import { Injectable } from '@angular/core';
import { User } from './user.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const url:string = "http://localhost:5000/api/users"

@Injectable({
  providedIn: 'root'
})

export class UserService {
  list(): Observable<User[]>{
    return this.http.get(`${url}`) as Observable<User[]>;
  }
  get(id: any): Observable<User>{
    return this.http.get(`${url}/${id}`) as Observable<User>;
  }
  create(user: User): Observable<User>{
    return this.http.post(`${url}`, user) as Observable<User>;
  }
  change(user: User): Observable<any>{
    return this.http.put(`${url}/${user.id}`, user) as Observable<any>;
  }
  remove(user: User): Observable<any>{
    return this.http.delete(`${url}/${user.id}`) as Observable<any>;
  }
  enter(username: string, password: string): Observable<User>{
    return this.http.get(`${url}/login/${username}/${password}`) as Observable<User>;
  }
  constructor(private http: HttpClient) { }
}
