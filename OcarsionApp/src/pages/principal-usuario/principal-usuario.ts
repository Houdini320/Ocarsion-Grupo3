import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the PrincipalUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal-usuario',
  templateUrl: 'principal-usuario.html',
})
export class PrincipalUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
    irHome()
    {
    this.navCtrl.setRoot(HomePage);
    }
   irPagSiguiente()
    {
    this.navCtrl.push('UsuarioCompraPage');
    }
   }
