import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { InicioSesionPage } from '../pages/inicio-sesion/inicio-sesion';
import { UsuarioCompraPage } from '../pages/usuario-compra/usuario-compra';
import { ChatUsuarioPage } from '../pages/chat-usuario/chat-usuario';
import { ElegirConcesionarioPage } from '../pages/elegir-concesionario/elegir-concesionario';
import { MensajesAdministradorPage } from '../pages/mensajes-administrador/mensajes-administrador';

@NgModule({
  declarations: [
    MyApp,
    UsuarioCompraPage,
    ChatUsuarioPage,
    ElegirConcesionarioPage,
    InicioSesionPage,
    MensajesAdministradorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsuarioCompraPage,
    ChatUsuarioPage,
    ElegirConcesionarioPage,
    InicioSesionPage,
    MensajesAdministradorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
