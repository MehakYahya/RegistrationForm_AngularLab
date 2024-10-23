import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  confirmPassword: any;
  password: any;
  message: string | undefined;
  email: any;
  username: any;

  isValidDomain(email: string): boolean {
    const validDomains = ['gmail.com', 'yahoo.com'];
    const domain = email.substring(email.lastIndexOf('@') + 1);
    return validDomains.includes(domain);
  }
  onSubmit(signupForm: NgForm) {
    const messageElement = document.getElementById('message');

    if (signupForm.valid) {
      console.log('Form Submitted!', signupForm.value);
      if (messageElement) {
        alert("Signup successful!");
      }
    } else {
      if (messageElement) {
        alert('Please fill in all required fields');
      }
    }
  }

}
