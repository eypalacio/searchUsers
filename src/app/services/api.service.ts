import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusquedasRecientes } from '../models/busquedaRec.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:9608/apis/';

  constructor(private http: HttpClient) { }

  postBusquedasRecientes(formData:FormData){
    let dir = this.url+'busqRec';
    return this.http.post(dir, formData);
  }

  getBusquedasRecientes():Observable<BusquedasRecientes[]>{ //listar busquedas recientes
    let dir = this.url+'busqRec';
    return this.http.get<BusquedasRecientes[]>(dir)
  }

}
