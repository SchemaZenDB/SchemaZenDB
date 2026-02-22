import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { Mail02FreeIcons, TelegramIcon } from '@hugeicons/core-free-icons';
import { Call02FreeIcons } from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterModule, HugeiconsIconComponent, FormsModule, CommonModule],
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

  sendMessage() {
    if (this.userMessage.trim() === '') {
      alert('Please fill in all required fields before sending your message.');
      return;
    } else {
      alert(
        'Message sent! Thank you for contacting us, ' +
          this.userName +
          '. We will get back to you at ' +
          this.userEmail +
          '.',
      );
    }
  }
}
