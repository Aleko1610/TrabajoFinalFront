import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewproyectosComponent } from './components/proyectos/newproyectos.component';
import { EditproyectosComponent } from './components/proyectos/editproyectos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'nuevaskl', component: NewSkillsComponent},
  { path: 'editskl/:id', component: EditSkillsComponent},
  { path: 'nuevaproy', component: NewproyectosComponent},
  { path: 'editproy/:id', component: EditproyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
