import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-formulario',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatIcon,
    MatFormField,
    MatInputModule,
    MatButtonToggleModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
    });
  }

  openOriginDialog() {
    // TODO
  }

  openDestinationDialog() {
    // TODO
  }

  onSubmit() {
    if (this.form.valid) {
      // handle search
      console.log(this.form.value);
    }
  }
}
