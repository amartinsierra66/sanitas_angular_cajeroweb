import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CajeroService {

  //url:string="http://localhost:8080/16_banca/";
  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get("clientes");
  }
  getCuentas(dni:number){
    return this.http.get("cuentas",{"params":{"dni":dni.toString()}});
  }
  getMovimientos(numeroCuenta:number){
    return this.http.get("movimientos",{"params":{"numeroCuenta":numeroCuenta.toString()}});
  }
}
