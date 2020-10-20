//Servicio donde se crea todas las llamadas, funciones para las llamadas a nuestro ApiRet para insertar obtener actualizar eliminar
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Se importa HttpClient para utilizarla en los parametros del constructor
import { Observable } from 'rxjs';
import { Estudiante } from './estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private url:string="http://localhost:8080/api/estudiantes/" // Variable en el cual se mapea la url de nuestro Back ApiRest

  constructor(private http: HttpClient) { } //Dentro de () objeto para poder conectar al ApiRest de Back 

  //Obtener estudiantes
  getAll(): Observable<Estudiante[]>{//getAll() Funcion para conectarnos y traer lista de estudiantes [] declaracion - Nos retorna objetos de tipo Estudiante envueltos en un Observable
      // Observable Es aquello que queremos observar, que será implementado mediante una colección de eventos o valores futuros. Un observable puede ser creado a partir de eventos de usuario derivados del uso de un formulario, una llamada HTTP, un almacén de datos, etc.
      return this.http.get<Estudiante[]>(this.url); //Retorna objetos de tipo Estudiante y hacer referencia a la url
    }
  //Crear estudiante
    create(estudiante:Estudiante): Observable<Estudiante>{
      return this.http.post<Estudiante>(this.url, estudiante); //Post
    }
  //Obtener un estudiante
    get(id:number): Observable<Estudiante>{//Se obtiene por el id de tipo number
      return this.http.get<Estudiante>(this.url+'/'+id); //Get 
    }
  //Actualizar estudiante
    update(estudiante:Estudiante): Observable<Estudiante>{
      return this.http.put<Estudiante>(this.url, estudiante); //Put    
    }
  //Eliminar un estudiante
    delete(id:number): Observable<Estudiante>{
    return this.http.delete<Estudiante>(this.url+'/'+id); //Delete 
    }
}
