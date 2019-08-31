import { Component, OnInit } from '@angular/core';
import { MockDataService } from './mock-data.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.less' ]
})
export class AppComponent implements OnInit {
  
  simpleList = ['carrot', 'banana', 'apple', 'potato', 'tomato', 'cabbage', 'turnip', 'okra', 'onion', 'cherries', 'plum', 'mango', 'kiwi', 'avocado', 'garlic', 'pineapple', 'sapota', 'cauliflower', 'lettuce', 'peas', 'pomegranate', 'watermelon', 'grapes'];
  complexList = [];
  selected = null;
  complexSelected = null;

  constructor(private mockData: MockDataService) {}

  ngOnInit() {
    this.mockData.getData().subscribe({
      next: (complexList: any[]) => {
        this.complexList = complexList;
      }
    })
  }
}
