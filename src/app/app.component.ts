import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, CabecalhoComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'jornada-milhas';
}
