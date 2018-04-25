import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioCompraPage } from './usuario-compra';

@NgModule({
  declarations: [
    UsuarioCompraPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioCompraPage),
  ],
})
export class UsuarioCompraPageModule {}
