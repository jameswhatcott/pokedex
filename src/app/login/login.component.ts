import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      () => {},
      err => alert('Invalid credentials')
    );
  }
}
