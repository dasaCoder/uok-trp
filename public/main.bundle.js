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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_main_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/main/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_main_admin_vehicle_vehicle_component__ = __webpack_require__("../../../../../src/app/components/main/admin/vehicle/vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_main_admin_request_admin_view_request_admin_view_component__ = __webpack_require__("../../../../../src/app/components/main/admin/request-admin-view/request-admin-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_main_admin_drivers_drivers_component__ = __webpack_require__("../../../../../src/app/components/main/admin/drivers/drivers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_main_admin_drivers_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/main/admin/drivers/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_main_admin_drivers_add_add_component__ = __webpack_require__("../../../../../src/app/components/main/admin/drivers/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_main_admin_vehicle_add_vehicle_add_vehicle_component__ = __webpack_require__("../../../../../src/app/components/main/admin/vehicle/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_main_admin_admin_home_admin_home_component__ = __webpack_require__("../../../../../src/app/components/main/admin/admin-home/admin-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_main_driver_profile_driver_profile_component__ = __webpack_require__("../../../../../src/app/components/main/driver-profile/driver-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_main_login_login_component__ = __webpack_require__("../../../../../src/app/components/main/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
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
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_7__components_main_admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            { path: 'vehicle/view/:vehicle_no',
                component: __WEBPACK_IMPORTED_MODULE_8__components_main_admin_vehicle_vehicle_component__["a" /* VehicleComponent */]
            },
            {
                path: 'vehicle/add', component: __WEBPACK_IMPORTED_MODULE_13__components_main_admin_vehicle_add_vehicle_add_vehicle_component__["a" /* AddVehicleComponent */]
            },
            { path: 'request/:refNO', component: __WEBPACK_IMPORTED_MODULE_9__components_main_admin_request_admin_view_request_admin_view_component__["a" /* RequestAdminViewComponent */] },
            {
                path: 'drivers',
                component: __WEBPACK_IMPORTED_MODULE_10__components_main_admin_drivers_drivers_component__["a" /* DriversComponent */],
                children: [
                    { path: 'profile/:driver_id', component: __WEBPACK_IMPORTED_MODULE_11__components_main_admin_drivers_profile_profile_component__["a" /* ProfileComponent */] },
                    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_12__components_main_admin_drivers_add_add_component__["a" /* AddComponent */] }
                ]
            },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_main_admin_admin_home_admin_home_component__["a" /* AdminHomeComponent */] }
        ]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_16__components_main_login_login_component__["a" /* LoginComponent */]
    },
    { path: 'driver', component: __WEBPACK_IMPORTED_MODULE_15__components_main_driver_profile_driver_profile_component__["a" /* DriverProfileComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
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

module.exports = "\r\n<div >\r\n  <app-nav></app-nav>\r\n  <app-main></app-main>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_available_vehicle_service__ = __webpack_require__("../../../../../src/app/services/available-vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_main_request_view_status_view_status_component__ = __webpack_require__("../../../../../src/app/components/main/request/view-status/view-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_main_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/main/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_main_admin_vehicle_vehicle_component__ = __webpack_require__("../../../../../src/app/components/main/admin/vehicle/vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_main_admin_request_admin_view_request_admin_view_component__ = __webpack_require__("../../../../../src/app/components/main/admin/request-admin-view/request-admin-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_main_admin_shedule_shedule_component__ = __webpack_require__("../../../../../src/app/components/main/admin/shedule/shedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_main_home_request_btns_check_request_status_msg_status_msg_component__ = __webpack_require__("../../../../../src/app/components/main/home/request-btns/check-request/status-msg/status-msg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_main_admin_drivers_drivers_component__ = __webpack_require__("../../../../../src/app/components/main/admin/drivers/drivers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_main_admin_drivers_add_add_component__ = __webpack_require__("../../../../../src/app/components/main/admin/drivers/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_main_admin_drivers_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/main/admin/drivers/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_main_admin_request_admin_view_set_driver_set_driver_component__ = __webpack_require__("../../../../../src/app/components/main/admin/request-admin-view/set-driver/set-driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_main_admin_request_admin_view_set_vehicle_set_vehicle_component__ = __webpack_require__("../../../../../src/app/components/main/admin/request-admin-view/set-vehicle/set-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_main_admin_vehicle_add_vehicle_add_vehicle_component__ = __webpack_require__("../../../../../src/app/components/main/admin/vehicle/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_main_admin_admin_home_admin_home_component__ = __webpack_require__("../../../../../src/app/components/main/admin/admin-home/admin-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_main_admin_admin_home_map_map_component__ = __webpack_require__("../../../../../src/app/components/main/admin/admin-home/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_main_admin_admin_home_search_search_component__ = __webpack_require__("../../../../../src/app/components/main/admin/admin-home/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_main_admin_admin_home_vehicle_table_vehicle_table_component__ = __webpack_require__("../../../../../src/app/components/main/admin/admin-home/vehicle-table/vehicle-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__progress_kendo_angular_layout__ = __webpack_require__("../../../../@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_main_driver_profile_driver_profile_component__ = __webpack_require__("../../../../../src/app/components/main/driver-profile/driver-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_main_login_login_component__ = __webpack_require__("../../../../../src/app/components/main/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
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
                __WEBPACK_IMPORTED_MODULE_25__components_main_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_main_admin_vehicle_vehicle_component__["a" /* VehicleComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_main_admin_request_admin_view_request_admin_view_component__["a" /* RequestAdminViewComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_main_admin_shedule_shedule_component__["a" /* SheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_main_home_request_btns_check_request_status_msg_status_msg_component__["a" /* StatusMsgComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_main_admin_drivers_drivers_component__["a" /* DriversComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_main_admin_drivers_add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_main_admin_drivers_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_main_admin_request_admin_view_set_driver_set_driver_component__["a" /* SetDriverComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_main_admin_request_admin_view_set_vehicle_set_vehicle_component__["a" /* SetVehicleComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_main_admin_vehicle_add_vehicle_add_vehicle_component__["a" /* AddVehicleComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_main_admin_admin_home_admin_home_component__["a" /* AdminHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_main_admin_admin_home_map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_main_admin_admin_home_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_main_admin_admin_home_vehicle_table_vehicle_table_component__["a" /* VehicleTableComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_main_driver_profile_driver_profile_component__["a" /* DriverProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_main_login_login_component__["a" /* LoginComponent */]
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
                __WEBPACK_IMPORTED_MODULE_21_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_43__progress_kendo_angular_layout__["a" /* LayoutModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__services_available_vehicle_service__["a" /* AvailableVehicleService */],
                __WEBPACK_IMPORTED_MODULE_23__services_request_service__["a" /* RequestService */],
                __WEBPACK_IMPORTED_MODULE_26__services_vehicle_service__["a" /* VehicleService */],
                __WEBPACK_IMPORTED_MODULE_29__services_admin_service__["a" /* AdminService */],
                __WEBPACK_IMPORTED_MODULE_32__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_46__services_auth_guard_service__["a" /* AuthGuardService */]
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

module.exports = "<div class=\"footer\" style=\"background-color: black\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <h3>Footer</h3>\r\n    </div>\r\n    <div class=\"col-lg-4\"></div>\r\n    <div class=\"col-lg-4\"></div>\r\n  </div>\r\n</div>\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/admin-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/admin-home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n\n\n  <div id=\"vehicleTable\" class=\"col-md-12\">\n\n    <app-vehicle-table></app-vehicle-table>\n\n  </div>\n\n\n  <!--<div class=\"col-md-10\">\n    <app-map></app-map>\n  </div>-->\n  <div class=\"col-md-2\">\n\n  </div>\n</div>\n\n  <app-search></app-search>\n <!-- <app-shedule></app-shedule>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/admin-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomeComponent; });
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

var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent() {
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
    };
    AdminHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__("../../../../../src/app/components/main/admin/admin-home/admin-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/admin-home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-centre\">\n  <img src=\"/assets/images/sample_map.PNG\" alt=\"\" style=\"max-width: 95%;max-height: 60%;\">\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
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

var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/app/components/main/admin/admin-home/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/admin-home/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-4\">\n\n    <div class=\"trp-check-date-div\">\n      <label class=\"trp-check-date\">Check date:</label>\n      <input [(ngModel)]=\"selectedDate\"\n             [owlDateTimeTrigger]=\"dtPicker1\"\n             [owlDateTime]=\"dtPicker1\"\n             class=\"trp-min-input\"\n      >\n      <fa name=\"calendar\" class=\"errspan\"></fa>\n      <owl-date-time\n        (afterPickerClosed)=\"picker()\"\n        [pickerType]=\"'calendar'\"\n        #dtPicker1></owl-date-time>\n\n      <!--<div class=\"card\">\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\" *ngFor=\"let vehicle of availableVehicles\">{{vehicle.type}}{{vehicle.left}}</li>\n        </ul>\n      </div>-->\n    </div>\n\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"trp-check-date-div\">\n      <label class=\"trp-check-date\">Search By refferance No:</label>\n      <input type=\"text\" #search_refNo class=\"trp-min-input\" placeholder=\"Search Refferance Number\" (keyup)=\"search(search_refNo.value)\">\n    </div>\n\n  </div>\n\n  <div class=\"row\" *ngIf=\"searchResult\">\n    <!--{{searchResult | json}}-->\n    <div *ngIf=\"searchResult[0]\">\n      <app-shedule\n        [reqeustList]=\"searchResult\"\n      ></app-shedule>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(adminService, requestService) {
        this.adminService = adminService;
        this.requestService = requestService;
        this.selectedDate = new Date();
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.picker = function () {
        var _this = this;
        this.formatedDate = this.selectedDate.getFullYear() + "-" + (this.selectedDate.getMonth() + 1) + "-" + this.selectedDate.getDate();
        this.adminService.getRequestListOnDay(this.formatedDate)
            .subscribe(function (response) {
            _this.searchResult = response['data'];
            console.log(response['data']);
            // console.log(this.searchResult);
        });
    };
    SearchComponent.prototype.search = function (key) {
        var _this = this;
        if (!isNaN(key) && key) {
            this.requestService.getOneRequest(key)
                .subscribe(function (resp) {
                _this.searchResult = resp['msg'];
            });
        }
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/components/main/admin/admin-home/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/admin-home/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/vehicle-table/vehicle-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vehicle_no_div {\r\n  color: white;\r\n  background-color: #c82333;\r\n  font-size: 2.3vh;\r\n  width: 100px;\r\n  text-align: center;\r\n  padding-top: 2.5vh;\r\n  padding-bottom: 2.5vh;\r\n  border: solid 1px #680000;\r\n  height: 150px;\r\n}\r\n\r\n.vehicle_job_div {\r\n  color: black;\r\n  background-color: white;\r\n  font-size: 2.3vh;\r\n  width: 220px;\r\n  text-align: center;\r\n  padding-top: 2.5vh;\r\n  padding-bottom: 2.5vh;\r\n  border: solid 1px black;\r\n  height: 150px;\r\n  overflow: hidden;\r\n}\r\n\r\n.vehicle_nav {\r\n  min-width: 100px;\r\n  height: 80px;\r\n  font-size: 3vh;\r\n  color: white;\r\n  background-color: #680000;\r\n  text-align: center;\r\n}\r\n\r\n.vehicle_nav:hover {\r\n  background-color: #c82333;\r\n  color: white;\r\n}\r\n\r\n.vehicle_nav.active {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n.vehicle_img {\r\n  width: 50px;\r\n}\r\n\r\n.vehicle_time {\r\n  font-size: 2vh;\r\n  font-weight: bold;\r\n  padding: 2px;\r\n  background-color: #ffbac0;\r\n  padding: 5px;\r\n}\r\n\r\n.vehicle_place{\r\n  text-align: left;\r\n  font-size: 2.3vh;\r\n  padding: 5px;\r\n}\r\n\r\n.vehicle_job_icon{\r\n  height: 15px;\r\n}\r\n\r\n.scroll-horizontal {\r\n  overflow: auto;\r\n  white-space: nowrap;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/vehicle-table/vehicle-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n<div class=\"container-fluid\">\n  <div>\n\n\n    <nav style=\"margin-left: -16px; padding-bottom: 5px\">\n      <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n        <a *ngFor=\"let vehicle_type of vehicle_types let index = index\"\n           class=\"nav-item nav-link vehicle_nav\"\n           [ngClass]=\"{active: index ==0}\"\n           id=\"nav-{{vehicle_type.type}}-tab\" data-toggle=\"tab\"\n           href=\"#nav-{{vehicle_type.type}}\" role=\"tab\"\n           attr.aria-controls=\"nav-{{vehicle_type.type}}\"\n           aria-selected=\"true\">\n          <img src=\"/assets/images/vehicle_nav/{{vehicle_type.type}}.png\" alt=\"\" class=\"vehicle_img\">\n          {{vehicle_type.type}}</a>\n      </div>\n    </nav>\n\n\n    <div class=\"tab-content\" id=\"nav-tabContent\">\n      <div  *ngFor=\"let vehicle_type of vehicle_types let index = index\"\n            class=\"tab-pane fade show\"\n            [ngClass]=\"{active: index ==0}\"\n            id=\"nav-{{vehicle_type.type}}\"\n            role=\"tabpanel\"\n            attr.aria-labelledby=\"nav-{{vehicle_type.type}}-tab\">\n\n       <div *ngFor=\"let vehicle of vehicleList\" class=\"row scroll-horizontal\">\n\n         <div *ngIf=\"vehicle['vehicle_type'] == vehicle_type.type\" style=\"display: inherit;\">\n\n           <div class=\"vehicle_no_div\">\n\n             {{vehicle.vehicle_no}}\n           </div>\n\n           <div *ngFor=\"let job of vehicleJobs[vehicle_type.type]\" >\n\n             <div *ngIf=\"job['vehicle']['vehicle_no'] == vehicle['vehicle_no']\" class=\"vehicle_job_div\">\n\n               <span class=\"vehicle_time\">\n\n                 <img src=\"/assets/images/vehicle_nav/clock.png\" alt=\"\" class=\"vehicle_job_icon\">\n\n                 {{job['departure']['pickupTime']}} To 12.30\n                 {{job['departure']['dropTime']}}\n               </span>\n\n               <div class=\"vehicle_place\">\n                 <img src=\"/assets/images/vehicle_nav/start.png\" alt=\"\" class=\"vehicle_job_icon\">\n                 {{job['departure']['pickupPoint']}}\n               </div>\n\n               <div class=\"vehicle_place\">\n                 <img src=\"/assets/images/vehicle_nav/finish.png\" alt=\"\" class=\"vehicle_job_icon\">\n                 {{job['departure']['dropPoint']}}\n               </div>\n\n             </div>\n\n           </div>\n         </div>\n\n\n       </div>\n\n      </div>\n\n    </div>\n\n\n  </div>\n</div>\n\n\n  <!--<div class=\"row\" *ngFor=\"let vehicle of vehicleList\">-->\n\n    <!--<div class=\"vehicle_no_div\">-->\n      <!--{{vehicle['vehicle_no']}}-->\n    <!--</div>-->\n\n    <!--<div *ngFor=\"let request of requestList\" class=\"col-md-2\">-->\n      <!--<div *ngIf=\"request['vehicle']['vehicle_no'] == vehicle['vehicle_no']\">-->\n        <!--<div>-->\n          <!--<span>-->\n            <!--{{request['departure']['pickupTime']}}-->\n          <!--</span>-->\n          <!--<span>-->\n            <!--{{request['departure']['dropTime']}}-->\n          <!--</span>-->\n        <!--</div>-->\n\n        <!--<div>-->\n          <!--<span>{{request['departure']['pickupPoint']}}</span> To-->\n          <!--<span>{{request['departure']['dropPoint']}}</span>-->\n        <!--</div>-->\n\n\n      <!--</div>-->\n    <!--</div>-->\n\n  <!--</div>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/vehicle-table/vehicle-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleTableComponent = /** @class */ (function () {
    function VehicleTableComponent(adminService) {
        this.adminService = adminService;
        this.vehicleJobs = {
            'bus': [],
            'car': [],
            'van': [],
            'three_wheel': []
        };
        this.selectedDate = new Date();
        this.selected = 1;
        this.vehicle_types = [
            {
                disabled: false,
                type: 'car'
            }, {
                disabled: false,
                type: 'van'
            }, {
                disabled: false,
                type: 'bus'
            }, {
                disabled: false,
                type: 'three_wheel'
            }
        ];
    }
    VehicleTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getRequestListOnDay('2018-5-9')
            .subscribe(function (resp) {
            if (resp['success']) {
                _this.requestList = resp['data'];
                //console.log(this.requestList);
                _this.requestList.sort(_this.sortFunction);
                console.log(_this.requestList);
                for (var x = 0; x < _this.requestList.length; x++) {
                    _this.vehicleJobs[_this.requestList[x]['vehicle']['vehicle_type']].push(_this.requestList[x]);
                }
                // console.log(this.vehicleJobs);
            }
        });
        this.adminService.getListOfVehicles()
            .subscribe(function (resp) {
            if (resp['success'] === true) {
                _this.vehicleList = resp['data'];
            }
        });
    };
    VehicleTableComponent.prototype.sortFunction = function (a, b) {
        if (a['departure']['pickupTime'] === b['departure']['pickupTime']) {
            return 0;
        }
        else {
            return (a['departure']['pickupTime'] < b['departure']['pickupTime']) ? -1 : 1;
        }
    };
    VehicleTableComponent.prototype.picker = function () {
        this.formatedDate = this.selectedDate.getFullYear() + "-" + (this.selectedDate.getMonth() + 1) + "-" + this.selectedDate.getDate();
    };
    VehicleTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vehicle-table',
            template: __webpack_require__("../../../../../src/app/components/main/admin/admin-home/vehicle-table/vehicle-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/admin-home/vehicle-table/vehicle-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]])
    ], VehicleTableComponent);
    return VehicleTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n  <div class=\"nav-side-menu\">\r\n    <div class=\"brand\">Admin Panel</div>\r\n    <i class=\"fa fa-bars fa-2x toggle-btn\" data-toggle=\"collapse\" data-target=\"#menu-content\"></i>\r\n\r\n    <div class=\"menu-list\">\r\n\r\n      <ul id=\"menu-content\" class=\"menu-content collapse out\">\r\n        <li>\r\n          <a href=\"/admin\">\r\n            <i class=\"fa fa-dashboard fa-lg\"></i> Dashboard\r\n          </a>\r\n        </li>\r\n\r\n        <li  data-toggle=\"collapse\" data-target=\"#products\" class=\"collapsed active\">\r\n          <i class=\"fa fa-bullhorn fa-lg\"></i> New Requests  ({{not_reviewed_requests.length}})<span class=\"arrow\"></span>\r\n        </li>\r\n        <ul class=\"sub-menu collapse\" id=\"products\">\r\n          <!--<li class=\"active\"><a href=\"#\">CSS3 Animation</a></li>-->\r\n          <li *ngFor=\"let n_r_req of not_reviewed_requests\"><a href=\"/admin/request/{{n_r_req['refNo']}}\">TRD/{{n_r_req['refNo']}}</a></li>\r\n\r\n        </ul>\r\n\r\n\r\n        <li data-toggle=\"collapse\" data-target=\"#accepted_reqs\" class=\"collapsed\">\r\n          <i class=\"fa fa-bell fa-lg\"></i> Accepted Requests  ({{accepted_requests.length}}) <span class=\"arrow\"></span>\r\n        </li>\r\n        <ul class=\"sub-menu collapse\" id=\"accepted_reqs\">\r\n          <a *ngFor=\"let accepted_req of accepted_requests\" href=\"/admin/request/{{accepted_req['refNo']}}\">\r\n            <li>TRD/{{accepted_req['refNo']}}</li>\r\n          </a>\r\n        </ul>\r\n\r\n\r\n        <li data-toggle=\"collapse\" data-target=\"#service\" class=\"collapsed\">\r\n          <i class=\"fa fa-bell fa-lg\"></i> Confirmed Requests  ({{confirmed_requests.length}})  <span class=\"arrow\"></span>\r\n        </li>\r\n        <ul class=\"sub-menu collapse\" id=\"service\">\r\n          <a *ngFor=\"let confirmed_req of confirmed_requests\" href=\"/admin/request/{{confirmed_req['refNo']}}\">\r\n            <li>TRD/{{confirmed_req['refNo']}}</li>\r\n          </a>\r\n        </ul>\r\n\r\n        <li data-toggle=\"collapse\" data-target=\"#Doc_comp\" class=\"collapsed\">\r\n          <i class=\"fa fa-thumbs-up fa-lg\"></i> Fully Detailed Requests  ({{detailed_requests.length}}) <span class=\"arrow\"></span>\r\n        </li>\r\n        <ul class=\"sub-menu collapse\" id=\"Doc_comp\">\r\n          <a *ngFor=\"let det_comp_req of detailed_requests\" href=\"/admin/request/{{det_comp_req['refNo']}}\">\r\n            <li>TRD/{{det_comp_req['refNo']}}</li>\r\n          </a>\r\n        </ul>\r\n\r\n        <li data-toggle=\"collapse\" data-target=\"#new\" class=\"collapsed\">\r\n          <i class=\"fa fa-car fa-lg\"></i> Vehicles <span class=\"arrow\"></span>\r\n        </li>\r\n        <ul class=\"sub-menu collapse\" id=\"new\">\r\n          <a *ngFor=\"let vehicle of vehicle_list\" href=\"/admin/vehicle/view/{{vehicle['vehicle_no']}}\">\r\n            <li >{{vehicle['vehicle_no']}}</li>\r\n          </a>\r\n          <a href=\"/admin/vehicle/add\">\r\n            <li>Add vehicle <i class=\"fa fa-add\"></i></li>\r\n          </a>\r\n\r\n\r\n        </ul>\r\n\r\n\r\n        <li data-toggle=\"collapse\" data-target=\"#newD\" class=\"collapsed\">\r\n            <i class=\"fa fa-user fa-lg\"></i> Drivers <span class=\"arrow\"></span>\r\n        </li>\r\n        <ul *ngIf=\"driverList\" class=\"sub-menu collapse\" id=\"newD\">\r\n          <a *ngFor=\"let driver of driverList\" href=\"/admin/drivers/profile/{{driver['_id']}}\">\r\n            <li>{{driver['name']}}</li>\r\n          </a>\r\n\r\n          <a href=\"/admin/drivers/add\">\r\n            <li>Add Driver</li>\r\n          </a>\r\n        </ul>\r\n\r\n        <li>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-users fa-lg\"></i> Users\r\n          </a>\r\n\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"\" (click)=\"logout()\">\r\n            <i class=\"fa fa-out fa-out\"></i> Logout\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n    <div class=\"col-md-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(vehicleService, requestService, adminService, authservice) {
        this.vehicleService = vehicleService;
        this.requestService = requestService;
        this.adminService = adminService;
        this.authservice = authservice;
        this.not_reviewed_requests = [];
        this.accepted_requests = [];
        this.confirmed_requests = [];
        this.detailed_requests = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleService.get_vehicle_list()
            .subscribe(function (response) {
            _this.vehicle_list = response['msg'];
            // console.log(response['msg']);
        });
        this.requestService.get_not_considered_requests()
            .subscribe(function (response) {
            // console.log(response['msg']);
            _this.not_considered_requests = response['msg'];
            console.log('not considerd' + _this.not_considered_requests.length);
        });
        this.adminService.get_request_list(0)
            .subscribe(function (response) {
            _this.not_reviewed_requests = response['msg'];
        });
        this.adminService.get_request_list(1)
            .subscribe(function (response) {
            _this.accepted_requests = response['msg'];
        });
        this.adminService.get_request_list(2)
            .subscribe(function (response) {
            _this.confirmed_requests = response['msg'];
        });
        this.adminService.get_request_list(4)
            .subscribe(function (response) {
            _this.detailed_requests = response['msg'];
        });
        this.adminService.getAllDriversDetails()
            .subscribe(function (response) {
            _this.driverList = response['msg'];
        });
    };
    AdminComponent.prototype.logout = function () {
        if (confirm("Confirm Logout.....")) {
            this.authservice.logout();
            window.location.reload();
        }
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/components/main/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__["a" /* VehicleService */], __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_3__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/drivers/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/drivers/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"!isSubmited\">\r\n  <form class=\"form-horizontal\" #driverForm=\"ngForm\" (ngSubmit)=\"addDriver(driverForm.value)\">\r\n    <fieldset>\r\n\r\n    <!-- Form Name -->\r\n    <legend>Add Driver</legend>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"name\">Name</label>\r\n      <div class=\"col-md-8\">\r\n      <input ngModel id=\"name\" name=\"name\" type=\"text\" placeholder=\"Driver's name\" class=\"form-control input-md\" required=\"\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"nic_no\">NIC number</label>\r\n      <div class=\"col-md-8\">\r\n      <input ngModel id=\"nic_no\" name=\"nic_no\" type=\"text\" placeholder=\"NIC number\" class=\"form-control input-md\" required=\"\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"driving_liecence_no\">Driving licence No </label>\r\n      <div class=\"col-md-8\">\r\n      <input ngModel id=\"driving_liecence_no\" name=\"driving_liecence_no\" type=\"text\" placeholder=\"Liecence Number\" class=\"form-control input-md\" required=\"\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"telephone\">Telephone</label>\r\n      <div class=\"col-md-8\">\r\n      <input ngModel id=\"telephone\" name=\"telephone\" type=\"text\" placeholder=\"Telephone\" class=\"form-control input-md\" required=\"\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- File Button -->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"image\">Image</label>\r\n      <div class=\"col-md-4\">\r\n        <input ngModel id=\"image\" name=\"image\" class=\"input-file\" type=\"file\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Textarea -->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"address\">Address</label>\r\n      <div class=\"col-md-4\">\r\n        <textarea ngModel class=\"form-control\" id=\"address\" name=\"address\"></textarea>\r\n    </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-4 \">\r\n        <button class=\"btn btn-primary\" ><i class=\"fa fa-add\"></i> Add</button>\r\n      </div>\r\n    </div>\r\n    </fieldset>\r\n    </form>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"isSubmited\">\r\n  <img src=\"/assets/images/loading.gif\" alt=\"\" style=\"height: 100px;\r\n    margin-top: 25vh;\r\n    margin-left: 50vh;\r\n    margin-bottom: 25vh;\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/drivers/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddComponent = /** @class */ (function () {
    function AddComponent(adminService) {
        this.adminService = adminService;
        this.isSubmited = false;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.addDriver = function (driver) {
        this.isSubmited = true;
        // calling addDriver method in admin service
        if (driver.name !== '' || driver.nic_no !== '' || driver.driving_liecence_no !== '' || driver.telephone !== '' || driver.address !== '') {
            alert('ok');
            this.adminService.addDriver(driver)
                .subscribe(function (response) {
                console.log(response);
            });
        }
        console.log(driver);
    };
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add',
            template: __webpack_require__("../../../../../src/app/components/main/admin/drivers/add/add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/drivers/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/drivers/drivers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/drivers/drivers.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/drivers/drivers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriversComponent; });
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

var DriversComponent = /** @class */ (function () {
    function DriversComponent() {
    }
    DriversComponent.prototype.ngOnInit = function () {
    };
    DriversComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drivers',
            template: __webpack_require__("../../../../../src/app/components/main/admin/drivers/drivers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/drivers/drivers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DriversComponent);
    return DriversComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/drivers/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{padding-top:30px;}\r\n\r\n.glyphicon {  margin-bottom: 10px;margin-right: 10px;}\r\n\r\nsmall {\r\ndisplay: block;\r\nline-height: 1.428571429;\r\ncolor: #999;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/drivers/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\" *ngIf=\"driver\">\r\n  <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <div class=\"\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6 col-md-4\">\r\n                      <img src=\"http://placehold.it/150x150\" alt=\"\" class=\"img-fluid\" />\r\n                  </div>\r\n                  <div class=\"col-sm-6 col-md-8\">\r\n                      <h4>\r\n                        {{driver.name | uppercase}}</h4>\r\n                      <small><cite title=\"San Francisco, USA\">San Francisco, USA <i class=\"glyphicon glyphicon-map-marker\">\r\n                      </i></cite></small>\r\n                      <p>\r\n                          <i class=\"glyphicon glyphicon-telephone\"></i>\r\n                          <!-- {{driver.telephone}} -->\r\n                          <br />\r\n                          <i class=\"glyphicon glyphicon-globe\"></i><a href=\"http://www.jquery2dotnet.com\">{{driver.driving_liecence_no}}</a>\r\n                          <br />\r\n                          <i class=\"glyphicon glyphicon-gift\"></i>{{driver.nic_no}}</p>\r\n                      <!-- Split button -->\r\n\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <br>\r\n\r\n  <h4>Shedule</h4>\r\n  <div class=\"btn-group\" role=\"group\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onClickDay()\">Day</button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onClickMonth()\">Month</button>\r\n  </div>\r\n  <br>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n\r\n\r\n\r\n    <table *ngIf=\"reqListOnDriver[0] && reqListOnDriver !== [] && reqListOnDriver !== null \" class=\"table table-sm table-hover\">\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">Department/Unit</th>\r\n        <th scope=\"col\">Description</th>\r\n        <th scope=\"col\">Departure time</th>\r\n        <th scope=\"col\">Arrival time</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr style=\"cursor: pointer\" *ngFor=\"let request of reqListOnDriver\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\" (click)=\"selectRequest(request)\">\r\n        <td>{{request['dep_unit']}}</td>\r\n        <td><b>{{request['departure']['pickupPoint']}}</b> to <b>{{request['arrival']['pickupPoint']}}</b></td>\r\n        <td>{{request['departure']['pickupTime']}}</td>\r\n        <td>{{request['arrival']['dropTime']}}</td>\r\n\r\n      </tr>\r\n      </tbody>\r\n\r\n\r\n\r\n      <!-- request modal -->\r\n\r\n      <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n          <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">TRD/{{selectedReq['refNo']}} - Details</h5>\r\n              <button *ngIf=\"selectedReq['vehicle']\" (click)=\"printPdf()\">print</button>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n\r\n            <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n\r\n                <div class=\"container-fluid\">\r\n                  <div class=\"row\" >\r\n\r\n                    <div class=\"col-lg-12\" id=\"details_section\">\r\n                      <!--        collapse div section stating   -->\r\n\r\n                      <div\r\n                        [ngClass]=\"{\r\n              'alert-danger': selectedReq.status == 3,\r\n              'alert-primary': selectedReq.status == 2,\r\n              'alert-success' : selectedReq.status == 1,\r\n              'alert-warning': selectedReq.status == 0\r\n            }\"\r\n                        class=\"alert\" role=\"alert\">\r\n                        <div *ngIf=\"selectedReq.status == '0'\">\r\n                          <i class=\"fa fa-info\"></i>\r\n                          selectedReq is not being reviewed\r\n                        </div>\r\n\r\n                        <div *ngIf=\"selectedReq.status == '1'\">\r\n                          <i class=\"fa fa-info\"></i>\r\n                          Request is Accepted. please supply futher information in more info section to proceed further\r\n                        </div>\r\n\r\n                        <div *ngIf=\"selectedReq.status == '2'\">\r\n                          <i class=\"fa fa-info\"></i>  Request is confirmed  <button class=\"btn btn-primary\">Download Application</button>\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n                      <div id=\"accordion\">\r\n                        <div class=\"card\">\r\n                          <div\r\n                            class=\"card-header bg-dark text-white\" id=\"headingOne\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n\r\n                            [attr.aria-expanded]=\"selectedReq.status != '1'\"\r\n                            aria-controls=\"collapseOne\">\r\n                            <h6 class=\"mb-0\">\r\n                              <i class=\"fa fa-map\"></i>\r\n                              Trip Section\r\n                            </h6>\r\n                          </div>\r\n\r\n                          <div id=\"collapseOne\" class=\"collapse\"\r\n                               [class.show]=\"selectedReq.status != '1'\"\r\n                               aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n                            <div class=\"card-body\">\r\n                              <div>\r\n                                <h6>Departure</h6>\r\n                                <table class=\"table table-sm\">\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      Date\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.departure.pickupDate}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      Time\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.departure.pickupTime}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      From\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.departure.pickupPoint}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      To\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.departure.dropPoint}}\r\n                                    </td>\r\n                                  </tr>\r\n                                </table>\r\n                              </div>\r\n\r\n                              <div>\r\n                                <h6>Arrival</h6>\r\n                                <table class=\"table table-sm\">\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      Date\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.arrival.dropDate}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      Time\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.arrival.dropTime}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      From\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.arrival.dropPoint}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      To\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.arrival.pickupPoint}}\r\n                                    </td>\r\n                                  </tr>\r\n                                </table>\r\n                              </div>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"card\">\r\n                          <div\r\n                            [ngClass]=\"{'bg-danger':!selectedReq.vehicle, 'bg-success': selectedReq.vehicle}\"\r\n                            class=\"card-header text-white\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                            <h6 class=\"mb-0\">\r\n                              <i class=\"fa fa-car\"></i>\r\n                              Vehicle Section\r\n                            </h6>\r\n                          </div>\r\n\r\n                          <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n                            <div\r\n                              [ngClass]=\"{'text-danger': !vehicle, 'text-success' : vehicle}\"\r\n                              class=\"card-body\">\r\n                              <div *ngIf=\"selectedReq.vehicle\">\r\n                                Vehicle no: {{selectedReq.vehicle.vehicle_no}}\r\n                              </div>\r\n                              <div *ngIf=\"!selectedReq.vehicle\">\r\n                                <p class=\"card-text\">\r\n                                  Vehicle is not assigned yet\r\n                                </p>\r\n\r\n                              </div>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n\r\n                        <!--<div class=\"card\">\r\n                          <div\r\n                            [ngClass]=\"{\r\n                      'bg-danger':!selectedReq.driver, 'bg-success': selectedReq.driver}\"\r\n                            class=\"card-header text-white\" id=\"headingThree\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                            <h6 class=\"mb-0\">\r\n                              <i class=\"fa fa-car\"></i>\r\n                              Driver Section\r\n                            </h6>\r\n                          </div>\r\n\r\n                          <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n                            <div\r\n                              [ngClass]=\"{'text-danger':!selectedReq.driver, 'text-success' : selectedReq.driver}\"\r\n                              class=\"card-body\">\r\n                              <div *ngIf=\"selectedReq.driver\">\r\n                                Driver name: {{selectedReq.driver.name}}\r\n                              </div>\r\n                              <div *ngIf=\"!test\">\r\n                                <p class=\"card-text\">\r\n                                  Driver is not set\r\n                                </p>\r\n\r\n                              </div>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>-->\r\n\r\n\r\n                        <div class=\"card\">\r\n                          <div\r\n                            class=\"bg-primary card-header text-white\" id=\"headingFour\" data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\r\n                            <h6 class=\"mb-0\">\r\n                              <i class=\"fa fa-info\"></i>\r\n                              Details Section\r\n                            </h6>\r\n                          </div>\r\n\r\n                          <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordion\">\r\n                            <div class=\"card-body\">\r\n\r\n                              <div class=\"container-fluid\">\r\n                                <table class=\"table table-sm\">\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Refferance No\r\n                                    </th>\r\n                                    <td>\r\n                                      TRD/{{selectedReq.refNo}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Lecturer\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.lecturer}}\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Designation\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.position}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Department/ Unit\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.dep_unit}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Purpose\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.purpose}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Funding method\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.fundingWay}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Email\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.email}}\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Password\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.password}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Number of Passangers\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.num_passangers}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n\r\n\r\n\r\n                                </table>\r\n                              </div>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n\r\n\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--end of request modal -->\r\n\r\n\r\n\r\n    </table>\r\n    <div class=\"row\" *ngIf=\"!reqListOnDriver[0]\">\r\n      <div  class=\"alert alert-warning text-center \">\r\n        no duties\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div id=\"vehicle_pass_div\" style=\"width: 210mm;padding: 2px;\">\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/drivers/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_request__ = __webpack_require__("../../../../../src/app/classes/request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_html2canvas__ = __webpack_require__("../../../../html2canvas/dist/npm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_html2canvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, adminService) {
        var _this = this;
        this.route = route;
        this.adminService = adminService;
        this.reqListOnDriver = [];
        this.selectedReq = new __WEBPACK_IMPORTED_MODULE_3__classes_request__["a" /* Request */]();
        // this.selectedReq['vehicle'] = Vehicle;
        /*
        this will get the driver _id from url parameter
        */
        route.paramMap.subscribe(function (params) {
            _this._id = params.get('driver_id');
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getDriver(this._id)
            .subscribe(function (data) {
            _this.driver = data['data'][0];
            // console.log(data);
        });
        this.adminService.getRequestOfDriverOnDay(this._id)
            .subscribe(function (data) {
            // console.log(data);
            _this.reqListOnDriver = data['data'];
            // console.log(this.reqListOnDriver);
        });
    };
    ProfileComponent.prototype.onClickDay = function () {
        var _this = this;
        this.adminService.getRequestOfDriverOnDay(this._id)
            .subscribe(function (data) {
            _this.reqListOnDriver = data['data'];
        });
    };
    ProfileComponent.prototype.onClickMonth = function () {
        var _this = this;
        this.adminService.getRequestOfDriverOnMonth(this._id)
            .subscribe(function (data) {
            _this.reqListOnDriver = data['data'];
        });
    };
    ProfileComponent.prototype.selectRequest = function (request) {
        this.selectedReq = request;
        //console.log(this.selectedReq);
    };
    ProfileComponent.prototype.printPdf = function () {
        var content = "\n    <div #pdf style=\"width: 210mm;height: 148mm;font-size:12px; padding: 7px; border:1px solid black;\">\n\n    <h5 style=\"text-align: center;\"><strong>\u0D9A\u0DD0\u0DC5\u0DAB\u0DD2\u0DBA \u0DC0\u0DD2\u0DC1\u0DCA\u0DC0 \u0DC0\u0DD2\u0DAF\u0DCA&zwj;\u0DBA\u0DCF\u0DBD\u0DBA</strong></h5>\n\n    <p style=\"text-align: center;\"><strong>\u0DC0\u0DCF\u0DC4\u0DB1 \u0DB0\u0DCF\u0DC0\u0DB1 \u0D85\u0DC0\u0DC3\u0DBB \u0DB4\u0DAD\u0DCA&zwj;\u0DBB\u0DBA</strong></p>\n    <p>\u0D86\u0DBB\u0D9A\u0DCA\u0DC2\u0D9A \u0DB1\u0DD2\u0DC5\u0DB0\u0DCF\u0DBB\u0DD3\u0DAD\u0DD4\u0DB8\u0DAB\u0DD2,</p>\n    <table style=\"height: 20px; border-color: null;\" border=\"0\" width=\"685\">\n      <tbody>\n      <tr>\n        <td style=\"width: 335.2px;\" >\u0DC0\u0DCF\u0DC4\u0DB1 \u0D85\u0D82\u0D9A\u0DBA: " + this.selectedReq['vehicle']['vehicle_no'] + "</td>\n        <td style=\"width: 335.2px;\">\u0DBB\u0DD2\u0DBA\u0DAF\u0DD4\u0DBB\u0DD4\u0D9C\u0DDA \u0DB1\u0DB8 : " + this.driver.name + "</td>\n      </tr>\n      <tr>\n        <td style=\"width: 335.2px;\">\u0D85\u0D82\u0DC1\u0DBA/\u0DB4\u0DD3\u0DA8\u0DBA&nbsp; : " + this.selectedReq['dep_unit'] + "</td>\n        <td style=\"width: 335.2px;\">&nbsp;</td>\n      </tr>\n      </tbody>\n    </table>\n    <p style=\"text-align: center;\"><strong>\u0D89\u0DC4\u0DAD \u0DC3\u0DAF\u0DC4\u0DB1\u0DCA \u0DC0\u0DCF\u0DC4\u0DB1\u0DBA \u0DBB\u0DCF\u0DA2\u0D9A\u0DCF\u0DBB\u0DD3 \u0D9A\u0DA7\u0DBA\u0DD4\u0DAD\u0DD4 \u0DC3\u0DAF\u0DC4\u0DCF \u0DBA\u0DD9\u0DCF\u0DAF\u0DC0\u0DCF \u0D87\u0DAD\u0DD2 \u0DB6\u0DD0\u0DC0\u0DD2\u0DB1\u0DCA \u0DC0\u0DCF\u0DC4\u0DB1\u0DBA \u0DB4\u0DD2\u0DA7\u0DC0\u0DD3\u0DB8\u0DA7 \u0D85\u0DC0\u0DC3\u0DBB \u0DBD\u0DB6\u0DCF \u0DAF\u0DD9\u0DB1\u0DCA\u0DB1.</strong></p>\n    <ul>\n      <li>\u0DC0\u0DCF\u0DC4\u0DB1\u0DBA \u0DBA\u0DB1 \u0DC3\u0DCA\u0DAE\u0DCF\u0DB1\u0DBA : " + this.selectedReq.departure.dropPoint + "</li>\n      <li>\u0DBB\u0DCF\u0DA2\u0D9A\u0DCF\u0DBB\u0DD3 \u0DC0\u0DD2\u0DC3\u0DCA\u0DAD\u0DBB\u0DBA&nbsp; &nbsp; &nbsp; : " + this.selectedReq.purpose + "li>\n    </ul>\n    <table>\n      <tbody>\n      <tr>\n        <td width=\"350\">\u0DB4\u0DD2\u0DA7\u0DAD\u0DCA\u0DC0\u0DB1 \u0DAF\u0DD2\u0DB1\u0DBA&nbsp; &nbsp; &nbsp;: " + this.selectedReq.departure.pickupDate + "</td>\n        <td width=\"350\">\u0D86\u0DB4\u0DC3\u0DD4 \u0DB4\u0DD0\u0DB8\u0DD2\u0DAB\u0DD9\u0DB1 \u0DAF\u0DD2\u0DB1\u0DBA: " + this.selectedReq.arrival.dropDate + "</td>\n      </tr>\n      <tr>\n        <td width=\"350\">\u0DC0\u0DDA\u0DBD\u0DCF\u0DC0 : " + this.selectedReq.departure.pickupTime + "</td>\n        <td width=\"350\">\u0DC0\u0DDA\u0DBD\u0DCF\u0DC0 &nbsp; &nbsp; &nbsp; : " + this.selectedReq.arrival.dropTime + "</td>\n      </tr>\n      <tr>\n        <td width=\"350\">\u0DB8\u0DBA\u0DD2\u0DBD\u0DDD \u0DB8\u0DD3\u0DA7\u0DBB\u0DBA&nbsp; &nbsp; &nbsp;:</td>\n        <td width=\"350\">\u0DB8\u0DBA\u0DD2\u0DBD\u0DDD \u0DB8\u0DD3\u0DA7\u0DBB\u0DBA&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:</td>\n      </tr>\n      </tbody>\n    </table>\n    <p>&nbsp;</p>\n    <hr />\n    <table style=\"height: 73px; width: 693px;\">\n      <tbody>\n      <tr style=\"height: 25px;\">\n        <td style=\"width: 202px; height: 25px;\">\u0DAF\u0DD2\u0DB1\u0DBA</td>\n        <td style=\"width: 178px; height: 25px;\">&nbsp;</td>\n        <td style=\"width: 301px; height: 25px;\">\u0DC3\u0DA7\u0DC4\u0DB1\u0DCA \u0DAD\u0DB6\u0DCF \u0D9C\u0DB1\u0DCA\u0DB1\u0DCF \u0D86\u0DBB\u0D9A\u0DCA\u0DC2\u0D9A \u0DB1\u0DD2\u0DBD\u0DB0\u0DCF\u0DBB\u0DD3\u0DBA\u0DCF\u0D9C\u0DDA,</td>\n      </tr>\n      <tr style=\"height: 5px;\">\n        <td style=\"width: 202px; height: 5px;\">\n          <p>&nbsp;</p>\n          <p>______________________</p>\n        </td>\n        <td style=\"width: 210px; height: 5px;\">&nbsp;\n            <table style=\"height: 42px; width: 178.2px;\">\n            <tbody>\n            <tr>\n            <td style=\"width: 151px;\">&nbsp;\u0DB1\u0DD4\u0DC0\u0DBB \u0DB4\u0DCF\u0DBB \u0DB4\u0DD2\u0DC0\u0DD2\u0DC3\u0DD4\u0DB8</td>\n            <td style=\"width: 16.2px; border: 1px solid\">&nbsp;</td>\n            </tr>\n            <tr>\n            <td style=\"width: 151px;\">\u0DC0\u0DD0\u0DA9 \u0D85\u0D82\u0DC1\u0DBA\u0DDA&nbsp;\u0DB4\u0DD2\u0DC0\u0DD2\u0DC3\u0DD4\u0DB8</td>\n            <td style=\"width: 16.2px; border: 1px solid\">&nbsp;</td>\n            </tr>\n            </tbody>\n            </table>\n            </td>\n        <td style=\"width: 301px; height: 5px;\">\n          <table style=\"height: 69px; width: 244px;\">\n            <tbody>\n            <tr style=\"height: 14.8px;\">\n              <td style=\"width: 73px; height: 14.8px;\">\u0DB1\u0DB8&nbsp; &nbsp; &nbsp; &nbsp;:</td>\n              <td style=\"width: 158px; height: 14.8px;\">&nbsp;_________________</td>\n            </tr>\n            <tr style=\"height: 26px;\">\n              <td style=\"width: 73px; height: 26px;\">\u0D85\u0DAD\u0DCA\u0DC3\u0DB1&nbsp; :</td>\n              <td style=\"width: 158px; height: 26px;\">&nbsp;_________________</td>\n            </tr>\n            </tbody>\n          </table>\n        </td>\n      </tr>\n      <tr style=\"height: 17px;\">\n        <td style=\"width: 202px; height: 17px;\">\u0DBB\u0DD2\u0DBA\u0DAF\u0DD4\u0DBB\u0DD4 \u0DB8\u0DC4\u0DAD\u0DCF\u0D9C\u0DDA \u0D85\u0DAD\u0DCA\u0DC3\u0DB1</td>\n        <td style=\"width: 178px; height: 17px;\">&nbsp;</td>\n        <td style=\"width: 301px; height: 17px;\">&nbsp; &nbsp;</td>\n      </tr>\n      </tbody>\n    </table>\n\n  </div>\n    ";
        document.getElementById('vehicle_pass_div').innerHTML = content;
        __WEBPACK_IMPORTED_MODULE_4_html2canvas__(document.getElementById('vehicle_pass_div')).then(function (canvas) {
            document.getElementById('vehicle_pass_div').innerHTML = '';
            var imgData = canvas.toDataURL('image/png');
            // document.body.appendChild(canvas);
            var doc = new __WEBPACK_IMPORTED_MODULE_5_jspdf__('l', 'pt', 'a5');
            var width = doc.internal.pageSize.width;
            var height = doc.internal.pageSize.height;
            doc.addImage(imgData, 'JPEG', 0, 0, width, height);
            doc.save('img.pdf');
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/main/admin/drivers/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/drivers/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/request-admin-view/request-admin-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/request-admin-view/request-admin-view.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"request\" class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-7\">\r\n\r\n        <div\r\n          [ngClass]=\"{\r\n              'alert-danger': request.status == 3,\r\n              'alert-warning': request.status == 2,\r\n              'alert-success': request.status == 0\r\n            }\"\r\n          class=\"alert \" role=\"alert\">\r\n          <div *ngIf=\"request.status == '3'\">\r\n            Request is not being reviewed\r\n          </div>\r\n\r\n          <div *ngIf=\"request.status == '2'\">\r\n            Request is accepted\r\n          </div>\r\n        </div>\r\n\r\n      <div class=\"container-fluid\">\r\n        <table class=\"table table-sm\">\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Refferance No\r\n            </th>\r\n            <td>\r\n              TRD/{{request.refNo}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Lecturer\r\n            </th>\r\n            <td>\r\n              {{request.lecturer}}\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Designation\r\n            </th>\r\n            <td>\r\n              {{request.position}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Department/ Unit\r\n            </th>\r\n            <td>\r\n              {{request.dep_unit}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Purpose\r\n            </th>\r\n            <td>\r\n              {{request.purpose}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Funding method\r\n            </th>\r\n            <td>\r\n              {{request.fundingWay}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Email\r\n            </th>\r\n            <td>\r\n              {{request.email}}\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Password\r\n            </th>\r\n            <td>\r\n              {{request.password}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Number of Passangers\r\n            </th>\r\n            <td>\r\n              {{request.num_passangers}}\r\n            </td>\r\n          </tr>\r\n\r\n\r\n\r\n\r\n        </table>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\" >\r\n\r\n\r\n        <div class=\"col-lg-4\" *ngIf=\"request.status == '0'\">\r\n          <button type=\"button\" class=\"btn btn-block btn-success\" data-toggle=\"modal\" data-target=\"#acceptReqModal\">Accept</button>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4\" *ngIf=\"request.status == '2'\">\r\n          <button type=\"button\" class=\"btn btn-block btn-outline-success\" data-toggle=\"modal\" data-target=\"#makeDetailedReqModal\">Mark as fully Detailed</button>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4\">\r\n          <button type=\"button\" class=\"btn btn-block btn-danger\">Reject</button>\r\n        </div>\r\n\r\n        <div class=\"modal fade\" id=\"acceptReqModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" >Accept Request</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                Are you shure that this request is possible?\r\n              </div>\r\n              <div class=\"modal-footer\" ngClass=\"\">\r\n                <button type=\"button\"  class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"acceptReq()\"><i class=\"fa fa-add\"></i>Acept</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"modal fade\" id=\"makeDetailedReqModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCentderTitle\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" >Mark as fully Detailed</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                Are you shure that this request is fully detailed?\r\n\r\n              </div>\r\n              <div class=\"modal-footer\" ngClass=\"\">\r\n                <button type=\"button\"  class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"markDetailedReq()\"><i class=\"fa fa-add\"></i>Yes</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"modal fade\" id=\"rejectReqModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" >Reject Request</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n   2           <div class=\"modal-body\">\r\n                Are you shure to reject this request?\r\n              </div>\r\n              <div class=\"modal-footer\" ngClass=\"\">\r\n                <button type=\"button\"  class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"rejectReq()\"><i class=\"fa fa-add\"></i>Acept</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"col-md-5\">\r\n      <div id=\"accordion\">\r\n        <div class=\"card\">\r\n          <div\r\n            class=\"card-header bg-dark text-white\" id=\"headingOne\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n            <h6 class=\"mb-0\">\r\n              <i class=\"fa fa-map\"></i>\r\n              Trip Section\r\n            </h6>\r\n          </div>\r\n\r\n          <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\" *ngIf=\"request\">\r\n            <div class=\"card-body\">\r\n              <div>\r\n                <h6>Departure</h6>\r\n                <table class=\"table table-sm\" *ngIf=\"request['departure']\">\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      Date\r\n                    </th>\r\n                    <td>\r\n                      {{request.departure.pickupDate}}\r\n                    </td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      Time\r\n                    </th>\r\n                    <td>\r\n                      {{request.departure.pickupTime}}\r\n                    </td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      From\r\n                    </th>\r\n                    <td>\r\n                      {{request.departure.pickupPoint}}\r\n                    </td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      To\r\n                    </th>\r\n                    <td>\r\n                      {{request.departure.dropPoint}}\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n              <div>\r\n                <h6>Arrival</h6>\r\n                <table class=\"table table-sm\" *ngIf=\"request.arrival\">\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      Date\r\n                    </th>\r\n                    <td>\r\n                      {{request.arrival.dropDate}}\r\n                    </td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      Time\r\n                    </th>\r\n                    <td>\r\n                      {{request.arrival.dropTime}}\r\n                    </td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      From\r\n                    </th>\r\n                    <td>\r\n                      {{request.arrival.dropPoint}}\r\n                    </td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      To\r\n                    </th>\r\n                    <td>\r\n                      {{request.arrival.pickupPoint}}\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <div\r\n            [ngClass]=\"{'bg-danger':!request.vehicle, 'bg-success': request.vehicle}\"\r\n            class=\"card-header text-white\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n            <h6 class=\"mb-0\">\r\n              <i class=\"fa fa-car\"></i>\r\n              Vehicle Section\r\n            </h6>\r\n          </div>\r\n\r\n          <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n            <div\r\n              [ngClass]=\"{'text-danger': !request.vehicle, 'text-success' : request.vehicle}\"\r\n              class=\"card-body\">\r\n              <div *ngIf=\"request.vehicle\">\r\n                Vehicle no: {{request.vehicle.vehicle_no}}\r\n              </div>\r\n              <div *ngIf=\"!request.vehicle\">\r\n                <p class=\"card-text\">\r\n                  Vehicle is not assigned yet\r\n                </p>\r\n                <button\r\n                  class=\"btn\"\r\n                  [ngClass]=\"{'btn-danger':!request.vehicle, 'btn-success': request.vehicle}\"\r\n                  data-toggle=\"modal\" data-target=\"#addVehicleModal\">Add Vehicle</button>\r\n              </div>\r\n\r\n              <button class=\"btn btn-outline-warning\"\r\n                      data-toggle=\"modal\" data-target=\"#addVehicleModal\"\r\n              >\r\n                Change Vehicle\r\n              </button>\r\n\r\n             </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"card\">\r\n          <div\r\n            [ngClass]=\"{\r\n                      'bg-danger':!request.driver, 'bg-success': request.driver}\"\r\n            class=\"card-header text-white\" id=\"headingThree\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n            <h6 class=\"mb-0\">\r\n              <i class=\"fa fa-car\"></i>\r\n              Driver Section\r\n            </h6>\r\n          </div>\r\n\r\n          <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n            <div\r\n              [ngClass]=\"{'text-danger':!request.driver, 'text-success' : request.driver}\"\r\n              class=\"card-body\">\r\n              <div *ngIf=\"request.driver\">\r\n                Driver name: {{request.driver.name}}\r\n              </div>\r\n              <div *ngIf=\"!request.driver\">\r\n                <p class=\"card-text\">\r\n\r\n                </p>\r\n                <button\r\n                  class=\"btn\"\r\n                  [ngClass]=\"{'btn-danger':!request.driver, 'btn-success': request.driver}\"\r\n                  data-toggle=\"modal\" data-target=\"#addDriverModal\">Add Driver</button>\r\n              </div>\r\n              <button\r\n                *ngIf=\"request.driver\"\r\n                class=\"btn btn-outline-warning\"\r\n                data-toggle=\"modal\" data-target=\"#addDriverModal\">Change Driver</button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!--add driver model-->\r\n\r\n        <div class=\"modal fade\" id=\"addDriverModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog trp-modal-lg\" role=\"document\">\r\n            <div class=\"row\">\r\n              <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Add Driver</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <!--<div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <label for=\"\">Select a driver</label>\r\n                  </div>\r\n                  <div class=\"col-md-8\">\r\n\r\n                    <kendo-autocomplete\r\n                      [data]=\"data\"\r\n                      [filterable]=\"true\"\r\n                      (filterChange)=\"handleFilter($event)\"\r\n                      class=\"trp-min-input trp-autocomplete\"\r\n                      [(value)]=\"driver_name\"\r\n                    >\r\n                    </kendo-autocomplete>\r\n                  </div>\r\n\r\n                </div>-->\r\n\r\n                <app-set-driver\r\n                [refNo]=\"refNo\"\r\n                (setDriver_)=\"setDriver($event)\"\r\n                ></app-set-driver>\r\n              </div>\r\n\r\n            </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!--end of add driver model-->\r\n\r\n        <!--add vehicle model-->\r\n\r\n        <div class=\"modal fade\" id=\"addVehicleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalCenterTitle\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog trp-modal-lg\" role=\"document\">\r\n            <div class=\"row\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\" id=\"ModalLongTitle\">Add Vehicle</h5>\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <!--<div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                      <label for=\"\">Select a Vehicle</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n\r\n                      <kendo-autocomplete\r\n                        [data]=\"vehicleData\"\r\n                        [filterable]=\"true\"\r\n                        (valueChange)=\"getRequestsList($event)\"\r\n                        (filterChange)=\"handleFilter2($event)\"\r\n                        class=\"trp-min-input trp-autocomplete\"\r\n                        [value]=\"vehicle_no\"\r\n                      >\r\n                      </kendo-autocomplete>\r\n\r\n\r\n                    </div>\r\n                      <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                          <table *ngIf=\"reqListOnVehicle && reqListOnVehicle !== '' && reqListOnVehicle !== null \" class=\"table table-sm\">\r\n                            <thead>\r\n                            <tr>\r\n                              <th scope=\"col\">ref no</th>\r\n                              <th scope=\"col\">Description</th>\r\n                              <th scope=\"col\">Departure time</th>\r\n                              <th scope=\"col\">Arrival time</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let request of reqListOnVehicle\">\r\n                              <td>TRD/{{request['refNo']}}</td>\r\n                              <td><b>{{request['departure']['pickupPoint']}}</b> to <b>{{request['arrival']['dropPoint']}}</b></td>\r\n                              <td>{{request['departure']['pickupTime']}}</td>\r\n                              <td>{{request['arrival']['dropTime']}}</td>\r\n\r\n                            </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                  </div>-->\r\n\r\n                  <app-set-vehicle\r\n                    [refNo]=\"refNo\"\r\n                    (setVehicle)=\"setVehicle($event)\"\r\n                    (setDriver)=\"setDriver($event)\"\r\n                  >\r\n\r\n                  </app-set-vehicle>\r\n\r\n\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!--end of add vehicle model-->\r\n\r\n      </div>\r\n      <div class=\"container\">\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/request-admin-view/request-admin-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestAdminViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_request__ = __webpack_require__("../../../../../src/app/classes/request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestAdminViewComponent = /** @class */ (function () {
    // reqListOnVehicle; // this will hold the list of reqeust which belongs to vehicle when admin select vehicle
    function RequestAdminViewComponent(route, requestService, adminService) {
        this.route = route;
        this.requestService = requestService;
        this.adminService = adminService;
        this.source = [];
        this.vehicleSource = [];
        this.isSetVehicle = false;
        this.isSetDriver = false; // true when driver is set
        this.request = new __WEBPACK_IMPORTED_MODULE_3__classes_request__["a" /* Request */]();
    }
    RequestAdminViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.selectedRequest);
        if (!this.selectedRequest) {
            // get referance number as route parameter and equal it to refNo variable
            this.route.paramMap.subscribe(function (params) {
                _this.refNo = params.get('refNO');
                // console.log(this.refNo);
            });
            this.requestService.getOneRequest(this.refNo)
                .subscribe(function (response) {
                _this.request = response['msg'][0];
                console.log(response);
            });
        }
        else {
            this.request = this.selectedRequest;
            alert(this.request['refNo']);
        }
        this.adminService.getDrivers()
            .subscribe(function (response) {
            for (var x = 0; x < response['msg'].length; x++) {
                _this.source[x] = (response['msg'][x]['name']);
            }
            // this.source = response['msg'];
            // console.log(this.source);
            _this.data = _this.source.slice();
        });
        this.adminService.getVehicle_to_req()
            .subscribe((function (response) {
            for (var y = 0; y < response['msg'].length; y++) {
                _this.vehicleSource[y] = response['msg'][y]['vehicle_no'];
            }
            _this.vehicleData = _this.vehicleSource.slice();
        }));
    };
    RequestAdminViewComponent.prototype.handleFilter = function (value) {
        this.data = this.source.filter(function (s) { return s.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    RequestAdminViewComponent.prototype.handleFilter2 = function (value) {
        this.vehicleData = this.vehicleSource.filter(function (s) { return s.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    RequestAdminViewComponent.prototype.addDriver = function () {
        var _this = this;
        console.log(this.driver_name);
        this.adminService.setDriver(this.request.refNo, this.driver_name)
            .subscribe(function (response) {
            console.log(response);
            if (response['success'] === true) {
                _this.isSetDriver = true;
            }
        });
    };
    RequestAdminViewComponent.prototype.acceptReq = function () {
        this.requestService.change_status(this.request['refNo'], 1)
            .subscribe(function (response) {
            console.log(response['msg']);
        });
        // alert('accepted');
    };
    RequestAdminViewComponent.prototype.rejectReq = function () {
        this.requestService.change_status(this.request['refNo'], 3)
            .subscribe(function (response) {
            console.log(response['msg']);
        });
        // alert('accepted');
    };
    /*set_vehicle() {
      if (this.vehicle_no != null) {
        this.adminService.set_vehicle(this.refNo, this.vehicle_no)
          .subscribe(response => {
            console.log(response);
            if (response['msg']){
              this.isSetVehicle = true;
            }
          });
      }
    }*/
    RequestAdminViewComponent.prototype.markDetailedReq = function () {
        this.requestService.change_status(this.request['refNo'], 4)
            .subscribe(function (response) {
            alert('daon');
            console.log(response['msg']);
        });
    };
    RequestAdminViewComponent.prototype.set_vehicle_no = function (value) {
        this.vehicle_no = value;
    };
    /*getRequestsList(vehicle_no) {
      if (vehicle_no !== '' && vehicle_no !== null) {
        this.set_vehicle_no(vehicle_no);
        this.adminService.getRequestList(vehicle_no)
          .subscribe( response => {
            if (response['msg'][0]) {
              this.reqListOnVehicle = response['msg'];
            } else {
              this.reqListOnVehicle = null;
            }
          });
      } else {
        this.reqListOnVehicle = null;
      }
    }*/
    RequestAdminViewComponent.prototype.setVehicle = function (vehicle) {
        this.request.vehicle = vehicle;
    };
    RequestAdminViewComponent.prototype.setDriver = function (driver) {
        console.log(driver);
        this.request.driver = driver;
    };
    RequestAdminViewComponent.prototype.ngOnDestroy = function () {
        // LocalStorage.
        // alert('going away');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RequestAdminViewComponent.prototype, "selectedRequest", void 0);
    RequestAdminViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-request-admin-view',
            template: __webpack_require__("../../../../../src/app/components/main/admin/request-admin-view/request-admin-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/request-admin-view/request-admin-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]])
    ], RequestAdminViewComponent);
    return RequestAdminViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/request-admin-view/set-driver/set-driver.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/request-admin-view/set-driver/set-driver.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n\r\n    <div id=\"auto_complete_sec\"></div>\r\n\r\n    <div id=\"driver_list\">\r\n\r\n      <div class=\"trp-one-driver\" *ngFor=\"let driver of driver_list\" (click)=\"onclickDriver(driver)\">\r\n        <img src=\"/assets/images/pattern/pattern.png\" alt=\"\" class=\"trp-driver-list-img\">\r\n        <h6 style=\"display:inline\">{{driver.name}}</h6>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n\r\n\r\n\r\n    <div class=\"row\" *ngIf=\"selectedDriver\">\r\n      <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n        <div class=\"\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-md-4\">\r\n              <img [src]=\"imageUrl\" style=\"height: 150px; width: 150px\" alt=\"\" class=\"img-fluid\" />\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-8\">\r\n              <h4>\r\n                {{selectedDriver.name | uppercase}}</h4>\r\n\r\n              <p>\r\n                <i class=\"glyphicon glyphicon-telephone\">{{selectedDriver.telephone}}</i>\r\n                <!-- {{driver.telephone}} -->\r\n                <br />\r\n                <i class=\"glyphicon glyphicon-globe\"></i>{{selectedDriver.driving_liecence_no}}\r\n                <br />\r\n                <!--<i class=\"glyphicon glyphicon-gift\"></i>{{selectedDriver.nic_no}}</p>-->\r\n              <!-- Split button -->\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n      <table *ngIf=\"reqListOnDriver && reqListOnDriver !== [] && reqListOnDriver !== null \" class=\"table table-sm\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\">Department/Unit</th>\r\n          <th scope=\"col\">Description</th>\r\n          <th scope=\"col\">Departure time</th>\r\n          <th scope=\"col\">Arrival time</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let request of reqListOnDriver\">\r\n          <td>TRD/{{request['dep_unit']}}</td>\r\n          <td><b>{{request['departure']['pickupPoint']}}</b> to <b>{{request['arrival']['dropPoint']}}</b></td>\r\n          <td>{{request['departure']['pickupTime']}}</td>\r\n          <td>{{request['arrival']['dropTime']}}</td>\r\n\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-footer\" ngClass=\"\">\r\n  <button type=\"button\"  class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"setDriver()\"><i class=\"fa fa-add\"></i>Add</button>\r\n  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/request-admin-view/set-driver/set-driver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetDriverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetDriverComponent = /** @class */ (function () {
    function SetDriverComponent(adminService) {
        this.adminService = adminService;
        this.setDriver_ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.imageUrl = '/assets/images/pattern/pattern.png';
    }
    SetDriverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getAllDriversDetails()
            .subscribe(function (response) {
            _this.driver_list = response['msg'];
        });
    };
    SetDriverComponent.prototype.onclickDriver = function (driver) {
        var _this = this;
        this.selectedDriver = driver;
        this.imageUrl = '/assets/images/pattern/pattern.png';
        this.adminService.getRequestOfDriverOnDay(driver['_id'])
            .subscribe(function (response) {
            // console.log(response);
            if (response['data'][0] !== null) {
                _this.reqListOnDriver = response['data'];
                console.log(_this.reqListOnDriver);
            }
        });
    };
    SetDriverComponent.prototype.setDriver = function () {
        var _this = this;
        console.log(this.selectedDriver);
        this.adminService.setDriver(this.refNo, this.selectedDriver['_id'])
            .subscribe(function (response) {
            console.log(response);
            if (response['success'] === true) {
                _this.setDriver_.emit(_this.selectedDriver);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SetDriverComponent.prototype, "refNo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SetDriverComponent.prototype, "setDriver_", void 0);
    SetDriverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-set-driver',
            template: __webpack_require__("../../../../../src/app/components/main/admin/request-admin-view/set-driver/set-driver.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/request-admin-view/set-driver/set-driver.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]])
    ], SetDriverComponent);
    return SetDriverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/request-admin-view/set-vehicle/set-vehicle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/request-admin-view/set-vehicle/set-vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <input type=\"text\" [(ngModel)]=\"email\">\r\n\r\n  <div class=\"col-md-4\" style=\"position: relative\">\r\n\r\n    <div id=\"\"></div>\r\n\r\n    <div id=\"vehicle_list\" data-spy=\"scroll\" data-target=\"drivers\">\r\n      <div id=\"drivers\" style=\"max-height: 400px;overflow-y: scroll;\">\r\n        <div role=\"tablist\" class=\"trp-one-driver\" *ngFor=\"let vehicle of vehicle_lists\" (click)=\"onclickVehicle(vehicle)\">\r\n          <img src=\"/assets/images/pattern/pattern.png\" alt=\"\" class=\"trp-driver-list-img\">\r\n          <h6 style=\"display:inline\">{{vehicle.vehicle_no}}</h6>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!--<div id=\"vehicle_list\" >\r\n\r\n      <div id=\"drivers\" >\r\n        <div  class=\"trp-one-driver\" *ngFor=\"let vehicle of vehicle_lists\" (click)=\"onclickVehicle(vehicle)\">\r\n          <img src=\"/assets/images/pattern/pattern.png\" alt=\"\" class=\"trp-driver-list-img\">\r\n          <h6 style=\"display:inline\">{{vehicle.vehicle_no}}</h6>\r\n        </div>\r\n      </div>\r\n\r\n    </div>-->\r\n\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n\r\n\r\n    <div class=\"row\" *ngIf=\"selectedVehicle\">\r\n      <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n        <div class=\"\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-md-4\">\r\n              <img [src]=\"imageUrl\" style=\"height: 150px; width: 150px\" alt=\"\" class=\"img-fluid\" />\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-8\" >\r\n              <h4 >\r\n                {{selectedVehicle.vehicle_no | uppercase}}</h4>\r\n\r\n              <p>\r\n                <i class=\"glyphicon glyphicon-telephone\">{{selectedVehicle['vehicle_type']}}</i> </p>\r\n                <!-- {{driver.telephone}} -->\r\n                <br />\r\n              <p *ngIf=\"selectedVehicle['driver']\">{{selectedVehicle['driver']['name']}}</p>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n      <table *ngIf=\"reqListOnVehicle && reqListOnVehicle !== [] && reqListOnVehicle !== null \" class=\"table table-sm\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\">Department/Unit</th>\r\n          <th scope=\"col\">Description</th>\r\n          <th scope=\"col\">Departure time</th>\r\n          <th scope=\"col\">Arrival time</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let request of reqListOnVehicle\">\r\n          <td>TRD/{{request['dep_unit']}}</td>\r\n          <td><b>{{request['departure']['pickupPoint']}}</b> to <b>{{request['arrival']['dropPoint']}}</b></td>\r\n          <td>{{request['departure']['pickupTime']}}</td>\r\n          <td>{{request['arrival']['dropTime']}}</td>\r\n\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"modal-footer\" ngClass=\"\">\r\n  <button type=\"button\"  class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"set_vehicle()\"><i class=\"fa fa-add\"></i>Add</button>\r\n  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/request-admin-view/set-vehicle/set-vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetVehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetVehicleComponent = /** @class */ (function () {
    function SetVehicleComponent(adminService) {
        this.adminService = adminService;
        this.setVehicle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.setDriver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.vehicle_lists = [];
        this.imageUrl = '/assets/images/pattern/pattern.png';
    }
    SetVehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getListOfVehicles()
            .subscribe(function (response) {
            _this.vehicle_lists = response['data'];
            console.log(_this.vehicle_lists);
        });
    };
    SetVehicleComponent.prototype.onclickVehicle = function (vehicle) {
        console.log(vehicle);
        this.selectedVehicle = vehicle;
        this.getRequestsList(vehicle.vehicle_no);
    };
    SetVehicleComponent.prototype.set_vehicle = function () {
        var _this = this;
        if (this.selectedVehicle != null) {
            this.adminService.set_vehicle(this.refNo, this.selectedVehicle['_id'])
                .subscribe(function (response) {
                // console.log(response);
                if (response['msg']['refNo']) {
                    _this.setVehicle.emit(_this.selectedVehicle);
                    if (_this.selectedVehicle['driver']) {
                        _this.adminService.setDriver(_this.refNo, _this.selectedVehicle['driver']['_id'])
                            .subscribe(function (resp) {
                            _this.setDriver.emit(_this.selectedVehicle['driver']);
                        });
                    }
                }
            });
        }
    };
    SetVehicleComponent.prototype.getRequestsList = function (vehicle_no) {
        var _this = this;
        if (vehicle_no !== '' && vehicle_no !== null) {
            this.adminService.getRequestList(vehicle_no)
                .subscribe(function (response) {
                console.log(response);
                if (response['msg'][0]) {
                    _this.reqListOnVehicle = response['msg'];
                }
                else {
                    _this.reqListOnVehicle = null;
                }
            });
        }
        else {
            this.reqListOnVehicle = null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SetVehicleComponent.prototype, "refNo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SetVehicleComponent.prototype, "setVehicle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SetVehicleComponent.prototype, "setDriver", void 0);
    SetVehicleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-set-vehicle',
            template: __webpack_require__("../../../../../src/app/components/main/admin/request-admin-view/set-vehicle/set-vehicle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/request-admin-view/set-vehicle/set-vehicle.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]])
    ], SetVehicleComponent);
    return SetVehicleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/shedule/shedule.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/shedule/shedule.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"table-responsive\">\r\n    <table *ngIf=\"requests\" class=\"table table-sm\">\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">ref no</th>\r\n        <th scope=\"col\">Description</th>\r\n        <th scope=\"col\">Departure </th>\r\n        <th scope=\"col\">Arrival </th>\r\n        <th scope=\"col\">Dep / Unit</th>\r\n        <th scope=\"col\" >Driver</th>\r\n        <th scope=\"col\">Vehicle</th>\r\n        <th scope=\"col\">Status</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let request of requests\" style=\"cursor: pointer\" (click)=\"isSelect(request)\"  data-toggle=\"modal\" data-target=\".bd-example-modal-lg\" >\r\n        <td>TRD/{{request['refNo']}}</td>\r\n        <td><b>{{request['departure']['pickupPoint']}}</b> to <b>{{request['departure']['dropPoint']}}</b></td>\r\n        <td>{{request['departure']['pickupDate']}} {{request['departure']['pickupTime']}}</td>\r\n        <!--<td>{{request['arrival']['dropDate']}} {{request['arrival']['dropTime']}}</td>-->\r\n        <td>{{request['departure']['dropDate']}} {{request['departure']['dropTime']}}</td>\r\n        <td>{{request['dep_unit']}}</td>\r\n\r\n        <td *ngIf=\"request['driver']\">{{request['driver']['name']}}</td>\r\n        <td *ngIf=\"!request['driver']\">not set</td>\r\n\r\n\r\n        <td *ngIf=\"request['vehicle']\">{{request['vehicle']['vehicle_no']}}</td>\r\n        <td *ngIf=\"!request['vehicle']\">not set</td>\r\n        <td>\r\n          <button class=\"btn btn-success btn-sm\" (click)=\"change_status('complete', request['refNo'], 6)\">Done</button>\r\n          <button class=\"btn btn-danger btn-sm\" (click)=\"change_status('reject', request['refNo'], 3)\">Cancel</button>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- request modal -->\r\n\r\n<div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog trp-modal-lg\" *ngIf=\"selectedRequest\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-header\" >\r\n        <h5 class=\"modal-title\">TRD/{{selectedRequest['refNo']}} - Details</h5>\r\n        <button *ngIf=\"selectedRequest['vehicle']\" >print</button>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\" >\r\n\r\n              <div class=\"col-lg-12\" id=\"details_section\">\r\n                <!--        collapse div section stating   -->\r\n\r\n                <app-request-admin-view\r\n                  [selectedRequest]=\"selectedRequest\"\r\n                >\r\n\r\n                </app-request-admin-view>\r\n\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--end of request modal -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/shedule/shedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SheduleComponent = /** @class */ (function () {
    function SheduleComponent(requestService) {
        this.requestService = requestService;
    }
    SheduleComponent.prototype.ngOnInit = function () {
        if (!this.reqeustList) {
            this.get_requests();
        }
        else {
            this.requests = this.reqeustList;
        }
    };
    SheduleComponent.prototype.get_requests = function () {
        var _this = this;
        this.requestService.get_active_req()
            .subscribe(function (response) {
            _this.requests = response['msg'];
            console.log(response['msg']);
        });
    };
    SheduleComponent.prototype.change_status = function (action, refNo, status) {
        var _this = this;
        if (confirm("Are you sure to " + action + " the request?")) {
            this.requestService.change_status(refNo, status)
                .subscribe(function (response) {
                _this.get_requests();
            });
        }
    };
    SheduleComponent.prototype.isSelect = function (request) {
        this.selectedRequest = request;
        if (!this.selectedRequest) {
            alert(request['refNo']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SheduleComponent.prototype, "reqeustList", void 0);
    SheduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shedule',
            template: __webpack_require__("../../../../../src/app/components/main/admin/shedule/shedule.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/shedule/shedule.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]])
    ], SheduleComponent);
    return SheduleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/vehicle/add-vehicle/add-vehicle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/vehicle/add-vehicle/add-vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isSubmited\">\n  <form class=\"form-horizontal\" #vehicleForm=\"ngForm\" (ngSubmit)=\"addVehicle(vehicleForm.value)\">\n    <fieldset>\n\n      <!-- Form Name -->\n      <legend>Add Vehicle</legend>\n\n      <!-- Text input-->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"vehicle_no\">Vehicle No</label>\n        <div class=\"col-md-8\">\n          <input ngModel id=\"vehicle_no\" name=\"vehicle_no\" type=\"text\" placeholder=\"Vehicle's no\" class=\"form-control input-md\" required=\"\">\n\n        </div>\n      </div>\n\n      <!-- Text input-->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"chassi_no\">Chassis No</label>\n        <div class=\"col-md-8\">\n          <input ngModel id=\"chassi_no\" name=\"chassi_no\" type=\"text\" placeholder=\"Chassis no\" class=\"form-control input-md\" required=\"\">\n\n        </div>\n      </div>\n\n      <!-- Text input-->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"vehicle_type\">Vehicle Type</label>\n        <div class=\"col-md-8\">\n\n          <select ngModel name=\"vehicle_type\" id=\"vehicle_type\" class=\"form-control input-md\">\n\n            <option value=\"car\">Car</option>\n            <option value=\"van\">Van</option>\n            <option value=\"bus\">Bus</option>\n            <option value=\"three_wheel\">Three Wheel</option>\n\n          </select>\n\n        </div>\n      </div>\n\n\n      <!-- Text input-->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"driver\">Driver</label>\n        <div class=\"col-md-8\">\n\n          <select ngModel name=\"driver\" id=\"driver\" class=\"form-control input-md\">\n\n            <option *ngFor=\"let driver of driverList\" value=\"{{driver['_id']}}\">{{driver['name']}}</option>\n\n          </select>\n\n        </div>\n      </div>\n\n\n      <div class=\"form-group\">\n        <div class=\"col-md-4 \">\n          <button class=\"btn btn-primary\" ><i class=\"fa fa-add\"></i> Add</button>\n        </div>\n      </div>\n    </fieldset>\n  </form>\n\n</div>\n\n<div *ngIf=\"isSubmited\">\n  <img src=\"/assets/images/loading.gif\" alt=\"\" style=\"height: 100px;\n    margin-top: 25vh;\n    margin-left: 50vh;\n    margin-bottom: 25vh;\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/vehicle/add-vehicle/add-vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
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



var AddVehicleComponent = /** @class */ (function () {
    function AddVehicleComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.isSubmited = false;
    }
    AddVehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getAllDriversDetails()
            .subscribe(function (data) {
            // console.log(data);
            if (data['msg'][0]) {
                _this.driverList = data['msg'];
            }
            else {
                alert('error occured. please refresh');
            }
        });
    };
    AddVehicleComponent.prototype.addVehicle = function (vehicle) {
        var _this = this;
        this.isSubmited = true;
        console.log(vehicle);
        this.adminService.addVehicle(vehicle)
            .subscribe(function (response) {
            if (response['success'] === false) {
                alert('error occured. please try again');
                _this.isSubmited = false;
            }
            else if (response['success'] === true) {
                alert(response['msg']);
                _this.isSubmited = false;
                _this.router.navigate(['/admin']);
            }
        });
        // alert('added');
    };
    AddVehicleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-vehicle',
            template: __webpack_require__("../../../../../src/app/components/main/admin/vehicle/add-vehicle/add-vehicle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/vehicle/add-vehicle/add-vehicle.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AddVehicleComponent);
    return AddVehicleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/vehicle/vehicle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/vehicle/vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"vehicle\">\r\n  <div class=\"col-md-6\">\r\n    <table class=\"table table-sm\">\r\n      <tr>\r\n        <th scope=\"row\">\r\n          Vehicle Number\r\n        </th>\r\n        <td>\r\n          {{vehicle['vehicle_no']}}\r\n        </td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <th scope=\"row\">\r\n          Chassy Number\r\n        </th>\r\n        <td>\r\n          {{vehicle['chassi_no']}}\r\n        </td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <th scope=\"row\">\r\n          Vehicle Type\r\n        </th>\r\n        <td>\r\n          {{vehicle['vehicle_type']}}\r\n        </td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <th scope=\"row\">\r\n          Condition\r\n        </th>\r\n        <td class=\"table-success\">\r\n          Good\r\n        </td>\r\n      </tr>\r\n\r\n    </table>\r\n\r\n    <button class=\"btn purple\" (click)=\"addMaintenance()\">Add Maintenance</button>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <img src=\"http://www.hdcarwallpapers.com/walls/renault_alpine_a110_50_concept-wide.jpg\" alt=\"\" class=\"img-responsive trp-img-vehicle\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/vehicle/vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
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



var VehicleComponent = /** @class */ (function () {
    function VehicleComponent(route, adminservice) {
        var _this = this;
        this.route = route;
        this.adminservice = adminservice;
        route.paramMap.subscribe(function (params) {
            _this.vehicle_no = params.get('vehicle_no');
        });
    }
    VehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminservice.getVehicle(this.vehicle_no)
            .subscribe(function (vehicle) {
            _this.vehicle = vehicle['data'][0];
            console.log(_this.vehicle);
        });
    };
    VehicleComponent.prototype.addMaintenance = function () {
    };
    VehicleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vehicle',
            template: __webpack_require__("../../../../../src/app/components/main/admin/vehicle/vehicle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/vehicle/vehicle.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]])
    ], VehicleComponent);
    return VehicleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/driver-profile/driver-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/driver-profile/driver-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"container\" *ngIf=\"driver\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n      <div class=\"\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-md-4\">\n            <img src=\"http://placehold.it/150x150\" alt=\"\" class=\"img-fluid\" />\n          </div>\n          <div class=\"col-sm-6 col-md-8\">\n            <h4>\n              {{driver.name | uppercase}}</h4>\n            <small><cite title=\"San Francisco, USA\">San Francisco, USA <i class=\"glyphicon glyphicon-map-marker\">\n            </i></cite></small>\n            <p>\n              <i class=\"glyphicon glyphicon-telephone\"></i>\n              &lt;!&ndash; {{driver.telephone}} &ndash;&gt;\n              <br />\n              <i class=\"glyphicon glyphicon-globe\"></i><a href=\"http://www.jquery2dotnet.com\">{{driver.driving_liecence_no}}</a>\n              <br />\n              <i class=\"glyphicon glyphicon-gift\"></i>{{driver.nic_no}}</p>\n            &lt;!&ndash; Split button &ndash;&gt;\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n\n  <h4>Shedule</h4>\n  <div class=\"btn-group\" role=\"group\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onClickDay()\">Day</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onClickMonth()\">Month</button>\n  </div>\n  <br>\n  <br>\n\n  <div class=\"row\">\n\n\n\n    <table *ngIf=\"reqListOnDriver[0] && reqListOnDriver !== [] && reqListOnDriver !== null \" class=\"table table-sm table-hover\">\n      <thead>\n      <tr>\n        <th scope=\"col\">Department/Unit</th>\n        <th scope=\"col\">Description</th>\n        <th scope=\"col\">Departure time</th>\n        <th scope=\"col\">Arrival time</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr style=\"cursor: pointer\" *ngFor=\"let request of reqListOnDriver\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\" (click)=\"selectRequest(request)\">\n        <td>{{request['dep_unit']}}</td>\n        <td><b>{{request['departure']['pickupPoint']}}</b> to <b>{{request['arrival']['pickupPoint']}}</b></td>\n        <td>{{request['departure']['pickupTime']}}</td>\n        <td>{{request['arrival']['dropTime']}}</td>\n\n      </tr>\n      </tbody>\n\n\n\n      &lt;!&ndash; request modal &ndash;&gt;\n\n      <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n          <div class=\"modal-content\">\n\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\">TRD/{{selectedReq['refNo']}} - Details</h5>\n              <button *ngIf=\"selectedReq['vehicle']\" (click)=\"printPdf()\">print</button>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n\n            <div class=\"container-fluid\">\n              <div class=\"row\">\n\n                <div class=\"container-fluid\">\n                  <div class=\"row\" >\n\n                    <div class=\"col-lg-12\" id=\"details_section\">\n                      &lt;!&ndash;        collapse div section stating   &ndash;&gt;\n\n                      <div\n                        [ngClass]=\"{\n              'alert-danger': selectedReq.status == 3,\n              'alert-primary': selectedReq.status == 2,\n              'alert-success' : selectedReq.status == 1,\n              'alert-warning': selectedReq.status == 0\n            }\"\n                        class=\"alert\" role=\"alert\">\n                        <div *ngIf=\"selectedReq.status == '0'\">\n                          <i class=\"fa fa-info\"></i>\n                          selectedReq is not being reviewed\n                        </div>\n\n                        <div *ngIf=\"selectedReq.status == '1'\">\n                          <i class=\"fa fa-info\"></i>\n                          Request is Accepted. please supply futher information in more info section to proceed further\n                        </div>\n\n                        <div *ngIf=\"selectedReq.status == '2'\">\n                          <i class=\"fa fa-info\"></i>  Request is confirmed  <button class=\"btn btn-primary\">Download Application</button>\n                        </div>\n\n                      </div>\n\n                      <div id=\"accordion\">\n                        <div class=\"card\">\n                          <div\n                            class=\"card-header bg-dark text-white\" id=\"headingOne\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\n\n                            [attr.aria-expanded]=\"selectedReq.status != '1'\"\n                            aria-controls=\"collapseOne\">\n                            <h6 class=\"mb-0\">\n                              <i class=\"fa fa-map\"></i>\n                              Trip Section\n                            </h6>\n                          </div>\n\n                          <div id=\"collapseOne\" class=\"collapse\"\n                               [class.show]=\"selectedReq.status != '1'\"\n                               aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                            <div class=\"card-body\">\n                              <div>\n                                <h6>Departure</h6>\n                                <table class=\"table table-sm\">\n\n                                  <tr>\n\n                                    <th scope=\"row\">\n                                      Date\n                                    </th>\n                                    <td>\n                                      {{selectedReq.departure.pickupDate}}\n                                    </td>\n                                  </tr>\n\n                                  <tr>\n\n                                    <th scope=\"row\">\n                                      Time\n                                    </th>\n                                    <td>\n                                      {{selectedReq.departure.pickupTime}}\n                                    </td>\n                                  </tr>\n\n                                  <tr>\n\n                                    <th scope=\"row\">\n                                      From\n                                    </th>\n                                    <td>\n                                      {{selectedReq.departure.pickupPoint}}\n                                    </td>\n                                  </tr>\n\n                                  <tr>\n\n                                    <th scope=\"row\">\n                                      To\n                                    </th>\n                                    <td>\n                                      {{selectedReq.departure.dropPoint}}\n                                    </td>\n                                  </tr>\n                                </table>\n                              </div>\n\n                              <div>\n                                <h6>Arrival</h6>\n                                <table class=\"table table-sm\">\n\n                                  <tr>\n\n                                    <th scope=\"row\">\n                                      Date\n                                    </th>\n                                    <td>\n                                      {{selectedReq.arrival.dropDate}}\n                                    </td>\n                                  </tr>\n\n                                  <tr>\n\n                                    <th scope=\"row\">\n                                      Time\n                                    </th>\n                                    <td>\n                                      {{selectedReq.arrival.dropTime}}\n                                    </td>\n                                  </tr>\n\n                                  <tr>\n\n                                    <th scope=\"row\">\n                                      From\n                                    </th>\n                                    <td>\n                                      {{selectedReq.arrival.dropPoint}}\n                                    </td>\n                                  </tr>\n\n                                  <tr>\n\n                                    <th scope=\"row\">\n                                      To\n                                    </th>\n                                    <td>\n                                      {{selectedReq.arrival.pickupPoint}}\n                                    </td>\n                                  </tr>\n                                </table>\n                              </div>\n\n                            </div>\n                          </div>\n                        </div>\n\n\n                        <div class=\"card\">\n                          <div\n                            [ngClass]=\"{'bg-danger':!selectedReq.vehicle, 'bg-success': selectedReq.vehicle}\"\n                            class=\"card-header text-white\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                            <h6 class=\"mb-0\">\n                              <i class=\"fa fa-car\"></i>\n                              Vehicle Section\n                            </h6>\n                          </div>\n\n                          <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                            <div\n                              [ngClass]=\"{'text-danger': !vehicle, 'text-success' : vehicle}\"\n                              class=\"card-body\">\n                              <div *ngIf=\"selectedReq.vehicle\">\n                                Vehicle no: {{selectedReq.vehicle.vehicle_no}}\n                              </div>\n                              <div *ngIf=\"!selectedReq.vehicle\">\n                                <p class=\"card-text\">\n                                  Vehicle is not assigned yet\n                                </p>\n\n                              </div>\n\n                            </div>\n                          </div>\n                        </div>\n\n\n                        &lt;!&ndash;<div class=\"card\">\n                          <div\n                            [ngClass]=\"{\n                      'bg-danger':!selectedReq.driver, 'bg-success': selectedReq.driver}\"\n                            class=\"card-header text-white\" id=\"headingThree\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                            <h6 class=\"mb-0\">\n                              <i class=\"fa fa-car\"></i>\n                              Driver Section\n                            </h6>\n                          </div>\n\n                          <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n                            <div\n                              [ngClass]=\"{'text-danger':!selectedReq.driver, 'text-success' : selectedReq.driver}\"\n                              class=\"card-body\">\n                              <div *ngIf=\"selectedReq.driver\">\n                                Driver name: {{selectedReq.driver.name}}\n                              </div>\n                              <div *ngIf=\"!test\">\n                                <p class=\"card-text\">\n                                  Driver is not set\n                                </p>\n\n                              </div>\n\n                            </div>\n                          </div>\n                        </div>&ndash;&gt;\n\n\n                        <div class=\"card\">\n                          <div\n                            class=\"bg-primary card-header text-white\" id=\"headingFour\" data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\n                            <h6 class=\"mb-0\">\n                              <i class=\"fa fa-info\"></i>\n                              Details Section\n                            </h6>\n                          </div>\n\n                          <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordion\">\n                            <div class=\"card-body\">\n\n                              <div class=\"container-fluid\">\n                                <table class=\"table table-sm\">\n                                  <tr>\n                                    <th scope=\"row\">\n                                      Refferance No\n                                    </th>\n                                    <td>\n                                      TRD/{{selectedReq.refNo}}\n                                    </td>\n                                  </tr>\n\n                                  <tr>\n                                    <th scope=\"row\">\n                                      Lecturer\n                                    </th>\n                                    <td>\n                                      {{selectedReq.lecturer}}\n                                    </td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">\n                                      Designation\n                                    </th>\n                                    <td>\n                                      {{selectedReq.position}}\n                                    </td>\n                                  </tr>\n\n                                  <tr>\n                                    <th scope=\"row\">\n                                      Department/ Unit\n                                    </th>\n                                    <td>\n                                      {{selectedReq.dep_unit}}\n                                    </td>\n                                  </tr>\n\n                                  <tr>\n                                    <th scope=\"row\">\n                                      Purpose\n                                    </th>\n                                    <td>\n                                      {{selectedReq.purpose}}\n                                    </td>\n                                  </tr>\n\n                                  <tr>\n                                    <th scope=\"row\">\n                                      Funding method\n                                    </th>\n                                    <td>\n                                      {{selectedReq.fundingWay}}\n                                    </td>\n                                  </tr>\n\n                                  <tr>\n                                    <th scope=\"row\">\n                                      Email\n                                    </th>\n                                    <td>\n                                      {{selectedReq.email}}\n                                    </td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">\n                                      Password\n                                    </th>\n                                    <td>\n                                      {{selectedReq.password}}\n                                    </td>\n                                  </tr>\n\n                                  <tr>\n                                    <th scope=\"row\">\n                                      Number of Passangers\n                                    </th>\n                                    <td>\n                                      {{selectedReq.num_passangers}}\n                                    </td>\n                                  </tr>\n\n\n\n\n                                </table>\n                              </div>\n\n                            </div>\n                          </div>\n                        </div>\n\n                      </div>\n\n\n                    </div>\n                  </div>\n\n\n\n\n                </div>\n\n\n              </div>\n\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n\n      &lt;!&ndash;end of request modal &ndash;&gt;\n\n\n\n    </table>\n    <div class=\"row\" *ngIf=\"!reqListOnDriver[0]\">\n      <div  class=\"alert alert-warning text-center \">\n        no duties\n      </div>\n    </div>\n\n  </div>\n</div>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/components/main/driver-profile/driver-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverProfileComponent; });
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

var DriverProfileComponent = /** @class */ (function () {
    function DriverProfileComponent() {
    }
    DriverProfileComponent.prototype.ngOnInit = function () {
    };
    DriverProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-driver-profile',
            template: __webpack_require__("../../../../../src/app/components/main/driver-profile/driver-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/driver-profile/driver-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DriverProfileComponent);
    return DriverProfileComponent;
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

module.exports = "\r\n<div class=\"\" ><!--style=\"padding-left: 3vh; padding-right: 3vh; padding-top: 2vh\"-->\r\n  <app-notice></app-notice>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#notice-main{\r\n  max-height: 400px;\r\n  /*min-height: 400px;*/\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n#notice-board{\r\n  height: 90%;\r\n  width: 90%;\r\n  background-color: aqua;\r\n  /*background: url(\"../../../../../assets/images/trasport.jpg\");*/\r\n  bottom:0;\r\n  position: absolute;\r\n}\r\n\r\n#notice-corner{\r\n  height: 60%;\r\n  width: 30%;\r\n  float:right;\r\n  background-color:#680000;\r\n  background-repeat: no-repeat;\r\n  /*background: url(\"../../../../../assets/images/pattern/pattern2.png\") repeat;*/\r\n}\r\n\r\n.btn-round-lg{\r\n  border-radius: 22.5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/home/notice/notice.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--<div class=\"row\" @slide style=\"margin: 0; padding-top: 3vh\" >\r\n\r\n  <div class=\"col-lg-5 col-sm-6\">\r\n    <div class=\"input-wrapper trp-notice-background w-100\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n            <div class=\"trp-check-date-div\">\r\n              <label class=\"trp-check-date\">Check date:</label>\r\n              <input [(ngModel)]=\"selectedDate\"\r\n                     [owlDateTimeTrigger]=\"dtPicker1\"\r\n                     [owlDateTime]=\"dtPicker1\"\r\n                     class=\"trp-min-input\"\r\n              >\r\n              <fa name=\"calendar\" class=\"errspan\"></fa>\r\n              <owl-date-time\r\n                (afterPickerClosed)=\"picker()\"\r\n                [pickerType]=\"'calendar'\"\r\n                #dtPicker1></owl-date-time>\r\n\r\n              <div class=\"card\">\r\n                <ul class=\"list-group list-group-flush\">\r\n                  <li class=\"list-group-item\" *ngFor=\"let vehicle of availableVehicles\">{{vehicle.type}}{{vehicle.left}}</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-7 col-sm-12\">\r\n    <div id=\"notice-main\">\r\n\r\n\r\n\r\n      <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <div class=\"carousel-inner \">\r\n\r\n\r\n\r\n\r\n          <div class=\"carousel-item active\">\r\n            <img class=\"d-block w-100 trp-sliderImg\" src=\"assets/images/slider/image4.jpg\" alt=\"First slide\">\r\n          </div>\r\n          <div class=\"carousel-item\">\r\n            <img class=\"d-block w-100 trp-sliderImg\" src=\"assets/images/slider/image3.jpg\" alt=\"Second slide\">\r\n          </div>\r\n\r\n        </div>\r\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>-->\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 col-md-12 col-xs-12\" style=\"background-color: black;overflow: hidden\">\r\n      <div class=\"trp-home-main-div\" style=\"overflow: hidden;position: relative\">\r\n\r\n\r\n        <div class=\"input-wrapper trp-notice-background w-100\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-lg-6 col-md-6 col-sm-12 offset-lg-5 offset-md-5\">\r\n                <div class=\"trp-check-date-div\">\r\n                  <label class=\"trp-check-date\">Check date:</label>\r\n                  <input [(ngModel)]=\"selectedDate\"\r\n                         [owlDateTimeTrigger]=\"dtPicker1\"\r\n                         [owlDateTime]=\"dtPicker1\"\r\n                         class=\"trp-min-input\"\r\n                  >\r\n                  <fa name=\"calendar\" class=\"errspan\"></fa>\r\n                  <owl-date-time\r\n                    (afterPickerClosed)=\"picker()\"\r\n                    [pickerType]=\"'calendar'\"\r\n                    #dtPicker1></owl-date-time>\r\n\r\n                  <div class=\"card\">\r\n                    <ul class=\"list-group list-group-flush\">\r\n                      <li class=\"list-group-item\" *ngFor=\"let vehicle of availableVehicles\">{{vehicle.type}}{{vehicle.left}}</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <img src=\"/assets/images/background/vehicle.svg\" alt=\"\" class=\"trp-home-main-img\" style=\"position: absolute\">\r\n        <img src=\"/assets/images/background/bluebackground-01.svg\" alt=\"\" class=\"trp-home-main-img\" style=\"\">\r\n\r\n      </div>\r\n\r\n      <img src=\"/assets/images/background/zebraline.svg\" alt=\"\" style=\"padding-top: 5px;padding-right: 5px\">\r\n\r\n      <!--<hr class=\"trp-home-hr\" style=\"border-color: white\">-->\r\n     <!-- <div class=\"container\" style=\"padding: 6px; background-color: #cc6600\">\r\n        <h2 class=\"text-white text-center text-capitalize\">Mision</h2>\r\n        <p class=\"text-white\" style=\"font-size: 1.2em; font-weight: bold\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>\r\n\r\n      </div>-->\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"col-lg-4 col-md-12 col-xs-12\">\r\n\r\n      <app-request-btns></app-request-btns>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/home/notice/notice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeComponent; });
/* unused harmony export DateModel */
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
        this.newSelectedDate = new DateModel();
    }
    NoticeComponent.prototype.ngOnInit = function () {
    };
    NoticeComponent.prototype.picker = function () {
        this.newSelectedDate.date = this.selectedDate.getDate();
        this.newSelectedDate.month = this.selectedDate.getMonth() + 1;
        this.newSelectedDate.year = this.selectedDate.getFullYear();
        this.availableVehicles = this.availableVehicleService.get_free_vehicles(this.newSelectedDate.date + "/" + this.newSelectedDate.month + "/" + this.newSelectedDate.year);
        console.log(this.availableVehicles);
    };
    NoticeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

var DateModel = /** @class */ (function () {
    function DateModel() {
    }
    return DateModel;
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

module.exports = "\r\n<!--<div>\r\n\r\n    <img src=\"assets/images/pattern/title.png\" alt=\"\" class=\"trd-title-arrow\">\r\n\r\n  <h4 class=\"trp-title\">\r\n    Review your Request\r\n  </h4>\r\n\r\n  <div class=\"text-center trp-requestBtn\">\r\n    <p>\r\n      We try our best to make yourself comfortable\r\n    </p>\r\n    <button\r\n      class=\"trp-btn\"\r\n      type=\"button\"\r\n      data-toggle=\"modal\" data-target=\"#req_status_Modal\"\r\n    >\r\n      Review <fa name=\"arrow-right\" inverse=\"true\"> </fa></button>\r\n  </div>\r\n\r\n  &lt;!&ndash;[routerLink]=\"['request/check_req']\"&ndash;&gt;\r\n</div>-->\r\n\r\n<div class=\"col-md-12 text-center\">\r\n  <img src=\"/assets/images/background/reservation.png\" alt=\"\" class=\"trp-home-menu\">\r\n  <h5 class=\"trp-home-text\">Check the status of your request....</h5>\r\n  <button class=\"trp-home-btn\" data-toggle=\"modal\" data-target=\"#req_status_Modal\">Check Request...</button>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"req_status_Modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">View Status Window</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n          <app-status-msg></app-status-msg>\r\n\r\n\r\n      </div>\r\n      <!--<div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-check-request',
            template: __webpack_require__("../../../../../src/app/components/main/home/request-btns/check-request/check-request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/home/request-btns/check-request/check-request.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckRequestComponent);
    return CheckRequestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/home/request-btns/check-request/status-msg/status-msg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/home/request-btns/check-request/status-msg/status-msg.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-4\">\r\n      <img src=\"../../../../../../../assets/images/logo/logo.png\" alt=\"\" style=\"height: 20vh;padding-top: 20px;\"> <br>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-8\" [ngSwitch]=\"status\">\r\n      <div *ngSwitchCase=\"0\" class=\"text-center\">\r\n        <div class=\"alert alert-warning\" role=\"alert\">\r\n          <strong>Sorry !</strong> Your request in not being review yet.\r\n        </div>\r\n        <button class=\"btn btn-warning\" [routerLink]=\"['/request/view_req/'+refNo]\" data-dismiss=\"modal\" aria-label=\"Close\">View more</button>\r\n      </div>\r\n      <div *ngSwitchCase=\"1\" class=\"text-center\" >\r\n        <div class=\"alert alert-success\" role=\"alert\">\r\n          <strong>Success!</strong>  Your request is accepted... <br>\r\n          <strong>fill more details</strong>. <br>\r\n        </div>\r\n        <button class=\"btn btn-success\" [routerLink]=\"['/request/view_req/'+refNo]\" data-dismiss=\"modal\" aria-label=\"Close\">View more</button>\r\n\r\n      </div>\r\n      <div *ngSwitchCase=\"2\" class=\"text-center\">\r\n        <div class=\"alert alert-success\" role=\"alert\">\r\n          <strong>Confirmed</strong>  Your request is confirmed\r\n        </div>\r\n        <button class=\"btn btn-success\" [routerLink]=\"['/request/view_req/'+refNo]\" data-dismiss=\"modal\" aria-label=\"Close\">View more</button>\r\n      </div>\r\n      <div *ngSwitchCase=\"3\" class=\"text-center\">\r\n\r\n        <div class=\"alert alert-danger\" role=\"alert\">\r\n          <strong>Sorry !</strong> Your request is rejected.\r\n        </div>\r\n        <button class=\"btn btn-danger\" [routerLink]=\"['/request/view_req/'+refNo]\" data-dismiss=\"modal\" aria-label=\"Close\">View more</button>\r\n      </div>\r\n      <div *ngSwitchCase=\"5\" class=\"text-center\">\r\n        <div class=\"alert alert-danger\" role=\"alert\">\r\n          <strong>Error !</strong> Referance number or password is invalid.\r\n        </div>\r\n        <button class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"reset()\">Try again</button>\r\n\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"6\" class=\"text-center\">\r\n\r\n        <img src=\"/assets/images/loading.gif\" alt=\"\" style=\"height: 50px;margin-top: 20px; margin-bottom: 20px;\">\r\n\r\n      </div>\r\n\r\n\r\n      <div *ngSwitchDefault class=\"row\">\r\n\r\n\r\n        <div class=\"col-md-12\">\r\n          <form class=\"form-horizontal\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\">\r\n            <fieldset>\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-12 control-label\" for=\"redNo\">Refarance No</label>\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">TRD</span>\r\n                    <input id=\"redNo\" name=\"refNo\" autofocus [(ngModel)]=\"refNo\" class=\"form-control input-md\" placeholder=\"Ex: - 5\" type=\"text\" required=\"\">\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Text input-->\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-12 control-label\" for=\"password\">Password</label>\r\n                <div class=\"col-md-12\">\r\n                  <input id=\"password\" name=\"password\" [(ngModel)]=\"password\" type=\"password\" placeholder=\"enter your password here\" class=\"form-control input-md\" required=\"\">\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group text-center\">\r\n                <button class=\"btn trp-btn\">View</button>\r\n              </div>\r\n\r\n            </fieldset>\r\n          </form>\r\n         <!-- <button (click)=\"logout()\">ok</button>-->\r\n        </div>\r\n       <!-- <div class=\"col-md-2\">\r\n\r\n        </div>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/home/request-btns/check-request/status-msg/status-msg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusMsgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatusMsgComponent = /** @class */ (function () {
    function StatusMsgComponent(requestService, authService) {
        this.requestService = requestService;
        this.authService = authService;
        this.isLogged = false;
        this.status = 10;
    }
    StatusMsgComponent.prototype.ngOnInit = function () {
        this.status = 10;
    };
    StatusMsgComponent.prototype.login = function (body) {
        var _this = this;
        this.status = 6;
        this.authService.login(body)
            .subscribe(function (response) {
            //console.log(response['isLogged']);
            if (response['isLogged'] === 1) {
                _this.isLogged = true;
                localStorage.setItem('token', response['token']);
                _this.status = _this.authService.get_status();
                // console.log(this.status);
            }
            else {
                _this.status = 5;
            }
            console.log(response);
        });
    };
    StatusMsgComponent.prototype.logout = function () {
        this.authService.logout();
    };
    StatusMsgComponent.prototype.reset = function () {
        this.status = 100;
    };
    /*getStatus() {
      this.requestService.get_status(this.refNo, this.password)
        .subscribe(response => {
          if (response['msg'][0]) {
            this.status = response['msg'][0]['status'];
          } else {
            this.status = 5;
          }
        });
    }*/
    StatusMsgComponent.prototype.ngOnDestroy = function () {
        //alert('dilusha');
    };
    StatusMsgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-status-msg',
            template: __webpack_require__("../../../../../src/app/components/main/home/request-btns/check-request/status-msg/status-msg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/home/request-btns/check-request/status-msg/status-msg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], StatusMsgComponent);
    return StatusMsgComponent;
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

module.exports = "<!--<div>\r\n  <img src=\"assets/images/pattern/title.png\" alt=\"\" class=\"trd-title-arrow\">\r\n  <h4 class=\"trp-title\">Reserve Vehicle</h4>\r\n\r\n  <div class=\"trp-requestBtn text-center\">\r\n    <p>\r\n      We try our best to make yourself comfortable\r\n    </p>\r\n    <button class=\"trp-btn\" type=\"button\" [routerLink]=\"['request/req_form']\">Request <fa name=\"arrow-right\" inverse=\"true\"> </fa></button>\r\n  </div>\r\n\r\n</div>-->\r\n\r\n<img src=\"/assets/images/background/taxi.png\" alt=\"\" class=\"trp-home-menu\">\r\n<h5 class=\"trp-home-text\">Reserve vehicle/s  for your academic purposes....</h5>\r\n<button class=\"trp-home-btn\" [routerLink]=\"['request/req_form']\">Reserve Vehicle...</button>\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<!--<div class=\"container\" @slide>\r\n  <div class=\"row\" style=\"padding-top: 10px;padding-bottom: 10px\">\r\n      <div class=\"col-lg-6 col-sm-12\">\r\n\r\n        <app-check-request ></app-check-request>\r\n      </div>\r\n    <div class=\"col-lg-6 col-sm-12\">\r\n      <app-create-request></app-create-request>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n\r\n\r\n<div class=\"row\" style=\"margin-top: 3vh\">\r\n\r\n  <app-check-request style=\"width: 100%\"></app-check-request>\r\n\r\n</div>\r\n\r\n<hr class=\"trp-home-hr\" size=\"3px\">\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 text-center\">\r\n\r\n    <app-create-request></app-create-request>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

/***/ "../../../../../src/app/components/main/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\");\r\n.login-block{\r\n  background: #DE6262;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#FFB88C), to(#DE6262));\r\n  background: linear-gradient(to bottom, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  float:left;\r\n  width:100%;\r\n  padding : 50px 0;\r\n}\r\n.banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;}\r\n.container{background:#fff; border-radius: 10px; -webkit-box-shadow:15px 20px 0px rgba(0,0,0,0.1); box-shadow:15px 20px 0px rgba(0,0,0,0.1);}\r\n.carousel-inner{border-radius:0 10px 10px 0;}\r\n.carousel-caption{text-align:left; left:5%;}\r\n.login-sec{padding: 50px 30px; position:relative;}\r\n.login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}\r\n.login-sec .copy-text i{color:#FEB58A;}\r\n.login-sec .copy-text a{color:#E36262;}\r\n.login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #DE6262;}\r\n.login-sec h2:after{content:\" \"; width:100px; height:5px; background:#FEB58A; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}\r\n.btn-login{background: #DE6262; color:#fff; font-weight:600;}\r\n.banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}\r\n.banner-text h2{color:#fff; font-weight:600;}\r\n.banner-text h2:after{content:\" \"; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}\r\n.banner-text p{color:#fff;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"login-block\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 login-sec\">\n        <h2 class=\"text-center\">Administrator Login</h2>\n        <form class=\"login-form\" #loginForm (submit)=\"login(loginForm)\" >\n          <div class=\"form-group\">\n            <label  class=\"text-uppercase\">Username</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\" type=\"text\" [(ngModel)]=\"username\" name=\"username\">\n\n          </div>\n          <div class=\"form-group\">\n            <label  class=\"text-uppercase\">Password</label>\n            <input type=\"password\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"password\" name=\"password\">\n          </div>\n\n\n          <div class=\"form-check\">\n            <!--<label class=\"form-check-label\">\n              <input type=\"checkbox\" class=\"form-check-input\">\n              <small>Remember Me</small>\n            </label>-->\n            <button type=\"submit\" class=\"btn btn-login float-right\">Submit</button>\n          </div>\n\n        </form>\n        <!--<div class=\"copy-text\">Created with <i class=\"fa fa-heart\"></i> by <a href=\"http://grafreez.com\">Grafreez.com</a></div>-->\n      </div>\n      <div class=\"col-md-8 banner-sec\">\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner\" role=\"listbox\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block img-fluid\" src=\"https://static.pexels.com/photos/33972/pexels-photo.jpg\" alt=\"First slide\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <div class=\"banner-text\">\n                  <h2>This is Heaven</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block img-fluid\" src=\"https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg\" alt=\"First slide\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <div class=\"banner-text\">\n                  <h2>This is Heaven</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block img-fluid\" src=\"https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg\" alt=\"First slide\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <div class=\"banner-text\">\n                  <h2>This is Heaven</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/main/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
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



var LoginComponent = /** @class */ (function () {
    function LoginComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (loginform) {
        var _this = this;
        // alert('ok');
        if (this.username !== null && this.password !== null) {
            this.adminService.adminLogin(this.username, this.password)
                .subscribe(function (resp) {
                if (resp['status'] === 200) {
                    localStorage.setItem('token', resp['token']);
                    _this.router.navigate(['/admin']);
                    window.location.reload();
                }
                else {
                    alert('username or password is incorrect');
                    loginform.reset();
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/main/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
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

module.exports = "<div  @slide >\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<div class=\"container-fluid\" @slide>\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 \" style=\"min-height: 500px;\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <p class=\"card-title\">please, sign in to check your reqeust....</p>\r\n          <form action=\"\">\r\n            <div >\r\n              <label for=\"email\"> Email</label>\r\n              <input type=\"email\" name=\"email\" class=\"trp-min-input\" id=\"email\">\r\n            </div>\r\n            <div>\r\n              <label for=\"password\"> Password</label>\r\n              <input type=\"text\" name=\"password\" class=\"trp-min-input\" id=\"password\">\r\n            </div>\r\n            <div style=\"    text-align: center; padding-top: 10px;\">\r\n              <input type=\"submit\" class=\"trp-btn\" value=\"Check ->\">\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, "@import url(\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\");\r\n.login-block{\r\n  background: #DE6262;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#FFB88C), to(#DE6262));\r\n  background: linear-gradient(to bottom, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  float:left;\r\n  width:100%;\r\n  padding : 50px 0;\r\n}\r\n.banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;}\r\n.container{background:#fff; border-radius: 10px; -webkit-box-shadow:15px 20px 0px rgba(0,0,0,0.1); box-shadow:15px 20px 0px rgba(0,0,0,0.1);}\r\n.carousel-inner{border-radius:0 10px 10px 0;}\r\n.carousel-caption{text-align:left; left:5%;}\r\n.login-sec{padding: 50px 30px; position:relative;}\r\n.login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}\r\n.login-sec .copy-text i{color:#FEB58A;}\r\n.login-sec .copy-text a{color:#E36262;}\r\n.login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #DE6262;}\r\n.login-sec h2:after{content:\" \"; width:100px; height:5px; background:#FEB58A; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}\r\n.btn-login{background: #DE6262; color:#fff; font-weight:600;}\r\n.banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}\r\n.banner-text h2{color:#fff; font-weight:600;}\r\n.banner-text h2:after{content:\" \"; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}\r\n.banner-text p{color:#fff;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/request/request-form/request-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-5 col-md-6 col-sm-10\">\r\n\r\n\r\n\r\n  </div>\r\n    <div class=\"col-xl-8 col-lg-7 col-md-6 col-sm-10\"></div>\r\n\r\n    &lt;!&ndash;<div class=\"col-xl-4 col-lg-3 col-md-2 col-sm-1\"></div>&ndash;&gt;\r\n\r\n\r\n  </div>\r\n</div>-->\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <section class=\"login-block\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 login-sec\">\r\n\r\n            <div *ngIf=\"isLoading\" style=\"    text-align: center;\r\n                                                margin-top: 70px;\r\n                                                margin-bottom: 30px;\">\r\n\r\n              <img src=\"/assets/images/loading.gif\" alt=\"\" style=\"height: 50px;margin-top: 20px; margin-bottom: 20px;\">\r\n              <br>\r\n              <label for=\"\">Pleas wait!</label>\r\n            </div>\r\n\r\n            <div *ngIf=\"!isLoading\">\r\n              <div class=\"card\"  [ngSwitch]=step @slide >\r\n\r\n                <div class=\"trp-form-div card-body\" #formDiv>\r\n\r\n                  <h2 class=\"\">Plan a journey</h2>   <!--trp-title card-title-->\r\n                  <div class=\"row trp-form-bar\">\r\n                    <div class=\"col-md-4 col-sm-3 col-4 trp-align-center {{isActive(1)}}\" >\r\n                      <fa name=\"location-arrow\" inverse=\"true\" size=\"1x\" > </fa>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-3 col-4 trp-align-center {{isActive(2)}}\" >\r\n                      <fa name=\"calendar\" inverse=\"true\" size=\"1x\" > </fa>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-3 col-4 trp-align-center {{isActive(3)}}\">\r\n                      <fa name=\"info-circle\" inverse=\"true\" size=\"1x\" > </fa>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"alert alert-danger\" role=\"alert\" style=\"margin-top: 8px\" [hidden]=\"!formD.isError\">\r\n                    <strong>Error! </strong> {{formD.errMsg.toString()}}\r\n                  </div>\r\n                  <div id=\"step1\"  *ngSwitchCase=\"1\"  >\r\n\r\n                    <div class=\"\">\r\n                      <label for=\"pickupPoint\">Pickup Point</label>\r\n                      <input type=\"text\"  autocomplete=\"off\" placeholder=\"search for pickup location\" autocapitalize=\"off\" id=\"pickupPoint\" name=\"pickupPoint\" class=\"trp-min-input\" #search required>\r\n                    </div>\r\n\r\n                    <div class=\"\">\r\n                      <label for=\"dropPoint\">Drop Point</label>\r\n                      <input type=\"text\"  autocomplete=\"off\" placeholder=\"search for drop location\" autocapitalize=\"off\" id=\"dropPoint\" name=\"dropPoint\" class=\"trp-min-input\" #search2 required>\r\n                    </div>\r\n                    <div class=\"  \">\r\n\r\n                      <label for=\"form-numOfPassanger\">Number of Passangers</label>\r\n                      <input class=\"trp-min-input \" type=\"number\" [(ngModel)]=\"formData.num_passangers\" id=\"form-numOfPassanger\" name=\"numOfPassangers\" required>\r\n                    </div>\r\n\r\n\r\n\r\n                    <div style=\"text-align: center; padding:0 10px 0 10px \">\r\n                      <Button type=\"button\"\r\n                              [disabled]=\"!arrival.pickPointAddress || !departure.pickPointAddress || !formData.num_passangers\"\r\n                              class=\"trp-btn\"\r\n                              [class.btn-disabled]=\"!arrival.pickPointAddress || !departure.pickPointAddress || !formData.num_passangers\"\r\n                              (click)=\"nextStep(2)\"\r\n                              style=\"margin-top: 20px;\"\r\n                      >\r\n                        Next <fa name=\"arrow-right\" inverse=\"true\"> </fa>\r\n                      </Button>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n\r\n                  <div id=\"step2\" *ngSwitchCase=\"2\" >\r\n\r\n                    <div class=\"input-wrapper\">\r\n                      <label>Time to pick you up :</label>\r\n                      <input [(ngModel)]=\"departure.pickupTime\"\r\n                             [owlDateTimeTrigger]=\"dtPicker1\"\r\n                             [owlDateTime]=\"dtPicker1\"\r\n                             class=\"trp-min-input\"\r\n                             [min]=\"today\"\r\n                      >\r\n                      <owl-date-time\r\n                        #dtPicker1></owl-date-time>\r\n                    </div>\r\n\r\n                    <div class=\"  \">\r\n                      <label>End date & time:</label>\r\n                      <input [(ngModel)]=\"arrival.dropTime\"\r\n                             [owlDateTimeTrigger]=\"dtPicker2\"\r\n                             [owlDateTime]=\"dtPicker2\"\r\n                             class=\"trp-min-input\"\r\n                             [min]=\"departure.pickupTime\"\r\n                      >\r\n                      <owl-date-time\r\n                        #dtPicker2\r\n                      ></owl-date-time>\r\n\r\n                    </div>\r\n\r\n\r\n                    <div style=\"text-align: center; padding:0 10px 0 10px \">\r\n\r\n                      <Button type=\"button\"\r\n                              class=\"trp-btn\"\r\n                              [disabled]=\"!departure.pickupTime || !arrival.dropTime\"\r\n                              [class.btn-disabled]=\"!departure.pickupTime || !arrival.dropTime\"\r\n                              (click)=\"nextStep(3)\"\r\n                              style=\"margin-top: 20px;\"\r\n                      >\r\n                        Next <fa name=\"arrow-right\" inverse=\"true\"> </fa>\r\n                      </Button>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div id=\"step3\"  *ngSwitchCase=\"3\" >\r\n                    <div class=\"\" style=\"display: inline\">\r\n                      <label label=\"name\" for=\"form-name\">Name</label>\r\n                      <input type=\"text\" class=\" trp-min-input \" [(ngModel)]=\"formData.lecturer\" id=\"form-name\" name=\"name\">\r\n\r\n                    </div>\r\n                    <br>\r\n\r\n                    <div class=\"example-wrapper\">\r\n                      <label for=\"\">Department/Unit</label>\r\n\r\n                      <kendo-autocomplete\r\n                        [data]=\"data\"\r\n                        [filterable]=\"true\"\r\n                        (filterChange)=\"handleFilter($event)\"\r\n                        class=\"trp-select trp-min-input trp-autocomplete\"\r\n                        [(value)]=\"formData.dep_unit\"\r\n                      >\r\n                      </kendo-autocomplete>\r\n                    </div>\r\n                    <div class=\"  \">\r\n                      <label for=\"form-email\">Email</label>\r\n                      <input class=\" trp-min-input \" type=\"email\" [(ngModel)]=\"formData.email\" id=\"form-email\" name=\"email\">\r\n                    </div>\r\n\r\n                    <div class=\"  \">\r\n                      <label for=\"form-password\">Password</label>\r\n                      <input class=\" trp-min-input \" type=\"password\" minlength=\"11\" [(ngModel)]=\"formData.password\" id=\"form-password\" name=\"password\">\r\n                    </div>\r\n\r\n                    <div class=\"  \">\r\n                      <label for=\"form-password-re\">Retype Password</label>\r\n                      <input class=\" trp-min-input \" id=\"form-password-re\" type=\"password\" [(ngModel)]=\"rePassword\" name=\"password\">\r\n                    </div>\r\n                    <div style=\"text-align: center; padding:0 10px 0 10px \">\r\n                      <Button type=\"button\" class=\"trp-btn\" (click)=\"nextStep(2)\" style=\"margin-top: 20px;\"><fa name=\"arrow-left\" inverse=\"true\"> </fa> Back</Button>\r\n                      <Button\r\n                        type=\"button\"\r\n                        class=\"trp-btn\"\r\n                        (click)=\"validateForm()\"\r\n                        style=\"margin-top: 20px;\"\r\n\r\n                      >Request <fa name=\"arrow-right\" inverse=\"true\"> </fa></Button>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!--<div class=\"copy-text\">Created with <i class=\"fa fa-heart\"></i> by <a href=\"http://grafreez.com\">Grafreez.com</a></div>-->\r\n          </div>\r\n          <div class=\"col-md-8 banner-sec\">\r\n            <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n              <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n              </ol>\r\n              <div class=\"carousel-inner\" role=\"listbox\">\r\n                <div class=\"carousel-item active\">\r\n                  <img class=\"d-block img-fluid\" src=\"https://static.pexels.com/photos/33972/pexels-photo.jpg\" alt=\"First slide\">\r\n                  <div class=\"carousel-caption d-none d-md-block\">\r\n                    <div class=\"banner-text\">\r\n                      <h2>This is Heaven</h2>\r\n                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                  <img class=\"d-block img-fluid\" src=\"https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg\" alt=\"First slide\">\r\n                  <div class=\"carousel-caption d-none d-md-block\">\r\n                    <div class=\"banner-text\">\r\n                      <h2>This is Heaven</h2>\r\n                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                  <img class=\"d-block img-fluid\" src=\"https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg\" alt=\"First slide\">\r\n                  <div class=\"carousel-caption d-none d-md-block\">\r\n                    <div class=\"banner-text\">\r\n                      <h2>This is Heaven</h2>\r\n                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function RequestFormComponent(mapsAPILoader, ngZone, requestService, router) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.requestService = requestService;
        this.router = router;
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
        this.today = new Date();
        this.formData = new __WEBPACK_IMPORTED_MODULE_1__classes_request__["a" /* Request */]();
        this.arrival = new __WEBPACK_IMPORTED_MODULE_1__classes_request__["b" /* Trip */]();
        this.departure = new __WEBPACK_IMPORTED_MODULE_1__classes_request__["b" /* Trip */]();
        this.rePassword = '';
        this.formD = {
            isError: false,
            errMsg: 'no Error'
        };
        this.isLoading = false;
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
    RequestFormComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    RequestFormComponent.prototype.validateForm = function () {
        // checking the fields are empty
        if (!this.formData.lecturer || !this.formData.dep_unit || !this.formData.email || !this.formData.password) {
            this.formD.isError = true;
            this.formD.errMsg = 'Please fill all requird fields';
            alert(this.formD.errMsg);
        }
        else {
            // validate the email
            // console.log(this.validateEmail(this.formData.email));
            if (this.validateEmail(this.formData.email)) {
                // check whether the password is matchin
                if (this.formData.password === this.rePassword) {
                    // check the size of the password in healthy
                    if (this.formData.password.length < 5) {
                        this.formD.isError = true;
                        this.formD.errMsg = 'Password is too short';
                        // alert('password is too short');
                        this.formData.password = '';
                        this.rePassword = '';
                    }
                    else {
                        this.formSubmit();
                    }
                }
                else {
                    this.formData.password = '';
                    this.rePassword = '';
                    this.formD.isError = true;
                    this.formD.errMsg = 'Passwords are not matching';
                    // alert('password not matched');
                }
            }
            else {
                this.formD.isError = true;
                this.formD.errMsg = 'Please enter valid email address';
                // alert('Please enter valid email');
                this.formData.email = '';
            }
        }
    };
    RequestFormComponent.prototype.formSubmit = function () {
        var _this = this;
        this.isLoading = true;
        var arrival_temp = new Date(this.arrival.dropTime);
        var arrival_hour = arrival_temp.getHours();
        if (arrival_hour < 10) {
            arrival_hour = '0' + arrival_hour;
        }
        var arrival_minute = arrival_temp.getMinutes();
        if (arrival_minute < 10) {
            arrival_minute = '0' + arrival_minute;
        }
        this.arrival.dropTime = arrival_hour + ":" + arrival_minute;
        this.arrival.dropDate = arrival_temp.getFullYear() + "-" + (arrival_temp.getMonth() + 1) + "-" + arrival_temp.getDate();
        var departure_temp = new Date(this.departure.pickupTime);
        var departure_hour = departure_temp.getHours();
        if (departure_hour < 10) {
            departure_hour = '0' + departure_hour;
        }
        var departure_minute = departure_temp.getMinutes();
        if (departure_minute < 10) {
            departure_minute = '0' + departure_minute;
        }
        this.departure.pickupTime = departure_hour + ":" + departure_minute;
        this.departure.pickupDate = departure_temp.getFullYear() + "-" + (departure_temp.getMonth() + 1) + "-" + departure_temp.getDate();
        /*this.formData.jdatetime = `${this.intl.formatDate(this.dateTime, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.jstartTime, 't')}` ;*/
        /*this.formData.end_date_time = `${this.intl.formatDate(this.enddate, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.endtime, 't')}` ;*/
        // const x = <Request> this.formData;
        // this.formData.refNo =
        this.formData.status = '0';
        this.formData.arrival = this.arrival;
        this.formData.departure = this.departure;
        this.formData.isPermited = false;
        // console.log(this.formData);
        // add data to the database
        this.requestService.addRequest(this.formData)
            .subscribe(function (response) {
            if (!response['success']) {
                alert('Error occured');
            }
            else {
                alert('Requested!');
                _this.router.navigate(['']);
            }
        });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RequestFormComponent.prototype, "searchElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RequestFormComponent.prototype, "searchElement2", void 0);
    RequestFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-request-form',
            template: __webpack_require__("../../../../../src/app/components/main/request/request-form/request-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/request/request-form/request-form.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_3__animations__["a" /* slide */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_4__services_request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
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
        //let x = 2;
    };
    RequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<div *ngIf=\"isPermited\">\r\n  <div *ngIf=\"request\" class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\" >\r\n          <div class=\"col-lg-6\" id=\"map_section\">\r\n            <div\r\n              [ngClass]=\"{\r\n              'alert-danger': request.status == 3,\r\n              'alert-primary': request.status == 2,\r\n              'alert-success' : request.status == 1,\r\n              'alert-warning': request.status == 0\r\n            }\"\r\n              class=\"alert \" role=\"alert\">\r\n              <div *ngIf=\"request.status == 0\">\r\n                <i class=\"fa fa-info\"></i>\r\n                Request is not being reviewed\r\n              </div>\r\n\r\n              <div *ngIf=\"request.status == 1\">\r\n                <i class=\"fa fa-info\"></i>\r\n                Request is Accepted. please supply futher information in more info section to proceed further\r\n              </div>\r\n\r\n              <div *ngIf=\"request.status == 2\">\r\n                <i class=\"fa fa-info\"></i>  Request is confirmed  <button class=\"btn btn-primary\">Download Application</button> and\r\n                <b> Handover to Transport Division </b>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-lg-6\" id=\"details_section\">\r\n            <!--        collapse div section stating   -->\r\n\r\n            <div id=\"accordion\">\r\n              <div class=\"card\">\r\n                <div\r\n                  class=\"card-header bg-dark text-white\" id=\"headingOne\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n\r\n                  [attr.aria-expanded]=\"request.status != 1\"\r\n                  aria-controls=\"collapseOne\">\r\n                  <h6 class=\"mb-0\">\r\n                    <i class=\"fa fa-map\"></i>\r\n                    Trip Section\r\n                  </h6>\r\n                </div>\r\n\r\n                <div id=\"collapseOne\" class=\"collapse\"\r\n                     [class.show]=\"request.status != 1\"\r\n                     aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n                  <div class=\"card-body\">\r\n                    <div>\r\n                      <h6>Departure</h6>\r\n                      <table class=\"table table-sm\">\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            Date\r\n                          </th>\r\n                          <td>\r\n                            {{request.departure.pickupTime}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            Time\r\n                          </th>\r\n                          <td>\r\n                            2017/12/8\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            From\r\n                          </th>\r\n                          <td>\r\n                            {{request.departure.pickupPoint}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            To\r\n                          </th>\r\n                          <td>\r\n                            {{request.departure.dropPoint}}\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </div>\r\n\r\n                    <div>\r\n                      <h6>Arrival</h6>\r\n                      <table class=\"table table-sm\">\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            Date\r\n                          </th>\r\n                          <td>\r\n                            {{request.arrival.dropTime}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            Time\r\n                          </th>\r\n                          <td>\r\n                            2017/12/8\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            From\r\n                          </th>\r\n                          <td>\r\n                            {{request.arrival.dropPoint}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            To\r\n                          </th>\r\n                          <td>\r\n                            {{request.arrival.pickupPoint}}\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"card\">\r\n                <div\r\n                  [ngClass]=\"{'bg-danger':!request.vehicle, 'bg-success': request.vehicle}\"\r\n                  class=\"card-header text-white\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                  <h6 class=\"mb-0\">\r\n                    <i class=\"fa fa-car\"></i>\r\n                    Vehicle Section\r\n                  </h6>\r\n                </div>\r\n\r\n                <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n                  <div\r\n                    [ngClass]=\"{'text-danger': !vehicle, 'text-success' : vehicle}\"\r\n                    class=\"card-body\">\r\n                    <div *ngIf=\"request.vehicle\">\r\n                      Vehicle no: {{request.vehicle.vehicle_no}}\r\n                    </div>\r\n                    <div *ngIf=\"!request.vehicle\">\r\n                      <p class=\"card-text\">\r\n                        Vehicle is not assigned yet\r\n                      </p>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"card\">\r\n                <div\r\n                  [ngClass]=\"{\r\n                      'bg-danger':!request.driver, 'bg-success': request.driver}\"\r\n                  class=\"card-header text-white\" id=\"headingThree\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                  <h6 class=\"mb-0\">\r\n                    <i class=\"fa fa-car\"></i>\r\n                    Driver Section\r\n                  </h6>\r\n                </div>\r\n\r\n                <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n                  <div\r\n                    [ngClass]=\"{'text-danger':!request.driver, 'text-success' : request.driver}\"\r\n                    class=\"card-body\">\r\n                    <div *ngIf=\"request.driver\">\r\n                      Driver name: {{request.driver.name}}\r\n                    </div>\r\n                    <div *ngIf=\"!test\">\r\n                      <p class=\"card-text\">\r\n                        Driver is not set\r\n                      </p>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"card\">\r\n                <div\r\n                  class=\"bg-primary card-header text-white\" id=\"headingFour\" data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\r\n                  <h6 class=\"mb-0\">\r\n                    <i class=\"fa fa-info\"></i>\r\n                    Details Section\r\n                  </h6>\r\n                </div>\r\n\r\n                <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordion\">\r\n                  <div class=\"card-body\">\r\n\r\n                    <div class=\"container-fluid\">\r\n                      <table class=\"table table-sm\">\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Refferance No\r\n                          </th>\r\n                          <td>\r\n                            TRD-uok-{{request.refNo}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Lecturer\r\n                          </th>\r\n                          <td>\r\n                            {{request.lecturer}}\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Designation\r\n                          </th>\r\n                          <td>\r\n                            {{request.position}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Department/ Unit\r\n                          </th>\r\n                          <td>\r\n                            {{request.dep_unit}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Purpose\r\n                          </th>\r\n                          <td>\r\n                            {{request.purpose}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Funding method\r\n                          </th>\r\n                          <td>\r\n                            {{request.fundingWay}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Email\r\n                          </th>\r\n                          <td>\r\n                            {{request.email}}\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Password\r\n                          </th>\r\n                          <td>\r\n                            {{request.password}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Number of Passangers\r\n                          </th>\r\n                          <td>\r\n                            {{request.num_passangers}}\r\n                          </td>\r\n                        </tr>\r\n\r\n\r\n\r\n\r\n                      </table>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card\" id=\"more_info_form\" *ngIf=\"request.status == 1 \">\r\n                <div class=\"card-header bg-secondary text-white\" id=\"headingFive\" data-toggle=\"collapse\" data-target=\"#collapseFive\"\r\n                     [attr.aria-expanded]=\"request.status == 1\"\r\n                     aria-controls=\"collapseFive\">\r\n                  <h6 class=\"md-0\">\r\n                    <i class=\"fa fa-info-circle\"></i>\r\n                    More Infomation\r\n                  </h6>\r\n\r\n                </div>\r\n                <div class=\"collapse\"\r\n                     [class.show]=\"request.status == 1\"\r\n                     id=\"collapseFive\" aria-labelledy=\"headingFive\" data-parent=\"#accordion\">\r\n                  <div class=\"card-body\">\r\n\r\n                    <form >\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"designation\">Designation</label>\r\n                        <div class=\"col-md-8\">\r\n                          <input [(ngModel)]=\"moreDetails.position\" id=\"designation\" name=\"designation\" type=\"text\" placeholder=\"ex:- Head of the Department \" class=\"form-control input-md\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"fundingMethod\">Funding method</label>\r\n                        <div class=\"col-md-8\">\r\n                          <input id=\"fundingMethod\" [(ngModel)]=\"moreDetails.fundingWay\" name=\"fundingMethod\" type=\"text\" placeholder=\"ex:- From student welfare fund\" class=\"form-control input-md\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"purpose\">Purpose</label>\r\n                        <div class=\"col-md-8\">\r\n                          <input id=\"purpose\" [(ngModel)]=\"moreDetails.purpose\" name=\"purpose\" type=\"text\" placeholder=\"ex:- field visit\" class=\"form-control input-md\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"\"></label>\r\n                        <div class=\"col-md-4\">\r\n                          <button id=\"\" name=\"\" class=\"btn btn-primary\" (click)=\"updateRequest()\">Submit</button>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!isPermited\">\r\n  you are not authorized to view this\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/request/view-status/view-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_request__ = __webpack_require__("../../../../../src/app/classes/request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    function ViewStatusComponent(requestService, route, authService) {
        var _this = this;
        this.requestService = requestService;
        this.route = route;
        this.authService = authService;
        this.request = {};
        this.isPermited = false;
        this.moreDetails = new __WEBPACK_IMPORTED_MODULE_3__classes_request__["a" /* Request */]();
        this.route.paramMap
            .subscribe(function (params) {
            console.log(+params.get('refNo'));
            requestService.getOneRequest(+params.get('refNo'))
                .subscribe(function (response) {
                if (+params.get('refNo') === _this.authService.get_refNo()) {
                    _this.request = response['msg'][0];
                }
                _this.isPermited = _this.authService.isLoggedInWithRefno(+params.get('refNo'));
                // console.log(this.request['status']);
            });
        });
    }
    ViewStatusComponent.prototype.ngOnInit = function () {
        // this.requests = this.requestService.getALLRequests();
        console.log(this.request);
        this.requestService.addRequest(this.request);
        // this.requests.push(this.request);
    };
    /*
     update more details about request
     */
    ViewStatusComponent.prototype.updateRequest = function () {
        var _this = this;
        this.moreDetails.refNo = this.request.refNo;
        this.moreDetails.status = '2';
        // console.log('updateRequest');
        // console.log(this.moreDetails);
        this.requestService.add_more_details(this.moreDetails)
            .subscribe(function (response) {
            if (response['success'] && response['msg']['nModified'] === 1) {
                alert('Your details updated successfully');
                alert('please, print the application form and send it to Transport devision');
                _this.request.position = _this.moreDetails.position;
                _this.request.fundingWay = _this.moreDetails.fundingWay;
                _this.request.purpose = _this.moreDetails.purpose;
                _this.request.status = _this.moreDetails.status;
            }
            else {
                alert('error occured');
            }
            // console.log('rsponst is');
            // console.log(response);
        });
    };
    ViewStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-status',
            template: __webpack_require__("../../../../../src/app/components/main/request/view-status/view-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/request/view-status/view-status.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], ViewStatusComponent);
    return ViewStatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n@media (max-width: 792px) {\r\n  .trd-nav-link {\r\n    padding-bottom: 10px;\r\n    padding-top: 8px;\r\n    color: white;\r\n    !* padding-top: 10px; *!\r\n    !* margin-top: 10px; *!\r\n    background-color: black;\r\n  }\r\n}\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div class=\"header\" style=\"background-color: black\">\r\n  <div class=\"top-header\">\r\n    <div class=\"\" style=\"padding-right: 2vh; padding-left: 2vh\">\r\n\r\n      <nav class=\"navbar navbar-expand-lg navbar-dark bg-faded\">\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          <img src=\"../../assets/images/logo/Kelaniya.png\" alt=\"\" class=\"nav-logo\">\r\n        </a>\r\n\r\n\r\n        <button class=\"navbar-toggler \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse  \"  id=\"navbarNavAltMarkup\">\r\n          <div class=\"navbar-nav ml-auto active\">\r\n            <a class=\"nav-item nav-link-edit\" [routerLink]=\"['']\">Home <span class=\"sr-only\">(current)</span></a>\r\n            <a class=\"nav-item nav-link-edit\" href=\"#\">Features</a>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n-->\r\n\r\n\r\n<div style=\"background-color: black\">\r\n  <div id=\"app\" class=\"\" >\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-faded\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['']\">\r\n        <img src=\"../../assets/images/logo/Kelaniya.png\" class=\"nav-logo\" alt=\"\">\r\n      </a>\r\n      <button style=\"background-color: #ffcc00\"\r\n        class=\"navbar-toggler\" type=\"button\"\r\n        data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <!-- <div id=\"navbarNavDropdown\" class=\"navbar-collapse collapse\">\r\n         <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n         </ul>\r\n     <ul class=\"navbar-nav\">\r\n           <li class=\"nav-item dropdown\">\r\n             <a class=\"nav-item trd-nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n               Dropdown\r\n             </a>\r\n             <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n               <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n               <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n             </div>\r\n           </li>\r\n           <li class=\"nav-item\">\r\n             <a class=\"nav-item trd-nav-link trd-nav-link-coner\" href=\"#\">Login</a>\r\n           </li>\r\n\r\n         </ul>\r\n\r\n\r\n      </div>-->\r\n  <div class=\"collapse navbar-collapse  \"  id=\"navbarNavDropdown\">\r\n  <div class=\"navbar-nav ml-auto active\">\r\n    <a class=\"nav-item trd-nav-link trd-nav\" [routerLink]=\"['']\">Home <span class=\"sr-only\">(current)</span></a>\r\n    <a class=\"nav-item trd-nav-link trd-nav item-gold\" [routerLink]=\"['login']\" >Admin Login</a>\r\n\r\n\r\n  </div>\r\n</div>\r\n    </nav>\r\n  </div>\r\n</div>\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
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


var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.url = 'https://uok-transport-division.herokuapp.com/admin';
        this.token = 'Bearer ' + localStorage.getItem('token');
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.headers.set('authorization', this.token);
    }
    AdminService.prototype.adminLogin = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return this.http.post("https://uok-transport-division.herokuapp.com/login", user);
    };
    AdminService.prototype.adminLogOut = function () {
    };
    // return list of drivers (just names)
    AdminService.prototype.getDrivers = function () {
        //let headers = new HttpHeaders();
        //let token = 'Bearer ' + localStorage.getItem('token');
        //this.headers.append('Authentication', token);
        return this.http.get('https://uok-transport-division.herokuapp.com/admin/driver', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    // return one driver
    AdminService.prototype.getDriver = function (_id) {
        return this.http.get("https://uok-transport-division.herokuapp.com/admin/driver/get?_id=" + _id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    AdminService.prototype.getAllDriversDetails = function () {
        return this.http.get('https://uok-transport-division.herokuapp.com/admin/get_all_driver_details', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    AdminService.prototype.getVehicle_to_req = function () {
        return this.http.get('https://uok-transport-division.herokuapp.com/admin/vehicle/admin_to_request', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    AdminService.prototype.setDriver = function (refNo, _id) {
        // console.log(refNo + name);
        return this.http.post('https://uok-transport-division.herokuapp.com/admin/driver/set_driver', { refNo: refNo, _id: _id }, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    AdminService.prototype.set_vehicle = function (refNo, _id) {
        return this.http.get("https://uok-transport-division.herokuapp.com/admin/vehicle/set_vehicle/?refNo=" + refNo + "&_id=" + _id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    AdminService.prototype.get_request_list = function (status) {
        return this.http.get("https://uok-transport-division.herokuapp.com/admin/get_request_list/?status=" + status, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    AdminService.prototype.getRequestList = function (vehicle_no) {
        return this.http.get("https://uok-transport-division.herokuapp.com/admin/get_request_on_vehicle?vehicle_no=" + vehicle_no, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    // get list of request of a driver on a current day
    AdminService.prototype.getRequestOfDriverOnDay = function (_id) {
        return this.http.get(this.url + "/get_driver_request_on_day?_id=" + _id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    /*
    * get list of reqeust of a driver for a given month
    * */
    AdminService.prototype.getRequestOfDriverOnMonth = function (_id) {
        var date = new Date();
        var real_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-1";
        console.log(date);
        return this.http.get(this.url + "/get_driver_request_on_month?_id=" + _id + "&month_f_d=" + real_date, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    /// add a new driver
    AdminService.prototype.addDriver = function (driver) {
        return this.http.post(this.url + "/driver", driver, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    /// get list of drivers
    AdminService.prototype.getListOfVehicles = function () {
        return this.http.get(this.url + "/get_vehicle_list", {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    // add vehicle
    AdminService.prototype.addVehicle = function (vehicle) {
        // console.log(vehicle);
        return this.http.post(this.url + "/addVehicle", vehicle, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    // get list of requests
    AdminService.prototype.getRequestListOnDay = function (date) {
        return this.http.get(this.url + "/get_request_has_vehicle?date=" + date, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    // get details of a vehicle by vehicle number
    AdminService.prototype.getVehicle = function (vehicle_no) {
        return this.http.get(this.url + "/getVehicle?vehicle_no=" + vehicle_no, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        });
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.authservice.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (body) {
        // console.log(body);
        return this.http.post('https://uok-transport-division.herokuapp.com/requests/getStatus', body);
    };
    AuthService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('token') === null) {
            //alert('not logged in');
            return false;
        }
        else {
            var jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
            var token = localStorage.getItem('token');
            var token_decoded = jwtHelper.decodeToken(token);
            if (token_decoded) {
                console.log('true');
                return true;
            }
            return false;
        }
    };
    AuthService.prototype.isLoggedInWithRefno = function (refNo) {
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        var token = localStorage.getItem('token');
        var token_decoded = jwtHelper.decodeToken(token);
        if (token_decoded && token_decoded['refNo'] === refNo) {
            // console.log('true');
            return true;
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.get_status = function () {
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        var token = localStorage.getItem('token');
        var token_decoded = jwtHelper.decodeToken(token);
        return token_decoded['status'];
    };
    AuthService.prototype.get_refNo = function () {
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        var token = localStorage.getItem('token');
        var token_decoded = jwtHelper.decodeToken(token);
        return token_decoded['refNo'];
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
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
        this.http.get('https://uok-transport-division.herokuapp.com/vehicles/all_vehicles')
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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


var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
    }
    RequestService.prototype.getOneRequest = function (refNo) {
        return this.http.get("https://uok-transport-division.herokuapp.com/requests/get/" + refNo);
    };
    RequestService.prototype.getOneReq_for_user = function (refNo, password) {
        return this.http.get("https://uok-transport-division.herokuapp.com/requests/get_for_user/" + refNo + "/" + password);
    };
    RequestService.prototype.addRequest = function (request) {
        // this.requests.push(request);
        return this.http.post('https://uok-transport-division.herokuapp.com/requests/add', request);
    };
    RequestService.prototype.get_not_considered_requests = function () {
        return this.http.get('https://uok-transport-division.herokuapp.com/requests/get_not_considered_requests');
    };
    RequestService.prototype.change_status = function (refNo, status) {
        return this.http.get('https://uok-transport-division.herokuapp.com/requests/status/' + refNo + '/' + status);
    };
    RequestService.prototype.add_more_details = function (request) {
        return this.http.post('https://uok-transport-division.herokuapp.com/requests/more_details', request);
    };
    RequestService.prototype.get_active_req = function () {
        return this.http.get('https://uok-transport-division.herokuapp.com/requests/active_requests');
    };
    RequestService.prototype.get_status = function (refNo, password) {
        // console.log(refNo, password);
        return this.http.get('https://uok-transport-division.herokuapp.com/requests/getStatus/' + refNo + '/' + password);
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "../../../../../src/app/services/vehicle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleService; });
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


var VehicleService = /** @class */ (function () {
    function VehicleService(http) {
        this.http = http;
    }
    // return vehicle list for notice board
    VehicleService.prototype.get_vehicle_list = function () {
        return this.http.get('https://uok-transport-division.herokuapp.com/vehicles/all_vehicles');
    };
    // return vehicle list for admin request view
    VehicleService.prototype.get_vehicle_list_admin = function () {
        return this.http.get('https://uok-transport-division.herokuapp.com/vehicles');
    };
    VehicleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VehicleService);
    return VehicleService;
}());



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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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