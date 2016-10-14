import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';
import { Home } from '../pages/home/home';
import { CoachGameSchedule} from '../pages/coach-game-schedule/coach-game-schedule';
import { CoachContacts } from  '../pages/coach-contacts/coach-contacts';
import { Rules } from '../pages/rules/rules';
import { Search } from '../pages/search/search';
import { Help } from '../pages/help/help';

import { UserRole } from './UserRole'
import {RateUmpire} from "../pages/rate-umpire/rate-umpire";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  userRole: UserRole;
  rootPage: any = Home;


  pages: Array<{title: string, component: any, icon: string, iconpack: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();
    this.initializePages();

  }

  private initializePages(){
    this.userRole = UserRole.COACH; //HARDCODED FOR NOW

    // used for an example of ngFor and navigation
    this.pages = [];
    //uncomment to see ionic generated pages
    //TODO: after being comfortable with ionic remove these code along with the pages
    //this.pages.push({ title: 'Page One', component: Page1, icon : 'ios-close-circle-outline'});
    //this.pages.push({ title: 'Page Two', component: Page2, icon : 'ios-close-circle-outline' });

    switch(this.userRole){
      case UserRole.COACH:
        this.pages.push({ title: 'Rate umpires', component: Home, icon : 'thumbs-o-up', iconpack: 'fontAwesome'});
        this.pages.push({ title: 'Game Schedule', component: CoachGameSchedule, icon : 'calendar', iconpack: 'fontAwesome'});
        this.pages.push({ title: 'Contacts', component: CoachContacts, icon : 'phone-book-2', iconpack: 'contactsCommunication'});
        this.pages.push({ title: 'Rules', component: Rules, icon : 'clipboard-icon', iconpack: 'glypho'});
        this.pages.push({ title: 'Search', component: Search, icon : 'search', iconpack: 'fontAwesome'});
        this.pages.push({ title: 'Help', component: Help, icon : 'question', iconpack: 'smartPhoneEssentials'});
        // this.pages.push({ title: 'Rate Umpire', component: RateUmpire, icon : 'exclamation-triangle', iconpack: 'fontAwesome'});
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
