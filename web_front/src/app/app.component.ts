import { Component, NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NavbarComponent] // Asegúrate de que está importado
})

export class AppComponent {
   title = 'web_front';
 }