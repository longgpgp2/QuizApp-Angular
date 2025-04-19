export interface RoleViewModel {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface RoleCreateViewModel {
  name: string;
  description: string;
  isActive: boolean;
}

export interface RoleEditViewModel {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
}
