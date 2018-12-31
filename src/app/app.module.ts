import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
/*google maps api*/
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/main/home/home.component';
import { RequestComponent } from './components/main/request/request.component';
import { NoticeComponent } from './components/main/home/notice/notice.component';
import { RequestBtnsComponent } from './components/main/home/request-btns/request-btns.component';
import { CreateRequestComponent } from './components/main/home/request-btns/create-request/create-request.component';
import { CheckRequestComponent } from './components/main/home/request-btns/check-request/check-request.component';
import { RequestFormComponent } from './components/main/request/request-form/request-form.component';
import { CheckReqStatusComponent } from './components/main/request/check-req-status/check-req-status.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {AvailableVehicleService} from './services/available-vehicle.service';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { ViewStatusComponent } from './components/main/request/view-status/view-status.component';
import {RequestService} from './services/request.service';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './components/main/admin/admin.component';
import {VehicleService} from './services/vehicle.service';
import { VehicleComponent } from './components/main/admin/vehicle/vehicle.component';
import { RequestAdminViewComponent } from './components/main/admin/request-admin-view/request-admin-view.component';
import {AdminService} from './services/admin.service';
import { SheduleComponent } from './components/main/admin/shedule/shedule.component';
import { StatusMsgComponent } from './components/main/home/request-btns/check-request/status-msg/status-msg.component';
import {AuthService} from './services/auth.service';
import { DriversComponent } from './components/main/admin/drivers/drivers.component';
import { AddComponent as AddNewDriverComponent } from './components/main/admin/drivers/add/add.component';
import { ProfileComponent } from './components/main/admin/drivers/profile/profile.component';
import { SetDriverComponent } from './components/main/admin/request-admin-view/set-driver/set-driver.component';
import { SetVehicleComponent } from './components/main/admin/request-admin-view/set-vehicle/set-vehicle.component';
import { AddVehicleComponent } from './components/main/admin/vehicle/add-vehicle/add-vehicle.component';
import { AdminHomeComponent } from './components/main/admin/admin-home/admin-home.component';
import { MapComponent } from './components/main/admin/admin-home/map/map.component';
import { SearchComponent } from './components/main/admin/admin-home/search/search.component';
import { VehicleTableComponent } from './components/main/admin/admin-home/vehicle-table/vehicle-table.component';
import {LayoutModule} from '@progress/kendo-angular-layout';
import { DriverProfileComponent } from './components/main/driver-profile/driver-profile.component';
import { LoginComponent } from './components/main/login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import {AmazingTimePickerModule} from 'amazing-time-picker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatTabsModule} from '@angular/material';
import { DashboardComponent } from './components/main/admin/dashboard/dashboard.component';
import { DemoMaterialModule } from './material.module';
import { MatTableModule } from '@angular/material/table';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { ReqeustPreveiwComponent } from './components/main/admin/dashboard/reqeust-preveiw/reqeust-preveiw.component';
import { AddDriverComponent } from './components/main/admin/dashboard/add-driver/add-driver.component';
import { ShedulerComponent } from './components/main/admin/dashboard/sheduler/sheduler.component';
import { AddVehicleToReqComponent } from './components/main/admin/dashboard/add-vehicle-to-req/add-vehicle-to-req.component';
import { RequestsTableComponent } from './components/main/admin/dashboard/requests-table/requests-table.component';
import { DriverListComponent } from './components/main/admin/drivers/driver-list/driver-list.component';
import { VehicleListComponent } from './components/main/admin/vehicle/vehicle-list/vehicle-list.component';
import { EditRequestComponent } from './components/main/admin/dashboard/edit-request/edit-request.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    RequestComponent,
    NoticeComponent,
    RequestBtnsComponent,
    CreateRequestComponent,
    CheckRequestComponent,
    RequestFormComponent,
    CheckReqStatusComponent,
    ViewStatusComponent,
    AdminComponent,
    VehicleComponent,
    RequestAdminViewComponent,
    SheduleComponent,
    StatusMsgComponent,
    DriversComponent,
    AddNewDriverComponent,
    ProfileComponent,
    SetDriverComponent,
    SetVehicleComponent,
    AdminHomeComponent,
    MapComponent,
    SearchComponent,
    VehicleTableComponent,
    DriverProfileComponent,
    LoginComponent,
    DashboardComponent,
    ReqeustPreveiwComponent,
    AddDriverComponent,
    ShedulerComponent,
    AddVehicleComponent,
    AddVehicleToReqComponent,
    RequestsTableComponent,
    DriverListComponent,
    VehicleListComponent,
    EditRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    /*kendoUi*/
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAF5gLv9sWNx3t2yxPGa9FuSBBhaZSVNUc',
      libraries : ['places']
    }),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    /*MDBBootstrapModule.forRoot()*/
    DropDownsModule,
    AngularFontAwesomeModule,
    LayoutModule,
    NgxQRCodeModule,
    DemoMaterialModule,
    MatTableModule,
    FullCalendarModule,
    AmazingTimePickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  providers: [
    AvailableVehicleService,
    RequestService,
    VehicleService,
    AdminService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ReqeustPreveiwComponent,
    AddDriverComponent,
    AddVehicleToReqComponent,
    EditRequestComponent
  ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
