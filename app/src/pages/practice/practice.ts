import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-practice',
    templateUrl: 'practice.html'
})
export class PracticePage {

    practices: any = [];

    constructor(public navCtrl: NavController) {



    }

}
