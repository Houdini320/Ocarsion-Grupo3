import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, UrlSerializer } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegistrarsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {

  myForm: FormGroup;

  constructor(public navCtrl: NavController,  public fb: FormBuilder, public alertCtrl: AlertController) {
    
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.pattern(/^[a-z0-9]{6,18}$/)]],
    }); 
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarsePage');
  }

  public irPagSiguiente(){
    this.navCtrl.push('PrincipalUsuarioPage');
  }

  public doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Confirmación de registro',
      message: "Si usted es un administrador introduzca su CIP de empleado",
      inputs: [
        {
          name: 'CIP',
          placeholder: 'CIP'
        },
      ],
      buttons: [
        {
          text: 'Registrarse como administrador',
          handler: data => {
            this.doAlert();
            this.navCtrl.push('PrincipalAdministradorPage');
          }
        },
        {
          text: 'No soy administrador',
          handler: data => {
            this.doAlert();
            this.navCtrl.push('PrincipalUsuarioPage');
          }
        }
      ]
    });
    prompt.present();
  }

  public doAlert() {
    let alert = this.alertCtrl.create({
      title: '¡Registro completado!',
      message: '¡Gracias por unirte a esta gran familia del mundo del automóvil!',
      buttons: ['Ok']
    });
    alert.present()
  }

}
