import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  NonNullableFormBuilder,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

interface SearchForm {
  origin: FormControl<string>;
  destination: FormControl<string>;
}

@Component({
  selector: 'app-formulario',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTooltipModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
  standalone: true,
})
export class FormularioComponent {
  form: FormGroup<SearchForm>;

  constructor(private formBuilder: NonNullableFormBuilder) {
    this.form = this.formBuilder.group({
      origin: this.formBuilder.control('', { validators: Validators.required }),
      destination: this.formBuilder.control('', {
        validators: Validators.required,
      }),
    });
  }

  openOriginDialog(): void {
    // TODO: implement origin selection dialog
  }

  openDestinationDialog(): void {
    // TODO: implement destination selection dialog
  }

  swap(): void {
    const o = this.form.controls.origin.value;
    const d = this.form.controls.destination.value;
    this.form.patchValue({ origin: d, destination: o });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    console.log(this.form.value);
  }
}
