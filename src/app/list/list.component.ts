import { Component, OnInit, ContentChild, Input, Output, EventEmitter, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import { ListItemDirective } from './list-item.directive';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit, AfterViewInit {

  @Input() list: any[] = [];
  @ViewChildren('li') viewChildren: QueryList<ElementRef<HTMLLIElement>>;
  @ContentChild(ListItemDirective, { static: false }) listItem: ListItemDirective;
  @Output() selectedItemChange = new EventEmitter();
  @Input() selectedItem: any;
  selectedIndex: number;
  htmlListItems: HTMLLIElement[];
  constructor(private elem: ElementRef<HTMLElement>) { }

  ngOnInit() {
    if (this.selectedItem) {
      this.selectedIndex = this.list.findIndex(listItem => listItem === this.selectedItem);
    }
  }

  ngAfterViewInit() {
    this.htmlListItems = this.viewChildren.toArray().map(el => el.nativeElement);
  }

  selectListItem(item, index) {
    if (this.selectedIndex !== index) {
      this.selectedIndex = index;
      this.selectedItemChange.emit(item);
    }
  }

  changeSelection($event: KeyboardEvent) {
    if ($event.which === 40) {
      $event.preventDefault();
      if (this.selectedIndex < this.list.length - 1) {
        this.selectedIndex = this.selectedIndex + 1;
        const boundingRect = this.htmlListItems[this.selectedIndex].getBoundingClientRect();
        const tmp = this.elem.nativeElement.clientHeight - boundingRect.height - boundingRect.top;
        if (tmp < 0) {
          this.elem.nativeElement.scrollBy({ top: boundingRect.height, behavior: "instant" });
        }
        this.selectedItemChange.emit(this.list[this.selectedIndex]);
      }
    } else if ($event.which === 38) {
      $event.preventDefault();
      if (this.selectedIndex > 0) {
        this.selectedIndex = this.selectedIndex - 1;
        const boundingRect = this.htmlListItems[this.selectedIndex].getBoundingClientRect();
        const tmp = (this.elem.nativeElement.clientHeight - boundingRect.height - boundingRect.bottom);
        console.log(tmp, this.elem.nativeElement.clientHeight);
        if (tmp > this.elem.nativeElement.clientHeight) {
          this.elem.nativeElement.scrollBy({ top: boundingRect.top - boundingRect.height, behavior: "instant" });
        }
        this.selectedItemChange.emit(this.list[this.selectedIndex]);
      }
    }
  }
}