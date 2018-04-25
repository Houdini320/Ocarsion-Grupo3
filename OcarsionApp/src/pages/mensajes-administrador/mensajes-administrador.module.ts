import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensajesAdministradorPage } from './mensajes-administrador';

@NgModule({
  declarations: [
    MensajesAdministradorPage,
  ],
  imports: [
    IonicPageModule.forChild(MensajesAdministradorPage),
  ],
})
export class MensajesAdministradorPageModule {}
