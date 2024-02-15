import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { CustomStringPipe } from '@pipes/custom-string.pipe';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [CommonModule, DatePipe, UpperCasePipe, LowerCasePipe, JsonPipe, AsyncPipe, CurrencyPipe, DecimalPipe, PercentPipe, CustomStringPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
})
export class AngularPipesComponent {
  public date = signal(new Date());
  public json = signal([
    {name: 'Carlos Eduardo'}
  ])

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3'
  ]).pipe(delay(3000));
}
