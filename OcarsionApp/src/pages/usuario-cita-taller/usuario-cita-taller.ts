import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicioSesionPage } from '../inicio-sesion/inicio-sesion';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Cliente} from '../../models/cliente.model';
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

  listaClientes:any;
  nombre : string;
  mensaje : string;
  myDate : Date;
  myHour : Date;
  
  constructor(public navCtrl: NavController,public dbFirebase:FirebaseDbProvider) {

  }
  
 irHome()
  {
  this.navCtrl.setRoot(InicioSesionPage);
  }
 irPagSiguiente()
  {
  this.navCtrl.push('InicioSesionPage');
  }

  
  
  addCliente2()
  {
		let datoscliente:Cliente=new Cliente();

    datoscliente.mensaje=this.mensaje;
    datoscliente.nombre=this.nombre;
    datoscliente.fecha=this.myDate;
    datoscliente.hora=this.myHour;
    datoscliente.estado="";

	  
		this.dbFirebase.guardaCliente(datoscliente).then(res=>{
			alert(datoscliente.nombre+ " guardado en FB");
		});
	  
  }

  ionViewDidEnter()
 {
 this.dbFirebase.getClientes().subscribe(listaClientes=>{this.listaClientes=listaClientes;});
 }
  

 
}
