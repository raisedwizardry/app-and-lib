import { NgModule } from '@angular/core';
import { SayingHelloModule } from '../../../saying-hello/src/lib/saying-hello.module'
import { IntroductionComponent } from './introduction.component';



@NgModule({
  declarations: [IntroductionComponent],
  imports: [
    SayingHelloModule
  ],
  exports: [IntroductionComponent]
})
export class IntroductionModule { }
