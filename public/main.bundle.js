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

var slide = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('slide', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateX(-10px)' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(500)
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(500, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'transformX(-100%)' }))
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_main_admin_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/main/admin/dashboard/dashboard.component.ts");
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
        path: 'admin/dashboard',
        component: __WEBPACK_IMPORTED_MODULE_18__components_main_admin_dashboard_dashboard_component__["a" /* DashboardComponent */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ngx_qrcode2__ = __webpack_require__("../../../../ngx-qrcode2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_amazing_time_picker__ = __webpack_require__("../../../../amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_main_admin_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/main/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_primeng_fullcalendar__ = __webpack_require__("../../../../primeng/fullcalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_primeng_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_55_primeng_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_main_admin_dashboard_reqeust_preveiw_reqeust_preveiw_component__ = __webpack_require__("../../../../../src/app/components/main/admin/dashboard/reqeust-preveiw/reqeust-preveiw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_main_admin_dashboard_add_driver_add_driver_component__ = __webpack_require__("../../../../../src/app/components/main/admin/dashboard/add-driver/add-driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_main_admin_dashboard_sheduler_sheduler_component__ = __webpack_require__("../../../../../src/app/components/main/admin/dashboard/sheduler/sheduler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_main_admin_dashboard_add_vehicle_to_req_add_vehicle_to_req_component__ = __webpack_require__("../../../../../src/app/components/main/admin/dashboard/add-vehicle-to-req/add-vehicle-to-req.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_main_admin_dashboard_requests_table_requests_table_component__ = __webpack_require__("../../../../../src/app/components/main/admin/dashboard/requests-table/requests-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_main_admin_drivers_driver_list_driver_list_component__ = __webpack_require__("../../../../../src/app/components/main/admin/drivers/driver-list/driver-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_main_admin_vehicle_vehicle_list_vehicle_list_component__ = __webpack_require__("../../../../../src/app/components/main/admin/vehicle/vehicle-list/vehicle-list.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_39__components_main_admin_admin_home_admin_home_component__["a" /* AdminHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_main_admin_admin_home_map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_main_admin_admin_home_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_main_admin_admin_home_vehicle_table_vehicle_table_component__["a" /* VehicleTableComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_main_driver_profile_driver_profile_component__["a" /* DriverProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_main_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_main_admin_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_56__components_main_admin_dashboard_reqeust_preveiw_reqeust_preveiw_component__["a" /* ReqeustPreveiwComponent */],
                __WEBPACK_IMPORTED_MODULE_57__components_main_admin_dashboard_add_driver_add_driver_component__["a" /* AddDriverComponent */],
                __WEBPACK_IMPORTED_MODULE_58__components_main_admin_dashboard_sheduler_sheduler_component__["a" /* ShedulerComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_main_admin_vehicle_add_vehicle_add_vehicle_component__["a" /* AddVehicleComponent */],
                __WEBPACK_IMPORTED_MODULE_59__components_main_admin_dashboard_add_vehicle_to_req_add_vehicle_to_req_component__["a" /* AddVehicleToReqComponent */],
                __WEBPACK_IMPORTED_MODULE_60__components_main_admin_dashboard_requests_table_requests_table_component__["a" /* RequestsTableComponent */],
                __WEBPACK_IMPORTED_MODULE_61__components_main_admin_drivers_driver_list_driver_list_component__["a" /* DriverListComponent */],
                __WEBPACK_IMPORTED_MODULE_62__components_main_admin_vehicle_vehicle_list_vehicle_list_component__["a" /* VehicleListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
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
                __WEBPACK_IMPORTED_MODULE_43__progress_kendo_angular_layout__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_47_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_52__material_module__["a" /* DemoMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_53__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_55_primeng_fullcalendar__["FullCalendarModule"],
                __WEBPACK_IMPORTED_MODULE_48_amazing_time_picker__["a" /* AmazingTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_50__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_50__angular_material__["I" /* MatTabsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__services_available_vehicle_service__["a" /* AvailableVehicleService */],
                __WEBPACK_IMPORTED_MODULE_23__services_request_service__["a" /* RequestService */],
                __WEBPACK_IMPORTED_MODULE_26__services_vehicle_service__["a" /* VehicleService */],
                __WEBPACK_IMPORTED_MODULE_29__services_admin_service__["a" /* AdminService */],
                __WEBPACK_IMPORTED_MODULE_32__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_46__services_auth_guard_service__["a" /* AuthGuardService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_56__components_main_admin_dashboard_reqeust_preveiw_reqeust_preveiw_component__["a" /* ReqeustPreveiwComponent */],
                __WEBPACK_IMPORTED_MODULE_57__components_main_admin_dashboard_add_driver_add_driver_component__["a" /* AddDriverComponent */],
                __WEBPACK_IMPORTED_MODULE_59__components_main_admin_dashboard_add_vehicle_to_req_add_vehicle_to_req_component__["a" /* AddVehicleToReqComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_54__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);


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
exports.push([module.i, ".context-dark, .bg-gray-dark, .bg-primary {\r\n  color: rgba(255, 255, 255, 255);\r\n}\r\n\r\n.footer-classic a, .footer-classic a:focus, .footer-classic a:active {\r\n  color: #ffffff;\r\n}\r\n\r\n.nav-list li {\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.nav-list li a:hover:before {\r\n  margin-left: 0;\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\nul, ol {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.social-inner {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  padding: 23px;\r\n  font: 900 13px/1 \"Lato\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.social-container .col {\r\n  border: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.nav-list li a:before {\r\n  content: \"\\F14F\";\r\n  font: 400 21px/1 \"Material Design Icons\";\r\n  color: #4d6de6;\r\n  display: inline-block;\r\n  vertical-align: baseline;\r\n  margin-left: -28px;\r\n  margin-right: 7px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  -webkit-transition: .22s ease;\r\n  transition: .22s ease;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"section footer-classic context-dark bg-image\" style=\"background: #000000; padding-top: 10px\">\r\n  <div class=\"container\">\r\n    <div class=\"row row-30\">\r\n      <div class=\"col-md-4 col-xl-5\">\r\n        <div class=\"pr-xl-4\"><a class=\"brand\" href=\"index.html\"><img class=\"brand-logo-light\" src=\"../../assets/images/logo/logo.png\" alt=\"\" width=\"100\" height=\"100\" srcset=\"../../assets/images/logo/logo.png 2x\"></a>\r\n          <h4>Transport Division</h4>\r\n          <h6>University of Kelaniya</h6>\r\n          <p>This is our first step to computerize our system. We value your feedback and suggestions</p>\r\n          <!-- Rights-->\r\n          <p class=\"rights\"><span>©  </span><span class=\"copyright-year\">2018</span><span> </span><span>SE</span><span>. </span><span>All Rights Reserved.</span></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <h5>Contacts</h5>\r\n        <dl class=\"contact-list\">\r\n          <dt>Address:</dt>\r\n          <dd>798 South Park Avenue, Jaipur, Raj</dd>\r\n        </dl>\r\n        <dl class=\"contact-list\">\r\n          <dt>email:</dt>\r\n          <dd><a href=\"mailto:#\">trp.uok@gmail.com</a></dd>\r\n        </dl>\r\n        <dl class=\"contact-list\">\r\n          <dt>phones:</dt>\r\n          <dd><a href=\"tel:#\">+91 713252338</a> <span>or</span> <a href=\"tel:#\">+91 9571195353</a>\r\n          </dd>\r\n        </dl>\r\n      </div>\r\n      <div class=\"col-md-4 col-xl-3\">\r\n        <h5>Links</h5>\r\n        <ul class=\"nav-list\">\r\n          <li><a href=\"#\">About</a></li>\r\n          <li><a href=\"#\">Contacts</a></li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</footer>\r\n"

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
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/admin-home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n\r\n\r\n\r\n  <div id=\"vehicleTable\" class=\"col-md-12\">\r\n\r\n    <app-vehicle-table></app-vehicle-table>\r\n\r\n  </div>\r\n\r\n\r\n  <!--<div class=\"col-md-10\">\r\n    <app-map></app-map>\r\n  </div>-->\r\n  <div class=\"col-md-2\">\r\n\r\n  </div>\r\n</div>\r\n\r\n  <app-search></app-search>\r\n <!-- <app-shedule></app-shedule>-->\r\n"

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

module.exports = "<div class=\"text-centre\">\r\n  <img src=\"/assets/images/sample_map.PNG\" alt=\"\" style=\"max-width: 95%;max-height: 60%;\">\r\n</div>\r\n\r\n"

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

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col-md-4\">\r\n\r\n    <div class=\"trp-check-date-div\">\r\n      <label class=\"trp-check-date\">Check date:</label>\r\n      <input [(ngModel)]=\"selectedDate\"\r\n             [owlDateTimeTrigger]=\"dtPicker1\"\r\n             [owlDateTime]=\"dtPicker1\"\r\n             class=\"trp-min-input\"\r\n      >\r\n      <fa name=\"calendar\" class=\"errspan\"></fa>\r\n      <owl-date-time\r\n        (afterPickerClosed)=\"picker()\"\r\n        [pickerType]=\"'calendar'\"\r\n        #dtPicker1></owl-date-time>\r\n\r\n      <!--<div class=\"card\">\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li class=\"list-group-item\" *ngFor=\"let vehicle of availableVehicles\">{{vehicle.type}}{{vehicle.left}}</li>\r\n        </ul>\r\n      </div>-->\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-md-4\">\r\n    <div class=\"trp-check-date-div\">\r\n      <label class=\"trp-check-date\">Search By refferance No:</label>\r\n      <input type=\"text\" #search_refNo class=\"trp-min-input\" placeholder=\"Search Refferance Number\" (keyup)=\"search(search_refNo.value)\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"searchResult\">\r\n    <!--{{searchResult | json}}-->\r\n    <div *ngIf=\"searchResult[0]\">\r\n      <app-shedule\r\n        [reqeustList]=\"searchResult\"\r\n      ></app-shedule>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

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
exports.push([module.i, ".vehicle_no_div {\r\n  color: white;\r\n  background-color: #c82333;\r\n  font-size: 2.3vh;\r\n  width: 100px;\r\n  text-align: center;\r\n  padding-top: 2.5vh;\r\n  padding-bottom: 2.5vh;\r\n  border: solid 1px #680000;\r\n  height: 150px;\r\n}\r\n\r\n.vehicle_job_div {\r\n  text-align: center;\r\n  /*color: black;\r\n  background-color: white;\r\n  font-size: 2.3vh;\r\n  width: 220px;\r\n\r\n  padding-top: 2.5vh;\r\n  padding-bottom: 2.5vh;\r\n  border: solid 1px black;\r\n  height: 150px;\r\n  overflow: hidden;*/\r\n}\r\n\r\n.vehicle_nav {\r\n  min-width: 100px;\r\n  height: 80px;\r\n  font-size: 3vh;\r\n  color: white;\r\n  background-color: #680000;\r\n  text-align: center;\r\n}\r\n\r\n.vehicle_nav:hover {\r\n  background-color: #c82333;\r\n  color: white;\r\n}\r\n\r\n.vehicle_nav.active {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n.vehicle_img {\r\n  width: 50px;\r\n}\r\n\r\n.vehicle_time {\r\n  font-size: 2vh;\r\n  font-weight: bold;\r\n  padding: 2px;\r\n  background-color: #ffbac0;\r\n  padding: 5px;\r\n}\r\n\r\n.vehicle_place{\r\n  text-align: left;\r\n  font-size: 2.3vh;\r\n  padding: 5px;\r\n}\r\n\r\n.vehicle_job_icon{\r\n  height: 15px;\r\n}\r\n\r\n.scroll-horizontal {\r\n  overflow: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n.mat-tab-label{\r\n  background-color: #680000 ;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/admin-home/vehicle-table/vehicle-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n<div class=\"container-fluid\">\r\n\r\n\r\n  <mat-tab-group>\r\n\r\n\r\n    <mat-tab *ngFor=\"let vehicle_type of vehicle_types let index=index\">\r\n      <ng-template mat-tab-label>\r\n        <img src=\"/assets/images/vehicle_nav/{{vehicle_type.type}}.png\" alt=\"\" class=\"vehicle_img\">\r\n        {{vehicle_type.type}}\r\n      </ng-template>\r\n\r\n\r\n      <div *ngFor=\"let vehicle of vehicleList\" class=\"row scroll-horizontal\" style=\"margin: 0\">\r\n\r\n        <ul *ngIf=\"vehicle['vehicle_type'] == vehicle_type.type\" class=\"collection with-header\" style=\"display: inherit;\">\r\n\r\n\r\n\r\n            <li class=\"collection-header\"><h4>{{vehicle.vehicle_no}}</h4></li>\r\n\r\n\r\n\r\n\r\n          <div *ngFor=\"let job of vehicleJobs[vehicle_type.type]\" >\r\n\r\n            <div *ngIf=\"job['vehicle']['vehicle_no'] == vehicle['vehicle_no']\" class=\"vehicle_job_div\">\r\n\r\n              <ul class=\"collection\">\r\n\r\n                <li class=\"collection-item avatar\">\r\n                  <i class=\"material-icons circle\"></i>\r\n\r\n                  <span class=\"title\">\r\n\r\n                    {{job['departure']['pickupTime']}} To\r\n                         {{job['departure']['dropTime']}} 12.30\r\n\r\n                  </span>\r\n                  <p>{{job['departure']['pickupPoint']}} <br>\r\n                    {{job['departure']['dropPoint']}} test\r\n                  </p>\r\n                  <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\"></i></a>\r\n                </li>\r\n\r\n              </ul>\r\n              <!--<div class=\"row\">\r\n                <div class=\"col s12 m6\">\r\n                  <div class=\"card \">\r\n                    <div class=\"card-content \">\r\n                    <span class=\"card-title\">\r\n\r\n                       <img src=\"/assets/images/vehicle_nav/clock.png\" alt=\"\" class=\"\">\r\n\r\n\r\n\r\n                    </span>\r\n                      <div class=\"\">\r\n                        <img src=\"/assets/images/vehicle_nav/start.png\" alt=\"\" class=\"\">\r\n                        {{job['departure']['pickupPoint']}}\r\n                      </div>\r\n\r\n                      <div class=\"\">\r\n                        <img src=\"/assets/images/vehicle_nav/finish.png\" alt=\"\" class=\"\">\r\n                        {{job['departure']['dropPoint']}} test\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-action\">\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>-->\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n      </ul>\r\n      </div>\r\n\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n\r\n\r\n\r\n  <div>\r\n\r\n<!--\r\n    <nav style=\"margin-left: -16px; padding-bottom: 5px\">\r\n      <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n        <a *ngFor=\"let vehicle_type of vehicle_types let index = index\"\r\n           class=\"nav-item nav-link vehicle_nav\"\r\n           [ngClass]=\"{active: index ==0}\"\r\n           id=\"nav-{{vehicle_type.type}}-tab\" data-toggle=\"tab\"\r\n           href=\"#nav-{{vehicle_type.type}}\" role=\"tab\"\r\n           attr.aria-controls=\"nav-{{vehicle_type.type}}\"\r\n           aria-selected=\"true\">\r\n          <img src=\"/assets/images/vehicle_nav/{{vehicle_type.type}}.png\" alt=\"\" class=\"vehicle_img\">\r\n          {{vehicle_type.type}}</a>\r\n      </div>\r\n    </nav>\r\n\r\n\r\n    <div class=\"tab-content\" id=\"nav-tabContent\">\r\n      <div  *ngFor=\"let vehicle_type of vehicle_types let index = index\"\r\n            class=\"tab-pane fade show\"\r\n            [ngClass]=\"{active: index ==0}\"\r\n            id=\"nav-{{vehicle_type.type}}\"\r\n            role=\"tabpanel\"\r\n            attr.aria-labelledby=\"nav-{{vehicle_type.type}}-tab\">\r\n\r\n       <div *ngFor=\"let vehicle of vehicleList\" class=\"row scroll-horizontal\">\r\n\r\n         <div *ngIf=\"vehicle['vehicle_type'] == vehicle_type.type\" style=\"display: inherit;\">\r\n\r\n           <div class=\"vehicle_no_div\">\r\n\r\n             {{vehicle.vehicle_no}}\r\n           </div>\r\n\r\n           <div *ngFor=\"let job of vehicleJobs[vehicle_type.type]\" >\r\n\r\n             <div *ngIf=\"job['vehicle']['vehicle_no'] == vehicle['vehicle_no']\" class=\"vehicle_job_div\">\r\n\r\n               <span class=\"vehicle_time\">\r\n\r\n                 <img src=\"/assets/images/vehicle_nav/clock.png\" alt=\"\" class=\"vehicle_job_icon\">\r\n\r\n                 {{job['departure']['pickupTime']}} To 12.30\r\n                 {{job['departure']['dropTime']}}\r\n               </span>\r\n\r\n               <div class=\"vehicle_place\">\r\n                 <img src=\"/assets/images/vehicle_nav/start.png\" alt=\"\" class=\"vehicle_job_icon\">\r\n                 {{job['departure']['pickupPoint']}}\r\n               </div>\r\n\r\n               <div class=\"vehicle_place\">\r\n                 <img src=\"/assets/images/vehicle_nav/finish.png\" alt=\"\" class=\"vehicle_job_icon\">\r\n                 {{job['departure']['dropPoint']}}\r\n               </div>\r\n\r\n             </div>\r\n\r\n           </div>\r\n         </div>\r\n\r\n\r\n       </div>\r\n\r\n      </div>\r\n\r\n    </div>-->\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n  <!--<div class=\"row\" *ngFor=\"let vehicle of vehicleList\">-->\r\n\r\n    <!--<div class=\"vehicle_no_div\">-->\r\n      <!--{{vehicle['vehicle_no']}}-->\r\n    <!--</div>-->\r\n\r\n    <!--<div *ngFor=\"let request of requestList\" class=\"col-md-2\">-->\r\n      <!--<div *ngIf=\"request['vehicle']['vehicle_no'] == vehicle['vehicle_no']\">-->\r\n        <!--<div>-->\r\n          <!--<span>-->\r\n            <!--{{request['departure']['pickupTime']}}-->\r\n          <!--</span>-->\r\n          <!--<span>-->\r\n            <!--{{request['departure']['dropTime']}}-->\r\n          <!--</span>-->\r\n        <!--</div>-->\r\n\r\n        <!--<div>-->\r\n          <!--<span>{{request['departure']['pickupPoint']}}</span> To-->\r\n          <!--<span>{{request['departure']['dropPoint']}}</span>-->\r\n        <!--</div>-->\r\n\r\n\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n  <!--</div>-->\r\n</div>\r\n"

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
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = yyyy + '-' + dd + '-' + mm;
        this.adminService.getRequestListOnDay(today)
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

module.exports = "\r\n<div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n  <div class=\"nav-side-menu\">\r\n    <div class=\"brand\">Admin Panel</div>\r\n    <i class=\"fa fa-bars fa-2x toggle-btn\" data-toggle=\"collapse\" data-target=\"#menu-content\"></i>\r\n\r\n    <div class=\"menu-list\">\r\n\r\n      <ul id=\"menu-content\" class=\"menu-content collapse out\">\r\n        <li>\r\n          <a href=\"/admin\">\r\n            <i class=\"fa fa-dashboard fa-lg\"></i> Dashboard\r\n          </a>\r\n        </li>\r\n\r\n        <li  data-toggle=\"collapse\" data-target=\"#products\" class=\"collapsed active\">\r\n          <i class=\"fa fa-bullhorn fa-lg\"></i> New Requests  ({{not_reviewed_requests.length}})<span class=\"arrow\"></span>\r\n        </li>\r\n        <ul class=\"sub-menu collapse\" id=\"products\">\r\n          <!--<li class=\"active\"><a href=\"#\">CSS3 Animation</a></li>-->\r\n          <li *ngFor=\"let n_r_req of not_reviewed_requests\"><a href=\"/admin/request/{{n_r_req['refNo']}}\">TRD/{{n_r_req['refNo']}}</a></li>\r\n\r\n        </ul>\r\n\r\n\r\n        <li data-toggle=\"collapse\" data-target=\"#accepted_reqs\" class=\"collapsed\">\r\n          <i class=\"fa fa-bell fa-lg\"></i> Accepted Requests  ({{accepted_requests.length}}) <span class=\"arrow\"></span>\r\n        </li>\r\n        <ul class=\"sub-menu collapse\" id=\"accepted_reqs\">\r\n          <a *ngFor=\"let accepted_req of accepted_requests\" href=\"/admin/request/{{accepted_req['refNo']}}\">\r\n            <li>TRD/{{accepted_req['refNo']}}</li>\r\n          </a>\r\n        </ul>\r\n\r\n\r\n        <li data-toggle=\"collapse\" data-target=\"#service\" class=\"collapsed\">\r\n          <i class=\"fa fa-bell fa-lg\"></i> Confirmed Requests  ({{confirmed_requests.length}})  <span class=\"arrow\"></span>\r\n        </li>\r\n        <ul class=\"sub-menu collapse\" id=\"service\">\r\n          <a *ngFor=\"let confirmed_req of confirmed_requests\" href=\"/admin/request/{{confirmed_req['refNo']}}\">\r\n            <li>TRD/{{confirmed_req['refNo']}}</li>\r\n          </a>\r\n        </ul>\r\n\r\n        <li data-toggle=\"collapse\" data-target=\"#Doc_comp\" class=\"collapsed\">\r\n          <i class=\"fa fa-thumbs-up fa-lg\"></i> Fully Detailed Requests  ({{detailed_requests.length}}) <span class=\"arrow\"></span>\r\n        </li>\r\n        <ul class=\"sub-menu collapse\" id=\"Doc_comp\">\r\n          <a *ngFor=\"let det_comp_req of detailed_requests\" href=\"/admin/request/{{det_comp_req['refNo']}}\">\r\n            <li>TRD/{{det_comp_req['refNo']}}</li>\r\n          </a>\r\n        </ul>\r\n\r\n        <li data-toggle=\"collapse\" data-target=\"#new\" class=\"collapsed\">\r\n          <i class=\"fa fa-car fa-lg\"></i> Vehicles <span class=\"arrow\"></span>\r\n        </li>\r\n        <ul class=\"sub-menu collapse\" id=\"new\">\r\n          <a *ngFor=\"let vehicle of vehicle_list\" href=\"/admin/vehicle/view/{{vehicle['vehicle_no']}}\">\r\n            <li >{{vehicle['vehicle_no']}}</li>\r\n          </a>\r\n          <a href=\"/admin/vehicle/add\">\r\n            <li>Add vehicle <i class=\"fa fa-add\"></i></li>\r\n          </a>\r\n\r\n\r\n        </ul>\r\n\r\n\r\n        <li data-toggle=\"collapse\" data-target=\"#newD\" class=\"collapsed\">\r\n            <i class=\"fa fa-user fa-lg\"></i> Drivers <span class=\"arrow\"></span>\r\n        </li>\r\n        <ul *ngIf=\"driverList\" class=\"sub-menu collapse\" id=\"newD\">\r\n          <a *ngFor=\"let driver of driverList\" href=\"/admin/drivers/profile/{{driver['_id']}}\">\r\n            <li>{{driver['name']}}</li>\r\n          </a>\r\n\r\n          <a href=\"/admin/drivers/add\">\r\n            <li>Add Driver</li>\r\n          </a>\r\n        </ul>\r\n\r\n        <li>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-users fa-lg\"></i> Users\r\n          </a>\r\n\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"\" (click)=\"logout()\">\r\n            <i class=\"fa fa-out fa-out\"></i> Logout\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n    <div class=\"col-md-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n"

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

/***/ "../../../../../src/app/components/main/admin/dashboard/add-driver/add-driver.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list_item :hover{\r\n  background: #680000;\r\n}\r\n.red {\r\n  background-color: #9a9a9a;;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/add-driver/add-driver.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-lg-7\">\r\n\r\n      <app-sheduler *ngIf=\"requests\" [requests]=\"requests\"></app-sheduler>\r\n\r\n      <app-sheduler *ngIf=\"!requests\" [requests]=\"[]\"></app-sheduler>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-lg-5\" *ngIf=\"drivers\">\r\n\r\n    <div style=\"overflow-y: scroll; height:55vh;\">\r\n      <mat-card style=\"cursor: pointer\" [ngClass]=\"{red: clickedItem === driver['_id']}\" (click)=\"selectDriver(driver)\"  *ngFor=\"let driver of drivers\" >\r\n\r\n          <img mat-card-sm-image src=\"../../../../../../assets/images/pattern/pattern.png\" style=\"display: inline\">\r\n          <mat-card-subtitle style=\"display:inline\">{{ driver['name'] }}</mat-card-subtitle>\r\n          <button mat-button (click)=\"setDriver(driver)\" style=\"background-color: #4CAF50;\">Add</button>\r\n\r\n\r\n\r\n      </mat-card>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/add-driver/add-driver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDriverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddDriverComponent = /** @class */ (function () {
    function AddDriverComponent(data, adminService, addDriverRef) {
        this.data = data;
        this.adminService = adminService;
        this.addDriverRef = addDriverRef;
        this.options = [];
        this.drivers = [];
    }
    AddDriverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refNo = this.data['refNo'];
        //console.log("data",this.data);
        this.adminService.getAllDriversDetails()
            .subscribe(function (drivers) {
            _this.drivers = drivers['msg'];
            //console.log(this.drivers);
        });
    };
    AddDriverComponent.prototype.selectDriver = function (driver) {
        var _this = this;
        //alert(driver['name']);
        this.clickedItem = driver['_id'];
        this.requests = undefined;
        this.adminService.getRequestsOnDriverForCalender(this.clickedItem)
            .then(function (events) {
            _this.requests = events;
        });
        this.options = {
            weekends: true,
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            }
        };
    };
    AddDriverComponent.prototype.setDriver = function (driver) {
        var _this = this;
        this.adminService.setDriver(this.refNo, driver['_id'])
            .subscribe(function (response) {
            console.log(response);
            if (response['success'] === true) {
                _this.addDriverRef.close({ 'status': true, 'driver': driver });
            }
        });
    };
    AddDriverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-driver',
            template: __webpack_require__("../../../../../src/app/components/main/admin/dashboard/add-driver/add-driver.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/dashboard/add-driver/add-driver.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */]])
    ], AddDriverComponent);
    return AddDriverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/add-vehicle-to-req/add-vehicle-to-req.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-success{\r\n  background-color: #4CAF50;\r\n  color: #ffffff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/add-vehicle-to-req/add-vehicle-to-req.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-7\">\r\n\r\n        <app-sheduler *ngIf=\"requests\" [requests]=\"requests\"></app-sheduler>\r\n\r\n        <app-sheduler *ngIf=\"!requests\" [requests]=\"[]\"></app-sheduler>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-lg-5\" *ngIf=\"vehicles\">\r\n\r\n      <div style=\"overflow-y: scroll; height:55vh;\">\r\n        <mat-card style=\"cursor: pointer\" [ngClass]=\"{red: clickedItem === vehicle['_id']}\" (click)=\"selectVehicle(vehicle)\"  *ngFor=\"let vehicle of vehicles\" >\r\n\r\n            <img mat-card-sm-image src=\"../../../../../../assets/images/pattern/pattern.png\" style=\"display: inline\">\r\n            <mat-card-subtitle style=\"display:inline\">{{ vehicle['vehicle_no'] }}</mat-card-subtitle>\r\n            <button mat-button (click)=\"setVehicle(vehicle)\" style=\"background-color: #4CAF50; color: #ffffff;\">Add</button>\r\n\r\n\r\n\r\n        </mat-card>\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions>\r\n      <button mat-button [mat-dialog-close]=\"selectedVehicle\" cdkFocusInitial>Cancel</button>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/add-vehicle-to-req/add-vehicle-to-req.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVehicleToReqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddVehicleToReqComponent = /** @class */ (function () {
    function AddVehicleToReqComponent(data, adminService, addVehicleRef) {
        this.data = data;
        this.adminService = adminService;
        this.addVehicleRef = addVehicleRef;
        this.options = [];
        this.vehicles = [];
    }
    AddVehicleToReqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refNo = this.data['refNo'];
        this.adminService.getVehicle_to_req()
            .subscribe((function (response) {
            console.log(response['data']);
            _this.vehicles = response['data'];
        }));
    };
    AddVehicleToReqComponent.prototype.selectVehicle = function (vehicle) {
        //console.log(vehicle);
        var _this = this;
        this.clickedItem = vehicle['_id'];
        this.selectedVehicle = vehicle;
        //alert(this.clickedItem);
        this.requests = undefined;
        this.adminService.getRequestsOnVehicleForCalender(this.clickedItem)
            .then(function (events) {
            _this.requests = events;
        });
        this.options = {
            weekends: true,
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            }
        };
    };
    AddVehicleToReqComponent.prototype.setVehicle = function (vehicle) {
        var _this = this;
        this.adminService.set_vehicle(this.refNo, vehicle['_id'])
            .subscribe(function (response) {
            console.log("add vehicle", response);
            if (response['success']) {
                _this.addVehicleRef.close({ 'status': true, 'vehicle': _this.selectedVehicle });
            }
        });
    };
    AddVehicleToReqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-vehicle-to-req',
            template: __webpack_require__("../../../../../src/app/components/main/admin/dashboard/add-vehicle-to-req/add-vehicle-to-req.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/dashboard/add-vehicle-to-req/add-vehicle-to-req.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */]])
    ], AddVehicleToReqComponent);
    return AddVehicleToReqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox.\r\n     Every toolbar row uses a flexbox row layout. */\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n <mat-toolbar color=\"primary\"  style=\"text-align:right\">\r\n\r\n\t<h1>Admin Panel</h1>\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n\r\n  <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n</mat-toolbar>\r\n\r\n <div fxLayout=\"row\">\r\n\r\n  <mat-drawer-container class=\"example-sidenav-container\" style=\"height:80vh; \">\r\n\t\t<mat-drawer #snav [mode]=\"'side'\">\r\n      <img mat-card-image src=\"https://via.placeholder.com/300x200\">\r\n\t\t\t<mat-nav-list>\r\n\r\n\t\t\t\t<a mat-list-item  (click)=\"changeTab(1)\" >Shedule</a>\r\n\r\n        <a mat-list-item [class.mat-elevation-z8]=\"true\" (click)=\"changeTab(2)\" >Requests</a>\r\n\r\n\r\n        <mat-expansion-panel class=\"sideNav\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Drivers\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n\r\n          <a mat-list-item (click)=\"changeTab(3)\" ><mat-icon matListIcon>pageview</mat-icon>&nbsp;&nbsp;  View</a>\r\n          <a mat-list-item (click)=\"changeTab(4)\" ><mat-icon matListIcon>add</mat-icon>&nbsp;&nbsp;  Add Driver</a>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel class=\"sideNav\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Vehicles\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n\r\n          <mat-nav-list>\r\n            <a mat-list-item (click)=\"changeTab(5)\" ><mat-icon matListIcon>pageview</mat-icon> &nbsp;&nbsp; View</a>\r\n            <a mat-list-item (click)=\"changeTab(6)\" ><mat-icon matListIcon>add</mat-icon> &nbsp;&nbsp; Add Vehicle</a>\r\n          </mat-nav-list>\r\n\r\n        </mat-expansion-panel>\r\n\r\n\r\n\t\t\t</mat-nav-list>\r\n\t\t</mat-drawer>\r\n\r\n    <mat-drawer-content>\r\n      <div class=\"container\">\r\n\r\n\r\n\r\n            <div *ngIf=\"selectedTab == 1\">\r\n              <!-- <p-fullCalendar [events]=\"events\" [options]=\"options\"></p-fullCalendar> -->\r\n\r\n              <app-sheduler *ngIf=\"events.length > 0\" [requests]=\"events\"></app-sheduler>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedTab == 2\">\r\n              <mat-tab-group>\r\n                  <mat-tab label=\"New Requests\">\r\n                      <app-requests-table [requestDataSource]=\"newReqDataSource\" (changeEmitter)=\"changeDetecter($event)\"></app-requests-table>\r\n                  </mat-tab>\r\n                  <mat-tab label=\"Accepted Requests\">\r\n                      <app-requests-table [requestDataSource]=\"acceptedReqDataSource\" (changeEmitter)=\"changeDetecter($event)\"></app-requests-table>\r\n                  </mat-tab>\r\n\r\n                  <mat-tab label=\"Confirmed Requests\">\r\n                      <app-requests-table [requestDataSource]=\"confirmedReqDataSource\" (changeEmitter)=\"changeDetecter($event)\"></app-requests-table>\r\n                  </mat-tab>\r\n\r\n                  <mat-tab label=\"Authenticated Requests\">\r\n                    <app-requests-table [requestDataSource]=\"authenticatedReqDataSource\" (changeEmitter)=\"changeDetecter($event)\"></app-requests-table>\r\n                  </mat-tab>\r\n\r\n                  <mat-tab label=\"Completed Requests\"></mat-tab>\r\n                  <mat-tab label=\"Rejected Requests\"></mat-tab>\r\n              </mat-tab-group>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedTab == 3\">\r\n              <app-driver-list></app-driver-list>>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedTab == 4\">\r\n              <br><br>\r\n              <!-- add vehicle component -->\r\n              <app-add></app-add>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedTab == 5\">\r\n              <app-vehicle-list></app-vehicle-list>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedTab == 6\">\r\n              <br><br>\r\n              <app-add-vehicle></app-add-vehicle>\r\n            </div>\r\n\r\n\r\n\r\n      </div>\r\n    </mat-drawer-content>\r\n  </mat-drawer-container>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
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





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(adminService, dialog, requestService, changeDetectorRef, media) {
        this.adminService = adminService;
        this.dialog = dialog;
        this.requestService = requestService;
        this.selectedTab = 1; // 1-> sheduer 2-> requests
        this.requestData = [];
        this.newRequestData = []; // store all new reqeusts
        this.acceptedReqData = [];
        this.confirmedReqData = [];
        this.authenticatedReqData = [];
        this.completedReqData = [];
        this.rejectedReqData = [];
        //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
        //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
        this.acceptedReqDataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](this.requestData);
        this.newReqDataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](this.newRequestData);
        this.confirmedReqDataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](this.confirmedReqData);
        this.authenticatedReqDataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](this.authenticatedReqData);
        this.completedReqDataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](this.completedReqData);
        this.rejectedReqDataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](this.rejectedReqData);
        this.requests = [];
        this.events = [];
        this.options = [];
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        //this.getNewReqeusts();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.acceptedReqDataSource.paginator = this.paginator;
        //this.dataSource.paginator = this.paginator;
        var _this = this;
        this.adminService.getRequestOnStatusForCalender("status[0]=1&statsu[1]=2&status[2]=3&status[3]=4&status[4]=0")
            .then(function (events) { _this.events = events; });
        this.options = {
            weekends: true,
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            }
        };
        this.loadTableData();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    //change tab
    DashboardComponent.prototype.changeTab = function (tab) {
        this.selectedTab = tab;
    };
    DashboardComponent.prototype.loadTableData = function () {
        var _this = this;
        this.adminService.getRequestsOnStatusForTable("status[0]=1")
            .then(function (data) {
            _this.acceptedReqData = data;
            _this.acceptedReqDataSource.data = _this.acceptedReqData;
        });
        this.adminService.getRequestsOnStatusForTable("status[0]=0")
            .then(function (data) {
            _this.newRequestData = data;
            _this.newReqDataSource.data = _this.newRequestData;
        });
        this.adminService.getRequestsOnStatusForTable("status[0]=2")
            .then(function (data) {
            _this.confirmedReqData = data;
            _this.confirmedReqDataSource.data = _this.confirmedReqData;
        });
        this.adminService.getRequestsOnStatusForTable("status[0]=3")
            .then(function (data) {
            _this.authenticatedReqData = data;
            _this.authenticatedReqDataSource.data = _this.authenticatedReqData;
        });
    };
    DashboardComponent.prototype.getRequestOnStatus = function () {
        // this.adminService.getRequestsOnStatusForTable(`status[0]=1&statsu[1]=2&status[3]=4&status[4]=0`)
        //     .subscribe(data => {
        //       console.log('status ', data['msg'].length);
        //       this.requests = data['msg'];
        //     } );
    };
    DashboardComponent.prototype.getNewReqeusts = function () {
        this.adminService.get_request_list(1)
            .subscribe(function (data) {
            console.log('new', data);
        });
    };
    // invoke when dialog activity change data of a request
    DashboardComponent.prototype.changeDetecter = function (change) {
        if (change === 1) {
            this.loadTableData();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginator */])
    ], DashboardComponent.prototype, "paginator", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/main/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__services_request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/reqeust-preveiw/reqeust-preveiw.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-chip{\r\n\r\n}\r\n\r\n.mat-expansion-panel-header{\r\n  background: #ffffff;\r\n  border-bottom: solid 2px #673ab7;\r\n}\r\n\r\n.mat-expansion-panel-header:focus{\r\n  background: #E1E1E1;\r\n  border-bottom: solid 0px #673ab7;\r\n  height:55px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/reqeust-preveiw/reqeust-preveiw.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>TRD/{{ selectedRequest['refNo'] }}</h2>\r\n<mat-divider></mat-divider>\r\n\r\n<mat-dialog-content>\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n\r\n\r\n        <mat-card>\r\n          <mat-card-title>\r\n            To:\r\n          </mat-card-title>\r\n\r\n          <mat-chip-list>\r\n            <mat-chip [selected]=\"true\">\r\n              {{ selectedRequest['departure']['pickupPoint']}}\r\n            </mat-chip>\r\n          </mat-chip-list>\r\n\r\n          <br>\r\n        <mat-list>\r\n          <mat-list-item><mat-icon>  date_range</mat-icon>&nbsp;&nbsp; {{ selectedRequest['departure']['pickupDate']}}</mat-list-item>\r\n          <mat-list-item> <mat-icon>  access_time</mat-icon>&nbsp;&nbsp; {{ selectedRequest['departure']['pickupTime']}} </mat-list-item>\r\n        </mat-list>\r\n\r\n\r\n        </mat-card>\r\n\r\n        <mat-card>\r\n\r\n          <mat-card-title>From</mat-card-title>\r\n\r\n          <mat-chip-list>\r\n            <mat-chip [selected]=\"true\">\r\n              {{ selectedRequest['arrival']['pickupPoint'] }}\r\n\r\n            </mat-chip>\r\n          </mat-chip-list>\r\n\r\n          <br>\r\n        <mat-list>\r\n          <mat-list-item><mat-icon>  date_range</mat-icon>&nbsp;&nbsp; {{selectedRequest['arrival']['dropDate']}}</mat-list-item>\r\n          <mat-list-item> <mat-icon>  access_time</mat-icon>&nbsp;&nbsp; {{ selectedRequest['arrival']['dropTime']}} </mat-list-item>\r\n        </mat-list>\r\n\r\n        </mat-card>\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"col-lg-6\">\r\n\r\n      <mat-accordion>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header >\r\n            <mat-panel-title >\r\n              Driver\r\n            </mat-panel-title>\r\n\r\n          </mat-expansion-panel-header>\r\n\r\n          <mat-list>\r\n            <mat-list-item *ngIf=\"selectedRequest['driver']\">\r\n              {{ selectedRequest['driver']['name'] }}\r\n            </mat-list-item>\r\n\r\n            <mat-list-item *ngIf=\"!selectedRequest['driver']\">\r\n              Not Assigned yet\r\n            </mat-list-item>\r\n          </mat-list>\r\n\r\n\r\n          <button mat-button *ngIf=\"selectedRequest['driver']\" cdkFocusInitial class=\"bg-warning\" (click)=\"addDriver(selectedRequest['refNo'])\"><mat-icon>cached</mat-icon>&nbsp;Change Driver</button>\r\n          <button mat-button *ngIf=\"!selectedRequest['driver']\" cdkFocusInitial class=\"bg-success\" (click)=\"addDriver(selectedRequest['refNo'])\"><mat-icon>add</mat-icon>&nbsp; Add Driver</button>\r\n\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header >\r\n            <mat-panel-title >\r\n              Vehicle\r\n            </mat-panel-title>\r\n\r\n          </mat-expansion-panel-header>\r\n\r\n          <mat-list>\r\n              <mat-list-item *ngIf=\"selectedRequest['vehicle']\">\r\n                {{ selectedRequest['vehicle']['vehicle_no'] }}\r\n              </mat-list-item>\r\n\r\n              <mat-list-item *ngIf=\"!selectedRequest['vehicle']\">\r\n                Not Assigned yet\r\n              </mat-list-item>\r\n            </mat-list>\r\n\r\n            <button mat-button *ngIf=\"!selectedRequest['vehicle']\" class=\"bg-success\" cdkFocusInitial (click)=\"addVehicle(selectedRequest['refNo'])\"><mat-icon>add</mat-icon>&nbsp; Add Vehicle</button>\r\n            <button mat-button *ngIf=\"selectedRequest['vehicle']\" class=\"bg-warning\" cdkFocusInitial (click)=\"addVehicle(selectedRequest['refNo'])\"><mat-icon>cached</mat-icon>&nbsp;Change Vehicle</button>\r\n\r\n\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header >\r\n            <mat-panel-title >\r\n              More Info\r\n            </mat-panel-title>\r\n\r\n          </mat-expansion-panel-header>\r\n\r\n          <mat-list class=\"trp-mat-list\">\r\n\r\n            <mat-list-item><mat-icon>account_circle</mat-icon>  &nbsp;&nbsp; {{selectedRequest['lecturer']}}</mat-list-item>\r\n            <mat-list-item><mat-icon>location_city</mat-icon>  &nbsp;&nbsp; {{selectedRequest['position']}}</mat-list-item>\r\n            <mat-list-item><mat-icon>domain</mat-icon>  &nbsp;&nbsp; {{selectedRequest['dep_unit']}}</mat-list-item>\r\n            <mat-list-item><mat-icon>gps_fixed</mat-icon>  &nbsp;&nbsp; {{selectedRequest['purpose']}}</mat-list-item>\r\n            <mat-list-item><mat-icon>local_atm</mat-icon>  &nbsp;&nbsp; {{selectedRequest['fundingWay']}}</mat-list-item>\r\n            <mat-list-item><mat-icon>email</mat-icon>  &nbsp;&nbsp; {{selectedRequest['email']}}</mat-list-item>\r\n            <mat-list-item><mat-icon>lock</mat-icon>  &nbsp;&nbsp; {{selectedRequest['password']}}</mat-list-item>\r\n            <mat-list-item><mat-icon>person_add</mat-icon>  &nbsp;&nbsp; {{selectedRequest['num_passangers']}}</mat-list-item>\r\n\r\n          </mat-list>\r\n\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n\r\n  <div [ngSwitch]=\"selectedRequest['status']\" style=\" display: inline\">\r\n\r\n    <button mat-button *ngSwitchCase=\"0\" (click)=\"acceptRequest(selectedRequest['refNo'])\" style=\"background-color: #4CAF50; \">Accept</button>\r\n    <button mat-button *ngSwitchCase=\"2\" (click)=\"markDocumentedRequest(selectedRequest['refNo'])\" style=\"background-color: #FF9800; \">Documented</button>\r\n    <button mat-button *ngSwitchCase=\"3\" (click)=\"printPdf(selectedRequest)\" style=\"background-color: #52b03c; \" >Print Application</button>\r\n    <button mat-button *ngSwitchCase=\"3\" (click)=\"printGatePass(selectedRequest)\" style=\"background-color: #52b03c; \" >Print Gate Pass</button>\r\n    <button mat-button *ngSwitchCase=\"3\" style=\"background-color: #9C27B0; \" >Completed</button>\r\n\r\n  </div>\r\n\r\n  <button mat-button (click)=\"rejectRequest(selectedRequest['refNo'] )\" style=\"background-color: #f50057; \">Reject</button>\r\n\r\n\r\n  <button mat-button [mat-dialog-close]=\"1\" style=\"background-color: #FF9800; \">Cancel</button>\r\n\r\n</mat-dialog-actions>\r\n\r\n<div id=\"request_form_div\"></div>\r\n\r\n<div id=\"vehicle_pass_div\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/reqeust-preveiw/reqeust-preveiw.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReqeustPreveiwComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_driver_add_driver_component__ = __webpack_require__("../../../../../src/app/components/main/admin/dashboard/add-driver/add-driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_vehicle_to_req_add_vehicle_to_req_component__ = __webpack_require__("../../../../../src/app/components/main/admin/dashboard/add-vehicle-to-req/add-vehicle-to-req.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_html2canvas__ = __webpack_require__("../../../../html2canvas/dist/npm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_html2canvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







//import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';
var ReqeustPreveiwComponent = /** @class */ (function () {
    function ReqeustPreveiwComponent(data, dialog, requestService) {
        this.data = data;
        this.dialog = dialog;
        this.requestService = requestService;
        this.selectedRequest = [];
        //selectedDriver  = [];
        //selectedVehicle = [];
        this.isChangeOccured = 0; // 0 -> nothing occured, 1 -> request is changed
        console.log("req data", data);
        this.selectedRequest = data;
    }
    ReqeustPreveiwComponent.prototype.ngOnInit = function () {
    };
    ReqeustPreveiwComponent.prototype.addDriver = function (refNo) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__add_driver_add_driver_component__["a" /* AddDriverComponent */], {
            id: "dialogAddDriver",
            data: {
                'refNo': refNo
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            if (result['status']) {
                _this.selectedRequest['driver'] = result['driver'];
                _this.isChangeOccured = 1; // change happend to reqeust
            }
        });
    };
    ReqeustPreveiwComponent.prototype.addVehicle = function (refNo) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__add_vehicle_to_req_add_vehicle_to_req_component__["a" /* AddVehicleToReqComponent */], {
            id: "dialogAddVehicle",
            data: {
                'refNo': refNo
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            if (result['status']) {
                _this.selectedRequest['vehicle'] = result['vehicle'];
                _this.isChangeOccured = 1; // change happend to reqeust
            }
        });
    };
    ReqeustPreveiwComponent.prototype.rejectRequest = function (refNo) {
        var _this = this;
        this.requestService.change_status(refNo, 3)
            .subscribe(function (response) {
            console.log(response['msg']);
            _this.selectedRequest['status'] = 3;
            _this.isChangeOccured = 1;
        });
    };
    ReqeustPreveiwComponent.prototype.acceptRequest = function (refNo) {
        var _this = this;
        this.requestService.change_status(refNo, 1)
            .subscribe(function (response) {
            console.log(response['msg']);
            _this.selectedRequest['status'] = 1;
            _this.isChangeOccured = 1;
            //location.reload();
        });
    };
    ReqeustPreveiwComponent.prototype.markDocumentedRequest = function (refNo) {
        var _this = this;
        this.requestService.change_status(refNo, 4)
            .subscribe(function (response) {
            //alert('daon');
            console.log(response['msg']);
            _this.selectedRequest['status'] = 4;
            _this.isChangeOccured = 1;
        });
    };
    ReqeustPreveiwComponent.prototype.printPdf = function (request) {
        var content = "\n    \t\t\t \t\t\n\n          <div style=\"width:210mm; height:297mm\">\n            <div class=\"container\">\n            \n            <div class=\"container-fluid\">\n            <div class=\"text-center\"> <br><br>\n            \n                  <img src=\"../../assets/images/logo/logo.png\" class=\"nav-logo\" alt=\"\" style=\"height: 150px\">\n                  <h3>\u0D9A\u0DD0\u0DC5\u0DAB\u0DD2\u0DBA \u0DC0\u0DD2\u0DC1\u0DCA\u0DC0 \u0DC0\u0DD2\u0DAF\u0DCA\u200D\u0DBA\u0DCF\u0DBD\u0DBA - \u0D9A\u0DD0\u0DC5\u0DAB\u0DD2\u0DBA</h3>\n                  \n                   \n                   <p > \u0DB0\u0DCF\u0DC0\u0DB1 \u0DC0\u0DCF\u0DBB\u0DBA\u0D9A\u0DCA \u0DC3\u0DAF\u0DC4\u0DCF \u0DBB\u0DAE\u0DBA\u0D9A\u0DCA \u0DBD\u0DB6\u0DCF \u0D9C\u0DD0\u0DB1\u0DD3\u0DB8\u0DA7 \u0D85\u0DC0\u0DC3\u0DBB \u0DBD\u0DB6\u0DCF \u0D9C\u0DD0\u0DB1\u0DD3\u0DB8</p>\n                   <br>\n                   <br>\n              </div>\n                \n                <div class=\"\">\n                \n                <ngx-qrcode qrc-element-type=\"url\" [qrc-value]=\"ngxQrcode2\" ></ngx-qrcode>\n                \n                 <div class=\"row\">\n                \n                    <div class=\"col-12\">\u0D85\u0D82\u0D9A\u0DBA\t:&nbsp;\tTRD/" + request.refNo + "</div>\n                    <div class=\"col-12\">\u0DB4\u0DD3\u0DA8\u0DBA\t:\t&nbsp;" + request.dep_unit + "</div>\n                    <div class=\"col-12\">\u0D89\u0DBD\u0DCA\u0DBD\u0DD4\u0DB8\u0DCA\u0D9A\u0DBB\u0DD4\u0D9C\u0DDA \u0DB1\u0DB8  :  " + request.name + "</div>\n                    <div class=\"col-12\">\u0D89\u0DBD\u0DCA\u0DBD\u0DD4\u0DB8\u0DCA\u0D9A\u0DBB\u0DD4\u0D9C\u0DDA \u0DAD\u0DB1\u0DAD\u0DD4\u0DBB\t:&nbsp;\t" + request.position + "</div>\n                    \n                    <br><br>\n                    <div class=\"col-12\" style=\"border-bottom: 1px solid #000000;\">\u0DA0\u0DCF\u0DBB\u0DD2\u0D9A\u0DCF\u0DC0 \u0DB4\u0DD2\u0DC5\u0DD2\u0DB6\u0DAF</div>\n                    \n                    <div class=\"col-12\" style=\"padding-top: 10px\">\u0D86\u0DBB\u0DB8\u0DCA\u0DB7\u0D9A \u0DC3\u0DCA\u0DAE\u0DCF\u0DB1\u0DBA\t:&nbsp;\t" + request.departure.pickPointAddress + "</div>\n                    <div class=\"col-12\">\u0D9C\u0DB8\u0DB1\u0DCF\u0DB1\u0DCA\u0DAD\u0DBA\t\t:&nbsp;\t" + request.departure.dropPointAddress + "</div>\n                \n                <br><br>\n                      <div class=\"col-8\">\u0DB4\u0DD2\u0DA7\u0DAD\u0DCA\u0DC0\u0DB1 \u0DAF\u0DD2\u0DB1\u0DBA :&nbsp; " + request.departure.pickupDate + "</div>\n                      <div class=\"col-4\">\u0DC0\u0DDA\u0DBD\u0DCF\u0DC0 &nbsp; &nbsp; &nbsp; : &nbsp;" + request.departure.pickupTime + "</div>\n                    \n                      <div class=\"col-8\">\u0D86\u0DB4\u0DC3\u0DD4 \u0DB4\u0DD0\u0DB8\u0DD2\u0DAB\u0DD9\u0DB1 \u0DAF\u0DD2\u0DB1\u0DBA:&nbsp; " + request.arrival.dropDate + "</div>\n                      \n                      <div class=\"col-4\">\u0DC0\u0DDA\u0DBD\u0DCF\u0DC0 &nbsp; &nbsp; &nbsp; :&nbsp; " + request.arrival.dropTime + "</div>\n           \n                     <br><br>\n                   \n                    <div class=\"col-6\">\u0DC4\u0DDA\u0DAD\u0DD4\u0DC0\t&nbsp; &nbsp; &nbsp;\t\t:&nbsp;\t" + request.purpose + "</div>\n                  \n                    <br><br><br>\n                    \n                    \n                  </div>         \n                  \n                  </div>\n                <div class=\"row\">\n                        <div class=\"col-lg-6\">\n                          <p>........................................</p>\n                          <p>\u0D89\u0DBD\u0DCA\u0DBD\u0DD4\u0DB8\u0DCA\u0D9A\u0DBB\u0DD4\u0D9C\u0DDA \u0D85\u0DAD\u0DCA\u0DC3\u0DB1</p>\n                        </div>\n                        \n                         <div class=\"col-lg-6\">\n                          <p>........................................</p>\n                          <p>\u0DAF\u0DD2\u0DB1\u0DBA</p>\n                        </div>\n                    </div>\n                </div>\n                </div>\n            </div>\n              \n                \n               \n            </div>\n          \n            \n          \n          \n          \n          </div>\n    ";
        document.getElementById('request_form_div').innerHTML = content;
        __WEBPACK_IMPORTED_MODULE_5_html2canvas__(document.getElementById('request_form_div')).then(function (canvas) {
            document.getElementById('request_form_div').innerHTML = '';
            var imgData = canvas.toDataURL('image/png');
            // document.body.appendChild(canvas);
            var doc = new __WEBPACK_IMPORTED_MODULE_6_jspdf__('p', 'mm', 'a4');
            doc.setFont("helvetica");
            doc.setFontType("bold");
            doc.setFontSize(10);
            var width = 470;
            var height = doc.internal.pageSize.height;
            doc.addImage(imgData, 'JPEG', 0, 0, width, height);
            doc.save('request.pdf');
        });
    };
    ReqeustPreveiwComponent.prototype.printGatePass = function (request) {
        var content = "\n    <div #pdf style=\"width: 210mm;height: 148mm;font-size:12px; padding: 7px; border:1px solid black;\">\n\n    <h5 style=\"text-align: center;\"><strong>\u0D9A\u0DD0\u0DC5\u0DAB\u0DD2\u0DBA \u0DC0\u0DD2\u0DC1\u0DCA\u0DC0 \u0DC0\u0DD2\u0DAF\u0DCA&zwj;\u0DBA\u0DCF\u0DBD\u0DBA</strong></h5>\n\n    <p style=\"text-align: center;\"><strong>\u0DC0\u0DCF\u0DC4\u0DB1 \u0DB0\u0DCF\u0DC0\u0DB1 \u0D85\u0DC0\u0DC3\u0DBB \u0DB4\u0DAD\u0DCA&zwj;\u0DBB\u0DBA</strong></p>\n    <p>\u0D86\u0DBB\u0D9A\u0DCA\u0DC2\u0D9A \u0DB1\u0DD2\u0DC5\u0DB0\u0DCF\u0DBB\u0DD3\u0DAD\u0DD4\u0DB8\u0DAB\u0DD2,</p>\n    <table style=\"height: 20px; border-color: null;\" border=\"0\" width=\"685\">\n      <tbody>\n      <tr>\n        <td style=\"width: 335.2px;\" >\u0DC0\u0DCF\u0DC4\u0DB1 \u0D85\u0D82\u0D9A\u0DBA: " + request['vehicle']['vehicle_no'] + "</td>\n        <td style=\"width: 335.2px;\">\u0DBB\u0DD2\u0DBA\u0DAF\u0DD4\u0DBB\u0DD4\u0D9C\u0DDA \u0DB1\u0DB8 : " + request['driver'].name + "</td>\n      </tr>\n      <tr>\n        <td style=\"width: 335.2px;\">\u0D85\u0D82\u0DC1\u0DBA/\u0DB4\u0DD3\u0DA8\u0DBA&nbsp; : " + request['dep_unit'] + "</td>\n        <td style=\"width: 335.2px;\">&nbsp;</td>\n      </tr>\n      </tbody>\n    </table>\n    <p style=\"text-align: center;\"><strong>\u0D89\u0DC4\u0DAD \u0DC3\u0DAF\u0DC4\u0DB1\u0DCA \u0DC0\u0DCF\u0DC4\u0DB1\u0DBA \u0DBB\u0DCF\u0DA2\u0D9A\u0DCF\u0DBB\u0DD3 \u0D9A\u0DA7\u0DBA\u0DD4\u0DAD\u0DD4 \u0DC3\u0DAF\u0DC4\u0DCF \u0DBA\u0DD9\u0DCF\u0DAF\u0DC0\u0DCF \u0D87\u0DAD\u0DD2 \u0DB6\u0DD0\u0DC0\u0DD2\u0DB1\u0DCA \u0DC0\u0DCF\u0DC4\u0DB1\u0DBA \u0DB4\u0DD2\u0DA7\u0DC0\u0DD3\u0DB8\u0DA7 \u0D85\u0DC0\u0DC3\u0DBB \u0DBD\u0DB6\u0DCF \u0DAF\u0DD9\u0DB1\u0DCA\u0DB1.</strong></p>\n    <ul>\n      <li>\u0DC0\u0DCF\u0DC4\u0DB1\u0DBA \u0DBA\u0DB1 \u0DC3\u0DCA\u0DAE\u0DCF\u0DB1\u0DBA : " + request.departure.dropPoint + "</li>\n      <li>\u0DBB\u0DCF\u0DA2\u0D9A\u0DCF\u0DBB\u0DD3 \u0DC0\u0DD2\u0DC3\u0DCA\u0DAD\u0DBB\u0DBA&nbsp; &nbsp; &nbsp; : " + request.purpose + "li>\n    </ul>\n    <table>\n      <tbody>\n      <tr>\n        <td width=\"350\">\u0DB4\u0DD2\u0DA7\u0DAD\u0DCA\u0DC0\u0DB1 \u0DAF\u0DD2\u0DB1\u0DBA&nbsp; &nbsp; &nbsp;: " + request.departure.pickupDate + "</td>\n        <td width=\"350\">\u0D86\u0DB4\u0DC3\u0DD4 \u0DB4\u0DD0\u0DB8\u0DD2\u0DAB\u0DD9\u0DB1 \u0DAF\u0DD2\u0DB1\u0DBA: " + request.arrival.dropDate + "</td>\n      </tr>\n      <tr>\n        <td width=\"350\">\u0DC0\u0DDA\u0DBD\u0DCF\u0DC0 : " + request.departure.pickupTime + "</td>\n        <td width=\"350\">\u0DC0\u0DDA\u0DBD\u0DCF\u0DC0 &nbsp; &nbsp; &nbsp; : " + request.arrival.dropTime + "</td>\n      </tr>\n      <tr>\n        <td width=\"350\">\u0DB8\u0DBA\u0DD2\u0DBD\u0DDD \u0DB8\u0DD3\u0DA7\u0DBB\u0DBA&nbsp; &nbsp; &nbsp;:</td>\n        <td width=\"350\">\u0DB8\u0DBA\u0DD2\u0DBD\u0DDD \u0DB8\u0DD3\u0DA7\u0DBB\u0DBA&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:</td>\n      </tr>\n      </tbody>\n    </table>\n    <p>&nbsp;</p>\n    <hr />\n    <table style=\"height: 73px; width: 693px;\">\n      <tbody>\n      <tr style=\"height: 25px;\">\n        <td style=\"width: 202px; height: 25px;\">\u0DAF\u0DD2\u0DB1\u0DBA</td>\n        <td style=\"width: 178px; height: 25px;\">&nbsp;</td>\n        <td style=\"width: 301px; height: 25px;\">\u0DC3\u0DA7\u0DC4\u0DB1\u0DCA \u0DAD\u0DB6\u0DCF \u0D9C\u0DB1\u0DCA\u0DB1\u0DCF \u0D86\u0DBB\u0D9A\u0DCA\u0DC2\u0D9A \u0DB1\u0DD2\u0DBD\u0DB0\u0DCF\u0DBB\u0DD3\u0DBA\u0DCF\u0D9C\u0DDA,</td>\n      </tr>\n      <tr style=\"height: 5px;\">\n        <td style=\"width: 202px; height: 5px;\">\n          <p>&nbsp;</p>\n          <p>______________________</p>\n        </td>\n        <td style=\"width: 210px; height: 5px;\">&nbsp;\n            <table style=\"height: 42px; width: 178.2px;\">\n            <tbody>\n            <tr>\n            <td style=\"width: 151px;\">&nbsp;\u0DB1\u0DD4\u0DC0\u0DBB \u0DB4\u0DCF\u0DBB \u0DB4\u0DD2\u0DC0\u0DD2\u0DC3\u0DD4\u0DB8</td>\n            <td style=\"width: 16.2px; border: 1px solid\">&nbsp;</td>\n            </tr>\n            <tr>\n            <td style=\"width: 151px;\">\u0DC0\u0DD0\u0DA9 \u0D85\u0D82\u0DC1\u0DBA\u0DDA&nbsp;\u0DB4\u0DD2\u0DC0\u0DD2\u0DC3\u0DD4\u0DB8</td>\n            <td style=\"width: 16.2px; border: 1px solid\">&nbsp;</td>\n            </tr>\n            </tbody>\n            </table>\n            </td>\n        <td style=\"width: 301px; height: 5px;\">\n          <table style=\"height: 69px; width: 244px;\">\n            <tbody>\n            <tr style=\"height: 14.8px;\">\n              <td style=\"width: 73px; height: 14.8px;\">\u0DB1\u0DB8&nbsp; &nbsp; &nbsp; &nbsp;:</td>\n              <td style=\"width: 158px; height: 14.8px;\">&nbsp;_________________</td>\n            </tr>\n            <tr style=\"height: 26px;\">\n              <td style=\"width: 73px; height: 26px;\">\u0D85\u0DAD\u0DCA\u0DC3\u0DB1&nbsp; :</td>\n              <td style=\"width: 158px; height: 26px;\">&nbsp;_________________</td>\n            </tr>\n            </tbody>\n          </table>\n        </td>\n      </tr>\n      <tr style=\"height: 17px;\">\n        <td style=\"width: 202px; height: 17px;\">\u0DBB\u0DD2\u0DBA\u0DAF\u0DD4\u0DBB\u0DD4 \u0DB8\u0DC4\u0DAD\u0DCF\u0D9C\u0DDA \u0D85\u0DAD\u0DCA\u0DC3\u0DB1</td>\n        <td style=\"width: 178px; height: 17px;\">&nbsp;</td>\n        <td style=\"width: 301px; height: 17px;\">&nbsp; &nbsp;</td>\n      </tr>\n      </tbody>\n    </table>\n\n  </div>\n    ";
        document.getElementById('vehicle_pass_div').innerHTML = content;
        __WEBPACK_IMPORTED_MODULE_5_html2canvas__(document.getElementById('vehicle_pass_div')).then(function (canvas) {
            document.getElementById('vehicle_pass_div').innerHTML = '';
            var imgData = canvas.toDataURL('image/png');
            // document.body.appendChild(canvas);
            var doc = new __WEBPACK_IMPORTED_MODULE_6_jspdf__('l', 'pt', 'a5');
            var width = doc.internal.pageSize.width;
            var height = doc.internal.pageSize.height;
            doc.addImage(imgData, 'JPEG', 0, 0, width, height);
            doc.save('img.pdf');
        });
    };
    ReqeustPreveiwComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reqeust-preveiw',
            template: __webpack_require__("../../../../../src/app/components/main/admin/dashboard/reqeust-preveiw/reqeust-preveiw.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/dashboard/reqeust-preveiw/reqeust-preveiw.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */]])
    ], ReqeustPreveiwComponent);
    return ReqeustPreveiwComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/requests-table/requests-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/requests-table/requests-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\r\n  <mat-table #table [dataSource]=\"requestDataSource\" matSort>\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"refNo\">\r\n      <mat-header-cell *matHeaderCellDef> Ref No </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.refNo}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"to\">\r\n      <mat-header-cell *matHeaderCellDef> To </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.to}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"from\">\r\n      <mat-header-cell *matHeaderCellDef> From </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.from}} </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"driver\">\r\n      <mat-header-cell *matHeaderCellDef> Driver </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.driver}} </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"vehicle\">\r\n      <mat-header-cell *matHeaderCellDef> Vehicle </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.vehicle}} </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"loadRequest(row['refNo'])\"></mat-row>\r\n  </mat-table>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/requests-table/requests-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reqeust_preveiw_reqeust_preveiw_component__ = __webpack_require__("../../../../../src/app/components/main/admin/dashboard/reqeust-preveiw/reqeust-preveiw.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestsTableComponent = /** @class */ (function () {
    function RequestsTableComponent(requestService, dialog) {
        this.requestService = requestService;
        this.dialog = dialog;
        this.changeEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.displayedColumns = ['refNo', 'to', 'from', 'driver', 'vehicle'];
    }
    RequestsTableComponent.prototype.ngOnInit = function () {
    };
    RequestsTableComponent.prototype.loadRequest = function (refNo) {
        var _this = this;
        //alert(refNo);
        this.requestService.getOneRequest(refNo)
            .subscribe(function (request) {
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__reqeust_preveiw_reqeust_preveiw_component__["a" /* ReqeustPreveiwComponent */], {
                width: '90%',
                data: request['msg'][0]
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log("Dialog result: " + result);
                if (result === 1) {
                    _this.changeEmitter.emit(1); // when any change occur to request by dialog activity
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RequestsTableComponent.prototype, "requestDataSource", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RequestsTableComponent.prototype, "changeEmitter", void 0);
    RequestsTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-requests-table',
            template: __webpack_require__("../../../../../src/app/components/main/admin/dashboard/requests-table/requests-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/dashboard/requests-table/requests-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]])
    ], RequestsTableComponent);
    return RequestsTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/sheduler/sheduler.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/sheduler/sheduler.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\r\n\r\n  <p-fullCalendar [events]=\"events\" [options]=\"options\"></p-fullCalendar>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/dashboard/sheduler/sheduler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShedulerComponent; });
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


var ShedulerComponent = /** @class */ (function () {
    function ShedulerComponent(adminService) {
        this.adminService = adminService;
        this.events = [];
        this.options = [];
    }
    ShedulerComponent.prototype.ngOnInit = function () {
        this.events = this.requests;
        console.log("sheduler", this.requests);
        this.options = {
            weekends: true,
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            }
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShedulerComponent.prototype, "requests", void 0);
    ShedulerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sheduler',
            template: __webpack_require__("../../../../../src/app/components/main/admin/dashboard/sheduler/sheduler.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/dashboard/sheduler/sheduler.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]])
    ], ShedulerComponent);
    return ShedulerComponent;
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
            //alert('ok');
            this.adminService.addDriver(driver)
                .subscribe(function (response) {
                console.log(response);
                if (response['success']) {
                    alert('driver added succesfully');
                    location.reload();
                }
            });
        }
        //console.log(driver);
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

/***/ "../../../../../src/app/components/main/admin/drivers/driver-list/driver-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/drivers/driver-list/driver-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n\r\n    <div class=\"col-lg-7\">\r\n\r\n    <mat-card *ngIf=\"selectedDriverName\">\r\n        <img mat-card-avatar src=\"../../../../../../assets/images/pattern/pattern.png\">\r\n        <mat-card-title style=\"display:inline\"> {{ selectedDriverName }}</mat-card-title>\r\n    </mat-card>\r\n\r\n        <app-sheduler *ngIf=\"requests\" [requests]=\"requests\"></app-sheduler>\r\n\r\n        <app-sheduler *ngIf=\"!requests\" [requests]=\"[]\"></app-sheduler>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-lg-5\" *ngIf=\"drivers\">\r\n\r\n      <div style=\"overflow-y: scroll; height:55vh;\">\r\n        <mat-card style=\"cursor: pointer\" [ngClass]=\"{clicked: clickedItem === driver['_id']}\" (click)=\"selectDriver(driver)\"  *ngFor=\"let driver of drivers\" >\r\n\r\n            <img mat-card-sm-image src=\"../../../../../../assets/images/pattern/pattern.png\" style=\"display: inline\">\r\n            <mat-card-subtitle style=\"display:inline\">{{ driver['name'] }}</mat-card-subtitle>\r\n\r\n        </mat-card>\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/drivers/driver-list/driver-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverListComponent; });
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


var DriverListComponent = /** @class */ (function () {
    function DriverListComponent(adminService) {
        this.adminService = adminService;
        this.options = [];
        this.drivers = [];
    }
    DriverListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getAllDriversDetails()
            .subscribe(function (drivers) {
            _this.drivers = drivers['msg'];
            //console.log(this.drivers);
        });
    };
    DriverListComponent.prototype.selectDriver = function (driver) {
        var _this = this;
        //alert(driver['name']);
        this.clickedItem = driver['_id'];
        this.selectedDriverName = driver['name'];
        this.requests = undefined;
        this.adminService.getRequestsOnDriverForCalender(this.clickedItem)
            .then(function (events) {
            _this.requests = events;
        });
        this.options = {
            weekends: true,
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            }
        };
    };
    DriverListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-driver-list',
            template: __webpack_require__("../../../../../src/app/components/main/admin/drivers/driver-list/driver-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/drivers/driver-list/driver-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]])
    ], DriverListComponent);
    return DriverListComponent;
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

module.exports = "\r\n<div *ngIf=\"request\" class=\"container-fluid\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-7\">\r\n\r\n\r\n\r\n        <div\r\n          [ngClass]=\"{\r\n              'alert-danger': request.status == 3,\r\n              'alert-warning': request.status == 2,\r\n              'alert-success': request.status == 0\r\n            }\"\r\n          class=\"alert \" role=\"alert\">\r\n          <div *ngIf=\"request.status == '3'\">\r\n            Request is not being reviewed\r\n          </div>\r\n\r\n          <div *ngIf=\"request.status == '2'\">\r\n            Request is accepted\r\n          </div>\r\n        </div>\r\n\r\n      <div class=\"container-fluid\">\r\n        <table class=\"table table-sm\">\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Refferance No\r\n            </th>\r\n            <td>\r\n              TRD/{{request.refNo}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Lecturer\r\n            </th>\r\n            <td>\r\n              {{request.lecturer}}\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Designation\r\n            </th>\r\n            <td>\r\n              {{request.position}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Department/ Unit\r\n            </th>\r\n            <td>\r\n              {{request.dep_unit}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Purpose\r\n            </th>\r\n            <td>\r\n              {{request.purpose}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Funding method\r\n            </th>\r\n            <td>\r\n              {{request.fundingWay}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Email\r\n            </th>\r\n            <td>\r\n              {{request.email}}\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Password\r\n            </th>\r\n            <td>\r\n              {{request.password}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th scope=\"row\">\r\n              Number of Passangers\r\n            </th>\r\n            <td>\r\n              {{request.num_passangers}}\r\n            </td>\r\n          </tr>\r\n\r\n\r\n\r\n\r\n        </table>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\" >\r\n\r\n\r\n        <div class=\"col-lg-4\" *ngIf=\"request.status == '0'\">\r\n          <button type=\"button\" class=\"btn btn-block btn-success\" data-toggle=\"modal\" data-target=\"#acceptReqModal\">Accept</button>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4\" *ngIf=\"request.status == '2'\">\r\n          <button type=\"button\" class=\"btn btn-block btn-outline-success\" data-toggle=\"modal\" data-target=\"#makeDetailedReqModal\">Mark as fully Detailed</button>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4\">\r\n          <button type=\"button\" class=\"btn btn-block btn-danger\">Reject</button>\r\n        </div>\r\n\r\n        <div class=\"modal fade\" id=\"acceptReqModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" >Accept Request</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                Are you shure that this request is possible?\r\n              </div>\r\n              <div class=\"modal-footer\" ngClass=\"\">\r\n                <button type=\"button\"  class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"acceptReq()\"><i class=\"fa fa-add\"></i>Acept</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"modal fade\" id=\"makeDetailedReqModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCentderTitle\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" >Mark as fully Detailed</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                Are you shure that this request is fully detailed?\r\n\r\n              </div>\r\n              <div class=\"modal-footer\" ngClass=\"\">\r\n                <button type=\"button\"  class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"markDetailedReq()\"><i class=\"fa fa-add\"></i>Yes</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"modal fade\" id=\"rejectReqModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" >Reject Request</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                Are you shure to reject this request?\r\n              </div>\r\n              <div class=\"modal-footer\" ngClass=\"\">\r\n                <button type=\"button\"  class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"rejectReq()\"><i class=\"fa fa-add\"></i>Acept</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"col-md-5\">\r\n      <div id=\"accordion\">\r\n        <div class=\"card\">\r\n          <div\r\n            class=\"card-header bg-inverse text-white\" id=\"headingOne\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n            <h6 class=\"mb-0\">\r\n              <i class=\"fa fa-map\"></i>\r\n              Trip Section\r\n            </h6>\r\n          </div>\r\n\r\n          <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\" *ngIf=\"request\">\r\n            <div class=\"card-body\">\r\n              <div>\r\n                <h6>Departure</h6>\r\n                <table class=\"table table-sm\" *ngIf=\"request['departure']\">\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      Date\r\n                    </th>\r\n                    <td>\r\n                      {{request.departure.pickupDate}}\r\n                    </td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      Time\r\n                    </th>\r\n                    <td>\r\n                      {{request.departure.pickupTime}}\r\n                    </td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      From\r\n                    </th>\r\n                    <td>\r\n                      {{request.departure.pickupPoint}}\r\n                    </td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      To\r\n                    </th>\r\n                    <td>\r\n                      {{request.departure.dropPoint}}\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n              <div>\r\n                <h6>Arrival</h6>\r\n                <table class=\"table table-sm\" *ngIf=\"request.arrival\">\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      Date\r\n                    </th>\r\n                    <td>\r\n                      {{request.arrival.dropDate}}\r\n                    </td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      Time\r\n                    </th>\r\n                    <td>\r\n                      {{request.arrival.dropTime}}\r\n                    </td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      From\r\n                    </th>\r\n                    <td>\r\n                      {{request.arrival.pickupPoint}}\r\n                    </td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n\r\n                    <th scope=\"row\">\r\n                      To\r\n                    </th>\r\n                    <td>\r\n                      {{request.arrival.dropPoint}}\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <div\r\n            [ngClass]=\"{'bg-danger':!request.vehicle, 'bg-success': request.vehicle}\"\r\n            class=\"card-header text-white\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n            <h6 class=\"mb-0\">\r\n              <i class=\"fa fa-car\"></i>\r\n              Vehicle Section\r\n            </h6>\r\n          </div>\r\n\r\n          <div id=\"collapseTwo\" class=\"collapse \" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n            <div\r\n              [ngClass]=\"{'text-danger': !request.vehicle, 'text-success' : request.vehicle}\"\r\n              class=\"card-body\">\r\n              <div *ngIf=\"request.vehicle\">\r\n                Vehicle no: {{request.vehicle.vehicle_no}}\r\n\r\n                <br>\r\n\r\n                <button class=\"btn btn-outline-warning\"\r\n                        data-toggle=\"modal\" data-target=\"#addVehicleModal\" >\r\n                Change Vehicle\r\n              </button>\r\n              </div>\r\n              <div *ngIf=\"!request.vehicle\">\r\n                <p class=\"card-text\">\r\n                  Vehicle is not assigned yet\r\n                </p>\r\n                <button\r\n                  class=\"btn\"\r\n                  [ngClass]=\"{'btn-danger':!request.vehicle, 'btn-success': request.vehicle}\"\r\n                  data-toggle=\"modal\" data-target=\"#addVehicleModal\">Add Vehicle</button>\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n             </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"card\">\r\n          <div\r\n            [ngClass]=\"{\r\n                      'bg-danger':!request.driver, 'bg-success': request.driver}\"\r\n            class=\"card-header text-white\" id=\"headingThree\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n            <h6 class=\"mb-0\">\r\n              <i class=\"fa fa-car\"></i>\r\n              Driver Section\r\n            </h6>\r\n          </div>\r\n\r\n          <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n            <div\r\n              [ngClass]=\"{'text-danger':!request.driver, 'text-success' : request.driver}\"\r\n              class=\"card-body\">\r\n              <div *ngIf=\"request.driver\">\r\n                Driver name: {{request.driver.name}}\r\n              </div>\r\n              <div *ngIf=\"!request.driver\">\r\n                <p class=\"card-text\">\r\n\r\n                </p>\r\n                <button\r\n                  class=\"btn\"\r\n                  [ngClass]=\"{'btn-danger':!request.driver, 'btn-success': request.driver}\"\r\n                  data-toggle=\"modal\" data-target=\"#addDriverModal\">Add Driver</button>\r\n              </div>\r\n              <button\r\n                *ngIf=\"request.driver\"\r\n                class=\"btn btn-outline-warning\"\r\n                data-toggle=\"modal\" data-target=\"#addDriverModal\">Change Driver</button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!--add driver model-->\r\n\r\n        <div class=\"modal\" id=\"addDriverModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n          <div class=\"\" role=\"document\">\r\n            <div class=\"\">\r\n              <div class=\"modal-content\" style=\"\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Add Driver</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <!--<div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <label for=\"\">Select a driver</label>\r\n                  </div>\r\n                  <div class=\"col-md-8\">\r\n\r\n                    <kendo-autocomplete\r\n                      [data]=\"data\"\r\n                      [filterable]=\"true\"\r\n                      (filterChange)=\"handleFilter($event)\"\r\n                      class=\"trp-min-input trp-autocomplete\"\r\n                      [(value)]=\"driver_name\"\r\n                    >\r\n                    </kendo-autocomplete>\r\n                  </div>\r\n\r\n                </div>-->\r\n\r\n                <app-set-driver\r\n                [refNo]=\"refNo\"\r\n                (setDriver_)=\"setDriver($event)\"\r\n                ></app-set-driver>\r\n              </div>\r\n\r\n                <div class=\"modal-footer\" ngClass=\"\">\r\n                  <button type=\"button\"  class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"setDriver()\"><i class=\"fa fa-add\"></i>Add</button>\r\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!--end of add driver model-->\r\n\r\n        <!--add vehicle model-->\r\n\r\n        <div class=\"modal\" id=\"addVehicleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalCenterTitle\" aria-hidden=\"true\">\r\n          <div class=\"\" role=\"document\">\r\n            <div class=\"row\">\r\n              <div class=\"modal-content\" style=\"width: 100%\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\" id=\"ModalLongTitle\">Add Vehicle</h5>\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <!--<div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                      <label for=\"\">Select a Vehicle</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n\r\n                      <kendo-autocomplete\r\n                        [data]=\"vehicleData\"\r\n                        [filterable]=\"true\"\r\n                        (valueChange)=\"getRequestsList($event)\"\r\n                        (filterChange)=\"handleFilter2($event)\"\r\n                        class=\"trp-min-input trp-autocomplete\"\r\n                        [value]=\"vehicle_no\"\r\n                      >\r\n                      </kendo-autocomplete>\r\n\r\n\r\n                    </div>\r\n                      <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                          <table *ngIf=\"reqListOnVehicle && reqListOnVehicle !== '' && reqListOnVehicle !== null \" class=\"table table-sm\">\r\n                            <thead>\r\n                            <tr>\r\n                              <th scope=\"col\">ref no</th>\r\n                              <th scope=\"col\">Description</th>\r\n                              <th scope=\"col\">Departure time</th>\r\n                              <th scope=\"col\">Arrival time</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let request of reqListOnVehicle\">\r\n                              <td>TRD/{{request['refNo']}}</td>\r\n                              <td><b>{{request['departure']['pickupPoint']}}</b> to <b>{{request['arrival']['dropPoint']}}</b></td>\r\n                              <td>{{request['departure']['pickupTime']}}</td>\r\n                              <td>{{request['arrival']['dropTime']}}</td>\r\n\r\n                            </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                  </div>-->\r\n\r\n                  <app-set-vehicle\r\n                    [refNo]=\"refNo\"\r\n                    (setVehicle)=\"setVehicle($event)\"\r\n                    (setDriver)=\"setDriver($event)\"\r\n                  >\r\n\r\n                  </app-set-vehicle>\r\n\r\n\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!--end of add vehicle model-->\r\n\r\n      </div>\r\n      <div class=\"container\">\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

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
            location.reload();
        });
        // alert('accepted');
    };
    RequestAdminViewComponent.prototype.rejectReq = function () {
        this.requestService.change_status(this.request['refNo'], 3)
            .subscribe(function (response) {
            console.log(response['msg']);
            location.reload();
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
            //alert('daon');
            console.log(response['msg']);
            location.reload();
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

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n\r\n    <div id=\"auto_complete_sec\"></div>\r\n\r\n    <div id=\"driver_list\">\r\n\r\n      <div class=\"trp-one-driver\" *ngFor=\"let driver of driver_list\" (click)=\"onclickDriver(driver)\">\r\n        <img src=\"/assets/images/pattern/pattern.png\" alt=\"\" class=\"trp-driver-list-img\">\r\n        <h6 style=\"display:inline\">{{driver.name}}</h6>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n\r\n\r\n\r\n    <div class=\"row\" *ngIf=\"selectedDriver\">\r\n      <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n        <div class=\"\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-md-4\">\r\n              <img [src]=\"imageUrl\" style=\"height: 150px; width: 150px\" alt=\"\" class=\"img-fluid\" />\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-8\">\r\n              <h4>\r\n                {{selectedDriver.name | uppercase}}</h4>\r\n\r\n              <p>\r\n                <i class=\"glyphicon glyphicon-telephone\">{{selectedDriver.telephone}}</i>\r\n                <!-- {{driver.telephone}} -->\r\n                <br />\r\n                <i class=\"glyphicon glyphicon-globe\"></i>{{selectedDriver.driving_liecence_no}}\r\n                <br />\r\n                <!--<i class=\"glyphicon glyphicon-gift\"></i>{{selectedDriver.nic_no}}</p>-->\r\n              <!-- Split button -->\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n      <table *ngIf=\"reqListOnDriver && reqListOnDriver !== [] && reqListOnDriver !== null \" class=\"table table-sm\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\">Department/Unit</th>\r\n          <th scope=\"col\">Description</th>\r\n          <th scope=\"col\">Departure time</th>\r\n          <th scope=\"col\">Arrival time</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let request of reqListOnDriver\">\r\n          <td>TRD/{{request['dep_unit']}}</td>\r\n          <td><b>{{request['departure']['pickupPoint']}}</b> to <b>{{request['arrival']['dropPoint']}}</b></td>\r\n          <td>{{request['departure']['pickupTime']}}</td>\r\n          <td>{{request['arrival']['dropTime']}}</td>\r\n\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

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

module.exports = "<div class=\"row\">\r\n\r\n\r\n  <div class=\"col-md-6\" style=\"position: relative\">\r\n\r\n    <div id=\"\"></div>\r\n\r\n    <div id=\"vehicle_list\" data-spy=\"scroll\" data-target=\"drivers\">\r\n      <div id=\"drivers\" style=\"max-height: 400px;overflow-y: scroll;\">\r\n        <div role=\"tablist\" class=\"trp-one-driver\" *ngFor=\"let vehicle of vehicle_lists\" (click)=\"onclickVehicle(vehicle)\">\r\n          <img src=\"/assets/images/pattern/pattern.png\" alt=\"\" class=\"trp-driver-list-img\">\r\n          <h6 style=\"display:inline\">{{vehicle.vehicle_no}}</h6>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!--<div id=\"vehicle_list\" >\r\n\r\n      <div id=\"drivers\" >\r\n        <div  class=\"trp-one-driver\" *ngFor=\"let vehicle of vehicle_lists\" (click)=\"onclickVehicle(vehicle)\">\r\n          <img src=\"/assets/images/pattern/pattern.png\" alt=\"\" class=\"trp-driver-list-img\">\r\n          <h6 style=\"display:inline\">{{vehicle.vehicle_no}}</h6>\r\n        </div>\r\n      </div>\r\n\r\n    </div>-->\r\n\r\n  </div>\r\n  \r\n\r\n\r\n    <div class=\"row\" *ngIf=\"selectedVehicle\">\r\n      <div class=\"col-sm-6 col-md-6\">\r\n        <div class=\"\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-md-4\">\r\n              <img [src]=\"imageUrl\" style=\"height: 150px; width: 150px\" alt=\"\" class=\"img-fluid\" />\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-6\" >\r\n              <h4 >\r\n                {{selectedVehicle.vehicle_no | uppercase}}</h4>\r\n\r\n              <p>\r\n                <i class=\"glyphicon glyphicon-telephone\">{{selectedVehicle['vehicle_type']}}</i> </p>\r\n                <!-- {{driver.telephone}} -->\r\n                <br />\r\n              <p *ngIf=\"selectedVehicle['driver']\">{{selectedVehicle['driver']['name']}}</p>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n<div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n      <table *ngIf=\"reqListOnVehicle && reqListOnVehicle !== [] && reqListOnVehicle !== null \" class=\"table table-sm\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\">Department/Unit</th>\r\n          <th scope=\"col\">Description</th>\r\n          <th scope=\"col\">Departure time</th>\r\n          <th scope=\"col\">Arrival time</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let request of reqListOnVehicle\">\r\n          <td>TRD/{{request['dep_unit']}}</td>\r\n          <td><b>{{request['departure']['pickupPoint']}}</b> to <b>{{request['arrival']['dropPoint']}}</b></td>\r\n          <td>{{request['departure']['pickupTime']}}</td>\r\n          <td>{{request['arrival']['dropTime']}}</td>\r\n\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"modal-footer\" ngClass=\"\">\r\n  <button type=\"button\"  class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"set_vehicle()\"><i class=\"fa fa-add\"></i>Add</button>\r\n  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\r\n</div>\r\n"

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
            console.log('shedule', this.reqeustList);
            this.requests = this.reqeustList;
        }
    };
    SheduleComponent.prototype.ngOnChanges = function (changes) {
        if (!this.reqeustList) {
            this.get_requests();
        }
        else {
            console.log('shedule', this.reqeustList);
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
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/shedule/shedule.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
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

module.exports = "<div *ngIf=\"!isSubmited\">\r\n  <form class=\"form-horizontal\" #vehicleForm=\"ngForm\" (ngSubmit)=\"addVehicle(vehicleForm.value)\">\r\n    <fieldset>\r\n\r\n      <!-- Form Name -->\r\n      <legend>Add Vehicle</legend>\r\n\r\n      <!-- Text input-->\r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\" for=\"vehicle_no\">Vehicle No</label>\r\n        <div class=\"col-md-8\">\r\n          <input ngModel id=\"vehicle_no\" name=\"vehicle_no\" type=\"text\" placeholder=\"Vehicle's no\" class=\"form-control input-md\" required=\"\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Text input-->\r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\" for=\"chassi_no\">Chassis No</label>\r\n        <div class=\"col-md-8\">\r\n          <input ngModel id=\"chassi_no\" name=\"chassi_no\" type=\"text\" placeholder=\"Chassis no\" class=\"form-control input-md\" required=\"\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Text input-->\r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\" for=\"vehicle_type\">Vehicle Type</label>\r\n        <div class=\"col-md-8\">\r\n\r\n          <select ngModel name=\"vehicle_type\" id=\"vehicle_type\" class=\"form-control input-md\">\r\n\r\n            <option value=\"car\">Car</option>\r\n            <option value=\"van\">Van</option>\r\n            <option value=\"bus\">Bus</option>\r\n            <option value=\"three_wheel\">Three Wheel</option>\r\n\r\n          </select>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- Text input-->\r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\" for=\"driver\">Driver</label>\r\n        <div class=\"col-md-8\">\r\n\r\n          <select ngModel name=\"driver\" id=\"driver\" class=\"form-control input-md\">\r\n\r\n            <option *ngFor=\"let driver of driverList\" value=\"{{driver['_id']}}\">{{driver['name']}}</option>\r\n\r\n          </select>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"col-md-4 \">\r\n          <button class=\"btn btn-primary\" ><i class=\"fa fa-add\"></i> Add</button>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n  </form>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"isSubmited\">\r\n  <img src=\"/assets/images/loading.gif\" alt=\"\" style=\"height: 100px;\r\n    margin-top: 25vh;\r\n    margin-left: 50vh;\r\n    margin-bottom: 25vh;\">\r\n</div>\r\n"

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
                location.reload();
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

/***/ "../../../../../src/app/components/main/admin/vehicle/vehicle-list/vehicle-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/admin/vehicle/vehicle-list/vehicle-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-7\">\r\n\r\n    <mat-card *ngIf=\"selectedVehicle\">\r\n      <img mat-card-avatar src=\"../../../../../../assets/images/pattern/pattern.png\">\r\n      <mat-card-title style=\"display:inline\"> {{ selectedVehicle['vehicle_no'] }}</mat-card-title>\r\n    </mat-card>\r\n\r\n      <app-sheduler *ngIf=\"requests\" [requests]=\"requests\"></app-sheduler>\r\n\r\n      <app-sheduler *ngIf=\"!requests\" [requests]=\"[]\"></app-sheduler>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-lg-5\" *ngIf=\"vehicles\">\r\n\r\n    <div style=\"overflow-y: scroll; height:55vh;\">\r\n      <mat-card style=\"cursor: pointer\" [ngClass]=\"{clicked: clickedItem === vehicle['_id']}\" (click)=\"selectVehicle(vehicle)\"  *ngFor=\"let vehicle of vehicles\" >\r\n\r\n          <img mat-card-sm-image src=\"../../../../../../assets/images/pattern/pattern.png\" style=\"display: inline\">\r\n          <mat-card-subtitle style=\"display:inline\">{{ vehicle['vehicle_no'] }}</mat-card-subtitle>\r\n\r\n      </mat-card>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/admin/vehicle/vehicle-list/vehicle-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleListComponent; });
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


var VehicleListComponent = /** @class */ (function () {
    function VehicleListComponent(adminService) {
        this.adminService = adminService;
        this.options = [];
        this.vehicles = [];
    }
    VehicleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getVehicle_to_req()
            .subscribe((function (response) {
            console.log(response['data']);
            _this.vehicles = response['data'];
        }));
    };
    VehicleListComponent.prototype.selectVehicle = function (vehicle) {
        //console.log(vehicle);
        var _this = this;
        this.clickedItem = vehicle['_id'];
        this.selectedVehicle = vehicle;
        //alert(this.clickedItem);
        this.requests = undefined;
        this.adminService.getRequestsOnVehicleForCalender(this.clickedItem)
            .then(function (events) {
            _this.requests = events;
        });
        this.options = {
            weekends: true,
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            }
        };
    };
    VehicleListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vehicle-list',
            template: __webpack_require__("../../../../../src/app/components/main/admin/vehicle/vehicle-list/vehicle-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/admin/vehicle/vehicle-list/vehicle-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]])
    ], VehicleListComponent);
    return VehicleListComponent;
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

module.exports = "<!--\r\n<div class=\"container\" *ngIf=\"driver\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n      <div class=\"\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 col-md-4\">\r\n            <img src=\"http://placehold.it/150x150\" alt=\"\" class=\"img-fluid\" />\r\n          </div>\r\n          <div class=\"col-sm-6 col-md-8\">\r\n            <h4>\r\n              {{driver.name | uppercase}}</h4>\r\n            <small><cite title=\"San Francisco, USA\">San Francisco, USA <i class=\"glyphicon glyphicon-map-marker\">\r\n            </i></cite></small>\r\n            <p>\r\n              <i class=\"glyphicon glyphicon-telephone\"></i>\r\n              &lt;!&ndash; {{driver.telephone}} &ndash;&gt;\r\n              <br />\r\n              <i class=\"glyphicon glyphicon-globe\"></i><a href=\"http://www.jquery2dotnet.com\">{{driver.driving_liecence_no}}</a>\r\n              <br />\r\n              <i class=\"glyphicon glyphicon-gift\"></i>{{driver.nic_no}}</p>\r\n            &lt;!&ndash; Split button &ndash;&gt;\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n\r\n  <h4>Shedule</h4>\r\n  <div class=\"btn-group\" role=\"group\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onClickDay()\">Day</button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onClickMonth()\">Month</button>\r\n  </div>\r\n  <br>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n\r\n\r\n\r\n    <table *ngIf=\"reqListOnDriver[0] && reqListOnDriver !== [] && reqListOnDriver !== null \" class=\"table table-sm table-hover\">\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">Department/Unit</th>\r\n        <th scope=\"col\">Description</th>\r\n        <th scope=\"col\">Departure time</th>\r\n        <th scope=\"col\">Arrival time</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr style=\"cursor: pointer\" *ngFor=\"let request of reqListOnDriver\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\" (click)=\"selectRequest(request)\">\r\n        <td>{{request['dep_unit']}}</td>\r\n        <td><b>{{request['departure']['pickupPoint']}}</b> to <b>{{request['arrival']['pickupPoint']}}</b></td>\r\n        <td>{{request['departure']['pickupTime']}}</td>\r\n        <td>{{request['arrival']['dropTime']}}</td>\r\n\r\n      </tr>\r\n      </tbody>\r\n\r\n\r\n\r\n      &lt;!&ndash; request modal &ndash;&gt;\r\n\r\n      <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n          <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">TRD/{{selectedReq['refNo']}} - Details</h5>\r\n              <button *ngIf=\"selectedReq['vehicle']\" (click)=\"printPdf()\">print</button>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n\r\n            <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n\r\n                <div class=\"container-fluid\">\r\n                  <div class=\"row\" >\r\n\r\n                    <div class=\"col-lg-12\" id=\"details_section\">\r\n                      &lt;!&ndash;        collapse div section stating   &ndash;&gt;\r\n\r\n                      <div\r\n                        [ngClass]=\"{\r\n              'alert-danger': selectedReq.status == 3,\r\n              'alert-primary': selectedReq.status == 2,\r\n              'alert-success' : selectedReq.status == 1,\r\n              'alert-warning': selectedReq.status == 0\r\n            }\"\r\n                        class=\"alert\" role=\"alert\">\r\n                        <div *ngIf=\"selectedReq.status == '0'\">\r\n                          <i class=\"fa fa-info\"></i>\r\n                          selectedReq is not being reviewed\r\n                        </div>\r\n\r\n                        <div *ngIf=\"selectedReq.status == '1'\">\r\n                          <i class=\"fa fa-info\"></i>\r\n                          Request is Accepted. please supply futher information in more info section to proceed further\r\n                        </div>\r\n\r\n                        <div *ngIf=\"selectedReq.status == '2'\">\r\n                          <i class=\"fa fa-info\"></i>  Request is confirmed  <button class=\"btn btn-primary\">Download Application</button>\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n                      <div id=\"accordion\">\r\n                        <div class=\"card\">\r\n                          <div\r\n                            class=\"card-header bg-dark text-white\" id=\"headingOne\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n\r\n                            [attr.aria-expanded]=\"selectedReq.status != '1'\"\r\n                            aria-controls=\"collapseOne\">\r\n                            <h6 class=\"mb-0\">\r\n                              <i class=\"fa fa-map\"></i>\r\n                              Trip Section\r\n                            </h6>\r\n                          </div>\r\n\r\n                          <div id=\"collapseOne\" class=\"collapse\"\r\n                               [class.show]=\"selectedReq.status != '1'\"\r\n                               aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n                            <div class=\"card-body\">\r\n                              <div>\r\n                                <h6>Departure</h6>\r\n                                <table class=\"table table-sm\">\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      Date\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.departure.pickupDate}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      Time\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.departure.pickupTime}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      From\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.departure.pickupPoint}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      To\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.departure.dropPoint}}\r\n                                    </td>\r\n                                  </tr>\r\n                                </table>\r\n                              </div>\r\n\r\n                              <div>\r\n                                <h6>Arrival</h6>\r\n                                <table class=\"table table-sm\">\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      Date\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.arrival.dropDate}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      Time\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.arrival.dropTime}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      From\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.arrival.dropPoint}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n\r\n                                    <th scope=\"row\">\r\n                                      To\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.arrival.pickupPoint}}\r\n                                    </td>\r\n                                  </tr>\r\n                                </table>\r\n                              </div>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"card\">\r\n                          <div\r\n                            [ngClass]=\"{'bg-danger':!selectedReq.vehicle, 'bg-success': selectedReq.vehicle}\"\r\n                            class=\"card-header text-white\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                            <h6 class=\"mb-0\">\r\n                              <i class=\"fa fa-car\"></i>\r\n                              Vehicle Section\r\n                            </h6>\r\n                          </div>\r\n\r\n                          <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n                            <div\r\n                              [ngClass]=\"{'text-danger': !vehicle, 'text-success' : vehicle}\"\r\n                              class=\"card-body\">\r\n                              <div *ngIf=\"selectedReq.vehicle\">\r\n                                Vehicle no: {{selectedReq.vehicle.vehicle_no}}\r\n                              </div>\r\n                              <div *ngIf=\"!selectedReq.vehicle\">\r\n                                <p class=\"card-text\">\r\n                                  Vehicle is not assigned yet\r\n                                </p>\r\n\r\n                              </div>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n\r\n                        &lt;!&ndash;<div class=\"card\">\r\n                          <div\r\n                            [ngClass]=\"{\r\n                      'bg-danger':!selectedReq.driver, 'bg-success': selectedReq.driver}\"\r\n                            class=\"card-header text-white\" id=\"headingThree\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                            <h6 class=\"mb-0\">\r\n                              <i class=\"fa fa-car\"></i>\r\n                              Driver Section\r\n                            </h6>\r\n                          </div>\r\n\r\n                          <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n                            <div\r\n                              [ngClass]=\"{'text-danger':!selectedReq.driver, 'text-success' : selectedReq.driver}\"\r\n                              class=\"card-body\">\r\n                              <div *ngIf=\"selectedReq.driver\">\r\n                                Driver name: {{selectedReq.driver.name}}\r\n                              </div>\r\n                              <div *ngIf=\"!test\">\r\n                                <p class=\"card-text\">\r\n                                  Driver is not set\r\n                                </p>\r\n\r\n                              </div>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>&ndash;&gt;\r\n\r\n\r\n                        <div class=\"card\">\r\n                          <div\r\n                            class=\"bg-primary card-header text-white\" id=\"headingFour\" data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\r\n                            <h6 class=\"mb-0\">\r\n                              <i class=\"fa fa-info\"></i>\r\n                              Details Section\r\n                            </h6>\r\n                          </div>\r\n\r\n                          <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordion\">\r\n                            <div class=\"card-body\">\r\n\r\n                              <div class=\"container-fluid\">\r\n                                <table class=\"table table-sm\">\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Refferance No\r\n                                    </th>\r\n                                    <td>\r\n                                      TRD/{{selectedReq.refNo}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Lecturer\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.lecturer}}\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Designation\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.position}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Department/ Unit\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.dep_unit}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Purpose\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.purpose}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Funding method\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.fundingWay}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Email\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.email}}\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Password\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.password}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <th scope=\"row\">\r\n                                      Number of Passangers\r\n                                    </th>\r\n                                    <td>\r\n                                      {{selectedReq.num_passangers}}\r\n                                    </td>\r\n                                  </tr>\r\n\r\n\r\n\r\n\r\n                                </table>\r\n                              </div>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n\r\n\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      &lt;!&ndash;end of request modal &ndash;&gt;\r\n\r\n\r\n\r\n    </table>\r\n    <div class=\"row\" *ngIf=\"!reqListOnDriver[0]\">\r\n      <div  class=\"alert alert-warning text-center \">\r\n        no duties\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n-->\r\n"

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
exports.push([module.i, ".trp-btn{\r\n  background-color: #C01830;\r\n}\r\n\r\n.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; }\r\n\r\n.embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }\r\n\r\n.trp-how-to{\r\n   font-family: 'Kaushan Script', cursive;\r\n   color: #cc6600;\r\n   padding-bottom: 10px;\r\n   padding-top:10px;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"\" ><!--style=\"padding-left: 3vh; padding-right: 3vh; padding-top: 2vh\"-->\r\n  <app-notice></app-notice>\r\n\r\n</div>\r\n\r\n<link href=\"https://fonts.googleapis.com/css?family=Kaushan+Script\" rel=\"stylesheet\">\r\n\r\n<div class=\"jumbotron\">\r\n  <div class=\"\" style=\"margin:1em\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-5\" style=\"\">\r\n        <h2 class=\"trp-how-to\">How to reserve</h2>\r\n        <div class='video-container'><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/2XTpzlM1s2s\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>\r\n      </div>\r\n      <mat-divider [vertical]=\"true\" style=\"    margin-right: 3vw;  margin-left: 3vw;\"></mat-divider>\r\n      <div class=\"col-lg-5\">\r\n          <h2 class=\"trp-how-to\">How to check Status</h2>\r\n          <div class='video-container'><iframe src='https://www.youtube.com/embed/Ok6VMOyTkP8' frameborder='0' allowfullscreen></iframe></div>\r\n      </div>\r\n     <!-- <div class=\"col-lg-4 \">\r\n          <h2 class=\"trp-how-to\">Complete journey</h2>\r\n          <div class='video-container'><iframe src='https://www.youtube.com/embed/2eawcAJhnDU' frameborder='0' allowfullscreen></iframe></div>\r\n      </div>-->\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

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

module.exports = "\r\n<!--<div class=\"row\" @slide style=\"margin: 0; padding-top: 3vh\" >\r\n\r\n  <div class=\"col-lg-5 col-sm-6\">\r\n    <div class=\"input-wrapper trp-notice-background w-100\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n            <div class=\"trp-check-date-div\">\r\n              <label class=\"trp-check-date\">Check date:</label>\r\n              <input [(ngModel)]=\"selectedDate\"\r\n                     [owlDateTimeTrigger]=\"dtPicker1\"\r\n                     [owlDateTime]=\"dtPicker1\"\r\n                     class=\"trp-min-input\"\r\n              >\r\n              <fa name=\"calendar\" class=\"errspan\"></fa>\r\n              <owl-date-time\r\n                (afterPickerClosed)=\"picker()\"\r\n                [pickerType]=\"'calendar'\"\r\n                #dtPicker1></owl-date-time>\r\n\r\n              <div class=\"card\">\r\n                <ul class=\"list-group list-group-flush\">\r\n                  <li class=\"list-group-item\" *ngFor=\"let vehicle of availableVehicles\">{{vehicle.type}}{{vehicle.left}}</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-7 col-sm-12\">\r\n    <div id=\"notice-main\">\r\n\r\n\r\n\r\n      <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <div class=\"carousel-inner \">\r\n\r\n\r\n\r\n\r\n          <div class=\"carousel-item active\">\r\n            <img class=\"d-block w-100 trp-sliderImg\" src=\"assets/images/slider/image4.jpg\" alt=\"First slide\">\r\n          </div>\r\n          <div class=\"carousel-item\">\r\n            <img class=\"d-block w-100 trp-sliderImg\" src=\"assets/images/slider/image3.jpg\" alt=\"Second slide\">\r\n          </div>\r\n\r\n        </div>\r\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>-->\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 col-md-12 col-xs-12\" style=\"background-color: black;overflow: hidden\">\r\n      <div class=\"trp-home-main-div\" style=\"overflow: hidden;position: relative\">\r\n\r\n\r\n        <div class=\"input-wrapper trp-notice-background w-100\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n\r\n             <!--\r\n\r\n             ## date checker\r\n\r\n             <div class=\"col-lg-6 col-md-6 col-sm-12 offset-lg-5 offset-md-5\">\r\n                <div class=\"trp-check-date-div\">\r\n                  <label class=\"trp-check-date\">Check date:</label>\r\n                  <input [(ngModel)]=\"selectedDate\"\r\n                         [owlDateTimeTrigger]=\"dtPicker1\"\r\n                         [owlDateTime]=\"dtPicker1\"\r\n                         class=\"trp-min-input\"\r\n                  >\r\n                  <fa name=\"calendar\" class=\"errspan\"></fa>\r\n                  <owl-date-time\r\n                    (afterPickerClosed)=\"picker()\"\r\n                    [pickerType]=\"'calendar'\"\r\n                    #dtPicker1></owl-date-time>\r\n\r\n                  <div class=\"card\">\r\n                    <ul class=\"list-group list-group-flush\">\r\n                      <li class=\"list-group-item\" *ngFor=\"let vehicle of availableVehicles\">{{vehicle.type}}{{vehicle.left}}</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>-->\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <img src=\"/assets/images/background/uok.jpg\" alt=\"\" class=\"trp-home-main-img\" style=\"width: 100%\">\r\n        <!--<img src=\"/assets/images/background/bluebackground-01.svg\" alt=\"\" class=\"trp-home-main-img\" style=\"\">-->\r\n\r\n      </div>\r\n\r\n      <img src=\"/assets/images/background/zebraline.svg\" alt=\"\" style=\"padding-top: 5px;padding-right: 5px\">\r\n\r\n      <!--<hr class=\"trp-home-hr\" style=\"border-color: white\">-->\r\n     <!-- <div class=\"container\" style=\"padding: 6px; background-color: #cc6600\">\r\n        <h2 class=\"text-white text-center text-capitalize\">Mision</h2>\r\n        <p class=\"text-white\" style=\"font-size: 1.2em; font-weight: bold\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>\r\n\r\n      </div>-->\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"col-lg-4 col-md-12 col-xs-12\">\r\n\r\n      <app-request-btns></app-request-btns>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

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

module.exports = "\r\n<!--<div>\r\n\r\n    <img src=\"assets/images/pattern/title.png\" alt=\"\" class=\"trd-title-arrow\">\r\n\r\n  <h4 class=\"trp-title\">\r\n    Review your Request\r\n  </h4>\r\n\r\n  <div class=\"text-center trp-requestBtn\">\r\n    <p>\r\n      We try our best to make yourself comfortable\r\n    </p>\r\n    <button\r\n      class=\"trp-btn\"\r\n      type=\"button\"\r\n      data-toggle=\"modal\" data-target=\"#req_status_Modal\"\r\n    >\r\n      Review <fa name=\"arrow-right\" inverse=\"true\"> </fa></button>\r\n  </div>\r\n\r\n  &lt;!&ndash;[routerLink]=\"['request/check_req']\"&ndash;&gt;\r\n</div>-->\r\n\r\n<div class=\"col-md-12 text-center\">\r\n  <img src=\"/assets/images/background/reservation.png\" alt=\"\" class=\"trp-home-menu\">\r\n  <h5 class=\"trp-home-text\">Check the status of your request....</h5>\r\n  <button class=\"trp-home-btn\" data-toggle=\"modal\" data-target=\"#req_status_Modal\">Check Request...</button>\r\n</div>\r\n\r\n\r\n<div class=\"modal\" id=\"req_status_Modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" style=\"height: fit-content;\">\r\n  <div class=\"\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">View Status Window</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n          <app-status-msg></app-status-msg>\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "\r\n\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-4\">\r\n      <img src=\"../../../../../../../assets/images/logo/logo.png\" alt=\"\" style=\"height: 20vh;padding-top: 20px;\"> <br>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-8\" [ngSwitch]=\"status\">\r\n      <div *ngSwitchCase=\"0\" class=\"text-center\">\r\n        <div class=\"alert alert-warning\" role=\"alert\">\r\n          <strong>Sorry !</strong> Your request in not being review yet.\r\n        </div>\r\n        <button class=\"btn btn-warning\" [routerLink]=\"['/request/view_req/'+refNo]\" data-dismiss=\"modal\" aria-label=\"Close\">View more</button>\r\n      </div>\r\n      <div *ngSwitchCase=\"1\" class=\"text-center\" >\r\n        <div class=\"alert alert-success\" role=\"alert\">\r\n          <strong>Success!</strong>  Your request is accepted... <br>\r\n          <strong>fill more details</strong>. <br>\r\n        </div>\r\n        <button class=\"btn btn-success\" [routerLink]=\"['/request/view_req/'+refNo]\" data-dismiss=\"modal\" aria-label=\"Close\">View more</button>\r\n\r\n      </div>\r\n      <div *ngSwitchCase=\"2\" class=\"text-center\">\r\n        <div class=\"alert alert-success\" role=\"alert\">\r\n          <strong>Confirmed</strong>  Your request is confirmed\r\n        </div>\r\n        <button class=\"btn btn-success\" [routerLink]=\"['/request/view_req/'+refNo]\" data-dismiss=\"modal\" aria-label=\"Close\">View more</button>\r\n      </div>\r\n      <div *ngSwitchCase=\"3\" class=\"text-center\">\r\n\r\n        <div class=\"alert alert-danger\" role=\"alert\">\r\n          <strong>Sorry !</strong> Your request is rejected.\r\n        </div>\r\n        <button class=\"btn btn-danger\" [routerLink]=\"['/request/view_req/'+refNo]\" data-dismiss=\"modal\" aria-label=\"Close\">View more</button>\r\n      </div>\r\n      <div *ngSwitchCase=\"5\" class=\"text-center\">\r\n        <div class=\"alert alert-danger\" role=\"alert\">\r\n          <strong>Error !</strong> Referance number or password is invalid.\r\n        </div>\r\n        <button class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"reset()\">Try again</button>\r\n\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"6\" class=\"text-center\">\r\n\r\n        <img src=\"/assets/images/loading.gif\" alt=\"\" style=\"height: 50px;margin-top: 20px; margin-bottom: 20px;\">\r\n\r\n      </div>\r\n\r\n\r\n      <div *ngSwitchDefault class=\"row\">\r\n\r\n\r\n        <div class=\"col-md-12\">\r\n          <form class=\"form-horizontal\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\">\r\n            <fieldset>\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-12 control-label\" for=\"redNo\">Refarance No</label>\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"input-group\">\r\n                    <!--<span class=\"input-group-addon\">TRD</span>-->\r\n                    <input id=\"redNo\" name=\"refNo\" autofocus [(ngModel)]=\"refNo\" class=\"form-control input-md\" placeholder=\"Ex: - 5\" type=\"text\" required=\"\">\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Text input-->\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-12 control-label\" for=\"password\">Password</label>\r\n                <div class=\"col-md-12\">\r\n                  <input id=\"password\" name=\"password\" [(ngModel)]=\"password\" type=\"password\" placeholder=\"enter your password here\" class=\"form-control input-md\" required=\"\">\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group text-center\">\r\n                <button class=\"btn trp-btn\">View</button>\r\n              </div>\r\n\r\n            </fieldset>\r\n          </form>\r\n         <!-- <button (click)=\"logout()\">ok</button>-->\r\n        </div>\r\n       <!-- <div class=\"col-md-2\">\r\n\r\n        </div>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n"

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

module.exports = "\r\n<section class=\"login-block\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 login-sec\">\r\n        <h2 class=\"text-center\">Administrator Login</h2>\r\n        <form class=\"login-form\" #loginForm (submit)=\"login(loginForm)\" >\r\n          <div class=\"form-group\">\r\n            <label  class=\"text-uppercase\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"\" type=\"text\" [(ngModel)]=\"username\" name=\"username\">\r\n\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label  class=\"text-uppercase\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"password\" name=\"password\">\r\n          </div>\r\n\r\n\r\n          <div class=\"form-check\">\r\n            <!--<label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input\">\r\n              <small>Remember Me</small>\r\n            </label>-->\r\n            <button type=\"submit\" class=\"btn btn-login float-right\">Submit</button>\r\n          </div>\r\n\r\n        </form>\r\n        <!--<div class=\"copy-text\">Created with <i class=\"fa fa-heart\"></i> by <a href=\"http://grafreez.com\">Grafreez.com</a></div>-->\r\n      </div>\r\n      <div class=\"col-md-8 banner-sec\">\r\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n          <ol class=\"carousel-indicators\">\r\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n          </ol>\r\n          <div class=\"carousel-inner\" role=\"listbox\">\r\n            <div class=\"carousel-item active\">\r\n              <img class=\"\" src=\"../../assets/images/background/cover.jpg\" alt=\"First slide\" style=\"height: 70vh;\">\r\n              <div class=\"carousel-caption d-none d-md-block\">\r\n                <div class=\"banner-text\">\r\n                  <h2>Login</h2>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n</section>\r\n"

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
                    _this.router.navigate(['/admin/dashboard']);
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/request/request-form/request-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-5 col-md-6 col-sm-10\">\r\n\r\n\r\n\r\n  </div>\r\n    <div class=\"col-xl-8 col-lg-7 col-md-6 col-sm-10\"></div>\r\n\r\n    &lt;!&ndash;<div class=\"col-xl-4 col-lg-3 col-md-2 col-sm-1\"></div>&ndash;&gt;\r\n\r\n\r\n  </div>\r\n</div>-->\r\n\r\n<div class=\"\">\r\n  <div class=\"row\">\r\n    <section class=\"login-block\">\r\n      <div class=\"container\" id=\"login-section\" >\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5 login-sec\" id=\"login-partial\">\r\n\r\n            <div *ngIf=\"isLoading\" style=\"    text-align: center;\r\n                                                margin-top: 70px;\r\n                                                margin-bottom: 30px;\">\r\n\r\n              <img src=\"/assets/images/loading.gif\" alt=\"\" style=\"height: 50px;margin-top: 20px; margin-bottom: 20px;\">\r\n              <br>\r\n              <label for=\"\">Pleas wait!</label>\r\n            </div>\r\n\r\n            <div *ngIf=\"!isLoading\">\r\n              <div class=\"card\"  [ngSwitch]=step @slide >\r\n\r\n                <div class=\"trp-form-div card-body\" style=\"    padding: 10px;    overflow: hidden;\" #formDiv>\r\n\r\n                  <h2 style=\"text-align: center\" class=\"\">Plan a journey</h2>   <!--trp-title card-title-->\r\n                  <div class=\"row trp-form-bar\" >\r\n                    <div class=\"col-md-4 col-sm-3 col-4 trp-align-center {{isActive(1)}}\" >\r\n                      <fa name=\"location-arrow\" inverse=\"true\" size=\"1x\" > </fa>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-3 col-4 trp-align-center {{isActive(2)}}\" >\r\n                      <fa name=\"calendar\" inverse=\"true\" size=\"1x\" > </fa>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-3 col-4 trp-align-center {{isActive(3)}}\">\r\n                      <fa name=\"info-circle\" inverse=\"true\" size=\"1x\" > </fa>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"alert alert-danger\" role=\"alert\" style=\"margin-top: 8px\" [hidden]=\"!formD.isError\">\r\n                    <strong>Error! </strong> {{formD.errMsg.toString()}}\r\n                  </div>\r\n                  <div id=\"step1\"  *ngSwitchCase=\"1\"  >\r\n\r\n\r\n\r\n                    <div class=\"\">\r\n                      <label for=\"pickupPoint\">Pickup Point</label>\r\n                      <input type=\"text\"  autocomplete=\"off\" placeholder=\"search for pickup location\" autocapitalize=\"off\" id=\"pickupPoint\" name=\"pickupPoint\" class=\"trp-min-input\" #search required>\r\n                    </div>\r\n\r\n                    <div class=\"\">\r\n                      <label for=\"dropPoint\">Drop Point</label>\r\n                      <input type=\"text\"  autocomplete=\"off\" placeholder=\"search for drop location\" autocapitalize=\"off\" id=\"dropPoint\" name=\"dropPoint\" class=\"trp-min-input\" #search2 required>\r\n                    </div>\r\n                    <div class=\"  \">\r\n\r\n                      <label for=\"form-numOfPassanger\">Number of Passangers</label>\r\n                      <input class=\"trp-min-input \" type=\"number\" [(ngModel)]=\"formData.num_passangers\" id=\"form-numOfPassanger\" name=\"numOfPassangers\" required>\r\n                    </div>\r\n\r\n\r\n                  <!--  <input atp-time-picker value=\"19:00\"/>-->\r\n                    <div style=\"text-align: center; padding:0 10px 0 10px \">\r\n                      <Button type=\"button\"\r\n                              [disabled]=\"!arrival.pickPointAddress || !departure.pickPointAddress || !formData.num_passangers\"\r\n                              class=\"trp-btn\"\r\n                              [class.btn-disabled]=\"!arrival.pickPointAddress || !departure.pickPointAddress || !formData.num_passangers\"\r\n                              (click)=\"nextStep(2)\"\r\n                              style=\"margin-top: 20px;\"\r\n                      >\r\n                        Next <fa name=\"arrow-right\" inverse=\"true\"> </fa>\r\n                      </Button>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n\r\n                  <div id=\"step2\" *ngSwitchCase=\"2\" >\r\n\r\n                    <div class=\"input-wrapper\">\r\n                      <label for=\"\">Is this a one day trip?</label>\r\n\r\n                      <!-- Disabled Switch -->\r\n                      <div class=\"switch\">\r\n                        <label>\r\n                          No\r\n                          <input type=\"checkbox\" [(ngModel)]=\"isOneDaytrip\">\r\n                          <span class=\"lever\"></span>\r\n                          Yes\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"input-wrapper\">\r\n                      <label>Date to pick you :</label>\r\n                      <input [(ngModel)]=\"departure.pickupDate\"\r\n                             [owlDateTimeTrigger]=\"dtPicker1\"\r\n                             [owlDateTime]=\"dtPicker1\"\r\n                             class=\"trp-min-input\"\r\n                             [min]=\"today\"\r\n                      >\r\n                      <owl-date-time\r\n                        #dtPicker1 [pickerType]=\"'calendar'\"></owl-date-time>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"input-wrapper\">\r\n                      <label>Time to pick you :</label>\r\n\r\n                      <input class=\"trp-min-input\" atp-time-picker value=\"\" [(ngModel)] = \"this.departure.pickupTime\" />\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"  \" *ngIf=\"!isOneDaytrip\">\r\n                      <label>Returning date:</label>\r\n                      <input [(ngModel)]=\"arrival.dropDate\"\r\n                             [owlDateTimeTrigger]=\"dtPicker2\"\r\n                             [owlDateTime]=\"dtPicker2\"\r\n                             class=\"trp-min-input\"\r\n                             [min]=\"departure.pickupDate\"\r\n                      >\r\n                      <owl-date-time\r\n                        #dtPicker2 [pickerType]=\"'calendar'\"\r\n                      ></owl-date-time>\r\n\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"input-wrapper\">\r\n                      <label>Returning time :</label>\r\n\r\n                      <input class=\"trp-min-input\" atp-time-picker value=\"\" [(ngModel)] = \"this.arrival.dropTime\" />\r\n\r\n                    </div>\r\n\r\n\r\n                    <div style=\"text-align: center; padding:0 10px 0 10px \">\r\n\r\n                      <Button type=\"button\"\r\n                              class=\"trp-btn\"\r\n                              [disabled]=\"!departure.pickupTime || !arrival.dropTime ||  !departure.pickupDate\"\r\n                              [class.btn-disabled]=\"!departure.pickupTime || !arrival.dropTime || !departure.pickupDate\"\r\n                              (click)=\"nextStep(3)\"\r\n                              style=\"margin-top: 20px;\"\r\n                      >\r\n                        Next <fa name=\"arrow-right\" inverse=\"true\"> </fa>\r\n                      </Button>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div id=\"step3\"  *ngSwitchCase=\"3\" >\r\n                    <div class=\"\" style=\"display: inline\">\r\n                      <label label=\"name\" for=\"form-name\">Name</label>\r\n                      <input type=\"text\" class=\" trp-min-input \" [(ngModel)]=\"formData.lecturer\" id=\"form-name\" name=\"name\">\r\n\r\n                    </div>\r\n                    <br>\r\n\r\n                    <div class=\"example-wrapper\">\r\n                      <label for=\"\">Department/Unit</label>\r\n\r\n                      <kendo-autocomplete\r\n                        [data]=\"data\"\r\n                        [filterable]=\"true\"\r\n                        (filterChange)=\"handleFilter($event)\"\r\n                        class=\"trp-select trp-min-input trp-autocomplete\"\r\n                        [(value)]=\"formData.dep_unit\"\r\n                      >\r\n                      </kendo-autocomplete>\r\n                    </div>\r\n                    <div class=\"  \">\r\n                      <label for=\"form-email\">Email</label>\r\n                      <input class=\" trp-min-input \" type=\"email\" [(ngModel)]=\"formData.email\" id=\"form-email\" name=\"email\">\r\n                    </div>\r\n\r\n                    <div class=\"  \">\r\n                      <label for=\"form-password\">Password</label>\r\n                      <input class=\" trp-min-input \" type=\"password\" minlength=\"11\" [(ngModel)]=\"formData.password\" id=\"form-password\" name=\"password\">\r\n                    </div>\r\n\r\n                    <div class=\"  \">\r\n                      <label for=\"form-password-re\">Retype Password</label>\r\n                      <input class=\" trp-min-input \" id=\"form-password-re\" type=\"password\" [(ngModel)]=\"rePassword\" name=\"password\">\r\n                    </div>\r\n                    <div style=\"text-align: center; padding:0 10px 0 10px \">\r\n                      <Button type=\"button\" class=\"trp-btn\" (click)=\"nextStep(2)\" style=\"margin-top: 20px;\"><fa name=\"arrow-left\" inverse=\"true\"> </fa> Back</Button>\r\n                      <Button\r\n                        type=\"button\"\r\n                        class=\"trp-btn\"\r\n                        (click)=\"validateForm()\"\r\n                        style=\"margin-top: 20px;\"\r\n\r\n                      >Request <fa name=\"arrow-right\" inverse=\"true\"> </fa></Button>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <div id=\"step4\"  *ngSwitchCase=\"4\" >\r\n\r\n\r\n                    <div class=\"card text-center\" style=\"margin-top: 5px\">\r\n                      <div class=\"card-header bg-success text-white\">\r\n                        Successfully Reqeusted!\r\n                      </div>\r\n                      <div class=\"card-body\">\r\n                        <h5 class=\"card-title\" style=\"margin-top: 5px\">Your Credentials...</h5>\r\n\r\n\r\n                        <table class=\"table\">\r\n                          <tbody>\r\n                          <tr>\r\n                            <td>Refferance No</td>\r\n                            <td>TRD/{{refNoOfCreated}}</td>\r\n\r\n                          </tr>\r\n\r\n                          <tr>\r\n\r\n                            <td>Password</td>\r\n                            <td>1234</td>\r\n                          </tr>\r\n                          </tbody>\r\n                        </table>\r\n\r\n                        <p class=\"card-text\">Please use above credential to further inquries about this request</p>\r\n                        <a href=\"/\" class=\"btn btn-success\" style=\"margin-bottom: 5px\">Got it..</a>\r\n                      </div>\r\n                      <div class=\"card-footer text-muted \">\r\n                        Thank You!\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!--<div class=\"copy-text\">Created with <i class=\"fa fa-heart\"></i> by <a href=\"http://grafreez.com\">Grafreez.com</a></div>-->\r\n          </div>\r\n          <div class=\"col-md-7 \" style=\"\"><!--banner-sec-->\r\n            <!--<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n              <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n              </ol>\r\n              <div class=\"carousel-inner\" role=\"listbox\">\r\n                <div class=\"carousel-item active\">\r\n                  <img class=\"d-block img-fluid\" src=\"../../../../../assets/images/background/cover.jpg\" alt=\"First slide\" style=\"height: 70vh\">\r\n                  <div class=\"carousel-caption d-none d-md-block\">\r\n                    <div class=\"banner-text\">\r\n                      <h2>Now it's easy!</h2>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                  <img class=\"d-block img-fluid\" src=\"../../../../../assets/images/background/cover.jpg\" alt=\"First slide\" style=\"height: 70vh\">\r\n                  <div class=\"carousel-caption d-none d-md-block\">\r\n                    <div class=\"banner-text\">\r\n                      <h2>It's reliable</h2>\r\n                     &lt;!&ndash; <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>&ndash;&gt;\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                  <img class=\"d-block img-fluid\" src=\"../../../../../assets/images/background/cover.jpg\" alt=\"First slide\" style=\"height: 70vh\">\r\n                  <div class=\"carousel-caption d-none d-md-block\">\r\n                    <div class=\"banner-text\">\r\n                      <h2></h2>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>-->\r\n\r\n\r\n\r\n\r\n            <div class=\"row hide-on-small-only\" style=\"margin-top: 5vw;\">\r\n\r\n              <div class=\"col s4\" style=\"text-align: center\" >\r\n                <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARPSURBVGhD7ZhbqBVlGIa3qbHdhpgE20JNTbHyhGJpkZQhBKU32Y0RiCdQsTtTEVHpSvMAEVGboB1RiJIWEaJIGYmiRSASnnahgie8SNGkxNrL5128W5y9Zq31z6yZtS9aLzzMfIf/++dbaw7/TFNDDTXUc+rs7BwAL8I8WAfboM3InuTUfMVE8+FLm0EifzpsgRMg3YFzcBC+KhQKO9l+AYfhP2jH96CH5yMmWM1EB22WlQ6EvCVwEv6FH+AdmAb9nFYiYs/AVXjPrnwU0gjxV6ADrpG/ge0Qh4JE/lvwNwyyK3tVaoRYX2Ifgv6B97EHOpRIjO3nGq/alb3KNYKvP7Ef2V6B6XanFjUuw1yb2SuuEXwt+A6ArodEp1GcqDeYOvpHnrMre3VvBLsX9i7o0AHYXZOo1e56ve3KXt0bYX853IAxdqUWNVqp/xnb2zDD7nx0fyNsR8E/sKwYTClqDqfGWdAz5Az2Sw7lp26NfA2H8D1QDKYU41+AArWerbVWsJio2IgmZ6tfcJxDqaVaULBZH3U1Avo3vrE7tagxlJo71QjaAM0O5SsmUiM6n++wX/O5TJ1f4Qhshguw1aF8pUZA5/Nxu1KLMo+41tOy2S6F34rBvMW8XY28a1dqUWaYa2lZ8xHshvMO5yvm7Wpkil2pRAndcn8CLQ73wXb4GXQDaSNel2X8Rba97Eosxg8CrY4PUGek3UXhexl0De6yKx+5kchaK07k9fVuiRiv0+g4OS12RURsLNyEN+wqkX5I6GMzuUIaIT4CTtmMCL+W6DrI16FVtg6K7QjHiz74APYXB8WI2FpYbzO5QhqRyCl5KfIB72B7HZrZ13v6m/A4HFNOl4+4Hrh6JY5d/hBvUQ2bycXgio0Qmwwf24zIB6eLeaxdFUXeIrhV7oCJzYJ1NpOpWiPEHyIe+2KFfyH8brOqyB1CPd0hR9kVEf7HIN1Xl4BGZkLsReyxR21WFfnNoEam2lUiwmXnqygGVTu1PiHnSZsREdsK39kMEvl/wWybJSL2OYy2Ga5qjVQSY/XS1G4zSOT/AfNtZqeAf0Sr4ok2I8K/B7bYDBL5etqvsFkiYvvhCZvhCmhkHDnl7jI6qJU2g0S+mt9ss0TEJjJf2YdvWVVrhPjDxOfYjAi/TpMFNoNEPZ2On9qMCP9T8LzNZKrWCDE91bfZvCfG9cF/C2axPxy0xNBn1aGOx/pUC/bK7i7VgkQ/zD1RPPHFzhj9qqfhEvt6zmjVOx5eg+3KqeBbDPqqog/cq+TPRCkb0bNgEzxqVyIxbgJ8m3TeiqqhkV9Ad5i0aNnf441srAT19Ib4Z1zsfshZ4pK1i4KJGwkRdZMvM2pRHo1QcyA119isj5hwJXxvMxPRiJ49dW9kABMPs5mZqNvfu/URTYxk0ky/lFNPb4gdNusjNQFv28xM/ED1vdjzUE9d7PpY0GYzE/XUxa5PNa02G2ro/6empruGXbUIRf4ywAAAAABJRU5ErkJggg==\">\r\n                <h5 style=\"color: white\">Request a vehicle</h5>\r\n              </div>\r\n              <div class=\"col s4\" style=\"text-align: center\">\r\n                <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAW9SURBVGhD7ZpbiFVVGMft3kMPqRVoWpFmw5RjZtiFKNRMrCF7EArKypdepKlJx6CnKDBqJkzoQamRCCoh6CEnulgYk/nkZI9OZRARIUZlamTFTL/f4tvDmeZc9rnaw/nDn/Xd1vettefsvddae6a10UYbrcXY2NhcuAb2wX64I6i8Gd4D50b4/wvj4+NLGNw2eBh5nPY4zQHa9+Dbwd1hOxExX8OX4MJIc/rAIO6G+6EYhj3wmnAXBXM4wxj4BNwfk9oHV0VI60DRq+DH8BR8VT1cCegXM74zQ75BKmuDFylnQO/AvxP+DT9CvzJczQWFHqHgSbgHLgizA748ROUv4dKQ75chL4UjygK5sM8Ccn9Ga+4Hwtx4UMSfxFb4J+xRD5e+87EdgTNCPys5iiDzGWsf+yYHMCe2Xuhfp189XI2BCeHrJP8V3h5mB/McnBlqzTAHfD5U9WXwGBwIk2OY9JOsCSTcRqLfaBeHKQF9I/YLQ60Z5jBXqAno3ltdIa+Av8P7krMW0Plh6E2d/hK018M7k7MJIPdKa4Sqvgr+AcXjYa4OdJwPvfkeC5NX7w70h0JtOMxtjZB9vHtPig0poBbQ2UfsHhI39qbLAWreS21/CWPIj4a5etDfq2Gi9Iil3QL7krPJoM7aqP0PXB+22TA90qsCnb6Ar4WqPpMrU/eNXQnU8b3jBOSDYdbuo39vqPlAB29okd7YtOclR5NBnXXQCfgeyV6iqTZtJxSL1HOB4Jfh58r8FS5DPpocTQQ11kMn4U9qbZi1/+wYQvZXMvG+qQiCD8PCJ1X9L6My8GamnnASa8KcgJ5WCwJ5ExwNtTycPXRFWnYV2yhQZwMUPmbvCnNR4L82xjYrTKVBkBsf9xOue1w6HEQuuXaqB+R2KS98VxVdxlsb31fQh42yL8fV4S4NgjbT4YByTObG5CgB/N3EdYSaG/Tro59X10msCHNROAbHErIr60nLmaIgaADuDrUsSH4dsf6uf4ST9iTlQOzTMYnj8LYw5wLxH8DKNzxB2+GbIfsYLrk38Crh3xGD+gHOC1dJEPpMxB+juTXMZeEYYFp/0e6C25OjHAyCuSYiGIyTGYzBfU9zRbimAP8W44Ar6ZvCXBGOAWYTeQvmmkjun1YGBuZN+IYjpP0OTjklwfZi+H+hWRLmqkH/IXOFWhoEeYyTtqMU9GrfnBwVQKyT2RWD/QbOCbs5tob9KJy0p8kD+txinpAPwlw3+38fvyPIuR6/xhH/Dq2DHoWz4CuhuxVOG6VqEDlH4Axkx+RTrjvcpUFwXS9Eup5L33cjhze07U+wM0JqBjm6Il/6a1cEgd/CnlAdXFVLFOKdzFAU9dF8dbiqRmFt8ngwcSjUyiDYJfM+ZRK5aDySHFUgJjMI54epJlgbpocHrYeB/cmRBwQvhiJtqhjU2clxGpDVpu2A/oXzL+MFHTzGHAxV3dPDC0JtOqjng+aSUJ2Ix1HDoeYHnVbDU16J0D3D2pScLYC14LMhu6lys1Xb6Q0dP4SfMJmWHz5ksDZj2AuHwlQ96Oxx0AnYGyYTN/s4aJ01Qs3+Mr7X6jvcNjF0hbs8dNdfK5OzCTC3NUJeDv+CjTnUJtEAV6TYkelT2Bt1ZPpkqAnWipr59+iVQEJ/p37D8GB5WZgtNnGIbUwy1gBzmCtUdc96rbWznrxFEZPxRemfurewALKfFVwQZp8VzkmOIsh8xtrHvskBzInNe8Iajf+sUAgKuDdwZ/cphSa2uOizQ1R2kZfnQ09hn07y+aHH3M370FMICs2D70OvnD+5SWspBjQ9u5r4Cj+9+Z1lunIGfE7Al53vCfcaFXeZDQdFPfIfZiAuHVwHeSqy0AFHyBToI6YLugDMPob6IbVpT8LcYBCLoJ+aR2Ngvns87fAKZ5+nlbWdjJhD0D5V71FaAgY2B3ZDb9oXYPYPA8obob5LI7yNNtpoCaZN+xeqSjizKOro+QAAAABJRU5ErkJggg==\">\r\n                <h5 style=\"color: white\">Get confirmation</h5>\r\n              </div>\r\n              <div class=\"col s4\" style=\"text-align: center\">\r\n                <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKoSURBVGhD7ZY9aFRBFIVXYgwxGhRRSKzUxh/8AcUyKooWgo0IprOwEgvRwsJC7ERUsFVQbOwkhU0EQdBUilhYpQtYaCFJJSiEXb87nDvsZjW+XX15M/A+OMy7Z96buYe3P9OoqampqZxmsznWarWOqswXgtxAxmVZecLbWEuI1+g71wOy84Cmt6CHaJvVBBhE28NkTljT9gbQnIWSHcHbj26iYVnpQpMTaJZQB2UFrMafZ2wxTicXhr4GaOo9ui6rCw+BvqK7yYahoefWHFyQFcFrD7HbPMZrdjPjNEO1PwQ0sI5GhnS9huv7jCfCpKDuCmFwvQl9RotoXHY10MBLNIu2yurgLyE+okXuOSe7OmjkFPqBXsiKJB+CBsbRMZVWH0ZHVAayeBM04ceOK7I6yCKEQRN27HiF7NixWnYg+RA0MIbuoc1W08wg1+EI4iQfwqCJfegn+oRGZUeyCOHQzFn0Be2RFUg+BA0MoRma6PqndkoPwQJ70SUW6fuvn2dXscZbZJyWHVkSYpfs/xfCN2C0c8xjhp7C8MywP8P1qK2BjodJ4XugckMg2+AptYV5wlA4DPe/Qe94ZoOsDpbsUUqIAywSP6/U9tF4wNhTGO49j+wg90xWhDXKDWGwyB01fUuWbVwoDHP2P3FIpdUnUTyGGDxrIRZQeSEMFlqPZpBxUXahMHi3mbO3MCmrA+ZXJoTDgn2Fod6I/wF9kxVhbmVDOCzcVxi8EbydKgPU1YRw2KDvj5nDXLUhHDb6l+9MGiEcNuw5DNdphXDYuHAYlGYIhwaKhJlC6YZwaKRImLRDODS0XJhJtENWuiEcGvttmHbw0w7h0OAfw1DnEcKh0a4wjHmFcGi4PcxVlF8Ih8ZDGJq3X608QzgK8widkVVTU1NTswyNxi92ok+JZ1q/lgAAAABJRU5ErkJggg==\">\r\n                <h5 style=\"color: white\">Complete the request</h5>\r\n              </div>\r\n\r\n\r\n            </div>\r\n\r\n            <br><br>\r\n            <div class='video-container '><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/2XTpzlM1s2s\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>\r\n\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n"

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
            'Department of Accountancy',
            'Department of Anatomy',
            'Department of Archaeology',
            'Department of Bio-Chemistry & Clinical Chemistry',
            'Department of Botany',
            'Department of Chemistry',
            'Department of Commerce and Financial Management (DCFM)',
            'Department of Disability Studies',
            'Department of Economics',
            'Department of English',
            'Department of Family Medicine',
            'Department of Finance',
            'Department of Fine Arts',
            'Department of Forensic Medicine',
            'Department of Geography',
            'Department of Hindi Studies',
            'Department of History',
            'Department of Industrial Management',
            'Department of Library and Information Science',
            'Department of Linguistics',
            'Department of Marketing Management',
            'Department of Mass Communication',
            'Department of Mathematics',
            'Department of Medical Microbiology',
            'Department of Medicine',
            'Department of Microbiology',
            'Department of Modern Languages',
            'Department of Obstetrics & Gynecology',
            'Department of Paediatrics',
            'Department of Pali & Buddhist Studies',
            'Department of Parasitology',
            'Department of Pathology',
            'Department of Pharmacology',
            'Department of Philosophy',
            'Department of Physics',
            'Department of Physiology',
            'Department of Public Health',
            'Department of Sanskrit',
            'Department of Sinhala',
            'Department of Sociology',
            'Department of Statistics & Computer Science',
            'Department of Surgery',
            'Department of Western Classical Culture & Christian Culture',
            'Department of Zoology',
            'Arts Council',
            'Career Guidance Unit',
            'Centre for Heritage Studies',
            'Center for Chinese Studies',
            'Centre of Excellence for Strategic Brand Identity Development (CESBID)',
            'Centre for Gender Studies',
            'Centre for Japanese Studies',
            'Centre for Korean Studies',
            'Center for Students with Disabilities (CCSD)',
            'Center for Sustainability Solutions (CSS)',
            'Confucius Institute',
            'EDCON',
            'Extracurricular Unit',
            'ICCMS',
            'ICT Centre',
            'Media Unit',
            'Quality Assurance Centre',
            'Regional Centre for Ant Research',
            'Research Council',
            'Staff Development Centre',
            'Statistics & Data Monitoring Unit',
            'Technology and Innovation Support Centre',
            'The Samkathana Research Centre',
            'Administration',
            'Other',
            'Software Engineering Teaching Unit'
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
        this.dateObj = new Date();
        this.today = this.dateObj.setDate(this.dateObj.getDate() - 1);
        this.formData = new __WEBPACK_IMPORTED_MODULE_1__classes_request__["a" /* Request */]();
        this.arrival = new __WEBPACK_IMPORTED_MODULE_1__classes_request__["b" /* Trip */]();
        this.departure = new __WEBPACK_IMPORTED_MODULE_1__classes_request__["b" /* Trip */]();
        this.rePassword = '';
        this.formD = {
            isError: false,
            errMsg: 'no Error'
        };
        this.isLoading = false;
        this.isOneDaytrip = false;
        this.refNoOfCreated = -1;
        // this.formData = new Request();
        this.data = this.source.slice();
    }
    RequestFormComponent.prototype.nextStep = function (nStep) {
        this.step = nStep;
    };
    RequestFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.departure.pickupTime = "00:00";
        this.arrival.dropTime = "00:00"; //`${new Date().getHours()}:${new Date().getMinutes()}`;
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
                    if (this.formData.password.length < 4) {
                        this.formD.isError = true;
                        this.formD.errMsg = 'Password should be more than 4 letters';
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
        var arrival_temp;
        if (this.isOneDaytrip) {
            arrival_temp = new Date(this.departure.pickupDate);
        }
        else {
            arrival_temp = new Date(this.arrival.dropDate);
        }
        /*let arrival_hour: any = arrival_temp.getHours();
          if (arrival_hour < 10) {
            arrival_hour = '0' + arrival_hour;
          }
    
          let arrival_minute: any = arrival_temp.getMinutes();
    
            if (arrival_minute < 10 ) {
              arrival_minute = '0' + arrival_minute;
            }*/
        // this.arrival.dropTime = `${arrival_hour}:${arrival_minute}`;
        this.arrival.dropDate = arrival_temp.getFullYear() + "-" + (arrival_temp.getMonth() + 1) + "-" + arrival_temp.getDate();
        var departure_temp = new Date(this.departure.pickupDate);
        /*let departure_hour: any = departure_temp.getHours();
        if (departure_hour < 10) {
          departure_hour = '0' + departure_hour;
        }
    
        let departure_minute: any = departure_temp.getMinutes();
        if (departure_minute < 10 ) {
          departure_minute = '0' + departure_minute;
        }*/
        //this.departure.pickupTime = `${departure_hour}:${departure_minute}`;
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
        console.log(this.formData);
        this.requestService.addRequest(this.formData)
            .subscribe(function (response) {
            if (!response['success']) {
                alert('Error occured');
            }
            else {
                console.log(response);
                //alert('Requested!');
                _this.refNoOfCreated = response['msg']['refNo'];
                _this.formData.password = response['msg']['password'];
                _this.step = 4;
                _this.isLoading = false;
                //this.router.navigate(['']);
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

module.exports = "\r\n<router-outlet></router-outlet>\r\n<div id=\"request_form_div\"></div>\r\n"

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
exports.push([module.i, ".border-div{\r\n  border: 1px solid #000000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/request/view-status/view-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isPermited\">\r\n  <div *ngIf=\"request\" class=\"container\">\r\n    <div class=\"\">\r\n\r\n      <div class=\"\" style=\"background-image: url('../../assets/images/background/van.svg')\">\r\n        <div class=\"row\" >\r\n          <div class=\"col-lg-6\" id=\"map_section\">\r\n            <div\r\n              [ngClass]=\"{\r\n              'alert-danger': request.status == 3,\r\n              'alert-primary': request.status == 2,\r\n              'alert-success' : request.status == 1,\r\n              'alert-warning': request.status == 0\r\n            }\"\r\n              class=\"alert \" role=\"alert\">\r\n              <div *ngIf=\"request.status == 0\">\r\n                <i class=\"fa fa-info\"></i>\r\n                Request is not being reviewed\r\n              </div>\r\n\r\n              <div *ngIf=\"request.status == 1\">\r\n                <i class=\"fa fa-info\"></i>\r\n                Request is Accepted. please supply futher information in more info section to proceed further\r\n              </div>\r\n\r\n              <div *ngIf=\"request.status == 2\" class=\"alert alert-info\">\r\n                <i class=\"fa fa-info-circle\"></i>  Your request is confirmed! Download Application and\r\n                <b> Handover to Transport Division </b>\r\n                <br> <br>\r\n                <button class=\"btn btn-primary\" (click)=\"printPdf()\">Download Application</button>\r\n              </div>\r\n\r\n              <div>\r\n                <!--<img class=\"\" src=\"../../assets/images/background/van.svg\" alt=\"First slide\" style=\"height: 70vh;\">-->\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-lg-6\" id=\"details_section\">\r\n            <!--        collapse div section stating   -->\r\n\r\n            <div id=\"accordion\">\r\n              <div class=\"card\">\r\n                <div\r\n                  class=\"card-header bg-inverse text-white\" id=\"headingOne\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n\r\n                  [attr.aria-expanded]=\"request.status != 1\"\r\n                  aria-controls=\"collapseOne\">\r\n                  <h6 class=\"mb-0\">\r\n                    <i class=\"fa fa-map\"></i>\r\n                    Trip Section\r\n                  </h6>\r\n                </div>\r\n\r\n                <div id=\"collapseOne\" class=\"collapse\"\r\n                     [class.show]=\"request.status != 1\"\r\n                     aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n                  <div class=\"card-body\">\r\n                    <div>\r\n                      <h6>Departure</h6>\r\n                      <table class=\"table table-sm\">\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            Date\r\n                          </th>\r\n                          <td>\r\n                            {{request.departure.pickupDate}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            Time\r\n                          </th>\r\n                          <td>\r\n                            {{request.departure.pickupTime}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            From\r\n                          </th>\r\n                          <td>\r\n                            {{request.departure.pickupPoint}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            To\r\n                          </th>\r\n                          <td>\r\n                            {{request.departure.dropPoint}}\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </div>\r\n\r\n                    <div>\r\n                      <h6>Arrival</h6>\r\n                      <table class=\"table table-sm\">\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            Date\r\n                          </th>\r\n                          <td>\r\n                            {{request.arrival.dropDate}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            Time\r\n                          </th>\r\n                          <td>\r\n                            {{request.arrival.dropTime}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            From\r\n                          </th>\r\n                          <td>\r\n                            {{request.arrival.pickupPoint}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n\r\n                          <th scope=\"row\">\r\n                            To\r\n                          </th>\r\n                          <td>\r\n                            {{request.arrival.dropPoint}}\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"card\">\r\n                <div\r\n                  [ngClass]=\"{'bg-danger':!request.vehicle, 'bg-success': request.vehicle}\"\r\n                  class=\"card-header text-white\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                  <h6 class=\"mb-0\">\r\n                    <i class=\"fa fa-car\"></i>\r\n                    Vehicle Section\r\n                  </h6>\r\n                </div>\r\n\r\n                <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n                  <div\r\n                    [ngClass]=\"{'text-danger': !vehicle, 'text-success' : vehicle}\"\r\n                    class=\"card-body\">\r\n                    <div *ngIf=\"request.vehicle\">\r\n                      Vehicle no: {{request.vehicle.vehicle_no}}\r\n                    </div>\r\n                    <div *ngIf=\"!request.vehicle\">\r\n                      <p class=\"card-text\">\r\n                        Vehicle is not assigned yet\r\n                      </p>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"card\">\r\n                <div\r\n                  [ngClass]=\"{\r\n                      'bg-danger':!request.driver, 'bg-success': request.driver}\"\r\n                  class=\"card-header text-white\" id=\"headingThree\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                  <h6 class=\"mb-0\">\r\n                    <i class=\"fa fa-car\"></i>\r\n                    Driver Section\r\n                  </h6>\r\n                </div>\r\n\r\n                <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n                  <div\r\n                    [ngClass]=\"{'text-danger':!request.driver, 'text-success' : request.driver}\"\r\n                    class=\"card-body\">\r\n                    <div *ngIf=\"request.driver\">\r\n                      Driver name: {{request.driver.name}}\r\n                    </div>\r\n                    <div *ngIf=\"!request.driver\">\r\n                      <p class=\"card-text\">\r\n                        Driver is not set\r\n                      </p>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"card\">\r\n                <div\r\n                  class=\"bg-primary card-header text-white\" id=\"headingFour\" data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\r\n                  <h6 class=\"mb-0\">\r\n                    <i class=\"fa fa-info\"></i>\r\n                    Details Section\r\n                  </h6>\r\n                </div>\r\n\r\n                <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordion\">\r\n                  <div class=\"card-body\">\r\n\r\n                    <div class=\"container-fluid\">\r\n                      <table class=\"table table-sm\">\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Refferance No\r\n                          </th>\r\n                          <td>\r\n                            TRD-uok-{{request.refNo}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Lecturer\r\n                          </th>\r\n                          <td>\r\n                            {{request.lecturer}}\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Designation\r\n                          </th>\r\n                          <td>\r\n                            {{request.position}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Department/ Unit\r\n                          </th>\r\n                          <td>\r\n                            {{request.dep_unit}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Purpose\r\n                          </th>\r\n                          <td>\r\n                            {{request.purpose}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Funding method\r\n                          </th>\r\n                          <td>\r\n                            {{request.fundingWay}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Email\r\n                          </th>\r\n                          <td>\r\n                            {{request.email}}\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Password\r\n                          </th>\r\n                          <td>\r\n                            {{request.password}}\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <th scope=\"row\">\r\n                            Number of Passangers\r\n                          </th>\r\n                          <td>\r\n                            {{request.num_passangers}}\r\n                          </td>\r\n                        </tr>\r\n\r\n\r\n\r\n\r\n                      </table>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card\" id=\"more_info_form\" *ngIf=\"request.status == 1 \">\r\n                <div class=\"card-header bg-warning text-white\" id=\"headingFive\" data-toggle=\"collapse\" data-target=\"#collapseFive\"\r\n                     [attr.aria-expanded]=\"request.status == 1\"\r\n                     aria-controls=\"collapseFive\">\r\n                  <h6 class=\"md-0\">\r\n                    <i class=\"fa fa-info-circle\"></i>\r\n                    More Infomation\r\n                  </h6>\r\n\r\n                </div>\r\n                <div class=\"collapse\"\r\n                     [class.show]=\"request.status == 1\"\r\n                     id=\"collapseFive\" aria-labelledy=\"headingFive\" data-parent=\"#accordion\">\r\n                  <div class=\"card-body\">\r\n\r\n                    <form >\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"designation\">Designation</label>\r\n                        <div class=\"col-md-8\">\r\n                          <input [(ngModel)]=\"moreDetails.position\" id=\"designation\" name=\"designation\" type=\"text\" placeholder=\"ex:- Head of the Department \" class=\"form-control input-md\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"fundingMethod\">Funding method</label>\r\n                        <div class=\"col-md-8\">\r\n                          <input id=\"fundingMethod\" [(ngModel)]=\"moreDetails.fundingWay\" name=\"fundingMethod\" type=\"text\" placeholder=\"ex:- From student welfare fund\" class=\"form-control input-md\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Text input-->\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"purpose\">Purpose</label>\r\n                        <div class=\"col-md-8\">\r\n                          <input id=\"purpose\" [(ngModel)]=\"moreDetails.purpose\" name=\"purpose\" type=\"text\" placeholder=\"ex:- field visit\" class=\"form-control input-md\" required=\"\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"\"></label>\r\n                        <div class=\"col-md-4\">\r\n                          <button id=\"\" name=\"\" class=\"btn btn-primary\" (click)=\"updateRequest()\">Submit</button>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!isPermited\">\r\n  you are not authorized to view this\r\n\r\n</div>\r\n\r\n\r\n\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_html2canvas__ = __webpack_require__("../../../../html2canvas/dist/npm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_html2canvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jspdf__);
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
        this.ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';
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
    ViewStatusComponent.prototype.printPdf = function () {
        var content = "\n    \t\t\t \t\t\n\n          <div style=\"width:210mm; height:297mm\">\n            <div class=\"container\">\n            \n            <div class=\"container-fluid\">\n            <div class=\"text-center\"> <br><br>\n            \n                  <img src=\"../../assets/images/logo/logo.png\" class=\"nav-logo\" alt=\"\" style=\"height: 150px\">\n                  <h3>\u0D9A\u0DD0\u0DC5\u0DAB\u0DD2\u0DBA \u0DC0\u0DD2\u0DC1\u0DCA\u0DC0 \u0DC0\u0DD2\u0DAF\u0DCA\u200D\u0DBA\u0DCF\u0DBD\u0DBA - \u0D9A\u0DD0\u0DC5\u0DAB\u0DD2\u0DBA</h3>\n                  \n                   \n                   <p > \u0DB0\u0DCF\u0DC0\u0DB1 \u0DC0\u0DCF\u0DBB\u0DBA\u0D9A\u0DCA \u0DC3\u0DAF\u0DC4\u0DCF \u0DBB\u0DAE\u0DBA\u0D9A\u0DCA \u0DBD\u0DB6\u0DCF \u0D9C\u0DD0\u0DB1\u0DD3\u0DB8\u0DA7 \u0D85\u0DC0\u0DC3\u0DBB \u0DBD\u0DB6\u0DCF \u0D9C\u0DD0\u0DB1\u0DD3\u0DB8</p>\n                   <br>\n                   <br>\n              </div>\n                \n                <div class=\"\">\n                \n                <ngx-qrcode qrc-element-type=\"url\" [qrc-value]=\"ngxQrcode2\" ></ngx-qrcode>\n                \n                 <div class=\"row\">\n                \n                    <div class=\"col-12\">\u0D85\u0D82\u0D9A\u0DBA\t:&nbsp;\tTRD/" + this.request.refNo + "</div>\n                    <div class=\"col-12\">\u0DB4\u0DD3\u0DA8\u0DBA\t:\t&nbsp;" + this.request.dep_unit + "</div>\n                    <div class=\"col-12\">\u0D89\u0DBD\u0DCA\u0DBD\u0DD4\u0DB8\u0DCA\u0D9A\u0DBB\u0DD4\u0D9C\u0DDA \u0DB1\u0DB8  :  " + this.request.name + "</div>\n                    <div class=\"col-12\">\u0D89\u0DBD\u0DCA\u0DBD\u0DD4\u0DB8\u0DCA\u0D9A\u0DBB\u0DD4\u0D9C\u0DDA \u0DAD\u0DB1\u0DAD\u0DD4\u0DBB\t:&nbsp;\t" + this.request.position + "</div>\n                    \n                    <br><br>\n                    <div class=\"col-12\" style=\"border-bottom: 1px solid #000000;\">\u0DA0\u0DCF\u0DBB\u0DD2\u0D9A\u0DCF\u0DC0 \u0DB4\u0DD2\u0DC5\u0DD2\u0DB6\u0DAF</div>\n                    \n                    <div class=\"col-12\" style=\"padding-top: 10px\">\u0D86\u0DBB\u0DB8\u0DCA\u0DB7\u0D9A \u0DC3\u0DCA\u0DAE\u0DCF\u0DB1\u0DBA\t:&nbsp;\t" + this.request.departure.pickPointAddress + "</div>\n                    <div class=\"col-12\">\u0D9C\u0DB8\u0DB1\u0DCF\u0DB1\u0DCA\u0DAD\u0DBA\t\t:&nbsp;\t" + this.request.departure.dropPointAddress + "</div>\n                \n                <br><br>\n                      <div class=\"col-8\">\u0DB4\u0DD2\u0DA7\u0DAD\u0DCA\u0DC0\u0DB1 \u0DAF\u0DD2\u0DB1\u0DBA :&nbsp; " + this.request.departure.pickupDate + "</div>\n                      <div class=\"col-4\">\u0DC0\u0DDA\u0DBD\u0DCF\u0DC0 &nbsp; &nbsp; &nbsp; : &nbsp;" + this.request.departure.pickupTime + "</div>\n                    \n                      <div class=\"col-8\">\u0D86\u0DB4\u0DC3\u0DD4 \u0DB4\u0DD0\u0DB8\u0DD2\u0DAB\u0DD9\u0DB1 \u0DAF\u0DD2\u0DB1\u0DBA:&nbsp; " + this.request.arrival.dropDate + "</div>\n                      \n                      <div class=\"col-4\">\u0DC0\u0DDA\u0DBD\u0DCF\u0DC0 &nbsp; &nbsp; &nbsp; :&nbsp; " + this.request.arrival.dropTime + "</div>\n           \n                     <br><br>\n                   \n                    <div class=\"col-6\">\u0DC4\u0DDA\u0DAD\u0DD4\u0DC0\t&nbsp; &nbsp; &nbsp;\t\t:&nbsp;\t" + this.request.purpose + "</div>\n                  \n                    <br><br><br>\n                    \n                    \n                  </div>         \n                  \n                  </div>\n                <div class=\"row\">\n                        <div class=\"col-lg-6\">\n                          <p>........................................</p>\n                          <p>\u0D89\u0DBD\u0DCA\u0DBD\u0DD4\u0DB8\u0DCA\u0D9A\u0DBB\u0DD4\u0D9C\u0DDA \u0D85\u0DAD\u0DCA\u0DC3\u0DB1</p>\n                        </div>\n                        \n                         <div class=\"col-lg-6\">\n                          <p>........................................</p>\n                          <p>\u0DAF\u0DD2\u0DB1\u0DBA</p>\n                        </div>\n                    </div>\n                </div>\n                </div>\n            </div>\n              \n                \n               \n            </div>\n          \n            \n          \n          \n          \n          </div>\n    ";
        document.getElementById('request_form_div').innerHTML = content;
        __WEBPACK_IMPORTED_MODULE_5_html2canvas__(document.getElementById('request_form_div')).then(function (canvas) {
            document.getElementById('request_form_div').innerHTML = '';
            var imgData = canvas.toDataURL('image/png');
            // document.body.appendChild(canvas);
            var doc = new __WEBPACK_IMPORTED_MODULE_6_jspdf__('p', 'mm', 'a4');
            doc.setFont("helvetica");
            doc.setFontType("bold");
            doc.setFontSize(10);
            var width = 470;
            var height = doc.internal.pageSize.height;
            doc.addImage(imgData, 'JPEG', 0, 0, width, height);
            doc.save('request.pdf');
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
exports.push([module.i, "/*\r\n@media (max-width: 792px) {\r\n  .trd-nav-link {\r\n    padding-bottom: 10px;\r\n    padding-top: 8px;\r\n    color: white;\r\n    !* padding-top: 10px; *!\r\n    !* margin-top: 10px; *!\r\n    background-color: black;\r\n  }\r\n}\r\n*/\r\n@media screen and (max-width: 600px) {\r\n\r\n  .nav-logo{\r\n    width: 200px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div class=\"header\" style=\"background-color: black\">\r\n  <div class=\"top-header\">\r\n    <div class=\"\" style=\"padding-right: 2vh; padding-left: 2vh\">\r\n\r\n      <nav class=\"navbar navbar-expand-lg navbar-dark bg-faded\">\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          <img src=\"../../assets/images/logo/Kelaniya.png\" alt=\"\" class=\"nav-logo\">\r\n        </a>\r\n\r\n\r\n        <button class=\"navbar-toggler \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse  \"  id=\"navbarNavAltMarkup\">\r\n          <div class=\"navbar-nav ml-auto active\">\r\n            <a class=\"nav-item nav-link-edit\" [routerLink]=\"['']\">Home <span class=\"sr-only\">(current)</span></a>\r\n            <a class=\"nav-item nav-link-edit\" href=\"#\">Features</a>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n-->\r\n\r\n\r\n<!--\r\n<div style=\"background-color: black\">\r\n  <div id=\"app\" class=\"\" >\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-faded\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['']\">\r\n        <img src=\"../../assets/images/logo/Kelaniya.png\" class=\"nav-logo\" alt=\"\">\r\n      </a>\r\n      <button style=\"background-color: #ffcc00\"\r\n        class=\"navbar-toggler\" type=\"button\"\r\n        data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      &lt;!&ndash; <div id=\"navbarNavDropdown\" class=\"navbar-collapse collapse\">\r\n         <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n         </ul>\r\n     <ul class=\"navbar-nav\">\r\n           <li class=\"nav-item dropdown\">\r\n             <a class=\"nav-item trd-nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n               Dropdown\r\n             </a>\r\n             <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n               <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n               <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n             </div>\r\n           </li>\r\n           <li class=\"nav-item\">\r\n             <a class=\"nav-item trd-nav-link trd-nav-link-coner\" href=\"#\">Login</a>\r\n           </li>\r\n\r\n         </ul>\r\n\r\n\r\n      </div>&ndash;&gt;\r\n  <div class=\"collapse navbar-collapse  \"  id=\"navbarNavDropdown\">\r\n  <div class=\"navbar-nav ml-auto active\">\r\n    <a class=\"nav-item trd-nav-link trd-nav\" [routerLink]=\"['']\">Home <span class=\"sr-only\">(current)</span></a>\r\n    <a class=\"nav-item trd-nav-link trd-nav item-gold\" [routerLink]=\"['login']\" >Admin Login</a>\r\n\r\n\r\n  </div>\r\n</div>\r\n    </nav>\r\n  </div>\r\n</div>\r\n-->\r\n\r\n\r\n<header class=\"navbar navbar-dark bg-dark navbar-static-top\" style=\"background-color: black;\">\r\n  <nav class=\"navbar navbar-toggleable-md navbar-dark bg-dark \" style=\"    height: fit-content; background-color: black;\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\r\n            data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" style=\"padding-top: 10px\">\r\n      <!--<span class=\"navbar-toggler-icon\"></span>-->\r\n      <i class=\"fa fa-bars fa-2x\" style=\"color: #ffcc00\"></i>\r\n    </button>\r\n\r\n\r\n    <a class=\"navbar-brand\" [routerLink]=\"['']\">\r\n      <img src=\"../../assets/images/logo/Kelaniya.png\" class=\"nav-logo \" alt=\"\">\r\n    </a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n      <!--Left nav-->\r\n      <!--<div class=\"navbar-collapse\">\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\">Home</a>\r\n          </li>\r\n        </ul>\r\n      </div>-->\r\n\r\n      <!--Right nav-->\r\n      <div class=\"navbar-collapse justify-content-md-end\">\r\n        <ul class=\"navbar-nav\">\r\n\r\n          <li class=\"\">\r\n            <a class=\"trd-nav-link trd-nav\" [routerLink]=\"['']\" style=\"float: right;\">Home <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n          <li class=\"\">\r\n            <a class=\"trd-nav-link trd-nav\" [routerLink]=\"['login']\"  style=\"float: right;\">Admin Login</a><!-- item-gold-->\r\n          </li>\r\n\r\n\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </nav>\r\n</header>\r\n"

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

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatTooltipModule */],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


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
        return this.http.get('https://uok-transport-division.herokuapp.com/admin/get_vehicle_list', {
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
    // return list of reqeust on given status/s
    // formatted for sheduler in admin dasboard
    // param array of status eg:- status[0] = "1"
    AdminService.prototype.getRequestOnStatusForCalender = function (status) {
        return this.http.get("https://uok-transport-division.herokuapp.com/admin/requests/status?" + status, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        })
            .toPromise()
            .then(function (res) { return res; })
            .then(function (data) {
            var dataM = [];
            if (data['msg'] === undefined) {
                return;
            }
            data['msg'].forEach(function (element) {
                var color = '';
                switch (element['status']) {
                    case '0':
                        color = '#1A73E8';
                        break;
                    case '1':
                        color = '#1E8E3E';
                        break;
                    case '2':
                        color = '#FA7B17';
                        break;
                    case '3':
                        color = '#A142F4';
                        break;
                }
                dataM.push({
                    'title': 'TRP/' + element['refNo'],
                    'start': element['departure']['pickupDate'],
                    'end': element['arrival']['dropDate'],
                    'color': color,
                    'weekends': 'true'
                });
            });
            //let x = [];
            return dataM;
        });
    };
    // return array of requests
    AdminService.prototype.getRequestsOnStatusForTable = function (status) {
        return this.http.get("https://uok-transport-division.herokuapp.com/admin/requests/status?" + status, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        })
            .toPromise()
            .then(function (res) { return res; })
            .then(function (data) {
            var dataT = [];
            if (data['msg'] === undefined) {
                return;
            }
            data['msg'].forEach(function (element) {
                dataT.push({
                    'refNo': element['refNo'],
                    'to': element['departure']['pickupPoint'],
                    'from': element['departure']['dropPoint'],
                    'driver': (element['driver'] !== undefined) ? element['driver']['name'] : 'Not assigned',
                    'vehicle': (element['vehicle'] !== undefined) ? element['vehicle']['vehicle_no'] : 'Not assigned'
                });
            });
            return dataT;
        });
    };
    /*
    *  get request on vehicle
    * */
    AdminService.prototype.getRequestsOnVehicleForCalender = function (_id) {
        return this.http.get("https://uok-transport-division.herokuapp.com/admin/requests/vehicle?_id=" + _id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        })
            .toPromise()
            .then(function (res) { return res; })
            .then(function (data) {
            var dataM = [];
            console.log(data);
            if (data['msg'] === undefined) {
                return;
            }
            data['msg'].forEach(function (element) {
                var color = '';
                switch (element['status']) {
                    case '0':
                        color = '#1A73E8';
                        break;
                    case '1':
                        color = '#1E8E3E';
                        break;
                    case '2':
                        color = '#FA7B17';
                        break;
                    case '3':
                        color = '#A142F4';
                        break;
                }
                dataM.push({
                    'title': 'TRP/' + element['refNo'],
                    'start': element['departure']['pickupDate'],
                    'end': element['arrival']['dropDate'],
                    'color': color,
                    'weekends': 'true'
                });
            });
            //let x = [];
            return dataM;
        });
    };
    /*
  *  get request on driver
  * */
    AdminService.prototype.getRequestsOnDriverForCalender = function (_id) {
        return this.http.get("https://uok-transport-division.herokuapp.com/admin/requests/driver?_id=" + _id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'bearer ' + this.token),
        })
            .toPromise()
            .then(function (res) { return res; })
            .then(function (data) {
            var dataM = [];
            data['msg'].forEach(function (element) {
                var color = '';
                switch (element['status']) {
                    case '0':
                        color = '#1A73E8';
                        break;
                    case '1':
                        color = '#1E8E3E';
                        break;
                    case '2':
                        color = '#FA7B17';
                        break;
                    case '3':
                        color = '#A142F4';
                        break;
                }
                dataM.push({
                    'title': 'TRP/' + element['refNo'],
                    'start': element['departure']['pickupDate'],
                    'end': element['arrival']['dropDate'],
                    'color': color,
                    'weekends': 'true'
                });
            });
            //let x = [];
            return dataM;
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
    production: true
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