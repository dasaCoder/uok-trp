import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

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
    CheckReqStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
