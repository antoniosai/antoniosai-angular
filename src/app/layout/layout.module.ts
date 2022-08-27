import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderbarComponent,
    WrapperComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
  ],
  exports: [
    WrapperComponent,
    SidebarComponent,
    HeaderbarComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
