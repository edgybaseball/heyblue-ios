import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';
import { Home } from '../pages/home/home';
import { CoachGameSchedule} from '../pages/coach-game-schedule/coach-game-schedule';


import { UserRole } from './UserRole'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  userRole: UserRole;
  rootPage: any = Home;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.userRole = UserRole.COACH; //HARDCODED FOR NOW
    this.initializePages();

  }

  private initializePages(){
    // used for an example of ngFor and navigation

    this.pages = [
      { title: 'Home', component: Home, icon : 'ios-thumbs-up-outline' }
    ];

    //uncomment to see ionic generated pages
    //TODO: after being comfortable with ionic remove these code along with the pages
    //this.pages.push({ title: 'Page One', component: Page1, icon : 'ios-close-circle-outline'});
    //this.pages.push({ title: 'Page Two', component: Page2, icon : 'ios-close-circle-outline' });

    switch(this.userRole){
      case UserRole.COACH:
        this.pages[0].title = 'Rate umpires';
        this.pages.push({ title: 'Game Schedule', component: CoachGameSchedule, icon : 'ios-calendar-outline'});
        break;
      default:
        throw new Error("Unsupported role!");
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
