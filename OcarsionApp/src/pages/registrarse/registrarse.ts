import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
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
  myEmpleado: string;

  constructor(public navCtrl: NavController,  public fb: FormBuilder, public alertCtrl: AlertController) {
    
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.pattern(/^[a-z0-9]{6,18}$/)]],
      empleado: ['']
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
      message: '¿Eres empleado?',

      buttons: [
        {
          text: 'Sí',
          handler: data => {
            this.rellenarCip();            
          }
        },
        {
          text: 'No',
          handler: data => {
            this.doAlert();
            this.navCtrl.push('PrincipalUsuarioPage');
          }
        }
      ]
    });
    prompt.present();
  }

  public rellenarCip() {

   let prompt = this.alertCtrl.create({
      title: 'Rellenar CIP',

      inputs: [
        {
          name: 'CIP',
          placeholder: 'CIP'
        },
      ],
      buttons: [
        {
          text: 'Aceptar',
          handler: data => {
            this.doAlert();
            this.navCtrl.push('PrincipalAdministradorPage');           
          }
        },
        {
          text: 'Cancelar',
          handler: data => {
            this.navCtrl.push('RegistrarsePage');
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
