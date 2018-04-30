import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicioSesionPage } from '../inicio-sesion/inicio-sesion';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Cliente} from '../../models/cliente.model';
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
  
  listaClientes:any;
  
  constructor(public navCtrl: NavController,public dbFirebase:FirebaseDbProvider) {

  }

  
   delCliente(id) { this.dbFirebase.delCliente(id); }

  ionViewDidEnter()
 {
 this.dbFirebase.getClientes().subscribe(listaClientes=>{this.listaClientes=listaClientes;});
 }
  
 backButton() {

  this.navCtrl.push('PrincipalUsuarioPage');
}

}
