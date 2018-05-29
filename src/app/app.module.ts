import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';



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
import { AddComponent } from './components/main/admin/drivers/add/add.component';
import { ProfileComponent } from './components/main/admin/drivers/profile/profile.component';
import { SetDriverComponent } from './components/main/admin/request-admin-view/set-driver/set-driver.component';
import { SetVehicleComponent } from './components/main/admin/request-admin-view/set-vehicle/set-vehicle.component';
import { AddVehicleComponent } from './components/main/admin/vehicle/add-vehicle/add-vehicle.component';
import { AdminHomeComponent } from './components/main/admin/admin-home/admin-home.component';
import { MapComponent } from './components/main/admin/admin-home/map/map.component';
import { SearchComponent } from './components/main/admin/admin-home/search/search.component';
import { VehicleTableComponent } from './components/main/admin/admin-home/vehicle-table/vehicle-table.component';

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
    AddComponent,
    ProfileComponent,
    SetDriverComponent,
    SetVehicleComponent,
    AddVehicleComponent,
    AdminHomeComponent,
    MapComponent,
    SearchComponent,
    VehicleTableComponent,
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
    AngularFontAwesomeModule
  ],
  providers: [
    AvailableVehicleService,
    RequestService,
    VehicleService,
    AdminService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
