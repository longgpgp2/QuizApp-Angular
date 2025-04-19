export interface LoginViewModel {
  userName: string;
  password: string;
}

export interface LoginResponseViewModel {
  userInformation: UserViewModel;
  token: string;
  expires: string;
}

export interface UserCreateViewModel {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  phoneNumber: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
  isActive: boolean;
}

export interface UserViewModel {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  userName: string;
  phoneNumber: string;
  dateOfBirth: string;
  avatar: string;
  isActive: boolean;
  roles: string[];
}
