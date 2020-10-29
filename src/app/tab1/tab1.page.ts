import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  prenom= 'Nicolas'
  disparait = true;
  tableaudeprenom = [
    {
      name : 'antoine'
    },

    {
      name : 'mathieu'
    },
    {
      name : this.prenom
    }
  ]
  constructor() {}
  noshow(){
    this.disparait= !this.disparait
  }

}
