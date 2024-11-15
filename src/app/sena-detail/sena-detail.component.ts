import { Component } from '@angular/core';


@Component({
  selector: 'app-sena-detail',
  standalone: true,
  imports: [],
  templateUrl: './sena-detail.component.html',
  styleUrl: './sena-detail.component.css'
})
export class SenaDetailComponent {

   titulo ='OFERTA';
   imagen ='<< Aqui va la imagen >>';
   descripcion ='Esta promoción incluye, el 50% de descunto en todo lo relacionado con el SENA';
   boton ='Aceptar';
   

}
