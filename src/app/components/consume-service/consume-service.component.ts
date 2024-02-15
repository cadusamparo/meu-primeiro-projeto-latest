import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { NewComponentComponent } from '@components/new-component/new-component.component';
import { ApiService } from 'app/services/api.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [NewComponentComponent, CommonModule],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit {
  #apiService = inject(ApiService); // Novo

  public getTaskList = this.#apiService.getTaskList;

  public getTaskId = this.#apiService.getTaskId;
  public getTaskIdError = this.#apiService.getTaskIdError;

  public getTaskCreateError = this.#apiService.getTaskCreateError

  public getTaskDeleteError = this.#apiService.getTaskDeleteError

  public getTaskUpdateError = this.#apiService.getTaskUpdateError

  public getTaskListError = this.#apiService.getTaskListError

  ngOnInit(): void {
    this.#apiService.httpTaskList$().subscribe()
    this.#apiService.httpTaskId$('GV3MviUVZCQ2LO9eyUFC').subscribe()
  }

  public httpTaskCreate(title: string){
    return this.#apiService
      .httpTaskCreate$(title)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe()
  }

  public httpTaskUpdate(id: string, title: string){
    return this.#apiService
      .httpTaskUpdate$(id, title)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe()
  }

  public httpTaskDelete(id: string){
    return this.#apiService
    .httpTaskDelete$(id)
    .pipe(concatMap(() => this.#apiService.httpTaskList$()))
    .subscribe()
  }
}
