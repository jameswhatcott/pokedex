import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSignUp() {
    // Handle sign-up logic
    console.log('Signing up with', this.email, this.password, this.confirmPassword);
  }
}