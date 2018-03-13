import { Injectable } from '@angular/core';

/* import { Contacto } from '../modelos/contactos';
 */
import { HttpClient} from '@angular/common/http';


// El servicio contactos se ocupa de almacenar la lista de contactos

const URLAPI = 'http://localhost:3000/posts';

@Injectable()
export class BlogService {
    private sURL: string;
    private aContactos: Array<string>;
/* asdfas */
    constructor (public http: HttpClient) {
        this.sURL = URLAPI;
        this.aContactos = [];
    }

    getPosts() {
        // const aLibros: Array<string>  = [];
        return this.http.get(this.sURL).toPromise()
        .then((response: any) => {
          this.aContactos = response;
          return this.aContactos;
        });
    }

    setPost(oPost) {
        console.log('Enviando datos');
        console.log(oPost);
        return this.http.post(this.sURL, oPost).toPromise();
    }
}

