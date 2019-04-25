import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sectiontitle',
  templateUrl: './sectiontitle.component.html',
  styleUrls: ['./sectiontitle.component.css']
})
export class SectiontitleComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}