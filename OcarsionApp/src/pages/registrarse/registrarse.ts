import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(public navCtrl: NavController,  public fb: FormBuilder) {
    
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.pattern(/^[a-z0-9]{6,18}$/)]],
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarsePage');
  }
  irPagSiguiente(){
    this.navCtrl.push('PrincipalUsuarioPage');
    }

}
