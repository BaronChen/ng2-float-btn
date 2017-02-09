import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestLibComponent } from './test-lib.component';


@NgModule({
  declarations: [
    TestLibComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [ TestLibComponent ]
})
export class TestLibModule { }
