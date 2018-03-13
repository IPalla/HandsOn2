import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <div class="container mb-2">
 <div class="row align-items-center main">
     <div class="col text-center">
         <div class="card">
           <div class="card-header">
             <h1> Entradas de Blog </h1>
           </div>
           <div class="card-body">
            <app-crear></app-crear>
           </div>
         </div>
     </div>
 </div>
</div>
  `,
  styles: []
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
