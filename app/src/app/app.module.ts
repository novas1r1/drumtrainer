import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {PracticePage} from '../pages/practice/practice';
import {StatisticPage} from '../pages/statistic/statistic';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {DataService} from "../providers/dataservice";
import {APIService} from "../providers/apiservice";

@NgModule({
    declarations: [
        MyApp,
        PracticePage,
        StatisticPage,
        HomePage,
        TabsPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        PracticePage,
        StatisticPage,
        HomePage,
        TabsPage
    ],
    providers: [DataService, APIService]
})
export class AppModule {
}
