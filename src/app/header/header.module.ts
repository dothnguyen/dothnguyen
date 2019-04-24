import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { SociallinklistComponent } from './social/sociallinklist/sociallinklist.component';
import { SociallinkComponent } from './social/sociallink/sociallink.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [HeaderComponent, SociallinklistComponent, SociallinkComponent],
  exports: [HeaderComponent]
})
export class HeaderModule{}