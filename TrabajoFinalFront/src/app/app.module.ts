import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExoerienciaComponent } from './components/exoeriencia/exoeriencia.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoArgProgComponent } from './components/logo-arg-prog/logo-arg-prog.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AboutComponent,
    BannerComponent,
    EducacionComponent,
    ExoerienciaComponent,
    ExperienciaComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LogoArgProgComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
