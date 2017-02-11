import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { Ng2FloatBtnComponent } from './ng2-float-btn.component';
import { Ng2FloatBtnDirectionDirective } from './ng2-float-btn-direction.directive';
import { Ng2FloatBtnLiDirective } from './ng2-float-btn-li.directive';
import { Ng2FloatBtnLableDirective } from './ng2-float-btn-label.directive';



@NgModule({
  declarations: [
    Ng2FloatBtnComponent,
    Ng2FloatBtnDirectionDirective,
    Ng2FloatBtnLiDirective,
    Ng2FloatBtnLableDirective
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
