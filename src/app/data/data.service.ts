import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  services = [
    {
      id: 1,
      title: 'حجز الفنادق',
      imageUrl: 'assets/hotelbook.jpg',
      description: 'نوفر أفضل خيارات حجز الفنادق بأسعار مناسبة وخدمة مميزة.',
      link: 'https://jubari.net/ar/services/2',
    },
    {
      id: 2,
      title: 'النقل البرى',
      imageUrl: 'assets/transport.jpg',
      description: 'خدمات نقل بري مريحة وآمنة داخل وخارج المدن.',
      link: 'https://jubari.net/ar/services/3',
    },
    {
      id: 3,
      title: 'تأجير السيارات',
      imageUrl: 'assets/carbook.png',
      description: 'تأجير سيارات حديثة بمختلف الفئات لتناسب جميع الاحتياجات.',
      link: 'https://jubari.net/ar/services/4',
    },
    {
      id: 4,
      title: 'تأمين السفر',
      imageUrl: 'assets/travelinsurance.jpg',
      description: 'تأمين سفر شامل يضمن راحتك وسلامتك أثناء الرحلة.',
      link: 'https://jubari.net/ar/services/14',
    },
  ];

  getServiceById(id: number) {
    return this.services.find(s => s.id === id);
  }

  destinations = [
    {
      id: 1,
      title: 'جزيرة سقطرى',
      imageUrl: 'https://jubari.net/media/223/socotra-testata-pozzi-1.jpg',
      description: 'جزيرة سقطرى وجهة طبيعية فريدة تتميز بتنوعها البيولوجي النادر وشواطئها الخلابة.',
      link: 'https://jubari.net/ar/offers?destination=2',
    },
    {
      id: 2,
      title: 'دبي',
      imageUrl: 'https://jubari.net/media/30/Frame-134032.jpg',
      description: 'دبي مدينة الأحلام تجمع بين الحداثة والتراث وتوفر تجارب سياحية لا تُنسى.',
      link: 'https://jubari.net/ar/offers?destination=3',
    },
    {
      id: 3,
      title: 'شرم الشيخ',
      imageUrl: 'https://jubari.net/media/31/Frame-134033.jpg',
      description: 'شرم الشيخ منتجع ساحلي عالمي يشتهر بشعابه المرجانية ومياهه الصافية.',
      link: 'https://jubari.net/ar/offers?destination=4',
    },
    {
      id: 4,
      title: 'ماليزيا',
      imageUrl: 'https://jubari.net/media/32/download.jpg',
      description: 'ماليزيا وجهة آسيوية رائعة تمزج بين الطبيعة الاستوائية والتنوع الثقافي.',
      link: 'https://jubari.net/ar/offers?destination=5',
    },
    {
      id: 5,
      title: 'مكة المكرمة',
      imageUrl: 'https://jubari.net/media/585/1.jpg',
      description: 'مكة المكرمة أقدس بقاع الأرض وجهة روحانية لملايين المسلمين حول العالم.',
      link: 'https://jubari.net/ar/offers?destination=6',
    },
    {
      id: 6,
      title: 'إندونيسيا',
      imageUrl: 'https://smitatravels.com/wp-content/uploads/2024/03/BALI.jpg',
      description: 'إندونيسيا أرخبيل استوائي ساحر يضم آلاف الجزر والشواطئ والغابات المطيرة.',
      link: 'https://jubari.net/ar/offers?destination=7',
    },
  ];

  getDestinationById(id: number) {
    return this.destinations.find(d => d.id === id);
  }
}
