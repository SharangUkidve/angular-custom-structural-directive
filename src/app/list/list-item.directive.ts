import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appListItem]'
})
export class ListItemDirective {

  @Input() appListItem: any;

  constructor(public template: TemplateRef<any>) { }

}