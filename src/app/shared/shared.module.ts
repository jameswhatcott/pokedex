import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeFirstPipe } from '../pipes/capitalize-first.pipe'; // Adjust the path as necessary
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [ CapitalizeFirstPipe],
  imports: [
    CommonModule, 
    BrowserModule, 
  ],
  exports: [CapitalizeFirstPipe],
  bootstrap: []
})
export class SharedModule { }