import { CajeroService } from './service/cajero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dni:number;
  numeroCuenta:number;
  clientes:any;
  cuentas:any;
  movimientos:any;

  constructor(private service:CajeroService){

  }
  ngOnInit(): void {
    this.cargarClientes();
  }
  cargarClientes(){
    this.service.getClientes().subscribe(data=>this.clientes=data);
  }
  cargarCuentasCliente(){
    this.service.getCuentas(this.dni).subscribe(data=>this.cuentas=data);
  }
  cargarMovimientosCuenta(){
    this.service.getMovimientos(this.numeroCuenta).subscribe(data=>this.movimientos=data);
  }
}
