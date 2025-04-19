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

export interface UserEditViewModel {
  id: string;
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
