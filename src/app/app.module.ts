import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import {CustomIconsModule} from 'ionic2-custom-icons';
import { Ionic2RatingModule } from 'ionic2-rating';

import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { CoachGameSchedule} from '../pages/coach-game-schedule/coach-game-schedule';
import { CoachContacts } from  '../pages/coach-contacts/coach-contacts';
import { Rules } from '../pages/rules/rules';
import { Search } from '../pages/search/search';
import { Help } from '../pages/help/help';
import { RateUmpire } from '../pages/rate-umpire/rate-umpire';

import {WppaFooterLogo} from "../components/wppa-footer-logo/wppa-footer-logo";

@NgModule({
  declarations: [
    MyApp,

    //pages
    Home,
    CoachGameSchedule,
    CoachContacts,
    Rules,
    Search,
    Help,
    RateUmpire,

    //components
    WppaFooterLogo
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CustomIconsModule,
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    CoachGameSchedule,
    CoachContacts,
    Rules,
    Search,
    Help,
    RateUmpire,
  ],
  providers: []
})
export class AppModule {}
