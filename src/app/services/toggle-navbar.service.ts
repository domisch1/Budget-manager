import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleNavbarService {
  toggle: boolean = false;

  constructor() {}
  toggleNavbar() {
    this.toggle = !this.toggle;
    return this.toggle;
  }
}
