import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-saying-hello',
  template: `
    <p>
      woo hoo saying-hello works today!
    </p>
  `,
  styles: [
  ]
})
export class SayingHelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
