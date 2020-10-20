import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { FormestudianteComponent } from './estudiantes/formestudiante.component';

// Se crea constante routes se invoca la clase Routes
const routes:Routes=[
  {path:'',redirectTo: '/estudiantes', pathMatch:'full'}, //Se mapea el index y la ruta de la tabla estudiantes
  {path:'estudiantes', component:EstudiantesComponent}, //Se mapea el componente EstudiantesComponent
  {path:'estudiantes/form', component:FormestudianteComponent}, //Se mapea la ruta hacia nuestro formulario
  {path:'estudiantes/form/:id', component:FormestudianteComponent}, //Se mapea la ruta y el parametro id para cuando se haga el llamado a esa ruta nos responde el mismo formulario estudiante 
]

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    FormestudianteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes), //Se importa RouterModule para que se mapee las rutas
    FormsModule //Se importa FormsModule para trabajar con formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
