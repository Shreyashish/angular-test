import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormComponent } from './form/form.component';
import { ConditionComponent } from './condition/condition.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { MailService } from './mail.service';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FormComponent,
    ConditionComponent,
    ForLoopComponent,
    BlogCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MailService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
