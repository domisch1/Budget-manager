import { Component, OnInit } from '@angular/core';
import { ToggleNavbarService } from 'src/app/services/toggle-navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  toggler: boolean = false;
  constructor(private toggleNavbarService: ToggleNavbarService) {
    this.toggler = this.toggleNavbarService.toggle;
    console.log(this.toggler);
  }

  ngOnInit(): void {}
  onToggle() {
    this.toggler = this.toggleNavbarService.toggleNavbar();
    console.log(this.toggler);
  }
}
