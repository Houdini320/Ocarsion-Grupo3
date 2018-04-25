import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InicioSesionPage } from '../inicio-sesion/inicio-sesion';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
 irHome()
  {
  this.navCtrl.setRoot(HomePage);
  }
 irPagSiguiente()
  {
  this.navCtrl.push('InicioSesionPage');
  }
 }