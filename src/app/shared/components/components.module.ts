import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';
import { SidebarLogoComponent } from './sidebar-logo/sidebar-logo.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import { SidebarProfileComponent } from './sidebar-profile/sidebar-profile.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    SidebarItemComponent,
    SidebarSearchComponent,
    SidebarLogoComponent,
    SidebarProfileComponent,
    RightbarComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  providers: [
  ],
  exports: [
    BreadcrumbComponent,
    SidebarItemComponent,
    SidebarSearchComponent,
    SidebarLogoComponent,
    SidebarProfileComponent,
    RightbarComponent,
  ]
})
export class ComponentsModule { }
