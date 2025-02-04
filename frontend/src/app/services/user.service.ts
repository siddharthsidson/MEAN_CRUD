import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import User from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:3000';
  httpClient = inject(HttpClient);
  constructor() {}
  getUsers() {
    return this.httpClient.get<User[]>(this.apiUrl + '/getUsers');
  }
  addUser(model: User) {
    return this.httpClient.post(this.apiUrl + '/addUser', model);
  }
  deleteUser(id: any) {
    return this.httpClient.delete(`${this.apiUrl}/deleteUser/${id}`);
  }
}
