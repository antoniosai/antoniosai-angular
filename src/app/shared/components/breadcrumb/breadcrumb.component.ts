import { Component, Input, OnInit } from '@angular/core';
import { Links } from './breadcrumb.interface';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})

export class BreadcrumbComponent implements OnInit {

  @Input() title: string = 'Default Page Title';
  @Input() links: Links[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
