import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome'
import { filter, map, Subject, takeUntil } from 'rxjs';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FontAwesomeModule, MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy {
  isDropdownOpen: boolean = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  faBars: IconDefinition = faBars;

  @Output() menuToggled = new EventEmitter<void>();
  pageTitle = '';
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.getDeepestChild(this.activatedRoute)),
      takeUntil(this.destroy$)
    ).subscribe((route: ActivatedRoute) => {
      this.pageTitle = route.snapshot.data['title'] || 'Home';
    });
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
