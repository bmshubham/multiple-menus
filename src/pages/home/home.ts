import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuProvider } from '../../providers/menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuProvider: MenuProvider) {}

}
