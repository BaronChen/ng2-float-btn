import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2FloatBtnComponent } from './ng2-float-btn.component';


@NgModule({
  declarations: [
    Ng2FloatBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [ Ng2FloatBtnComponent ]
})
export class Ng2FloatBtnModule { }
