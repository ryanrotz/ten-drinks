import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DiveBarComponent } from './dive-bar/dive-bar.component';
import { FancyBarComponent } from './fancy-bar/fancy-bar.component';
import { MocktailsComponent } from './mocktails/mocktails.component';

const routes: Routes = [
	{path: 'dive-bar', component: DiveBarComponent},
	{path: 'fancy-bar', component: FancyBarComponent},
	{path: 'mocktails', component: MocktailsComponent},
	{path: '', component: HomeComponent},
	{path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})

export class AppRoutingModule { }