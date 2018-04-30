webpackJsonp([3],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioCitaTallerPageModule", function() { return UsuarioCitaTallerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_cita_taller__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsuarioCitaTallerPageModule = /** @class */ (function () {
    function UsuarioCitaTallerPageModule() {
    }
    UsuarioCitaTallerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__usuario_cita_taller__["a" /* UsuarioCitaTallerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__usuario_cita_taller__["a" /* UsuarioCitaTallerPage */]),
            ],
        })
    ], UsuarioCitaTallerPageModule);
    return UsuarioCitaTallerPageModule;
}());

//# sourceMappingURL=usuario-cita-taller.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioCitaTallerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_sesion_inicio_sesion__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_cliente_model__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UsuarioCitaTallerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuarioCitaTallerPage = /** @class */ (function () {
    function UsuarioCitaTallerPage(navCtrl, dbFirebase) {
        this.navCtrl = navCtrl;
        this.dbFirebase = dbFirebase;
    }
    UsuarioCitaTallerPage.prototype.irHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__inicio_sesion_inicio_sesion__["a" /* InicioSesionPage */]);
    };
    UsuarioCitaTallerPage.prototype.irPagSiguiente = function () {
        this.navCtrl.push('InicioSesionPage');
    };
    UsuarioCitaTallerPage.prototype.addCliente2 = function () {
        var datoscliente = new __WEBPACK_IMPORTED_MODULE_4__models_cliente_model__["a" /* Cliente */]();
        datoscliente.mensaje = this.mensaje;
        datoscliente.nombre = this.nombre;
        datoscliente.fecha = this.myDate;
        datoscliente.hora = this.myHour;
        datoscliente.estado = "";
        this.dbFirebase.guardaCliente(datoscliente).then(function (res) {
            alert(datoscliente.nombre + " guardado en FB");
        });
    };
    UsuarioCitaTallerPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getClientes().subscribe(function (listaClientes) { _this.listaClientes = listaClientes; });
    };
    UsuarioCitaTallerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuario-cita-taller',template:/*ion-inline-start:"/Users/elenamartinez/Documents/GitHub/Ocarsion-Grupo3/OcarsionApp/src/pages/usuario-cita-taller/usuario-cita-taller.html"*/'<!--\n  Generated template for the UsuarioCitaTallerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>usuarioCitaTaller</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-input [(ngModel)]="nombre" type="text" placeholder="nombre"></ion-input>\n\n  <ion-item>\n    <ion-label>Concepto</ion-label>\n    <ion-select [(ngModel)]="mensaje">\n      <ion-option value="comprar coche">Comprar</ion-option>\n      <ion-option value="vender coche">Vender</ion-option>\n      <ion-option value="asistir al taller">Taller</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="myDate"></ion-datetime>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat="HH:mm" [(ngModel)]="myHour"></ion-datetime>\n    </ion-item>\n\n    <button ion-button (click)="addCliente2()">ENVIAR</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/elenamartinez/Documents/GitHub/Ocarsion-Grupo3/OcarsionApp/src/pages/usuario-cita-taller/usuario-cita-taller.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], UsuarioCitaTallerPage);
    return UsuarioCitaTallerPage;
}());

//# sourceMappingURL=usuario-cita-taller.js.map

/***/ })

});
//# sourceMappingURL=3.js.map