import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatUsuarioPage } from './chat-usuario';

@NgModule({
  declarations: [
    ChatUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatUsuarioPage),
  ],
})
export class ChatUsuarioPageModule {}
