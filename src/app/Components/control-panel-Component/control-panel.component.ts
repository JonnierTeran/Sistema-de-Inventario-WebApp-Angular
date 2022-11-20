import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
    this.Router.navigate(["Control/Panel/Inventory/Home"])
  }

}
