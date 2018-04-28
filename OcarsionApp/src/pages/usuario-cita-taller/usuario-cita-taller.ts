import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicioSesionPage } from '../inicio-sesion/inicio-sesion';
/**
 * Generated class for the UsuarioCitaTallerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario-cita-taller',
  templateUrl: 'usuario-cita-taller.html',
})
export class UsuarioCitaTallerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
 irHome()
  {
  this.navCtrl.setRoot(InicioSesionPage);
  }
 irPagSiguiente()
  {
  this.navCtrl.push('InicioSesionPage');
  }


 
}
