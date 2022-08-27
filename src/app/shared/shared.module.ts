import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ComponentsModule } from './components/components.module';
import { RightbarComponent } from './components/rightbar/rightbar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { SidebarLogoComponent } from './components/sidebar-logo/sidebar-logo.component';
import { SidebarProfileComponent } from './components/sidebar-profile/sidebar-profile.component';
import { SidebarSearchComponent } from './components/sidebar-search/sidebar-search.component';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UtilsModule,
    ComponentsModule,
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
export class SharedModule { }
