import { Injectable } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Injectable()
export class MenuProvider {

  constructor(private menu: MenuController) {
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
