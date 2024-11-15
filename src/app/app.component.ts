import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SenaDetailComponent } from "./sena-detail/sena-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SenaDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-rest ADSO 12';
}
