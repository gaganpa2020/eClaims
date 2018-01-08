import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutUsPage } from '../about-us/about-us';
import { ContactUsPage } from '../contact-us/contact-us';
import { WorldNewsPage } from '../world-news/world-news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoHomePage()
  {
    this.navCtrl.push(HomePage);   
  }

  gotoAboutUsPage()
  {
    this.navCtrl.push(AboutUsPage);   
  }

  gotoContactUsPage()
  {
    this.navCtrl.push(ContactUsPage);   
  }

  gotoWorldNewsPage()
  {
    this.navCtrl.push(WorldNewsPage);   
  }
}
