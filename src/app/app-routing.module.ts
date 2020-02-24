import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';



const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: '',   redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
