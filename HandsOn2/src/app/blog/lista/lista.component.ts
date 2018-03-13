import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() aEntradas: Array<any>;
  constructor() { }

  ngOnInit() {
    console.log(this.aEntradas);
  }
  muestra() {
    console.log(this.aEntradas);
  }

}
