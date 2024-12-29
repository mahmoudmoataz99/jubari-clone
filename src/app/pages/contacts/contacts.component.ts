import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  isLoading: boolean = true;
  contacts = [
    {
      title: 'رقم الواتساب',
      link: 'https://wa.me/+967772220300',
      number: '+967 77 222 0300',
      type: 'whatsapp',
    },
    {
      title: 'رقم الموبايل',
      link: 'tel:+967771122385',
      number: '+967 7711 22385',
      type: 'mobile',
    },
    {
      title: 'البريد الإلكتروني',
      link: 'mailto:Info@Jubaritravel.com',
      number: 'Info@Jubaritravel.com',
      type: 'email',
    },
  ];
}
