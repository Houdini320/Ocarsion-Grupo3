import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioSesionPage } from '../pages/inicio-sesion/inicio-sesion';
import { ChatUsuarioPage } from '../pages/chat-usuario/chat-usuario';
import { ElegirConcesionarioPage } from '../pages/elegir-concesionario/elegir-concesionario';
import { MensajesAdministradorPage } from '../pages/mensajes-administrador/mensajes-administrador';
import { SubirCocheAdminPage } from '../pages/subir-coche-admin/subir-coche-admin';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioSesionPage;

  pages: Array<{title: string, component: any}>;
  pages2: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Notificaciones', component: ChatUsuarioPage },
      { title: 'Cambiar concesionario', component: ElegirConcesionarioPage },
      { title: 'Cerrar sesión', component: InicioSesionPage }
    ];

    this.pages2 = [
      { title: 'Notificaciones', component: MensajesAdministradorPage },
      { title: 'Subir coche', component: SubirCocheAdminPage },
      { title: 'Cerrar sesión', component: InicioSesionPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  

}