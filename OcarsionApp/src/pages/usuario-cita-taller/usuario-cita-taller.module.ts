import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioCitaTallerPage } from './usuario-cita-taller';
import { Calendar } from '@ionic-native/calendar';

@NgModule({
  declarations: [
    UsuarioCitaTallerPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioCitaTallerPage),
  ],
})
export class UsuarioCitaTallerPageModule {}

