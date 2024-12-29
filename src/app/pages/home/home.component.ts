import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { HomeSliderComponent } from '../../components/home-slider/home-slider.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, HomeSliderComponent, NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  places = [
    {
      id:1,
      title: 'جزيرة سقطرى',
      imageUrl: 'https://jubari.net/media/223/socotra-testata-pozzi-1.jpg',
      link: 'https://jubari.net/ar/services/2',
    },
    {
      id:2,
      title: 'دبى',
      imageUrl: 'https://jubari.net/media/30/Frame-134032.jpg',
      link: 'https://jubari.net/ar/services/2',
    },
    {
      id:3,
      title: 'ماليزيا',
      imageUrl: 'https://jubari.net/media/31/Frame-134033.jpg',
      link: 'https://jubari.net/ar/services/2',
    },
    {
      id:4,
      title: 'شرم الشيخ',
      imageUrl: 'https://jubari.net/media/31/Frame-134033.jpg',
      link: 'https://jubari.net/ar/services/2',
    },
  ];
  
  faqs = [
    {
      question: 'هل تقدمون خدمات تأجير سيارات أو نقل من وإلى المطار؟',
      answer: 'نعم، نقدم خدمات تأجير السيارات ونقل من وإلى المطار. يمكننا ترتيبها لك.'
    },
    {
      question: 'هل لديكم عروض خاصة أو حزم سفر مميزة للوجهة التي أنوي زيارتها؟',
      answer: 'نعم، لدينا عروض خاصة وحزم مميزة يمكننا ترتيبها بناءً على وجهتك واهتماماتك.'
    },
    {
      question: 'ما هي سياسة الإلغاء واسترداد الأموال في حالة تغيير خطط السفر؟',
      answer: 'سياسة الإلغاء تعتمد على شروط الحجز، ولكن عادة ما نسمح بإلغاء الحجز مع استرداد جزئي أو كامل حسب الوقت المتبقي.'
    },
    {
      question: 'ما هي تفاصيل حجز الطيران والإقامة، وهل تشمل تأمين السفر؟',
      answer: 'نعم، نقدم خدمات حجز الطيران والإقامة بالإضافة إلى تأمين السفر، حسب الخيارات المتاحة.'
    },
    {
      question: 'ما هي وجهتي السفر المثلى بناءً على ميزانيتي واهتماماتي؟',
      answer: 'نساعدك في اختيار الوجهة المثلى بناءً على ميزانيتك واهتماماتك الشخصية.'
    },
    {
      question: 'هل تقدمون خدمة دعم العملاء أثناء الرحلة؟',
      answer: 'نعم، نقدم خدمة دعم العملاء طوال الرحلة في حال الحاجة.'
    }
  ];
}