import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { Mail02FreeIcons, TelegramIcon } from '@hugeicons/core-free-icons';
import { Call02FreeIcons } from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterModule, HugeiconsIconComponent, FormsModule, CommonModule,HttpClientModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  TelegramIcon = TelegramIcon;
  callIcon = Call02FreeIcons;
  mailIcon = Mail02FreeIcons;
  userName: string = '';
  userEmail: string = '';
  userMessage: string = '';

constructor(private http: HttpClient) {}

sendMessage() {
  if (!this.userEmail || !this.userMessage.trim()) {
    alert('Please fill all required fields');
    return;
  }

  const payload = {
    email: this.userEmail,
    message: this.userMessage
  };

  this.http.post('http://localhost:8080/api/contact/send', payload)
    .subscribe({
      next: () => {
        alert(
          'Message sent! Thank you ' + this.userName +
          '. We will contact you at ' + this.userEmail
        );

        // clear form
        this.userName = '';
        this.userEmail = '';
        this.userMessage = '';
      },
      error: (err:any) => {
        console.error(err);
        alert('Failed to send message ❌');
      }
    });
}
}
