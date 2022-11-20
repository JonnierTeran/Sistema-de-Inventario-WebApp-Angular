//Import del Modulo para el componente
import { Component } from '@angular/core';
//Import del servicio para el router/Redirecciones
import { Router } from '@angular/router';
//import del Modelo de Objetos del Usuario
import { UserModel } from '../../models/User.models';
//Import de la libreria de alertas de js
import Swal from 'sweetalert2';
//Modelo para el formulario Angular
import { NgForm } from '@angular/forms';

//Definicion del componente
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //Definicion del objeto usuario
  private User: UserModel;
  //Atributos para obtener datos de los inputs en el html (Two way binding)
  public UserInput: LetandNum;
  public PasswordInput: LetandNum;

  //Constructor / Inicializa el servicio del Router, objeto usuario, y atributos del input
  constructor(private Router: Router) {
    this.User = new UserModel('', '');
    this.UserInput = '';
    this.PasswordInput = '';
  }

  
  //Metodo de tipo void para Acceder al panel de control (Recibe por parametro el formulario de angular)
  public Login(Form:NgForm): void {
    //Se crea un oobjeto usuario con los datos ingresados en el formulario
    this.User = new UserModel(this.UserInput, this.PasswordInput);
    //Valida la informacion almacenada en el objeto User, de ser true envia una alerta de exito, redirecciona y limpia el formulario, sino envia una alerta de Error
    if (this.User.User == 'OscarBallesta22' && this.User.Password == '1234') {
      //Alert de Sweealert2 de js
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Signed in successfully',
        showConfirmButton: false,
        timer: 1900,
      });
      Form.reset();
      this.Router.navigate(["Control/Panel/Inventory"])
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Credenciales Incorrectas',
        showConfirmButton: false,
        timer: 750,
      });
      Form.reset(); 
    }
  }
}

//Tipo de dato que admite Strind o numeros
type LetandNum = string | number;
