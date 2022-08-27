import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
  ],
  exports: [
    SidebarComponent,
    HeaderbarComponent
  ]
})
export class LayoutModule { }
