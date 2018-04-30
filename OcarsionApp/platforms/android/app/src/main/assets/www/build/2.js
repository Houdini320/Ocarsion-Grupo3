webpackJsonp([2],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioCompraPageModule", function() { return UsuarioCompraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_compra__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsuarioCompraPageModule = /** @class */ (function () {
    function UsuarioCompraPageModule() {
    }
    UsuarioCompraPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__usuario_compra__["a" /* UsuarioCompraPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__usuario_compra__["a" /* UsuarioCompraPage */]),
            ],
        })
    ], UsuarioCompraPageModule);
    return UsuarioCompraPageModule;
}());

//# sourceMappingURL=usuario-compra.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioCompraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_sesion_inicio_sesion__ = __webpack_require__(44);
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
 * Generated class for the UsuarioCompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuarioCompraPage = /** @class */ (function () {
    function UsuarioCompraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UsuarioCompraPage.prototype.irHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__inicio_sesion_inicio_sesion__["a" /* InicioSesionPage */]);
    };
    UsuarioCompraPage.prototype.irPagSiguiente = function () {
        this.navCtrl.push('ChatUsuarioPage');
    };
    UsuarioCompraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuario-compra',template:/*ion-inline-start:"C:\GitHub\Ocarsion-Grupo3\OcarsionApp\src\pages\usuario-compra\usuario-compra.html"*/'<!--\n  Generated template for the UsuarioCompraPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar>\n        <ion-buttons start>\n          <button ion-button icon-only color="royal">\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title>Usuario Compra</ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only color="royal">\n            <ion-icon name="person-add"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div>\n    <ion-list>\n        <ion-item>\n          <ion-label>MARCA</ion-label>\n          <ion-select [(ngModel)]="gaming">\n            <ion-option value="audi">AUDI</ion-option>\n            <ion-option value="BMW">BMW</ion-option>\n            <ion-option value="seat">SEAT</ion-option>\n            <ion-option value="mercedes">MERCEDES BENZ</ion-option>\n            <ion-option value="peugeot">PEUGEOT</ion-option>\n            \n          </ion-select>\n        </ion-item>\n      </ion-list>\n</div>\n<div>\n  <ion-item>\n    <ion-range min="-200" max="200" [(ngModel)]="saturation" color="secondary">\n      <ion-label range-left>-200</ion-label>\n      <ion-label range-right>200</ion-label>\n    </ion-range>\n  </ion-item>\n  <ion-item>\n      <ion-range min="-200" max="200" [(ngModel)]="saturation" color="secondary">\n        <ion-label range-left>-200</ion-label>\n        <ion-label range-right>200</ion-label>\n      </ion-range>\n    </ion-item>\n</div>\n\n<div>\n  <h3>Precio</h3>\n \n</div>\n\n<ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="/OcarsionApp/src/assets/imgs/audia1.png">\n      </ion-thumbnail>\n      \n      <h2>Audi A1</h2>\n      <p>Modelo • 2016</p>\n     \n     \n  <button ion-button clear item-end (click)=\'irPagSiguiente()\'>View</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\GitHub\Ocarsion-Grupo3\OcarsionApp\src\pages\usuario-compra\usuario-compra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UsuarioCompraPage);
    return UsuarioCompraPage;
}());

//# sourceMappingURL=usuario-compra.js.map

/***/ })

});
//# sourceMappingURL=2.js.map