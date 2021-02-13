import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShakeHandsComponent } from './shake-hands/shake-hands.component';



@NgModule({
  declarations: [ShakeHandsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ShakeHandsComponent
  ]
})
export class PlesantModule { }
