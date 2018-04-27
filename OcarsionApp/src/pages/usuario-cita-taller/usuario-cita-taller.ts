import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicioSesionPage } from '../inicio-sesion/inicio-sesion';
import { Calendar } from '@ionic-native/calendar';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar) {}
 irHome()
  {
  this.navCtrl.setRoot(InicioSesionPage);
  }
 irPagSiguiente()
  {
  this.navCtrl.push('InicioSesionPage');
  }
calendarioTaller(){
  this.calendar.createCalendar('MyCalendar').then(
    (msg) => { console.log(msg); },
    (err) => { console.log(err); }
  );

}

 
}
