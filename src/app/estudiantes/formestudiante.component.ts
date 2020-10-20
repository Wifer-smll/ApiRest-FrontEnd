import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from './estudiante';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-formestudiante',
  templateUrl: './formestudiante.component.html',
  styleUrls: ['./formestudiante.component.css']
})
export class FormestudianteComponent implements OnInit {

  estudiante:Estudiante = new Estudiante(); //Objeto estudiante que instancie de Estudiante  
  titulo: string = "Registro de Estudiante"; 

  constructor(private estudianteService: EstudianteService, private router:Router, private activatedRoute:ActivatedRoute) { 
                      //Variable estudianteService Para conectar al API Rest y se instancia de EstudianteService 
                      //Variable router para navegar a la lista de estudiantes despues de haber guardado estudiante
                      //Variable activatedRoute instancia de la clase ActivatedRoute 
   }

  ngOnInit(): void {
    this.cargar(); //Se mnada llamar el metodo cargar para que carge en el front
  }

  create():void{//Metodo para implementer logica de guardado cuando se presione el boton
    console.log(this.estudiante); //Impresion del objeto estudiante, para cuando se presione el boton imprimir atributos de estudiante del Form
    this.estudianteService.create(this.estudiante).subscribe( //Creacion de estudiante y subscribe para poder esperar que una vez que halla realizado la creacion nos devuelva hacia la lista de estudiantes
      res=>this.router.navigate(['/estudiantes']) //Una vez que se devuelve se pasa la ruta de lista estudiantes
    )
  }

  cargar():void{//Metodo para obtner estudiantes en el boton editar del front
    this.activatedRoute.params.subscribe(//suscribe para obtener el registro
      //Funcion anonima  e  para que almacene en la variable id lo que trae desde el enlace
      e=>{
        let id=e['id']; //alamacene en variable id lo que trae desde el enlace
        if(id){ //Si estudiante existe
          this.estudianteService.get(id).subscribe(  //Vaya a get y pase el id que viene en el enlace
            es=>this.estudiante=es //funcion anonima y lo que trae la variable es colocar en estudiante
            );
        }
      }
    );
    
  }

  update():void{//Metodo para actualizar estudiantes dentro del boton editar del front
      this.estudianteService.update(this.estudiante).subscribe( //Se hace la llamada al estudianteService se hace el update se pasa al objeto estudiante y el suscribe para que despues que actualice haga la redireccion a estudiantes
        res=>this.router.navigate(['/estudiantes'])  //Se reutiliza la funcion anonima de create para que regresa la ruta estudiantes en el front
      )
    }
}
