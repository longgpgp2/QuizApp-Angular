import { Component, Inject, OnInit } from '@angular/core';
import IRoleService from '../../../../services/role/role-service.interface';
import { ROLE_SERVICE } from '../../../../constants/injection.constant';

@Component({
  selector: 'app-role-list',
  imports: [],
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css',
})
export class RoleListComponent implements OnInit {
  constructor(
    @Inject(ROLE_SERVICE) private readonly roleService: IRoleService
  ) {}
  ngOnInit(): void {
    this.roleService.getAll().subscribe((response) => {
      console.log(response);
    });
  }
}
