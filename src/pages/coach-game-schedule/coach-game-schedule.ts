import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CoachGameSchedule page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coach-game-schedule',
  templateUrl: 'coach-game-schedule.html'
})
export class CoachGameSchedule {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CoachGameSchedule Page');
  }

}
