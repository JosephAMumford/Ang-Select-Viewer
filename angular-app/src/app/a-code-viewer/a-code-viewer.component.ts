import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import * as data from '../codes.json';

import { Dcode } from '../dcode';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-a-code-viewer',
  templateUrl: './a-code-viewer.component.html',
  styleUrls: ['./a-code-viewer.component.css']
})
export class ACodeViewerComponent implements OnInit {

  nodeForm = new FormGroup({
    formNode1: new FormControl(Validators.required),
    formNode2: new FormControl(Validators.required),
    formNode3: new FormControl(Validators.required)
  });

  constructor() { }

  codes = [];

  //Code Arrays
  n1Codes = [];
  n2Codes = [];
  n3Codes = [];

  //Array Indices
  node1 = 0;
  node2 = 0;
  node3 = 0;

  ngOnInit() {
    console.log(data);
    for(let x in data["Codes"]){
      this.codes[x] = data["Codes"][x];
    }
    console.log(this.codes);

    //Load n1Codes
    this.n1Codes = this.codes;
    console.log(this.n1Codes);
    console.log(this.n2Codes);
    console.log(this.n3Codes);
  }

  onChange1(){
    //Load n2Codes
    this.node1 = this.nodeForm.get("formNode1").value;
    this.node2 = 0;
    this.node3 = 0;
    this.n2Codes = [];
    this.n3Codes = [];
    this.n2Codes = this.codes[this.node1].sub;
  }

  onChange2(){
    //Load n3Codes
    this.node2 = this.nodeForm.get("formNode2").value;
    this.node3 = 0;
    this.n3Codes = [];
    this.n3Codes = this.codes[this.node1].sub[this.node2].sub;
  }

  onChange3(){
    this.node3 = this.nodeForm.get("formNode3").value;
  }

  onSubmit(){
    this.node1 = this.nodeForm.get("formNode1").value;
    this.node2 = this.nodeForm.get("formNode2").value;
    this.node3 = this.nodeForm.get("formNode3").value;
    console.log(this.node1);
    console.log(this.node2);
    console.log(this.node3);
  }

}
