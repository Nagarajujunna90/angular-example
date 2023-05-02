import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';


const routes: Routes = [
  { path: 'heroes', component: HeroComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
