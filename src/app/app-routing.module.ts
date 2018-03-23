import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/main/home/home.component';
import {RequestComponent} from './components/main/request/request.component';
import {RequestFormComponent} from './components/main/request/request-form/request-form.component';
import {CheckReqStatusComponent} from './components/main/request/check-req-status/check-req-status.component';
import {ViewStatusComponent} from './components/main/request/view-status/view-status.component';
import {AdminComponent} from './components/main/admin/admin.component';
import {VehicleComponent} from './components/main/admin/vehicle/vehicle.component';
import {RequestAdminViewComponent} from './components/main/admin/request-admin-view/request-admin-view.component';
import {SheduleComponent} from './components/main/admin/shedule/shedule.component';


const routes: Routes = [
  {path : '' , component: HomeComponent},
  {
    path: 'request' ,
    component: RequestComponent,
    children : [
      {path : 'req_form' , component : RequestFormComponent },
      {path : 'check_req' , component : CheckReqStatusComponent},
      {path : 'view_req/:refNo' , component : ViewStatusComponent}
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'vehicle/:vehicle_no' , component: VehicleComponent },
      { path: 'request/:refNO' , component: RequestAdminViewComponent },
      { path: '', component: SheduleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
