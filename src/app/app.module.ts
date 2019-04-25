import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {LoginModule} from './login/login.module';
import {RightBarModule} from './rightbar/rightbar.module';
import {HeaderModule} from './header/header.module';
import {CommonModule} from './common/common.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, LoginModule, RightBarModule, HeaderModule, CommonModule ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
