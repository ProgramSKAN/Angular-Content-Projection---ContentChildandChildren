import { DateComponent } from './../date/date.component';
import { Component, OnInit, Input, ContentChild, ContentChildren, QueryList, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {
  @Input() header: string;
  @ContentChild(DateComponent, { static: true }) dateComponentRef: DateComponent;
  @ContentChildren(DateComponent, { descendants: true }) dateMultiComponentRef: QueryList<DateComponent>;//descendants - True to include all descendants, otherwise include only direct children.
  @ContentChild('body1') body1Ref: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }


  ngAfterContentInit() {
    console.log(this.dateComponentRef);

    this.dateMultiComponentRef.toArray().forEach(element => {
      setInterval(() => {
        element.today = new Date();
      }, 1000)
    })

    console.log(this.body1Ref);
    console.log(this.body1Ref.nativeElement.innerText);

  }
}
