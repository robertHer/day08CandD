import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'odd',
  templateUrl: './odd/odd.component.html',
  styleUrls: ['./odd/odd.component.css']
})
export class OddComponent implements OnInit {
  @Input('odd') name: string;
  constructor() { }

  ngOnInit() {
  }

}
