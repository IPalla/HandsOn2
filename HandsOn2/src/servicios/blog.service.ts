import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { EntradaBlog } from '../app/modelos/entradas';


// El servicio contactos se ocupa de almacenar la lista de contactos

const URLAPI = 'http://localhost:3000/posts';

@Injectable()
export class BlogService {
    private sURL: string;
    private aEntradas: Array<EntradaBlog>;
/* asdfas */
    constructor (public http: HttpClient) {
        this.sURL = URLAPI;
        this.aEntradas = [];
    }

    getEntradas() {
        // const aLibros: Array<string>  = [];
        return this.http.get(this.sURL).toPromise()
        .then((response: any) => {
          this.aEntradas = response;
          return this.aEntradas;
        });
    }

    setEntrada(oEntrada) {
        console.log('Enviando datos');
        console.log(oEntrada);
        return this.http.post(this.sURL, oEntrada).toPromise();
    }
}

