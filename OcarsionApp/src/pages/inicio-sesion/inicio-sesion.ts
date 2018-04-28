import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  
   irPagSiguiente()
    {
    this.navCtrl.push('PrincipalAdministradorPage');
    }
    
    irRegistrarse()
    {
      this.navCtrl.push('RegistrarsePage');
    }
    

   }
   
 


