import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  equipo: any = [];
  project: any = [];

  constructor(private http: HttpClient) {
    // console.log('Servicio de infoPagina listo');
    this.cargarInfo();
    this.cargarEquipo();
    this.cargarProject();

    // // Leer el archivo JSON
    // this.http.get('assets/data/data-pagina.json').subscribe((resp: any) => {
    //   this.info = resp; // provar resp. I veurem les propietats JSON
    //   console.log(resp);
    // });
  }

  private cargarInfo() {
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.info = resp;
        console.log(resp);
      });
  }
  private cargarEquipo() {
    //Donde revisamos la info de Firebase
    this.http
      .get(
        'https://web-app-angular-f0e77-default-rtdb.europe-west1.firebasedatabase.app/equip.json'
      )
      .subscribe((resp) => {
        this.equipo = resp;
        console.log(resp);
      });
  }
  private cargarProject() {
    this.http
      .get(
        'https://web-app-angular-f0e77-default-rtdb.europe-west1.firebasedatabase.app/Projet.json'
      )
      .subscribe((resp: InfoPagina) => {
        this.project = resp; // provar resp. I veurem les propietats JSON
        console.log(resp);
      });
  }
}
