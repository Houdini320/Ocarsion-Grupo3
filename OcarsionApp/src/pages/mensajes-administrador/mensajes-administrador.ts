import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicioSesionPage } from '../inicio-sesion/inicio-sesion';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Cliente} from '../../models/cliente.model';
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
  
  listaClientes:any;
  estado: string;

  constructor(public navCtrl: NavController,public dbFirebase:FirebaseDbProvider) {

  }
 irHome()
  {
  this.navCtrl.setRoot(InicioSesionPage);
  }
 irPagSiguiente()
  {
  this.navCtrl.push('UsuarioCitaTallerPage');
  }

  /*
  updateCliente(id)
  {
	  let datoscliente:Cliente=new Cliente();
    datoscliente.id=id;
    datoscliente.nombre =this.nombre;
	  datoscliente.concesionario=this.concesionario;
	  datoscliente.mensaje=this.mensaje;
	  
	  this.dbFirebase.guardaCliente(datoscliente);
  }
  */

  estadoCitaAceptada(id, fecha, hora)
  {
    
	  let datoscliente:Cliente=new Cliente();
    datoscliente.id=id;
    datoscliente.fecha=fecha;
    datoscliente.hora=hora;
    datoscliente.estado="aceptada";
	  
	  this.dbFirebase.guardaCliente(datoscliente);
  }

  estadoCitaRechazada(id, fecha, hora)
  {
	  let datoscliente:Cliente=new Cliente();
    datoscliente.id=id;
    datoscliente.fecha=fecha;
    datoscliente.hora=hora;
	  datoscliente.estado="rechazada";
	  
	  this.dbFirebase.guardaCliente(datoscliente);
  }

  ionViewDidEnter()
 {
 this.dbFirebase.getClientes().subscribe(listaClientes=>{this.listaClientes=listaClientes;});
 }
  
  

}
