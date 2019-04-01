import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HijoComponent } from '../app/contador/hijo/hijo.component'
import { NietoComponent } from './contador/hijo/nieto/nieto.component';

@NgModule({
	declarations: [
		AppComponent,
		ContadorComponent,
		NietoComponent,
		HijoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
