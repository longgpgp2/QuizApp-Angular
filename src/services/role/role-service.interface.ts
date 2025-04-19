import { Observable } from 'rxjs';
import {
  RoleViewModel,
  RoleCreateViewModel,
  RoleEditViewModel,
} from '../../models/role.models';

export default interface IRoleService {
  getAll(): Observable<RoleViewModel[]>;
  getById(id: string): Observable<RoleViewModel>;
  create(role: RoleCreateViewModel): Observable<boolean>;
  update(role: RoleEditViewModel): Observable<boolean>;
  delete(id: string): Observable<any>;
}
