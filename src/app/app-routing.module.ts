import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/main/home/home.component';
import {RequestComponent} from './components/main/request/request.component';
import {RequestFormComponent} from './components/main/request/request-form/request-form.component';
import {CheckReqStatusComponent} from './components/main/request/check-req-status/check-req-status.component';
import {ViewStatusComponent} from './components/main/request/view-status/view-status.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
