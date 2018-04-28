import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { Coche,EstadoCoche } from './coche';

/**
 * Generated class for the PrincipalAdministradorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal-administrador',
  templateUrl: 'principal-administrador.html',
})

export class PrincipalAdministradorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public EstadoCoche:any = EstadoCoche;
  
  public coches:Array<Coche>=[	new Coche('renault','Scenic',new Date(2003,4,12), 5000,'coche01.jpg'),
							new Coche('seat','Ibiza',new Date(2003,4,12),1200,'coche02.jpg'),
							new Coche('renault','Megane',new Date(2006,12,23),3500,'coche03.jpg'),
							new Coche('tesla','Model 3',new Date(2006,12,23),4000,'coche06.jpg')];
  
  public filtro:string='';
   
  public getFiltrados():Array<number>{
	  var filtrados:Array<number>=[];
	  var indice:number=0;
	  for(var coche of this.coches)
	  {
		  if (coche.marca.lastIndexOf(this.filtro, 0) === 0) filtrados.push(indice);
		  indice=indice+1;
	  }
	return filtrados;
  }
 
  public cmd_vender(id)
  {
	  this.coches.splice(id,1);
  }
  
  public cmd_rebajar(id)
  {
	  this.coches[id].rebajar(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalAdministradorPage');
  }

  irPagSiguiente()
  {
  this.navCtrl.push('MensajesAdministradorPage');
  }

}
