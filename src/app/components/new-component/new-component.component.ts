import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss',
})
export class NewComponentComponent implements OnInit {
  public name = "New component"

  #apiService = inject(ApiService); // Novo

  ngOnInit(): void {
    console.log(this.#apiService.name()) // Novo

    this.#apiService.name$.subscribe({
      next : (next) => console.log(next),
      error : (error) => console.log(error),
      complete : () => console.log("Complete!")
    })

    this.#apiService.name$.next('Carlos $$')

    this.#apiService.name.set('Carlos Eduardo 2')

    setTimeout(() => {
      console.log(this.#apiService.name())
    }, 2000)
  }
}
