import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IUserService from './user-service.interface';
import { environment } from '../../environments/environment';
import { UserViewModel } from '../../models/quiz.models';
import {
  UserCreateViewModel,
  UserEditViewModel,
} from '../../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class UserService implements IUserService {
  private readonly apiUrl = `${environment.apiBaseUrl}/users`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<UserViewModel[]> {
    return this.http.get<UserViewModel[]>(this.apiUrl);
  }

  getById(id: string): Observable<UserViewModel> {
    return this.http.get<UserViewModel>(`${this.apiUrl}/${id}`);
  }

  create(user: UserCreateViewModel): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl, user);
  }

  update(user: UserEditViewModel): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/${user.id}`, user);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
