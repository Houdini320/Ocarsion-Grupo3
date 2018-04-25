import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the UsuarioCompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario-compra',
  templateUrl: 'usuario-compra.html',
})
export class UsuarioCompraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
    irHome()
    {
    this.navCtrl.setRoot(HomePage);
    }
   irPagSiguiente()
    {
    this.navCtrl.push('ChatUsuarioPage');
    }
   }
