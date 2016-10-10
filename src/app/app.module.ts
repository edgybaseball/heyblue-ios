import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Home } from '../pages/home/home';
import { CoachGameSchedule} from '../pages/coach-game-schedule/coach-game-schedule';
import { CoachContacts } from  '../pages/coach-contacts/coach-contacts';

@NgModule({
  declarations: [
    MyApp,
    Home,
    CoachGameSchedule,
    CoachContacts,
    Page1, //TODO remove these
    Page2,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    CoachGameSchedule,
    CoachContacts,
    Page1,
    Page2
  ],
  providers: []
})
export class AppModule {}
