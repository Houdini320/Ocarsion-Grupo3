import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicioSesionPage } from '../inicio-sesion/inicio-sesion';
/**
 * Generated class for the ChatUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-usuario',
  templateUrl: 'chat-usuario.html',
})
export class ChatUsuarioPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  irHome()
   {
   this.navCtrl.setRoot(InicioSesionPage);
   }
  irPagSiguiente()
   {
   this.navCtrl.push('MensajesAdministradorPage');
   }

}
