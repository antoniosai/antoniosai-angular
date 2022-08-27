import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { PostModule } from './post/post.module';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    PortofolioComponent,
    SkillComponent,
  ],
  imports: [
    PostModule,
  ],
  providers: [
  ],
  exports: [
    HomeComponent,
    ProfileComponent,
  ]
})
export class PagesModule { }
