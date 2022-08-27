import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { MechanicalKeyboardComponent } from './mechanical-keyboard/mechanical-keyboard.component';
import { TutorialComponent } from './tutorial/tutorial.component';


@NgModule({
  declarations: [
    MyNotesComponent,
    MechanicalKeyboardComponent,
    TutorialComponent
  ],
  imports: [
    LayoutModule,
    CommonModule,
    SharedModule,
  ]
})
export class PostModule { }
