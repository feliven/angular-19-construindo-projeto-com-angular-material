import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, CabecalhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'jornada-milhas';
}
