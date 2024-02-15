import { JsonPipe, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{comida: string, preco: string}>>([
    {
      comida: 'X-salada', preco: 'R$ 10'
    },
    {
      comida: 'X-bacon', preco: 'R$ 10'
    },
    {
      comida: 'Coxinha', preco: 'R$ 6'
    }
  ])

  public submitForm(form: NgForm) {
    console.log(form.valid)
    if(form.valid) {
      console.log(form.value)
    }
  }
}
