import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BannerComponent } from './components/banner/banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatButtonModule,
    CabecalhoComponent,
    FormularioComponent,
    BannerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'jornada-milhas';
}
