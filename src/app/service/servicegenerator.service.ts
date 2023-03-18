import { sequence } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicegeneratorService {
  private valueTmp = '';
  private length = '';
  private data = {};
  private password = '';
  private elements = '';
  private checks = [];
  private upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private lower = 'abcdefghijklmnopqrstuvwxyz';
  private numbers = '0123456789';
  private symbols = '!"#$%&\'*+,./:;=?@\\^`|~_-[]{}()<>';
  ///c1?:Boolean,c2?:Boolean,c3?:Boolean,c4?:Boolean
  constructor() {}
  dataSubject = new Subject<String>();
  dataObeservable = this.dataSubject.asObservable();

  set_data_checkedBox(c1: Boolean, c2: Boolean, c3: Boolean, c4: Boolean) {
    this.valueTmp = '';
    if (c1) {
      this.valueTmp += this.lower;
    }
    if (c2) {
      this.valueTmp += this.upper;
    }
    if (c3) {
      this.valueTmp += this.numbers;
    }
    if (c4) {
      this.valueTmp += this.symbols;
    }
    console.log('value is', this.valueTmp);
  }

  setValue(val: any) {
    this.length = val;
  }
  generatePassword() {
    this.elements = this.valueTmp;
    this.password = '';
    console.log('From gen', this.elements);
    console.log('From gen', this.length);

    console.log(parseInt(this.length));
    for (let i = 0; i <= parseInt(this.length) - 1; i++) {
      let randomNumber = Math.floor(Math.random() * this.elements.length);
      this.password += this.elements.substring(randomNumber, randomNumber + 1);
    }
    this.dataSubject.next(this.password);
    return this.password;
  }
}
