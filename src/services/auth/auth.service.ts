import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginViewModel, LoginResponseViewModel } from '../../models/auth.models';
import { UserViewModel } from '../../models/quiz.models';
import { UserCreateViewModel } from '../../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = `${environment.apiBaseUrl}/auth`;
  private readonly tokenKey = 'access_token';
  private readonly userKey = 'user_info';

  constructor(private readonly http: HttpClient) {}

  async login(returnUrl: string, model: LoginViewModel): Promise<LoginResponseViewModel | undefined> {
    try {
      const response = await this.http.post<LoginResponseViewModel>(`${this.apiUrl}/login`, model).toPromise();
      if (response) {
        localStorage.setItem(this.tokenKey, response.token);
        localStorage.setItem(this.userKey, JSON.stringify(response.userInformation));
      }
      return response;
    } catch (err) {
      console.error('Login failed:', err);
      return undefined;
    }
  }

  async register(user: UserCreateViewModel): Promise<LoginResponseViewModel | undefined> {
    try {
      const response = await this.http.post<LoginResponseViewModel>(`${this.apiUrl}/register`, user).toPromise();
      if (response) {
        localStorage.setItem(this.tokenKey, response.token);
        localStorage.setItem(this.userKey, JSON.stringify(response.userInformation));
      }
      return response;
    } catch (err) {
      console.error('Registration failed:', err);
      return undefined;
    }
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  logout(): boolean {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    return true;
  }

  getCurrentUser(): UserViewModel | undefined {
    const data = localStorage.getItem(this.userKey);
    return data ? JSON.parse(data) : undefined;
  }

  isManager(): boolean {
    const user = this.getCurrentUser();
    return user?.roles.includes('Admin') || user?.roles.includes('Editor') || false;
  }
}
