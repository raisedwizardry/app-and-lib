import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'lib-introduction',
  template: `
    <p>
      introduction works!
    </p>
    <lib-saying-hello></lib-saying-hello>
  `,
  styles: [
  ]
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
