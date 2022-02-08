import { Component, OnInit } from '@angular/core';
import { ToggleNavbarService } from 'src/app/services/toggle-navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  toggler: boolean = false;

  constructor(private toggleNavbarService: ToggleNavbarService) {}

  ngOnInit(): void {
    this.toggler = this.toggleNavbarService.toggle;
  }
}
