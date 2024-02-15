import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Carlos');
  public lastName = signal('Eduardo');

  public fullName = computed(() => {
    return this.firstName() + this.lastName();
  })

  public array = signal([1]);

  constructor( ){
    effect(() => {
      console.log(this.firstName())
      if(this.firstName() === "Cadu ") {
        alert()
      }
    })
  }

  public updateName() {
    return this.firstName.set("Cadu ")
  }

  public updateArray() {
    this.firstName.update(() => {
    return "Cadu "
    })
    this.array.update( (oldValue: Array<number>) => {
      console.log(oldValue)
      return [...oldValue, oldValue.length + 1]
    })
  }
}
