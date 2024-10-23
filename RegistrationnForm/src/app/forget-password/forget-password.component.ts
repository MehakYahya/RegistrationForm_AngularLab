import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  email: any;

  onSubmit(forgetForm: NgForm) {
    if (forgetForm.valid) {
      console.log('Email submitted:', forgetForm.value.email);
      alert("Email submitted, We'll send a password reset link to your email address.")

    } else {
      console.log('Form is not valid');
    }
  }
}

