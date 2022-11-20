import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
    this.Router.navigate(['Control/Panel/Inventory/Proveedores/Listado'])
  }

}
