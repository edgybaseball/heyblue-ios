import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RateUmpire page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rate-umpire',
  templateUrl: 'rate-umpire.html'
})
export class RateUmpire {

  rating: number = 4;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RateUmpire Page');
  }

}
