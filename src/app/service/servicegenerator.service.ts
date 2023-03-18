import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicegeneratorService {
  private value='';
  private password='';
  private checks=[];
  private upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private lower = "abcdefghijklmnopqrstuvwxyz";
  private numbers = "0123456789";
  private symbols = "!\"#$%&'*+,./:;=?@\\^`|~_-[]{}()<>";
  constructor() { }
  dataSubject = new Subject();
  dataObeservable = this.dataSubject.asObservable();

set_data_checkedBox(c1:Boolean,c2:Boolean,c3:Boolean,c4:Boolean){
  this.value='';
  if(c1){
    console.log(c1)
    this.value+=this.lower;
  }
  if(c2){
    this.value+=this.upper;
  }
  if(c3){
    this.value+=this.numbers;
  }
  if(c4){
    this.value+=this.symbols;
  }
console.log(this.value);
} 

setValue(){
  this.dataSubject.next(this.value);
}
}
