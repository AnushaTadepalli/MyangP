import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { EBComponent } from './eb/eb.component';
import { CalcComponent } from './calc/calc.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { StructDirComponent } from './struct-dir/struct-dir.component';
import { ProassComponent } from './proass/proass.component';
import { PracComponent } from './prac/prac.component';
import { SwitchComponent } from './switch/switch.component';
import { AttributeComponent } from './attribute/attribute.component';
import { MycolorDirective } from './mycolor.directive';
import { PipeComponent } from './pipe/pipe.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { DcalcDirective } from './dcalc.directive';
import { DassComponent } from './dass/dass.component';
import { GrdFilterPipe } from './grd-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ZoomDirective } from './zoom.directive';
import { EmployeeComponent } from './employee/employee.component';
import { SortPipe } from './sort.pipe';
import { AproComponent } from './apro/apro.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { WebComponent } from './web/web.component';
import { JavaComponent } from './java/java.component';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';
import { ListRoutingModule } from './list-routing/list-routing.module';
import { CorejavaComponent } from './corejava/corejava.component';
import { AdvjavaComponent } from './advjava/advjava.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TechComponent } from './tech/tech.component';
import { EndComponent } from './end/end.component';
import { Home1Component } from './home1/home1.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader/lib/http-loader';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}
 
 

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    CustomerComponent,
    ProductComponent,
    EBComponent,
    CalcComponent,
    InterpolationComponent,
    StructDirComponent,
    ProassComponent,
    PracComponent,
    SwitchComponent,
    AttributeComponent,
    MycolorDirective,
    PipeComponent,
    ReverseStringPipe,
    DcalcDirective,
    DassComponent,
    GrdFilterPipe,
    ZoomDirective,
    EmployeeComponent,
    routingComponents,
    SortPipe,
     
    AproComponent,
     
    ProDetailsComponent,
     
    ParentComponent,
     
    ChildComponent,
     
    Parent1Component,
     
    Child1Component,
     
    Parent2Component,
     
    Child2Component,
     
    FirstComponent,
     
    SecondComponent,
     
    WebComponent,
     
    JavaComponent,
     
    CorejavaComponent,
     
    AdvjavaComponent,
     
    JavascriptComponent,
     
    TempDrivenFormComponent,
     
    ModelDrivenComponent,
     
    HomeComponent,
     
    ReviewsComponent,
     
    TechComponent,
     
    EndComponent,
     
    Home1Component,
     
    LoginComponent,
     
    HeaderComponent,
     
    FooterComponent,
     
    
     
    
     
    
     
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TechRoutingModule,
    ListRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }

    }),
    RouterModule.forRoot([
      { path: 'product-link', component: DassComponent }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
