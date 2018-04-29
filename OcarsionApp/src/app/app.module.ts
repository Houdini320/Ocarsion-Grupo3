import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

import { MyApp } from './app.component';
import { InicioSesionPage } from '../pages/inicio-sesion/inicio-sesion';
import { UsuarioCitaTallerPage } from '../pages/usuario-cita-taller/usuario-cita-taller';
import { ChatUsuarioPage } from '../pages/chat-usuario/chat-usuario';
import { ElegirConcesionarioPage } from '../pages/elegir-concesionario/elegir-concesionario';
import { MensajesAdministradorPage } from '../pages/mensajes-administrador/mensajes-administrador';
import { SubirCocheAdminPage } from '../pages/subir-coche-admin/subir-coche-admin';

export const fireBaseConfig={
  apiKey: "AIzaSyDuZH454-a8v05TUaRa5wG8N911-0DwuGE",
   authDomain: "dsi-ionic.firebaseapp.com",
   databaseURL: "https://dsi-ionic.firebaseio.com",
   projectId: "dsi-ionic",
   storageBucket: "dsi-ionic.appspot.com",
  messagingSenderId: "652473996242"};

@NgModule({
  declarations: [
    MyApp,
    UsuarioCitaTallerPage,
    ChatUsuarioPage,
    ElegirConcesionarioPage,
    InicioSesionPage,
    MensajesAdministradorPage,
    SubirCocheAdminPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fireBaseConfig),AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsuarioCitaTallerPage,
    ChatUsuarioPage,
    ElegirConcesionarioPage,
    InicioSesionPage,
    MensajesAdministradorPage,
    SubirCocheAdminPage
  ],
  providers: [
    StatusBar,
    FirebaseDbProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider
  ]
})
export class AppModule {}
