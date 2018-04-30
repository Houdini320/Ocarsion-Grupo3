import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
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

    constructor(public navCtrl: NavController,  public fb: FormBuilder, public alertCtrl: AlertController) {
    
      this.myForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        pass: ['', [Validators.required, Validators.pattern(/^[a-z0-9]{6,18}$/)]],
      }); 
    }
  
    public irRegistrarse(){
      this.navCtrl.push('RegistrarsePage');
    }
    public doConfirm() {
     
      this.doAlerta();

      if(this.myEmail == 'sheila@gmail.com'){

        this.navCtrl.push('PrincipalAdministradorPage');
      }
      else{

        this.navCtrl.push('PrincipalUsuarioPage');
      }
    }

    public doAlerta() {

      let prompt = this.alertCtrl.create({
         title: 'Ocarsion',
         message: 'Se ha iniciado sesión correctamente. <br/><br/> ¡Bienvenido de nuevo!'
       });

       prompt.present();    
     }

}
   
 


