import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/main/home/home.component';
import {RequestComponent} from './components/main/request/request.component';
import {RequestFormComponent} from './components/main/request/request-form/request-form.component';
// import {CheckReqStatusComponent} from './components/main/request/check-req-status/check-req-status.component';
import {ViewStatusComponent} from './components/main/request/view-status/view-status.component';
import {AdminComponent} from './components/main/admin/admin.component';
import {VehicleComponent} from './components/main/admin/vehicle/vehicle.component';
import {RequestAdminViewComponent} from './components/main/admin/request-admin-view/request-admin-view.component';
import {DriversComponent} from './components/main/admin/drivers/drivers.component';
import {ProfileComponent} from './components/main/admin/drivers/profile/profile.component';
import {AddComponent} from './components/main/admin/drivers/add/add.component';
import {AddVehicleComponent} from './components/main/admin/vehicle/add-vehicle/add-vehicle.component';
import {AdminHomeComponent} from './components/main/admin/admin-home/admin-home.component';
import {DriverProfileComponent} from './components/main/driver-profile/driver-profile.component';
import {LoginComponent} from './components/main/login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import { DashboardComponent } from './components/main/admin/dashboard/dashboard.component';


const routes: Routes = [
  {path : '' , component: HomeComponent},
  {
    path: 'request' ,
    component: RequestComponent,
    children : [
      {path : 'req_form' , component : RequestFormComponent },
      {path : 'check_req' , component : CheckReqStatusComponent},
      /*{path : 'view_req/:refNo' , component : ViewStatusComponent}*/
    ]
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'vehicle/view/:vehicle_no',
        component: VehicleComponent
      },
      {
        path: 'vehicle/add', component: AddVehicleComponent
      },
      { path: 'request/:refNO' , component: RequestAdminViewComponent },
      {
        path: 'drivers',
        component: DriversComponent,
        children: [
          {path: 'profile/:driver_id', component: ProfileComponent},
          {path: 'add', component: AddComponent}
        ]
      },

      { path: '', component: AdminHomeComponent }
    ]
  },
  {

        path: 'login',
      component: LoginComponent
  },
  { path: 'driver', component: DriverProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
