import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <p>
      <app-crear></app-crear>
    </p>
  `,
  styles: []
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
