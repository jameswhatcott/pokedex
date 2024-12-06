import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeFirstPipe } from '../pipes/capitalize-first.pipe'; // Adjust the path as necessary
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [ CapitalizeFirstPipe],
  imports: [
    CommonModule, 
 
  ],
  exports: [CapitalizeFirstPipe],
  bootstrap: []
})
export class SharedModule { }