webpackJsonp([11],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioSesionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
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
 * Generated class for the InicioSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioSesionPage = /** @class */ (function () {
    function InicioSesionPage(navCtrl, fb, alertCtrl) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.myForm = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            pass: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9]{6,18}$/)]],
        });
    }
    InicioSesionPage.prototype.irRegistrarse = function () {
        this.navCtrl.push('RegistrarsePage');
    };
    InicioSesionPage.prototype.doConfirm = function () {
        this.doAlerta();
        if (this.myEmail == 'sheila@gmail.com') {
            this.navCtrl.push('PrincipalAdministradorPage');
        }
        else {
            this.navCtrl.push('PrincipalUsuarioPage');
        }
    };
    InicioSesionPage.prototype.doAlerta = function () {
        var prompt = this.alertCtrl.create({
            title: 'Ocarsion',
            message: 'Se ha iniciado sesión correctamente. <br/><br/> ¡Bienvenido de nuevo!'
        });
        prompt.present();
    };
    InicioSesionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio-sesion',template:/*ion-inline-start:"C:\Users\spshe\Documents\GitHub\Ocarsion-Grupo3\OcarsionApp\OcarsionApp\src\pages\inicio-sesion\inicio-sesion.html"*/'<!--\n\n  Generated template for the InicioSesionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header id="header">\n\n  <img id="logo" src="assets/imgs/Logo1.png">\n\n<ion-toolbar>\n\n<ion-title>Iniciar sesión</ion-title>\n\n</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<form [formGroup]="myForm" novalidate> \n\n  <ion-list>\n\n    <ion-item>\n\n    <ion-label id = "user" color="dark" stacked>Usuario</ion-label>\n\n      <ion-input id = "userEmail" [(ngModel)]="myEmail" formControlName="email" type="email" placeholder="introduce tu email"></ion-input>\n\n    </ion-item>\n\n\n\n    <div id = "errorEmail" *ngIf="myForm.get(\'email\').errors && myForm.get(\'email\').dirty">\n\n      <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'required\')">Campo obligatorio</p>\n\n      <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'email\')">Formato de email incorrecto</p>\n\n    </div>\n\n\n\n    <ion-item>\n\n      <ion-label id = "pass" color="dark" stacked>Contraseña</ion-label>\n\n      <ion-input id = "pass" formControlName="pass" type="password" placeholder="introduce tu contraseña"></ion-input>\n\n    </ion-item>\n\n\n\n    <div id = "errorPass" *ngIf="myForm.get(\'pass\').errors && myForm.get(\'pass\').dirty">\n\n      <p color="danger" ion-text *ngIf="myForm.get(\'pass\').hasError(\'required\')">Campo obligatorio</p>\n\n      <p color="danger" ion-text *ngIf="myForm.get(\'pass\').hasError(\'pattern\')">Contraseña débil</p>\n\n    </div>\n\n\n\n  </ion-list>\n\n</form>\n\n\n\n<div id = "botonEntrar" >\n\n  <button id = "letraBoton" ion-button large (click)="doConfirm()" [disabled]="myForm.invalid">Entrar</button>\n\n</div>  \n\n<div id = "registro">\n\n  <p>¿Todavia no te has registrado?</p>\n\n  <a class="button" (click)="irRegistrarse()" >Regístrate aquí</a>\n\n</div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\spshe\Documents\GitHub\Ocarsion-Grupo3\OcarsionApp\OcarsionApp\src\pages\inicio-sesion\inicio-sesion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InicioSesionPage);
    return InicioSesionPage;
}());

//# sourceMappingURL=inicio-sesion.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(56);
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
 * Generated class for the ChatUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatUsuarioPage = /** @class */ (function () {
    function ChatUsuarioPage(navCtrl, dbFirebase) {
        this.navCtrl = navCtrl;
        this.dbFirebase = dbFirebase;
    }
    ChatUsuarioPage.prototype.delCliente = function (id) { this.dbFirebase.delCliente(id); };
    ChatUsuarioPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getClientes().subscribe(function (listaClientes) { _this.listaClientes = listaClientes; });
    };
    ChatUsuarioPage.prototype.backButton = function () {
        this.navCtrl.push('PrincipalUsuarioPage');
    };
    ChatUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-usuario',template:/*ion-inline-start:"C:\Users\spshe\Documents\GitHub\Ocarsion-Grupo3\OcarsionApp\OcarsionApp\src\pages\chat-usuario\chat-usuario.html"*/'<!--\n\n  Generated template for the ChatUsuarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-toolbar>\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)="backButton()">\n\n                <ion-icon name="arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>Ocarsion</ion-title>\n\n    </ion-toolbar>\n\n\n\n    <ion-toolbar>         \n\n      <div id="subheader">\n\n          <p id="nombreConcesionario">PemaCar</p>\n\n      </div>               \n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <h2 id="titulo">Notificaciones</h2>\n\n\n\n    <ng-container *ngFor="let cliente of listaClientes ">\n\n      <ion-card id="carta" *ngIf="cliente.estado != \'\' ">\n\n        <ion-card-content>\n\n          La cita para el día {{cliente.fecha | date: \'dd/MM/yyyy\'}} a las {{cliente.hora}} ha sido {{cliente.estado | uppercase}}\n\n          <div id="eliminar">\n\n           <button id="botonEliminar" small ion-button (click)="delCliente([cliente.id])">Eliminar</button>\n\n          </div>\n\n          </ion-card-content>\n\n      </ion-card>        \n\n    </ng-container>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\spshe\Documents\GitHub\Ocarsion-Grupo3\OcarsionApp\OcarsionApp\src\pages\chat-usuario\chat-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], ChatUsuarioPage);
    return ChatUsuarioPage;
}());

//# sourceMappingURL=chat-usuario.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElegirConcesionarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the ElegirConcesionarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ElegirConcesionarioPage = /** @class */ (function () {
    function ElegirConcesionarioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ElegirConcesionarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ElegirConcesionarioPage');
    };
    ElegirConcesionarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-elegir-concesionario',template:/*ion-inline-start:"C:\Users\spshe\Documents\GitHub\Ocarsion-Grupo3\OcarsionApp\OcarsionApp\src\pages\elegir-concesionario\elegir-concesionario.html"*/'<!--\n\n  Generated template for the ElegirConcesionarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>elegirConcesionario</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\spshe\Documents\GitHub\Ocarsion-Grupo3\OcarsionApp\OcarsionApp\src\pages\elegir-concesionario\elegir-concesionario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ElegirConcesionarioPage);
    return ElegirConcesionarioPage;
}());

//# sourceMappingURL=elegir-concesionario.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajesAdministradorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cliente_model__ = __webpack_require__(225);
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
 * Generated class for the MensajesAdministradorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MensajesAdministradorPage = /** @class */ (function () {
    function MensajesAdministradorPage(navCtrl, dbFirebase) {
        this.navCtrl = navCtrl;
        this.dbFirebase = dbFirebase;
    }
    /*
    updateCliente(id)
    {
        let datoscliente:Cliente=new Cliente();
      datoscliente.id=id;
      datoscliente.nombre =this.nombre;
        datoscliente.concesionario=this.concesionario;
        datoscliente.mensaje=this.mensaje;
        
        this.dbFirebase.guardaCliente(datoscliente);
    }
    */
    MensajesAdministradorPage.prototype.estadoCitaAceptada = function (id, fecha, hora, nombre) {
        var datoscliente = new __WEBPACK_IMPORTED_MODULE_3__models_cliente_model__["a" /* Cliente */]();
        datoscliente.id = id;
        datoscliente.fecha = fecha;
        datoscliente.hora = hora;
        datoscliente.nombre = nombre;
        datoscliente.estado = "aceptada";
        this.dbFirebase.guardaCliente(datoscliente);
    };
    MensajesAdministradorPage.prototype.estadoCitaRechazada = function (id, fecha, hora) {
        var datoscliente = new __WEBPACK_IMPORTED_MODULE_3__models_cliente_model__["a" /* Cliente */]();
        datoscliente.id = id;
        datoscliente.fecha = fecha;
        datoscliente.hora = hora;
        datoscliente.estado = "rechazada";
        this.dbFirebase.guardaCliente(datoscliente);
    };
    MensajesAdministradorPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getClientes().subscribe(function (listaClientes) { _this.listaClientes = listaClientes; });
    };
    MensajesAdministradorPage.prototype.backButton = function () {
        this.navCtrl.push('PrincipalAdministradorPage');
    };
    MensajesAdministradorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mensajes-administrador',template:/*ion-inline-start:"C:\Users\spshe\Documents\GitHub\Ocarsion-Grupo3\OcarsionApp\OcarsionApp\src\pages\mensajes-administrador\mensajes-administrador.html"*/'<!--\n\n  Generated template for the MensajesAdministradorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-toolbar>\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)="backButton()">\n\n                <ion-icon name="arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>Ocarsion</ion-title>\n\n    </ion-toolbar>\n\n\n\n    <ion-toolbar>         \n\n        <div id="subheader">\n\n          <p id="nombreConcesionario">PemaCar</p>\n\n        </div>          \n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<h3 id="titulo">Citas pendientes</h3>\n\n<ng-container *ngFor="let cliente of listaClientes ">\n\n\n\n  <ion-card id="carta" *ngIf="cliente.estado == \'\' ">\n\n\n\n    <ion-card-header>    \n\n      {{cliente.mensaje | uppercase}}\n\n    </ion-card-header>\n\n    \n\n    <ion-card-content>\n\n      El cliente {{cliente.nombre}} quiere pedir una cita el día {{cliente.fecha | date: \'dd/MM/yyyy\'}} a las {{cliente.hora}} para {{cliente.mensaje}}\n\n     <div id="botonesAdmin">\n\n      <button id="botonAceptar" small ion-button (click)="estadoCitaAceptada([cliente.id],[cliente.fecha],[cliente.hora],[cliente.nombre])">Aceptar</button>\n\n      <button id="botonRechazar" small ion-button (click)="estadoCitaRechazada([cliente.id],[cliente.fecha],[cliente.hora])">Rechazar</button>\n\n     </div>\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n\n\n</ng-container>\n\n\n\n<h3 id="titulo2">Próximas citas</h3>\n\n<ng-container *ngFor="let cliente of listaClientes ">\n\n\n\n  <ion-card id="carta" *ngIf="cliente.estado == \'aceptada\' ">\n\n    \n\n    <ion-card-content>\n\n      El cliente {{cliente.nombre}} tiene una cita el día {{cliente.fecha | date: \'dd/MM/yyyy\'}} a las {{cliente.hora}}\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n\n\n</ng-container>\n\n  \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\spshe\Documents\GitHub\Ocarsion-Grupo3\OcarsionApp\OcarsionApp\src\pages\mensajes-administrador\mensajes-administrador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], MensajesAdministradorPage);
    return MensajesAdministradorPage;
}());

//# sourceMappingURL=mensajes-administrador.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubirCocheAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the SubirCocheAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubirCocheAdminPage = /** @class */ (function () {
    function SubirCocheAdminPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SubirCocheAdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubirCocheAdminPage');
    };
    SubirCocheAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subir-coche-admin',template:/*ion-inline-start:"C:\Users\spshe\Documents\GitHub\Ocarsion-Grupo3\OcarsionApp\OcarsionApp\src\pages\subir-coche-admin\subir-coche-admin.html"*/'<!--\n\n  Generated template for the SubirCocheAdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>subirCocheAdmin</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\spshe\Documents\GitHub\Ocarsion-Grupo3\OcarsionApp\OcarsionApp\src\pages\subir-coche-admin\subir-coche-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SubirCocheAdminPage);
    return SubirCocheAdminPage;
}());

//# sourceMappingURL=subir-coche-admin.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat-usuario/chat-usuario.module": [
		338,
		10
	],
	"../pages/elegir-concesionario/elegir-concesionario.module": [
		339,
		9
	],
	"../pages/inicio-sesion/inicio-sesion.module": [
		340,
		8
	],
	"../pages/mensajes-administrador/mensajes-administrador.module": [
		341,
		7
	],
	"../pages/principal-administrador/principal-administrador.module": [
		342,
		1
	],
	"../pages/principal-usuario/principal-usuario.module": [
		343,
		0
	],
	"../pages/registrarse/registrarse.module": [
		344,
		5
	],
	"../pages/solicitudes-admin/solicitudes-admin.module": [
		345,
		4
	],
	"../pages/subir-coche-admin/subir-coche-admin.module": [
		346,
		6
	],
	"../pages/usuario-cita-taller/usuario-cita-taller.module": [
		347,
		3
	],
	"../pages/usuario-compra/usuario-compra.module": [
		348,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.id = "";
    }
    return Cliente;
}());

//# sourceMappingURL=cliente.model.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(246);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fireBaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_firebase_db_firebase_db__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_inicio_sesion_inicio_sesion__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chat_usuario_chat_usuario__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_elegir_concesionario_elegir_concesionario__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mensajes_administrador_mensajes_administrador__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_subir_coche_admin_subir_coche_admin__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var fireBaseConfig = {
    apiKey: "AIzaSyDzcwRF3oCpx_T1KNr2sMjH8ouwEf6WAIg",
    authDomain: "dsi-ocarsion.firebaseapp.com",
    databaseURL: "https://dsi-ocarsion.firebaseio.com",
    projectId: "dsi-ocarsion",
    storageBucket: "",
    messagingSenderId: "594662433442"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chat_usuario_chat_usuario__["a" /* ChatUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_elegir_concesionario_elegir_concesionario__["a" /* ElegirConcesionarioPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_inicio_sesion_inicio_sesion__["a" /* InicioSesionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mensajes_administrador_mensajes_administrador__["a" /* MensajesAdministradorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_subir_coche_admin_subir_coche_admin__["a" /* SubirCocheAdminPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(fireBaseConfig), __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat-usuario/chat-usuario.module#ChatUsuarioPageModule', name: 'ChatUsuarioPage', segment: 'chat-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elegir-concesionario/elegir-concesionario.module#ElegirConcesionarioPageModule', name: 'ElegirConcesionarioPage', segment: 'elegir-concesionario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio-sesion/inicio-sesion.module#InicioSesionPageModule', name: 'InicioSesionPage', segment: 'inicio-sesion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mensajes-administrador/mensajes-administrador.module#MensajesAdministradorPageModule', name: 'MensajesAdministradorPage', segment: 'mensajes-administrador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal-administrador/principal-administrador.module#PrincipalAdministradorPageModule', name: 'PrincipalAdministradorPage', segment: 'principal-administrador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal-usuario/principal-usuario.module#PrincipalUsuarioPageModule', name: 'PrincipalUsuarioPage', segment: 'principal-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrarse/registrarse.module#RegistrarsePageModule', name: 'RegistrarsePage', segment: 'registrarse', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/solicitudes-admin/solicitudes-admin.module#SolicitudesAdminPageModule', name: 'SolicitudesAdminPage', segment: 'solicitudes-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subir-coche-admin/subir-coche-admin.module#SubirCocheAdminPageModule', name: 'SubirCocheAdminPage', segment: 'subir-coche-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario-cita-taller/usuario-cita-taller.module#UsuarioCitaTallerPageModule', name: 'UsuarioCitaTallerPage', segment: 'usuario-cita-taller', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario-compra/usuario-compra.module#UsuarioCompraPageModule', name: 'UsuarioCompraPage', segment: 'usuario-compra', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chat_usuario_chat_usuario__["a" /* ChatUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_elegir_concesionario_elegir_concesionario__["a" /* ElegirConcesionarioPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_inicio_sesion_inicio_sesion__["a" /* InicioSesionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mensajes_administrador_mensajes_administrador__["a" /* MensajesAdministradorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_subir_coche_admin_subir_coche_admin__["a" /* SubirCocheAdminPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inicio_sesion_inicio_sesion__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_usuario_chat_usuario__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_elegir_concesionario_elegir_concesionario__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mensajes_administrador_mensajes_administrador__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_subir_coche_admin_subir_coche_admin__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_inicio_sesion_inicio_sesion__["a" /* InicioSesionPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Notificaciones', component: __WEBPACK_IMPORTED_MODULE_5__pages_chat_usuario_chat_usuario__["a" /* ChatUsuarioPage */] },
            { title: 'Cambiar concesionario', component: __WEBPACK_IMPORTED_MODULE_6__pages_elegir_concesionario_elegir_concesionario__["a" /* ElegirConcesionarioPage */] },
            { title: 'Cerrar sesión', component: __WEBPACK_IMPORTED_MODULE_4__pages_inicio_sesion_inicio_sesion__["a" /* InicioSesionPage */] }
        ];
        this.pages2 = [
            { title: 'Notificaciones', component: __WEBPACK_IMPORTED_MODULE_7__pages_mensajes_administrador_mensajes_administrador__["a" /* MensajesAdministradorPage */] },
            { title: 'Subir coche', component: __WEBPACK_IMPORTED_MODULE_8__pages_subir_coche_admin_subir_coche_admin__["a" /* SubirCocheAdminPage */] },
            { title: 'Cerrar sesión', component: __WEBPACK_IMPORTED_MODULE_4__pages_inicio_sesion_inicio_sesion__["a" /* InicioSesionPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\spshe\Documents\GitHub\Ocarsion-Grupo3\OcarsionApp\OcarsionApp\src\app\app.html"*/'<ion-menu [content]="content" id="menu1">\n\n        <ion-header>\n\n          <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n          </ion-toolbar>\n\n        </ion-header>\n\n      \n\n        <ion-content>\n\n          <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n        </ion-content>\n\n      \n\n      </ion-menu>\n\n\n\n<ion-menu [content]="content" id="menu2">\n\n          <ion-header>\n\n            <ion-toolbar>\n\n              <ion-title>Menu</ion-title>\n\n            </ion-toolbar>\n\n          </ion-header>\n\n        \n\n          <ion-content>\n\n            <ion-list>\n\n              <button menuClose ion-item *ngFor="let p of pages2" (click)="openPage(p)">\n\n                {{p.title}}\n\n              </button>\n\n            </ion-list>\n\n          </ion-content>\n\n        \n\n        </ion-menu>\n\n      \n\n      <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n      <ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n\n\n'/*ion-inline-end:"C:\Users\spshe\Documents\GitHub\Ocarsion-Grupo3\OcarsionApp\OcarsionApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


var FirebaseDbProvider = /** @class */ (function () {
    function FirebaseDbProvider(afDB) {
        this.afDB = afDB;
        this.clientesRef = this.afDB.list('clientes');
        console.log('Hello FirebaseDbProvider Provider');
    }
    FirebaseDbProvider.prototype.guardaCliente = function (cliente) {
        if (cliente.id == '') {
            cliente.id = "" + Date.now();
        }
        return this.afDB.database.ref('clientes/' + cliente.id).set(cliente);
    };
    FirebaseDbProvider.prototype.delCliente = function (id) {
        this.afDB.database.ref('clientes/' + id).remove();
    };
    FirebaseDbProvider.prototype.getClientes = function () {
        return this.clientesRef.valueChanges();
    };
    FirebaseDbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseDbProvider);
    return FirebaseDbProvider;
}());

//# sourceMappingURL=firebase-db.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map