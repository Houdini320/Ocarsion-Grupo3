webpackJsonp([5],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarsePageModule", function() { return RegistrarsePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrarse__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistrarsePageModule = /** @class */ (function () {
    function RegistrarsePageModule() {
    }
    RegistrarsePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registrarse__["a" /* RegistrarsePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registrarse__["a" /* RegistrarsePage */]),
            ],
        })
    ], RegistrarsePageModule);
    return RegistrarsePageModule;
}());

//# sourceMappingURL=registrarse.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarsePage; });
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
 * Generated class for the RegistrarsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrarsePage = /** @class */ (function () {
    function RegistrarsePage(navCtrl, fb, alertCtrl) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.myForm = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            pass: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9]{6,18}$/)]],
        });
    }
    RegistrarsePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrarsePage');
    };
    RegistrarsePage.prototype.irPagSiguiente = function () {
        this.navCtrl.push('PrincipalUsuarioPage');
    };
    RegistrarsePage.prototype.doPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Confirmación de registro',
            message: "Si usted es un administrador introduzca su CIP de empleado",
            inputs: [
                {
                    name: 'CIP',
                    placeholder: 'CIP'
                },
            ],
            buttons: [
                {
                    text: 'Registrarse como administrador',
                    handler: function (data) {
                        _this.doAlert();
                        _this.navCtrl.push('PrincipalAdministradorPage');
                    }
                },
                {
                    text: 'No soy administrador',
                    handler: function (data) {
                        _this.doAlert();
                        _this.navCtrl.push('PrincipalUsuarioPage');
                    }
                }
            ]
        });
        prompt.present();
    };
    RegistrarsePage.prototype.doAlert = function () {
        var alert = this.alertCtrl.create({
            title: '¡Registro completado!',
            message: '¡Gracias por unirte a esta gran familia del mundo del automóvil!',
            buttons: ['Ok']
        });
        alert.present();
    };
    RegistrarsePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registrarse',template:/*ion-inline-start:"/Users/elenamartinez/Documents/GitHub/Ocarsion-Grupo3/OcarsionApp/src/pages/registrarse/registrarse.html"*/'<!--\n  Generated template for the RegistrarsePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header id="header">\n    <img id="logo" src="../../assets/imgs/Logo1.png">\n<ion-toolbar>\n  <ion-title>Registrarse</ion-title>\n</ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="myForm" novalidate> \n    <ion-list>\n\n      <ion-item>\n        <ion-label id = "user" color="dark" stacked>Usuario</ion-label>\n          <ion-input id = "user" formControlName="email" type="email" placeholder="introduce tu email"></ion-input>\n        </ion-item>\n\n        <div id = "errorEmail" *ngIf="myForm.get(\'email\').errors && myForm.get(\'email\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'required\')">Campo obligatorio</p>\n          <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'email\')">Formato de email incorrecto</p>\n        </div>\n      \n        <ion-item>\n          <ion-label id = "pass" color="dark" stacked>Contraseña</ion-label>\n          <ion-input id = "pass" formControlName="pass" type="password" placeholder="introduce tu contraseña"></ion-input>\n        </ion-item>\n\n        <div id = "errorPass" *ngIf="myForm.get(\'pass\').errors && myForm.get(\'pass\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'pass\').hasError(\'required\')">Campo obligatorio</p>\n          <p color="danger" ion-text *ngIf="myForm.get(\'pass\').hasError(\'pattern\')">Contraseña débil</p>\n        </div>\n\n        <ion-item>\n          <ion-label id="check">He leído y acepto los <a>términos y condiciones</a></ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n\n      </ion-list>\n\n  </form>    \n\n      <div id = "botonRegistrar" >\n          <button id = "letraBoton" color = "danger" [disabled]="myForm.invalid" ion-button large (click)="doPrompt()">Registrar</button>\n      </div>  \n\n</ion-content>\n'/*ion-inline-end:"/Users/elenamartinez/Documents/GitHub/Ocarsion-Grupo3/OcarsionApp/src/pages/registrarse/registrarse.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegistrarsePage);
    return RegistrarsePage;
}());

//# sourceMappingURL=registrarse.js.map

/***/ })

});
//# sourceMappingURL=5.js.map