import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css',
  standalone:true
})
export class CabecalhoComponent {}
