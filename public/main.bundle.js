webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var slide = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])('slide', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ transform: 'translateX(-10px)' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(500)
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(500, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ transform: 'transformX(-100%)' }))
    ])
]);


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_home_home_component__ = __webpack_require__("../../../../../src/app/components/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_request_request_component__ = __webpack_require__("../../../../../src/app/components/main/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_main_request_request_form_request_form_component__ = __webpack_require__("../../../../../src/app/components/main/request/request-form/request-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_main_request_check_req_status_check_req_status_component__ = __webpack_require__("../../../../../src/app/components/main/request/check-req-status/check-req-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_request_view_status_view_status_component__ = __webpack_require__("../../../../../src/app/components/main/request/view-status/view-status.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_main_home_home_component__["a" /* HomeComponent */] },
    {
        path: 'request',
        component: __WEBPACK_IMPORTED_MODULE_3__components_main_request_request_component__["a" /* RequestComponent */],
        children: [
            { path: 'req_form', component: __WEBPACK_IMPORTED_MODULE_4__components_main_request_request_form_request_form_component__["a" /* RequestFormComponent */] },
            { path: 'check_req', component: __WEBPACK_IMPORTED_MODULE_5__components_main_request_check_req_status_check_req_status_component__["a" /* CheckReqStatusComponent */] },
            { path: 'view_req/:refNo', component: __WEBPACK_IMPORTED_MODULE_6__components_main_request_view_status_view_status_component__["a" /* ViewStatusComponent */] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div >\n  <app-nav></app-nav>\n  <app-main></app-main>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_main_home_home_component__ = __webpack_require__("../../../../../src/app/components/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_main_request_request_component__ = __webpack_require__("../../../../../src/app/components/main/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_main_home_notice_notice_component__ = __webpack_require__("../../../../../src/app/components/main/home/notice/notice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_main_home_request_btns_request_btns_component__ = __webpack_require__("../../../../../src/app/components/main/home/request-btns/request-btns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_main_home_request_btns_create_request_create_request_component__ = __webpack_require__("../../../../../src/app/components/main/home/request-btns/create-request/create-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_main_home_request_btns_check_request_check_request_component__ = __webpack_require__("../../../../../src/app/components/main/home/request-btns/check-request/check-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_main_request_request_form_request_form_component__ = __webpack_require__("../../../../../src/app/components/main/request/request-form/request-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_main_request_check_req_status_check_req_status_component__ = __webpack_require__("../../../../../src/app/components/main/request/check-req-status/check-req-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_available_vehicle_service__ = __webpack_require__("../../../../../src/app/services/available-vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_main_request_view_status_view_status_component__ = __webpack_require__("../../../../../src/app/components/main/request/view-status/view-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*google maps api*/





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_main_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_main_request_request_component__["a" /* RequestComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_main_home_notice_notice_component__["a" /* NoticeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_main_home_request_btns_request_btns_component__["a" /* RequestBtnsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_main_home_request_btns_create_request_create_request_component__["a" /* CreateRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_main_home_request_btns_check_request_check_request_component__["a" /* CheckRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_main_request_request_form_request_form_component__["a" /* RequestFormComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_main_request_check_req_status_check_req_status_component__["a" /* CheckReqStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_main_request_view_status_view_status_component__["a" /* ViewStatusComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["b" /* HttpClientModule */],
                /*kendoUi*/
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAF5gLv9sWNx3t2yxPGa9FuSBBhaZSVNUc',
                    libraries: ['places']
                }),
                __WEBPACK_IMPORTED_MODULE_18_ng_pick_datetime__["a" /* OwlDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_18_ng_pick_datetime__["b" /* OwlNativeDateTimeModule */],
                /*MDBBootstrapModule.forRoot()*/
                __WEBPACK_IMPORTED_MODULE_19__progress_kendo_angular_dropdowns__["a" /* DropDownsModule */],
                __WEBPACK_IMPORTED_MODULE_21_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__services_available_vehicle_service__["a" /* AvailableVehicleService */],
                __WEBPACK_IMPORTED_MODULE_23__services_request_service__["a" /* RequestService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/classes/request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Trip; });
var Request = /** @class */ (function () {
    function Request() {
    }
    return Request;
}());

var Trip = /** @class */ (function () {
    function Trip() {
    }
    return Trip;
}());



/***/ }),

/***/ "../../../../../src/app/classes/status.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusEnum; });
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["ACCEPTED"] = 0] = "ACCEPTED";
    StatusEnum[StatusEnum["REJECTED"] = 1] = "REJECTED";
    StatusEnum[StatusEnum["NOT_CONSIDERED"] = 2] = "NOT_CONSIDERED";
})(StatusEnum || (StatusEnum = {}));


/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\" style=\"background-color: black\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h3>Footer</h3>\n    </div>\n    <div class=\"col-lg-4\"></div>\n    <div class=\"col-lg-4\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trp-btn{\r\n  background-color: #C01830;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-notice></app-notice>\n<app-request-btns></app-request-btns>\n"

/***/ }),

/***/ "../../../../../src/app/components/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/main/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/home/notice/notice.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#notice-main{\r\n  max-height: 500px;\r\n  min-height: 400px;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n#notice-board{\r\n  height: 90%;\r\n  width: 90%;\r\n  background-color: aqua;\r\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/trasport.jpg")) + ");\r\n  bottom:0;\r\n  position: absolute;\r\n}\r\n\r\n#notice-corner{\r\n  height: 60%;\r\n  width: 30%;\r\n  float:right;\r\n  background-color:#680000;\r\n  background-repeat: no-repeat;\r\n  /*background: url(\"../../../../../assets/images/pattern/pattern2.png\") repeat;*/\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/home/notice/notice.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\" @slide style=\"margin: 0\">\r\n  <div id=\"notice-main\">\r\n      <span id=\"notice-corner\">\r\n        <!--<img src=\"../../../../../assets/images/pattern/pattern2.png\" style=\"repeat-y\" alt=\"\">-->\r\n      </span>\r\n      <div id=\"notice-board\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-8 col-md-7\"></div>\r\n          <div class=\"col-lg-4 col-md-5 col-xs-12\">\r\n\r\n                  <div class=\"input-wrapper trp-notice-background\">\r\n                    <div class=\"container\">\r\n                      <label class=\"trp-check-date\">Check date:</label>\r\n                      <input [(ngModel)]=\"selectedDate\"\r\n                             [owlDateTimeTrigger]=\"dtPicker1\"\r\n                             [owlDateTime]=\"dtPicker1\"\r\n                             class=\"trp-min-input\"\r\n                      >\r\n                      <fa name=\"calendar\" class=\"errspan\"></fa>\r\n                      <owl-date-time\r\n                        (afterPickerClosed)=\"picker()\"\r\n                        [pickerType]=\"'calendar'\"\r\n                        #dtPicker1></owl-date-time>\r\n                      <div class=\"card\">\r\n                        <ul class=\"list-group list-group-flush\">\r\n                          <li class=\"list-group-item\" *ngFor=\"let vehicle of availableVehicles\">{{vehicle.type}}{{vehicle.left}}</li>\r\n\r\n                        </ul>\r\n\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/home/notice/notice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_available_vehicle_service__ = __webpack_require__("../../../../../src/app/services/available-vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoticeComponent = /** @class */ (function () {
    function NoticeComponent(availableVehicleService) {
        this.availableVehicleService = availableVehicleService;
        this.selectedDate = new Date();
    }
    NoticeComponent.prototype.ngOnInit = function () {
    };
    NoticeComponent.prototype.picker = function () {
        this.newSelectedDate = this.selectedDate.toLocaleDateString();
        this.availableVehicles = this.availableVehicleService.get_free_vehicles(this.newSelectedDate);
        console.log(this.newSelectedDate);
    };
    NoticeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notice',
            template: __webpack_require__("../../../../../src/app/components/main/home/notice/notice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/home/notice/notice.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_2__animations__["a" /* slide */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_available_vehicle_service__["a" /* AvailableVehicleService */]])
    ], NoticeComponent);
    return NoticeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/home/request-btns/check-request/check-request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/home/request-btns/check-request/check-request.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <h2 class=\"trp-title\">Review your Request</h2>\r\n  <p>\r\n    We try our best to make yourself comfortable\r\n  </p>\r\n  <button class=\"trp-btn\" type=\"button\" [routerLink]=\"['request/check_req']\">Review <fa name=\"arrow-right\" inverse=\"true\"> </fa></button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/home/request-btns/check-request/check-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckRequestComponent = /** @class */ (function () {
    function CheckRequestComponent() {
    }
    CheckRequestComponent.prototype.ngOnInit = function () {
    };
    CheckRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-check-request',
            template: __webpack_require__("../../../../../src/app/components/main/home/request-btns/check-request/check-request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/home/request-btns/check-request/check-request.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckRequestComponent);
    return CheckRequestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/home/request-btns/create-request/create-request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/home/request-btns/create-request/create-request.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2 class=\"trp-title\">Reserve Vehicle</h2>\r\n  <p>\r\n    We try our best to make yourself comfortable\r\n  </p>\r\n  <button class=\"trp-btn\" type=\"button\" [routerLink]=\"['request/req_form']\">Request <fa name=\"arrow-right\" inverse=\"true\"> </fa></button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/home/request-btns/create-request/create-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateRequestComponent = /** @class */ (function () {
    function CreateRequestComponent() {
    }
    CreateRequestComponent.prototype.ngOnInit = function () {
    };
    CreateRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-request',
            template: __webpack_require__("../../../../../src/app/components/main/home/request-btns/create-request/create-request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/home/request-btns/create-request/create-request.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateRequestComponent);
    return CreateRequestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/home/request-btns/request-btns.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/home/request-btns/request-btns.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" @slide>\n  <div class=\"row\" style=\"padding-top: 10px;padding-bottom: 10px\">\n      <div class=\"col-lg-6 col-sm-12\">\n\n        <app-check-request ></app-check-request>\n      </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <app-create-request></app-create-request>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/main/home/request-btns/request-btns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBtnsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestBtnsComponent = /** @class */ (function () {
    function RequestBtnsComponent() {
        this.xy = 9;
    }
    RequestBtnsComponent.prototype.ngOnInit = function () {
    };
    RequestBtnsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-request-btns',
            template: __webpack_require__("../../../../../src/app/components/main/home/request-btns/request-btns.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/home/request-btns/request-btns.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animations__["a" /* slide */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RequestBtnsComponent);
    return RequestBtnsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\" @slide>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/components/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/main.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animations__["a" /* slide */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/request/check-req-status/check-req-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/request/check-req-status/check-req-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" @slide>\n  <div class=\"row\">\n    <div class=\"col-xl-4 \" style=\"min-height: 500px;\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"card-title\">please, sign in to check your reqeust....</p>\n          <form action=\"\">\n            <div >\n              <label for=\"email\"> Email</label>\n              <input type=\"email\" name=\"email\" class=\"trp-min-input\" id=\"email\">\n            </div>\n            <div>\n              <label for=\"password\"> Password</label>\n              <input type=\"text\" name=\"password\" class=\"trp-min-input\" id=\"password\">\n            </div>\n            <div style=\"    text-align: center; padding-top: 10px;\">\n              <input type=\"submit\" class=\"trp-btn\" value=\"Check ->\">\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main/request/check-req-status/check-req-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckReqStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckReqStatusComponent = /** @class */ (function () {
    function CheckReqStatusComponent() {
    }
    CheckReqStatusComponent.prototype.ngOnInit = function () {
    };
    CheckReqStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-check-req-status',
            template: __webpack_require__("../../../../../src/app/components/main/request/check-req-status/check-req-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/request/check-req-status/check-req-status.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animations__["a" /* slide */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CheckReqStatusComponent);
    return CheckReqStatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/request/request-form/request-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/request/request-form/request-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-5 col-md-6 col-sm-10\">\r\n\r\n      <div class=\"card\"  [ngSwitch]=step @slide >\r\n\r\n      <div class=\"trp-form-div card-body\">\r\n\r\n        <h1 class=\"trp-title card-title\">Plan a journey</h1>\r\n        <div class=\"row trp-form-bar\">\r\n          <div class=\"col-md-4 col-sm-3 col-4 trp-align-center {{isActive(1)}}\" >\r\n            <fa name=\"location-arrow\" inverse=\"true\" size=\"1x\" > </fa>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-3 col-4 trp-align-center {{isActive(2)}}\" >\r\n            <fa name=\"calendar\" inverse=\"true\" size=\"1x\" > </fa>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-3 col-4 trp-align-center {{isActive(3)}}\">\r\n            <fa name=\"info-circle\" inverse=\"true\" size=\"1x\" > </fa>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div id=\"step1\"  *ngSwitchCase=\"1\"  >\r\n          <div class=\"\">\r\n            <label for=\"pickupPoint\">Pickup Point</label>\r\n            <input type=\"text\"  autocomplete=\"off\" placeholder=\"search for pickup location\" autocapitalize=\"off\" id=\"pickupPoint\" name=\"pickupPoint\" class=\"trp-min-input\" #search>\r\n          </div>\r\n\r\n          <div class=\"\">\r\n            <label for=\"dropPoint\">Drop Point</label>\r\n            <input type=\"text\"  autocomplete=\"off\" placeholder=\"search for drop location\" autocapitalize=\"off\" id=\"dropPoint\" name=\"dropPoint\" class=\"trp-min-input\" #search2>\r\n          </div>\r\n          <div class=\"  \">\r\n\r\n            <label for=\"form-numOfPassanger\">Number of Passangers</label>\r\n            <input class=\"trp-min-input \" type=\"number\" [(ngModel)]=\"formData.num_passangers\" id=\"form-numOfPassanger\" name=\"numOfPassangers\">\r\n          </div>\r\n\r\n\r\n\r\n          <div style=\"text-align: center; padding:0 10px 0 10px \">\r\n            <Button type=\"button\" class=\"trp-btn\" (click)=\"nextStep(2)\">Next <fa name=\"arrow-right\" inverse=\"true\"> </fa></Button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div id=\"step2\" *ngSwitchCase=\"2\" >\r\n\r\n          <div class=\"input-wrapper\">\r\n            <label>Time to pick you up :</label>\r\n            <input [(ngModel)]=\"departure.pickupTime\"\r\n                   [owlDateTimeTrigger]=\"dtPicker1\"\r\n                   [owlDateTime]=\"dtPicker1\"\r\n                   class=\"trp-min-input\"\r\n            >\r\n            <owl-date-time\r\n              #dtPicker1></owl-date-time>\r\n          </div>\r\n\r\n          <div class=\"  \">\r\n            <label>End date & time:</label>\r\n            <input [(ngModel)]=\"arrival.dropTime\"\r\n                   [owlDateTimeTrigger]=\"dtPicker2\"\r\n                   [owlDateTime]=\"dtPicker2\"\r\n                   class=\"trp-min-input\"\r\n            >\r\n            <owl-date-time\r\n              #dtPicker2\r\n            ></owl-date-time>\r\n\r\n          </div>\r\n\r\n\r\n          <div style=\"text-align: center; padding:0 10px 0 10px \">\r\n\r\n            <Button type=\"button\" class=\"trp-btn\" (click)=\"nextStep(3)\">Next <fa name=\"arrow-right\" inverse=\"true\"> </fa></Button>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"step3\"  *ngSwitchCase=\"3\" >\r\n          <div class=\"\" style=\"display: inline\">\r\n            <label label=\"name\" for=\"form-name\">Name</label>\r\n            <input type=\"text\" class=\" trp-min-input \" [(ngModel)]=\"formData.lecturer\" id=\"form-name\" name=\"name\">\r\n\r\n          </div>\r\n          <br>\r\n\r\n          <div class=\"example-wrapper\">\r\n            <label for=\"\">Department/Unit</label>\r\n\r\n            <kendo-autocomplete\r\n              [data]=\"data\"\r\n              [filterable]=\"true\"\r\n              (filterChange)=\"handleFilter($event)\"\r\n              class=\"trp-select trp-min-input trp-autocomplete\"\r\n              [(value)]=\"formData.dep_unit\"\r\n            >\r\n            </kendo-autocomplete>\r\n          </div>\r\n          <div class=\"  \">\r\n            <label for=\"form-email\">Email</label>\r\n            <input class=\" trp-min-input \" type=\"email\" [(ngModel)]=\"formData.email\" id=\"form-email\" name=\"email\">\r\n          </div>\r\n\r\n          <div class=\"  \">\r\n            <label for=\"form-password\">Password</label>\r\n            <input class=\" trp-min-input \" type=\"password\" [(ngModel)]=\"formData.password\" id=\"form-password\" name=\"password\">\r\n          </div>\r\n\r\n          <div class=\"  \">\r\n            <label for=\"form-password-re\">Retype Password</label>\r\n            <input class=\" trp-min-input \" id=\"form-password-re\" type=\"password\" [(ngModel)]=\"rePassword\" name=\"password\">\r\n          </div>\r\n          <div style=\"text-align: center; padding:0 10px 0 10px \">\r\n            <Button type=\"button\" class=\"trp-btn\" (click)=\"nextStep(2)\"><fa name=\"arrow-left\" inverse=\"true\"> </fa> Back</Button>\r\n            <Button type=\"button\" class=\"trp-btn\" (click)=\"formSubmit()\">Request <fa name=\"arrow-right\" inverse=\"true\"> </fa></Button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n    <div class=\"col-xl-8 col-lg-7 col-md-6 col-sm-10\"></div>\r\n\r\n    <!--<div class=\"col-xl-4 col-lg-3 col-md-2 col-sm-1\"></div>-->\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/request/request-form/request-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_request__ = __webpack_require__("../../../../../src/app/classes/request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestFormComponent = /** @class */ (function () {
    function RequestFormComponent(mapsAPILoader, ngZone, requestService) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.requestService = requestService;
        this.source = [
            'software engineering',
            'department of chemistry',
            'department of mathemetics'
        ];
        this.titleList = [
            'Mr',
            'Mrs',
            'Ms',
            'Dr',
            'Prof',
            'Ven'
        ];
        this.isGood = true;
        this.step = 1;
        this.formData = new __WEBPACK_IMPORTED_MODULE_1__classes_request__["a" /* Request */]();
        this.arrival = new __WEBPACK_IMPORTED_MODULE_1__classes_request__["b" /* Trip */]();
        this.departure = new __WEBPACK_IMPORTED_MODULE_1__classes_request__["b" /* Trip */]();
        /*dateTime ;
        enddate ;
        endtime ;
        jstartTime;*/
        this.rePassword = '';
        // this.formData = new Request();
        this.data = this.source.slice();
    }
    RequestFormComponent.prototype.nextStep = function (nStep) {
        this.step = nStep;
    };
    RequestFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement);
            autocomplete.setComponentRestrictions({ 'country': ['lk'] });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry == null) {
                        return;
                    }
                    else {
                        _this.departure.pickupPoint = place.name;
                        _this.departure.pickPointAddress = place.formatted_address;
                        _this.arrival.dropPoint = place.name;
                        _this.arrival.dropPointAddress = place.formatted_address;
                    }
                });
            });
        });
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement2.nativeElement);
            autocomplete.setComponentRestrictions({ 'country': ['lk'] });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry == null) {
                        return;
                    }
                    else {
                        _this.arrival.pickupPoint = place.name;
                        _this.arrival.pickPointAddress = place.formatted_address;
                        _this.departure.dropPoint = place.name;
                        _this.departure.dropPointAddress = place.formatted_address;
                    }
                });
            });
        });
    };
    RequestFormComponent.prototype.formSubmit = function () {
        /*this.formData.jdatetime = `${this.intl.formatDate(this.dateTime, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.jstartTime, 't')}` ;*/
        /*this.formData.end_date_time = `${this.intl.formatDate(this.enddate, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.endtime, 't')}` ;*/
        // const x = <Request> this.formData;
        this.formData.arrival = this.arrival;
        this.formData.departure = this.departure;
        this.formData.isPermited = false;
        console.log(this.formData);
        this.requestService.addRequest(this.formData);
    };
    RequestFormComponent.prototype.handleFilter = function (value) {
        this.data = this.source.filter(function (s) { return s.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    RequestFormComponent.prototype.isActive = function (step) {
        if (step == this.step) {
            return 'active';
        }
        else
            return '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], RequestFormComponent.prototype, "searchElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('search2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], RequestFormComponent.prototype, "searchElement2", void 0);
    RequestFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-request-form',
            template: __webpack_require__("../../../../../src/app/components/main/request/request-form/request-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/request/request-form/request-form.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_3__animations__["a" /* slide */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__services_request_service__["a" /* RequestService */]])
    ], RequestFormComponent);
    return RequestFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/request/request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/request/request.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/request/request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestComponent = /** @class */ (function () {
    function RequestComponent() {
    }
    RequestComponent.prototype.ngOnInit = function () {
    };
    RequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-request',
            template: __webpack_require__("../../../../../src/app/components/main/request/request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/request/request.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/request/view-status/view-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/request/view-status/view-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\r\n\r\n<!--      request form-->\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Requesting vehicle form for Official Purpose</h5>\r\n        </div>\r\n        <div class=\"form-horizontal\">\r\n          <fieldset>\r\n\r\n            <!-- Text input-->\r\n            <div class=\"form-group1\">\r\n              <label class=\"col-md-12 control-label\" for=\"officails_id\">Name of the Lecturer or Official</label>\r\n              <div class=\"col-md-12\">\r\n                <input [(ngModel)]=\"request.lecturer\" id=\"officails_id\" name=\"officails_id\" type=\"text\" placeholder=\"Name of the Lecturer or Official who travel\" class=\"form-control input-md \">\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Text input-->\r\n            <div class=\"form-group1\">\r\n              <label class=\"col-md-12 control-label\" for=\"textinput\">Department / Unit</label>\r\n              <div class=\"col-md-12\">\r\n                <input [(ngModel)]=\"request.dep_unit\" id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"Enter your Department or Unit\" class=\"form-control input-md\">\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Text input-->\r\n            <div class=\"form-group1\">\r\n              <label class=\"col-md-12 control-label\" for=\"position\">Position</label>\r\n              <div class=\"col-md-12\">\r\n                <input [(ngModel)]=\"request.position\" id=\"position\" name=\"position\" type=\"text\" placeholder=\"Position of the lecturer or Official\" class=\"form-control input-md\">\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Text input-->\r\n            <div class=\"form-group1\">\r\n              <label class=\"col-md-12 control-label\" for=\"numOfPassangers\">Number of other passengers  </label>\r\n              <div class=\"col-md-12\">\r\n                <input [(ngModel)]=\"request.num_passangers\" id=\"numOfPassangers\" name=\"numOfPassangers\" type=\"text\" placeholder=\"Number of other passengers who are willing to travel\" class=\"form-control input-md\">\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Text input-->\r\n            <div class=\"form-group1\">\r\n              <label class=\"col-md-12 control-label\" for=\"purpose\">Purpose</label>\r\n              <div class=\"col-md-12\">\r\n                <input [(ngModel)]=\"request.purpose\" id=\"purpose\" name=\"purpose\" type=\"text\" placeholder=\"For what you want to use the vehicle?\" class=\"form-control input-md\" required=\"\">\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Select Basic -->\r\n            <div class=\"form-group1\">\r\n              <label class=\"col-md-12 control-label\" for=\"vehicleType\">Vehicle needed</label>\r\n              <div class=\"col-md-12\">\r\n                <select [(ngModel)]=\"request.vehicleType\" id=\"vehicleType\" name=\"vehicleType\" class=\"form-control\">\r\n                  <option value=\"three_wheel\">Three wheel</option>\r\n                  <option value=\"car\" selected >Car</option>\r\n                  <option value=\"van\">Van</option>\r\n                  <option value=\"bus\">Bus</option>\r\n                  <option value=\"cab\">Cab</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group1\">\r\n              <div class=\"col-md-12\"></div>\r\n              <div class=\"col-md-12\">\r\n                <Button (click)=\"addRequest()\">Update</Button>\r\n              </div>\r\n            </div>\r\n\r\n          </fieldset>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!--      </request form>-->\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\r\n\r\n      <!--notifications.. ** this shows request is not reviewed, accepted or rejected.-->\r\n      <div class=\"card border-warning mb-3\">\r\n        <div class=\"card-body text-warning\">\r\n          <h5 class=\"card-title\">Your Request is not being reviewed</h5>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"card\" >\r\n\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Depature</h5>\r\n\r\n          <div class=\"form-group1\">\r\n            <label class=\"col-md-12 control-label\" for=\"officails_id\">Pick up place</label>\r\n            <div class=\"col-md-12\">\r\n              <input [(ngModel)]=\"request.departure.pickPointAddress\" autocapitalize=\"off\" autocomplete=\"off\" id=\"departure_pickpoint\" name=\"departure_pickpoint\" type=\"text\" placeholder=\"Place to pick you up\" class=\"form-control input-md \">\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group1\">\r\n            <label class=\"col-md-12 control-label\" for=\"officails_id\">Drop place</label>\r\n            <div class=\"col-md-12\">\r\n              <input [(ngModel)]=\"request.departure.pickPointAddress\" autocapitalize=\"off\" autocomplete=\"off\" id=\"departure_drop_point\" name=\"departure_drop_point\" type=\"text\" placeholder=\"Place to pick you up\" class=\"form-control input-md \">\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group1\">\r\n            <label class=\"col-md-12 control-label\" for=\"officails_id\">Pick up time</label>\r\n            <div class=\"col-md-12\">\r\n              <input [(ngModel)]=\"request.departure.time\" autocapitalize=\"off\" autocomplete=\"off\" id=\"departure_time\" name=\"departure_time\" type=\"text\" placeholder=\"Place to pick you up\" class=\"form-control input-md \">\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"card\" >\r\n\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Arrival</h5>\r\n\r\n          <div class=\"form-group1\">\r\n            <label class=\"col-md-12 control-label\" for=\"officails_id\">Pick up place</label>\r\n            <div class=\"col-md-12\">\r\n              <input [(ngModel)]=\"request.arrival.pickPointAddress\" autocapitalize=\"off\" autocomplete=\"off\" id=\"arrival_pickpoint\" name=\"arrival_pickpoint\" type=\"text\" placeholder=\"Place to pick you up\" class=\"form-control input-md \">\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group1\">\r\n            <label class=\"col-md-12 control-label\" for=\"officails_id\">Drop place</label>\r\n            <div class=\"col-md-12\">\r\n              <input [(ngModel)]=\"request.arrival.pickPointAddress\" autocapitalize=\"off\" autocomplete=\"off\" id=\"arrival_drop_point\" name=\"arrival_drop_point\" type=\"text\" placeholder=\"Place to pick you up\" class=\"form-control input-md \">\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group1\">\r\n            <label class=\"col-md-12 control-label\" for=\"officails_id\">Pick up time</label>\r\n            <div class=\"col-md-12\">\r\n              <input [(ngModel)]=\"request.arrival.time\" autocapitalize=\"off\" autocomplete=\"off\" id=\"arrival_time\" name=\"arrival_time\" type=\"text\" placeholder=\"Place to pick you up\" class=\"form-control input-md\">\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/request/view-status/view-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewStatusComponent = /** @class */ (function () {
    function ViewStatusComponent(requestService, route) {
        var _this = this;
        this.requestService = requestService;
        this.route = route;
        this.request = {};
        this.route.paramMap
            .subscribe(function (params) {
            _this.request = _this.requestService.getOneRequest(+params.get('refNo'));
        });
    }
    ViewStatusComponent.prototype.ngOnInit = function () {
        this.requests = this.requestService.getALLRequests();
    };
    ViewStatusComponent.prototype.addRequest = function () {
        console.log(this.request);
        this.requestService.addRequest(this.request);
        // this.requests.push(this.request);
    };
    ViewStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-status',
            template: __webpack_require__("../../../../../src/app/components/main/request/view-status/view-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/request/view-status/view-status.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ViewStatusComponent);
    return ViewStatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" style=\"background-color: black\">\n  <div class=\"top-header\">\n    <div class=\"container\">\n\n      <nav class=\"navbar navbar-expand-lg navbar-dark bg-faded\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <img src=\"../../assets/images/logo/logo-main2.png\" alt=\"\">\n        </a>\n\n\n        <button class=\"navbar-toggler \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse  \"  id=\"navbarNavAltMarkup\">\n          <div class=\"navbar-nav ml-auto\">\n            <a class=\"nav-item nav-link-edit\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n            <a class=\"nav-item nav-link-edit\" href=\"#\">Features</a>\n\n\n          </div>\n        </div>\n      </nav>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/available-vehicle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableVehicleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvailableVehicleService = /** @class */ (function () {
    function AvailableVehicleService(http) {
        this.http = http;
        this.vehicles = [
            {
                date: '2/5/2018',
                vehicles: [
                    {
                        type: 'car',
                        left: 5
                    },
                    {
                        type: 'van',
                        left: 3
                    }
                ]
            },
            {
                date: '2/26/2018',
                vehicles: [
                    {
                        type: 'car',
                        left: 8
                    },
                    {
                        type: 'van',
                        left: 13
                    }
                ]
            }
        ];
    }
    AvailableVehicleService.prototype.get_free_vehicles = function (value) {
        return this.find_free_vehicle_on_day(this.vehicles, 'date', value);
    };
    AvailableVehicleService.prototype.find_free_vehicle_on_day = function (vehicle_arr, key, value) {
        this.http.get('http://localhost:3000/vehicles/all_vehicles')
            .subscribe(function (response) {
            console.log(response['msg']);
        });
        for (var x = 0; x < vehicle_arr.length; x++) {
            if (vehicle_arr[x][key] === value) {
                return vehicle_arr[x]['vehicles'];
            }
        }
    };
    AvailableVehicleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AvailableVehicleService);
    return AvailableVehicleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_status__ = __webpack_require__("../../../../../src/app/classes/status.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
        this.requests = [
            {
                refNo: 2,
                lecturer: 'Dr.gamini',
                dep_unit: 'sciect',
                position: 'head',
                num_passangers: 3,
                purpose: 'official',
                status: {
                    isAccepted: __WEBPACK_IMPORTED_MODULE_1__classes_status__["a" /* StatusEnum */].NOT_CONSIDERED,
                    message: 'Your message is not considered yet. pleas be patient...'
                }
            },
            {
                refNo: 3,
                lecturer: 'prof.ddss',
                dep_unit: 'art',
                position: 'head',
                num_passangers: 3,
                purpose: 'official',
                vehicle_type: 'car'
            }
        ];
    }
    RequestService.prototype.getALLRequests = function () {
        return this.requests;
    };
    RequestService.prototype.getOneRequest = function (id) {
        for (var x = 0; x < this.requests.length; x++) {
            if (this.requests[x].refNo == id) {
                return this.requests[x];
            }
        }
    };
    RequestService.prototype.addRequest = function (request) {
        this.requests.push(request);
        this.http.post('http://localhost:3000/requests/add', request)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "../../../../../src/assets/images/trasport.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "trasport.2f1b41271b0df762a7c0.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map