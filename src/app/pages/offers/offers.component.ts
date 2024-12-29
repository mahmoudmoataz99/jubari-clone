import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [NgFor,NgClass,RouterLink],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  offers = [
    {
      id:1,
      title: "رحلات سقطرى",
      price: "$895",
      link: "https://jubari.net/ar/offers/1",
      imageUrl: "https://jubari.net/media/1026/socotra-testata-pozzi-1.jpg",
      baseInfo: [
        {  iconPath: "fa-solid fa-location-dot", label: "جزيرة سقطرى" },
        {  iconPath: "fa-regular fa-clock", label: "8 أيام / 7 ليالي" },
        {  iconPath: "fa-solid fa-people-group", label: "3 أشخاص" }
      ]
    },
    {
      id:2,
      title: "سافر اندونسيا بفيزا إلكترونية",
      price: "$150",
      link: "https://jubari.net/ar/offers/2",
      imageUrl: "https://jubari.net/media/1028/pexels-tomfisk-2116719.jpg",
      baseInfo: [
        {  iconPath: "fa-solid fa-location-dot", label: "إندونيسيا" },
        {  iconPath: "fa-regular fa-clock", label: "شهرين" },
        {  iconPath: "fa-solid fa-people-group", label: "شخص واحد" }
      ]
    },
    {
      id:3,
      title: "برنامج عمرة مريح ومنظم",
      price: "$290",
      link: "https://jubari.net/ar/offers/5",
      imageUrl: "https://jubari.net/media/1034/IMG-20241004-WA0001.jpg",
      baseInfo: [
        {  iconPath: "fa-solid fa-location-dot", label: "مكة المكرمة" },
        {  iconPath: "fa-regular fa-clock", label: "20 يوم" },
        {  iconPath: "fa-solid fa-people-group", label: "شخص واحد" }
      ]
    },
    {
      id:4,
      title: "رحلات سقطرى",
      price: "$895",
      link: "https://jubari.net/ar/offers/1",
      imageUrl: "https://jubari.net/media/1026/socotra-testata-pozzi-1.jpg",
      baseInfo: [
        {  iconPath: "fa-solid fa-location-dot", label: "جزيرة سقطرى" },
        {  iconPath: "fa-regular fa-clock", label: "8 أيام / 7 ليالي" },
        {  iconPath: "fa-solid fa-people-group", label: "3 أشخاص" }
      ]
    },
    {
      id:5,
      title: "سافر اندونسيا بفيزا إلكترونية",
      price: "$150",
      link: "https://jubari.net/ar/offers/2",
      imageUrl: "https://jubari.net/media/1028/pexels-tomfisk-2116719.jpg",
      baseInfo: [
        {  iconPath: "fa-solid fa-location-dot", label: "إندونيسيا" },
        {  iconPath: "fa-regular fa-clock", label: "شهرين" },
        {  iconPath: "fa-solid fa-people-group", label: "شخص واحد" }
      ]
    },
    {
      id:6,
      title: "برنامج عمرة مريح ومنظم",
      price: "$290",
      link: "https://jubari.net/ar/offers/5",
      imageUrl: "https://jubari.net/media/1034/IMG-20241004-WA0001.jpg",
      baseInfo: [
        {  iconPath: "fa-solid fa-location-dot", label: "مكة المكرمة" },
        {  iconPath: "fa-regular fa-clock", label: "20 يوم" },
        {  iconPath: "fa-solid fa-people-group", label: "شخص واحد" }
      ]
    }
  ];

  locs = this.offers.map(index=>index.baseInfo[0].label);
}