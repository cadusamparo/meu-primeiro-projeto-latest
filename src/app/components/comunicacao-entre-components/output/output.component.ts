import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  @Output() public outputname = new EventEmitter();

  public sendOutPutName() {
    return this.outputname.emit("Carlos Eduardo")
  }
}
