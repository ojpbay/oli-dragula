import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dragula-sample',
  templateUrl: './dragula-sample.component.html',
  styleUrls: ['./dragula-sample.component.css']
})
export class DragulaSampleComponent implements OnInit {
  questions: string[];

  constructor(private dragulaService: DragulaService) {
    dragulaService.out.subscribe((value) => {
      console.log(`out: ${value[0]}`);
      this.onOut(value.slice(1));
    });
  }

  ngOnInit() {
    this.questions = [
      'Class',
      'Line',
      'Product',
      'Programme',
      'Layer'
    ];
  }

  private onOut(args) {
    console.log(args);
  }

  onClickMe() {
    (this.questions.forEach(q =>  {
      console.log(q);
    }));
  }

}
