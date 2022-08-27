import { Component, Input, OnInit } from '@angular/core';
import { MenuChild } from './sidebar-item.interface';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css']
})

export class SidebarItemComponent implements OnInit {

  @Input() title: string = 'Default Title';
  @Input() icon: string = 'fa-home';
  @Input() link: string = '';
  @Input() children: MenuChild[] = [];
  isMenuActive: string = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log(this.router.url);
    this.router.events
  }

  checkIsMenuActive() : void {
    this.isMenuActive = '';
  }

}
