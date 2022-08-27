import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MechanicalKeyboardComponent } from './pages/post/mechanical-keyboard/mechanical-keyboard.component';
import { MyNotesComponent } from './pages/post/my-notes/my-notes.component';
import { TutorialComponent } from './pages/post/tutorial/tutorial.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    title: 'Home', 
    component: HomeComponent
  },
  { 
    path: 'profile', 
    component: ProfileComponent,
  },
  { 
    path: 'post', 
    children: [
      {
        path: 'tutorial',
        title: 'Tutorial',
        component: TutorialComponent,
      },
      {
        path: 'my-notes',
        title: 'My Short Notes of Source Code',
        component: MyNotesComponent,
      },
      {
        path: 'mechanical-keyboard',
        title: 'My Mechanical Keyboard',
        component: MechanicalKeyboardComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
