import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrls: ['./editproyectos.component.css']
})
export class EditproyectosComponent implements OnInit {
  proy: Proyectos = null;

  constructor(
    private Proyectos: ProyectosService,
    private activatedRouter: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Proyectos.detail(id).subscribe(
      data =>{
        this.proy = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.Proyectos.update(id, this.proy).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

}
