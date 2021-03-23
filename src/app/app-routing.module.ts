import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TechComponent } from './tech/tech.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { EndComponent } from './end/end.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home1', component: Home1Component },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'tech', component: TechComponent },
  { path: 'temp-driven-form', component: TempDrivenFormComponent },
  { path: 'model-driven', component: ModelDrivenComponent },
  { path: 'end', component: EndComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
