import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HerosListComponent} from './heros-list.component';

const herosRoutes: Routes = [{
	path: 'heros',
	component: HerosListComponent
}];

@NgModule({
	imports: [
		RouterModule.forRoot(herosRoutes)
	],
	exports: [
		RouterModule
	]
})
export class HerosRoutingModule {

}