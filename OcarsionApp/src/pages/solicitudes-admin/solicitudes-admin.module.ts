import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitudesAdminPage } from './solicitudes-admin';

@NgModule({
  declarations: [
    SolicitudesAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitudesAdminPage),
  ],
})
export class SolicitudesAdminPageModule {}
