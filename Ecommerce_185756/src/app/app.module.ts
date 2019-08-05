import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductlistComponent } from './Exam/productlist.component';
import { SearchlistComponent } from './Exam/searchlist.component';
import { SearchpipePipe } from './Exam/searchpipe.pipe';
import { ExamComponent } from './exam/exam.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    SearchlistComponent,
    SearchpipePipe,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
