import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToLogin() {
    this.router.navigateByUrl('login');
  }

}
