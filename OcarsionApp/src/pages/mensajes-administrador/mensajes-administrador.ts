import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the MensajesAdministradorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensajes-administrador',
  templateUrl: 'mensajes-administrador.html',
})
export class MensajesAdministradorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
 irHome()
  {
  this.navCtrl.setRoot(HomePage);
  }
 irPagSiguiente()
  {
  this.navCtrl.push('UsuarioCitaTallerPage');
  }

}
