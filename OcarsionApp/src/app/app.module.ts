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
import { ChatUsuarioPage } from '../pages/chat-usuario/chat-usuario';
import { ElegirConcesionarioPage } from '../pages/elegir-concesionario/elegir-concesionario';
import { MensajesAdministradorPage } from '../pages/mensajes-administrador/mensajes-administrador';
import { SubirCocheAdminPage } from '../pages/subir-coche-admin/subir-coche-admin';

export const fireBaseConfig={
  apiKey: "AIzaSyDzcwRF3oCpx_T1KNr2sMjH8ouwEf6WAIg",
  authDomain: "dsi-ocarsion.firebaseapp.com",
  databaseURL: "https://dsi-ocarsion.firebaseio.com",
  projectId: "dsi-ocarsion",
  storageBucket: "",
  messagingSenderId: "594662433442"};


@NgModule({
  declarations: [
    MyApp,
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
