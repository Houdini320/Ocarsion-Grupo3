webpackJsonp([1],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalAdministradorPageModule", function() { return PrincipalAdministradorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_administrador__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrincipalAdministradorPageModule = /** @class */ (function () {
    function PrincipalAdministradorPageModule() {
    }
    PrincipalAdministradorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__principal_administrador__["a" /* PrincipalAdministradorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__principal_administrador__["a" /* PrincipalAdministradorPage */]),
            ],
        })
    ], PrincipalAdministradorPageModule);
    return PrincipalAdministradorPageModule;
}());

//# sourceMappingURL=principal-administrador.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalAdministradorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coche__ = __webpack_require__(352);
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
 * Generated class for the PrincipalAdministradorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrincipalAdministradorPage = /** @class */ (function () {
    function PrincipalAdministradorPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.EstadoCoche = __WEBPACK_IMPORTED_MODULE_2__coche__["b" /* EstadoCoche */];
        this.coches = [new __WEBPACK_IMPORTED_MODULE_2__coche__["a" /* Coche */]('audi', 'A1', new Date(2012, 4, 12), 10000, 'coche01.jpg'),
            new __WEBPACK_IMPORTED_MODULE_2__coche__["a" /* Coche */]('seat', 'Ateca', new Date(2017, 6, 21), 15000, 'coche02.jpg'),
            new __WEBPACK_IMPORTED_MODULE_2__coche__["a" /* Coche */]('audi', 'TT', new Date(2015, 12, 20), 20000, 'coche03.jpg'),
            new __WEBPACK_IMPORTED_MODULE_2__coche__["a" /* Coche */]('bmw', 'Serie 4', new Date(2014, 11, 5), 30000, 'coche04.jpg')];
        this.filtro = '';
    }
    PrincipalAdministradorPage.prototype.getFiltrados = function () {
        var filtrados = [];
        var indice = 0;
        for (var _i = 0, _a = this.coches; _i < _a.length; _i++) {
            var coche = _a[_i];
            if (coche.marca.lastIndexOf(this.filtro, 0) === 0)
                filtrados.push(indice);
            indice = indice + 1;
        }
        return filtrados;
    };
    PrincipalAdministradorPage.prototype.cmd_vender = function (id) {
        this.coches.splice(id, 1);
    };
    PrincipalAdministradorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalAdministradorPage');
    };
    PrincipalAdministradorPage.prototype.irPagSiguiente = function () {
        this.navCtrl.push('MensajesAdministradorPage');
    };
    PrincipalAdministradorPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false, 'menu1');
        this.menuCtrl.enable(true, 'menu2');
    };
    PrincipalAdministradorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal-administrador',template:/*ion-inline-start:"C:\GitHub\Ocarsion-Grupo3\OcarsionApp\src\pages\principal-administrador\principal-administrador.html"*/'<!--\n\n  Generated template for the PrincipalAdministradorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-toolbar>    \n\n        <ion-title>Ocarsion</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon id="menur" name="menu"></ion-icon>\n\n          </button>\n\n      </ion-toolbar>\n\n\n\n  <ion-toolbar>\n\n         \n\n      <div id="subheader">\n\n        <p id="nombreConcesionario">PemaCar</p>\n\n      </div>   \n\n        \n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <h2 id="titulo">Vehículos a la Venta</h2>\n\n  \n\n  <form class=\'classform1\' #f=\'ngForm\' >\n\n  \n\n  <br/>\n\n  <br/>   \n\n  <div class=\'txtInline\'><ion-icon id="lupa" name="search"></ion-icon>Filtrar por:    \n\n  </div>\n\n  <input type=\'search\' placeholder="(marca de coche)" name=\'filtro2\' [(ngModel)]=\'filtro\'/>\n\n  <br/><br/>\n\n  \n\n    <ion-item *ngFor=\'let id of getFiltrados(); let i=index\'>\n\n\n\n      <ion-card>\n\n\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/imgs/{{coches[id].foto}}" *ngIf=\'[coches[id].foto]!=""\'>\n\n          </ion-avatar>\n\n          <h2>{{coches[id].marca | uppercase}}</h2>\n\n          <p>{{coches[id].modelo}}</p>\n\n        </ion-item>\n\n      \n\n        <img src="assets/imgs/{{coches[id].foto}}" *ngIf=\'[coches[id].foto]!=""\'>\n\n      \n\n        <ion-card-content>\n\n          <h1 align="right">{{coches[id].getPVP() | number:\'1.0-0\'}}€</h1>\n\n          <p align="right">Fecha del modelo: {{coches[id].fecha_modelo | date:\'yyyy\'}}</p>\n\n          <div id="contenedorVenta">\n\n              <button ion-button id="botonVenta" type=\'button\' (click)=\'cmd_vender(id)\'>Vendido</button>\n\n          </div>          \n\n        </ion-card-content>\n\n      \n\n      </ion-card>\n\n\n\n    </ion-item>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\GitHub\Ocarsion-Grupo3\OcarsionApp\src\pages\principal-administrador\principal-administrador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], PrincipalAdministradorPage);
    return PrincipalAdministradorPage;
}());

//# sourceMappingURL=principal-administrador.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EstadoCoche; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coche; });
var EstadoCoche;
(function (EstadoCoche) {
    EstadoCoche[EstadoCoche["BUENO"] = 0] = "BUENO";
    EstadoCoche[EstadoCoche["MALO"] = 1] = "MALO";
})(EstadoCoche || (EstadoCoche = {}));
var Coche = /** @class */ (function () {
    function Coche(marca, modelo, fecha_modelo, precio, foto) {
        this.marca = marca;
        this.modelo = modelo;
        this.fecha_modelo = fecha_modelo;
        this.precio = precio;
        this.foto = foto;
    }
    Coche.prototype.getPVP = function () {
        return this.precio * 1.21;
    };
    Coche.prototype.rebajar = function () {
        this.precio *= 0.90;
    };
    return Coche;
}());

//# sourceMappingURL=coche.js.map

/***/ })

});
//# sourceMappingURL=1.js.map