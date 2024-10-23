import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  message: string | undefined;
  username: any;
  password: any;
  isUpperCaseValid: boolean = false;
  isLowerCaseValid: boolean = false;
  isNumberValid: boolean = false;
  isSpecialCharValid: boolean = false;

  validatePassword() {
    const password = this.password;
    this.isUpperCaseValid = /[A-Z]/.test(password);
    this.isLowerCaseValid = /[a-z]/.test(password);
    this.isNumberValid = /\d/.test(password);
    this.isSpecialCharValid = /[@$!%*?&]/.test(password);
  }



  onSubmit(form: NgForm) {

    if (form.invalid) {
      alert('Please fill out the form correctly.');
      return;
    }


    const Requirements: string[] = [];

    if (!this.isUpperCaseValid) {
      Requirements.push('At least one uppercase letter');
    }
    if (!this.isLowerCaseValid) {
      Requirements.push('At least one lowercase letter');
    }
    if (!this.isNumberValid) {
      Requirements.push('At least one number');
    }
    if (!this.isSpecialCharValid) {
      Requirements.push('At least one special character');
    }

    if (Requirements.length > 0) {
      alert(`Please ensure your password meets the following requirements:\n ${Requirements.join('\n ')}`);
      return;
    }
    alert('Login successful!');
  }
}
