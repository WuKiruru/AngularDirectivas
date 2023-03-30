import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  socialMedia = 'Follow us on our Social media - Alejandro Gómez Copyright ©';
  urlFacebook = '../../../assets/resources/facebook.png';
  urlTwitter = '../../../assets/resources/twitter.png';
  urlWeibo = '../../../assets/resources/weibo.png';
  urlInstagram = '../../../assets/resources/instagram.png';
}