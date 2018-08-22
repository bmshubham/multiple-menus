import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    menu.enable(true);
  }   

  openMenu(evt) {
    if(evt === "menu1"){
       this.menu.enable(true, 'menu1');
       this.menu.enable(false, 'menu2');
       this.menu.enable(false, 'menu3');
    } else if(evt === "menu2") {
       this.menu.enable(true, 'menu2');
       this.menu.enable(false, 'menu1');
       this.menu.enable(false, 'menu3');
    } else {
      this.menu.enable(true, 'menu3');
      this.menu.enable(false, 'menu1');
      this.menu.enable(false, 'menu2');
    }
    this.menu.toggle();
  }

}
