import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Example of using Angular Material module
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule] // Import necessary modules here
})
export class AppComponent {
  title = 'My Standalone App';
}

