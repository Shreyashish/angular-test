import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormComponent } from './form/form.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { FbComponent } from './fb/fb.component';

const APP_ROUTES: Routes = [
	{
		path: 'app',
		component: AppComponent
		//children: [
		//	{}
		//],
	},
	{
		path: 'test',
		component: TestComponent
	},
	{
		path: 'form',
		component: FormComponent
	},
	{
		path: 'loop',
		component: ForLoopComponent
	},
	{
		path: 'fb',
		component: FbComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
	
}