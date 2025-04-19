import { Component, Inject, OnInit } from '@angular/core';
import { USER_SERVICE } from '../../../../constants/injection.constant';
import IUserService from '../../../../services/user/user-service.interface';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  constructor(
    @Inject(USER_SERVICE) private readonly userService: IUserService
  ) {}
  ngOnInit(): void {
    this.userService.getAll().subscribe((response) => {
      console.log(response);
    });
  }
}
