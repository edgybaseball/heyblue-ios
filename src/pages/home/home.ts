import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RateUmpire} from '../rate-umpire/rate-umpire';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  today : Date = new Date();

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
  }

  rateSpecificUmpire(){
    this.navCtrl.push(RateUmpire);
  }

}
