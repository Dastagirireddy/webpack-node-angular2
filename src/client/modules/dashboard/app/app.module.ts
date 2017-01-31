import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }   from './app.component';
import {AppSidebarComponent} from './sidebar/app.sidebar.component';
import {AppHeaderComponent} from './header/app.header.component';

/* Modules */
import {AppRoutingModule} from './app.routes';
import {OverviewModule} from '../overview/overview.module';
import {HerosModule} from '../heros/heros.module';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	OverviewModule,
  	HerosModule,
  	AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
  	AppSidebarComponent,
  	AppHeaderComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers: [{
	provide: LocationStrategy, 
	useClass: HashLocationStrategy
  }]
})

export class AppModule { }