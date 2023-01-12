import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss']
})
export class ChangeNumberComponent implements OnInit {
  ngOnInit(): void {

  }
  @Output() changeNumber: EventEmitter <any> = new EventEmitter ()

  handleClick() {
    console.log("Mudou o número");
    this.changeNumber.emit();
  }

}
