import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { EmpDetailsComponent } from '../emp-details/emp-details.component';
import { ProDetailsComponent } from '../pro-details/pro-details.component';
import { HomeComponent } from '../home/home.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { ModelDrivenComponent } from '../model-driven/model-driven.component';
import { TechComponent } from '../tech/tech.component';
import { TempDrivenFormComponent } from '../temp-driven-form/temp-driven-form.component';
import { EndComponent } from '../end/end.component';
import { LoginComponent } from '../login/login.component';
import { Home1Component } from '../home1/home1.component';

const routes: Routes = [
  { path: 'pro-details', component: ProDetailsComponent },
  { path: 'emp-details', component: EmpDetailsComponent },
  { path: 'home1', component: Home1Component },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'tech', component: TechComponent },
  { path: 'temp-driven-form', component: TempDrivenFormComponent },
  { path: 'model-driven', component: ModelDrivenComponent },
  { path: 'end', component: EndComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})



//@NgModule({
//  declarations: [],
//  imports: [
//    CommonModule
//  ]
//})
export class ListRoutingModule { }
export const routingComponents = [ProDetailsComponent, EmpDetailsComponent , HomeComponent]
