import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'eve-gr-textbox',
  templateUrl: './eve-gr-textbox.component.html',
  styleUrls: ['./eve-gr-textbox.component.scss']
})
export class EveGrTextboxComponent implements OnInit {
  @Input() color = '';
  @Input() textcolor = '';
  @Input() customcolor = '';
  @Input() name = '';
  @Input() type = '';
  @Input() label = '';
  @Input() placeholder = '';

  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChangeEvent(e: {detail: any}) {
    this.onChange.emit(e.detail);
  }

}
