import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { Ng2FloatBtnComponent } from './ng2-float-btn.component';
import { Ng2FloatBtnDirectionDirective } from './ng2-float-btn-direction.directive';



@NgModule({
  declarations: [
    Ng2FloatBtnComponent,
    Ng2FloatBtnDirectionDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  exports: [ Ng2FloatBtnComponent ]
})
export class Ng2FloatBtnModule { }
