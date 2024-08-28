import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  standalone: true,  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule] // Import any necessary modules here
})
export class HomeComponent {

}
