import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscelaniaRoutingModule } from './miscelania-routing.module';
import { MiscelaniaComponent } from './miscelania/miscelania.component';


@NgModule({
  declarations: [
    MiscelaniaComponent
  ],
  imports: [
    CommonModule,
    MiscelaniaRoutingModule
  ]
})
export class MiscelaniaModule { }
