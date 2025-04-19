import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IRoleService from './role-service.interface';
import { environment } from '../../environments/environment';
import { RoleViewModel, RoleCreateViewModel, RoleEditViewModel } from '../../models/role.models';

@Injectable({
  providedIn: 'root'
})
export class RoleService implements IRoleService {
  private readonly apiUrl = `${environment.apiBaseUrl}/roles`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<RoleViewModel[]> {
    return this.http.get<RoleViewModel[]>(this.apiUrl);
  }

  getById(id: string): Observable<RoleViewModel> {
    return this.http.get<RoleViewModel>(`${this.apiUrl}/${id}`);
  }

  create(role: RoleCreateViewModel): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl, role);
  }

  update(role: RoleEditViewModel): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/${role.id}`, role);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
