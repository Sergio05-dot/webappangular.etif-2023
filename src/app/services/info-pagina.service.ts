import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {}; // Si no tenim la interfase InfoPagina seria de tipus any
  cargada = false; // No cal dir boolean
  constructor(private http: HttpClient) {
    // console.log('Servicio de infoPagina listo');
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: any) => {

        this.cargada = true;
        this.info = resp; // provar resp. I veurem les propietats JSON
        console.log(resp);
      });
  }
}