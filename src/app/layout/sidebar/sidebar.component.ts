import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuList } from 'src/app/shared/components/sidebar-item/sidebar-item.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  sidebarMenu: MenuList[] = [
    {
      link: 'home',
      icon: 'fa-home',
      title: 'Home',
      children: [],
    },
    {
      link: 'post',
      icon: 'fa-clipboard',
      title: 'My Post',
      children: [
        {
          title: 'Tutorial',
          link: 'post/tutorial',
        },
        {
          title: 'My Notes',
          link: 'post/my-notes',
        },
        {
          title: 'Mech. Keyboard',
          link: 'post/mechanical-keyboard',
        }
      ],
    }
  ];

  constructor(private router: Router) {
    console.log("From sidebar => ", this.router.url);
  }

  ngOnInit(): void {
  }

}
