import { Observable } from 'rxjs';
import { UserViewModel } from '../../models/quiz.models';
import {
  UserCreateViewModel,
  UserEditViewModel,
} from '../../models/user.models';

export default interface IUserService {
  getAll(): Observable<UserViewModel[]>;
  getById(id: string): Observable<UserViewModel>;
  create(user: UserCreateViewModel): Observable<boolean>;
  update(user: UserEditViewModel): Observable<boolean>;
  delete(id: string): Observable<any>;
}
