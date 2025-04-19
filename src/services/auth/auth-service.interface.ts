import { LoginViewModel, LoginResponseViewModel } from "../../models/auth.models";
import { UserViewModel } from "../../models/quiz.models";
import { UserCreateViewModel } from "../../models/user.models";

export default interface IAuthService {
  login(returnUrl: string, model: LoginViewModel): Promise<LoginResponseViewModel | undefined>;
  register(user: UserCreateViewModel): Promise<LoginResponseViewModel | undefined>;
  isAuthenticated(): boolean;
  getAccessToken(): string;
  logout(): boolean;
  getCurrentUser(): UserViewModel | undefined;
  isManager(): boolean;
}
