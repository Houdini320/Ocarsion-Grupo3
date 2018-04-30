import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
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
