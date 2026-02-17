import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { TelegramIcon } from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterModule, HugeiconsIconComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  TelegramIcon = TelegramIcon;
}
