import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the InicioSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-sesion',
  templateUrl: 'inicio-sesion.html',
})

export class InicioSesionPage {

  myForm: FormGroup;

    constructor(public navCtrl: NavController,  public fb: FormBuilder) {
    
      this.myForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        pass: ['', [Validators.required, Validators.pattern(/^[a-z0-9]{6,18}$/)]],
      }); 
    }
  
    public irPagSiguiente(){
    
      //var cipEmpleado: string = ("#userEmail").valueOf;
      //var cipEmpleado = new String(('#userEmail').valueOf);
   
      //var index = cipEmpleado.localeCompare('hola@hola.com');

      //let cipEmpleado : string = (document.getElementById('userEmail')).nodeValue;

      //let cipEmpleado : string = document.getElementById('userEmail').nodeValue;
     //let cip : string = 

 
        this.navCtrl.push('PrincipalUsuarioPage');
    }
    public irRegistrarse(){
      this.navCtrl.push('RegistrarsePage');
    }
}
   
 


