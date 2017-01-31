import {NgModule} from '@angular/core';
import {HerosListComponent} from './heros-list.component';
import {HerosRoutingModule} from './heros.routes';

@NgModule({
	imports: [
		HerosRoutingModule
	],
	declarations: [HerosListComponent]
})
export class HerosModule {

}