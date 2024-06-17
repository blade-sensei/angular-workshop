import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  features = [
    {
      title: `Create extraordinary videos. Anytime. Anywhere.`,
      imgPath: '/images/value1.png',
    },
    {
      title: `A massive library of creative effects for your video`,
      imgPath: '/images/value2.png',
    },
    {
      title: `Fast, affordable, and easy way to edit, convert, sign PDFs and more - across desktop, mobile, and web.`,
      imgPath: '/images/value3.png',
    }
  ];

  title = 'angular-tutorial';

  heroList = ['first', 'second'];
  currentIndex = 0;
  imagesPath = ['/images/blue.jpg', '/images/red.png'];

  cards = [
    {
      text: 'New Release from Wondershare Filmora: For a Better Video Creation Experience',
      img: '/images/about1.png',
    },
    {
      text: 'AniSmall New Released : A Professional HD Multimedia File Compressor',
      img: '/images/about2.png',
    },
    {
      text: 'By sharing your inspiring story, you will uplift other women and earn Empowerment Funds!',
      img: '/images/about3.png',
    },
  ];

  handleGoToInSlider(value: string) {
    let nextIndex =
      value === 'next' ? this.currentIndex + 1 : this.currentIndex + -1;
    if (value === 'next') {
      if (nextIndex === this.heroList.length) {
        nextIndex = 0;
      }
    } else if (value === 'previous') {
      if (nextIndex === -1) {
        nextIndex = this.heroList.length - 1;
      }
    }
    this.currentIndex = nextIndex;
  }
}
