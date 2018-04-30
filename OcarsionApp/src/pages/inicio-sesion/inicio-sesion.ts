import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MyApp } from '../../app/app.component';
import { AlertController } from 'ionic-angular';

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
  myEmail: string;

    constructor(public navCtrl: NavController,  public fb: FormBuilder, public alerCtrl: AlertController) {
    
      this.myForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        pass: ['', [Validators.required, Validators.pattern(/^[a-z0-9]{6,18}$/)]],
      }); 
    }
  
    public irRegistrarse(){
      this.navCtrl.push('RegistrarsePage');
    }
    public doConfirm() {
     
      if(this.myEmail == 'sheila@gmail.com'){

        this.navCtrl.push('PrincipalAdministradorPage');
      }
      else{

        this.navCtrl.push('PrincipalUsuarioPage');
      }
    }

}
   
 


