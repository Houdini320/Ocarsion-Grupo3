import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  public EstadoCoche:any = EstadoCoche;
  
  public coches:Array<Coche>=[	new Coche('audi','A1',new Date(2012,4,12),10000,'coche01.jpg'),
							new Coche('seat','Ateca',new Date(2017,6,21),15000,'coche02.jpg'),
							new Coche('audi','TT',new Date(2015,12,20),20000,'coche03.jpg'),
							new Coche('bmw','Serie 4',new Date(2014,11,5),30000,'coche04.jpg')];
  
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalAdministradorPage');
  }

  irPagSiguiente()
  {
  this.navCtrl.push('MensajesAdministradorPage');
  }

  ionViewDidEnter(){

    this.menuCtrl.enable(false, 'menu1');
    this.menuCtrl.enable(true, 'menu2');
  }

}
