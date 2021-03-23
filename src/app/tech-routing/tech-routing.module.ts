import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { WebComponent } from "src/app/web/web.component";
import { JavaComponent } from "src/app/java/java.component";
import { CorejavaComponent } from '../corejava/corejava.component';
import { AdvjavaComponent } from '../advjava/advjava.component';
import { JavascriptComponent } from '../javascript/javascript.component';
import { AngularComponent } from '../angular/angular.component';
import { TechComponent } from '../tech/tech.component';

const routes: Routes = [
  {
    path: 'tech', component: TechComponent,
    children: [
      { path: 'java', component: JavaComponent },
      { path: 'web', component: WebComponent },
    ]
  },
  {
    path: 'web', component: WebComponent,
    children: [
      { path: 'javascript', component: JavascriptComponent},
      { path: 'angular', component: AngularComponent },
    ]
  },
  {
    path: 'java', component: JavaComponent,
    children: [
      { path: 'coreJava', component: CorejavaComponent},
      { path: 'advJava', component: AdvjavaComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [WebComponent, JavaComponent, CorejavaComponent, AdvjavaComponent, JavascriptComponent, AngularComponent, TechComponent]


 
