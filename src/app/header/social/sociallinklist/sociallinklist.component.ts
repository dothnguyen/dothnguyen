import { Component, OnInit, Input } from '@angular/core';

import {SocialLink} from './../../../model/profile';

@Component({
  selector: 'sociallinklist',
  templateUrl: './sociallinklist.component.html',
  styleUrls: ['./sociallinklist.component.css']
})
export class SociallinklistComponent implements OnInit {

  @Input() socialLinks: SocialLink[];

  constructor() { }

  ngOnInit() {

  }

}