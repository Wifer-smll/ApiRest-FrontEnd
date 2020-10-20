//Clase para implementar logica
import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  titulo: String = "Lista de estudiantes"; //variable de prueba para mostrar en el front
  prueba: String = 'Variable de prueba'; //variable de prueba para mostrar en el front

  estudiantes: Estudiante[]; //Variable estudiantes de tipo Estudiantes y [] para almacenar una lista 

  constructor(private estudianteService: EstudianteService) { } //Se hace el llamdo a nuestro servicio - las variables se declaran en el contructor ya que esto hace en angular una inyeccion de dependencias

  ngOnInit(): void {
    this.estudianteService.getAll().subscribe(
      //Hacer llamada al metodo getAll del servicio - .subscribe() para poder conectarnos y retornar lo que devuelve la llamada hacia nuestra apirest y obtener la lista de estudiantes
      e => this.estudiantes = e //e => Funcion de flecha - La variable e se pasa a estudiantes
    );
  }

  delete(estudiante: Estudiante): void { //Metodo para eliminar estudiante con una variable que instacia de la clase Estudiante
    console.log("Hello from delete"); //Impresion
    this.estudianteService.delete(estudiante.id).subscribe(//Llamar al service para hacer el delete por el id y el suscribe para traer los registos de los estudiantes ya con el registro eliminado
      res => this.estudianteService.getAll().subscribe( //Funcion anonima res para obtener todos los registros para que se actualicen nuestra lista de estudiantes con el registro eliminado
        response => this.estudiantes = response // Funcion anonima response lo que trae response lo coloque en la variable estudiantes
      )
    )
  }

}
