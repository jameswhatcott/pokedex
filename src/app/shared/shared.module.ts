import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeFirstPipe } from '../pipes/capitalize-first.pipe'; // Adjust the path as necessary
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';


@NgModule({
  declarations: [ 
    CapitalizeFirstPipe,
    LoginComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    HttpClientModule
 
  ],
  exports: [
    CapitalizeFirstPipe,
    LoginComponent,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: []
})
export class SharedModule { }