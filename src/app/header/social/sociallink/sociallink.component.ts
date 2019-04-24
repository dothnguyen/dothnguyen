import { Component, OnInit, Input } from '@angular/core';

import {SocialLink} from './../../../model/profile';

@Component({
  selector: 'sociallink',
  templateUrl: './sociallink.component.html',
  styleUrls: ['./sociallink.component.css']
})
export class SociallinkComponent implements OnInit {

  @Input() socialLink: SocialLink;

  constructor() { }

  ngOnInit() {
  }

}