import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoginMode = true;
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';

  constructor(private authService: AuthService) {}

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
  }

  onSubmit() {
    if (this.isLoginMode) {
      this.authService.login(this.email, this.password).subscribe(
        () => {},
        error => {
          this.errorMessage = 'Invalid email or password.';
        }
      );
    } else {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match.';
        return;
      }
      this.authService.register(this.email, this.password).subscribe(
        () => {},
        error => {
          this.errorMessage = error;
        }
      );
    }
  }
}