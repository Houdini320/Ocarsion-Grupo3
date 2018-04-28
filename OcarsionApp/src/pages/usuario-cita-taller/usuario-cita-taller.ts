import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the UsuarioCitaTallerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario-cita-taller',
  templateUrl: 'usuario-cita-taller.html',
})
export class UsuarioCitaTallerPage {

  calendars = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar, private plt: Platform) {
    this.plt.ready().then(() => {
        this.calendar.listCalendars().then(data => {
          this.calendars = data;
        });
    });
  }


  addEvent(cal){
    let date = new Date();
    let options = {calendarId: cal.id, calendarName: cal.name, url: 'https://ionicacademy.com', firstReminderMinutes: 15};

    this.calendar.createEventInteractivelyWithOptions('My new Event', 'Munster', 'Some especial notes', date, date, options).then(() => {

  });

}

  openCal(cal){
    this.navCtrl.push('CalDetailsPage', {name: cal.name});
  }
 irHome()
  {
  this.navCtrl.setRoot(HomePage);
  }
 irPagSiguiente()
  {
  this.navCtrl.push('InicioSesionPage');
  }

  

  calendarioTaller(){
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  
  }

 
}
