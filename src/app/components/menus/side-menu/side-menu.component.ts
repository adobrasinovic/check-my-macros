import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menus-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() sidebarVisibility: Boolean;

  constructor() { }

  ngOnInit() {
  }

}