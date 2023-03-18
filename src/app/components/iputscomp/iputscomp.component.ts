import { Component } from '@angular/core';
import { ServicegeneratorService } from 'src/app/service/servicegenerator.service';

@Component({
  selector: 'app-iputscomp',
  templateUrl: './iputscomp.component.html',
  styleUrls: ['./iputscomp.component.scss']
})
export class IputscompComponent {
isCheckedupper: Boolean=false;
isCheckedlower: Boolean=true;
isCheckednumber: Boolean=false;
isCheckedsymbol: Boolean=false;

  constructor(private service:ServicegeneratorService){
    
  }
  checkCheckBoxvalueupper(event:any){
    this.isCheckedupper = event.target.checked;
    console.log(this.isCheckedupper);
  }
  checkCheckBoxvaluelower(event:any){
    this.isCheckedlower = event.target.checked;
    console.log(this.isCheckedlower);  
  }
  checkCheckBoxvaluenbr(event:any){
    this.isCheckednumber = event.target.checked;
    console.log(this.isCheckednumber); 
   }
  checkCheckBoxvaluesbl(event:any){
    this.isCheckedsymbol = event.target.checked;
    console.log(this.isCheckedsymbol);
    }
  generateBtn(){
    console.log([this.isCheckedlower,this.isCheckedupper,
      this.isCheckednumber,this.isCheckedsymbol]);
    this.service.set_data_checkedBox(this.isCheckedlower,this.isCheckedupper,
      this.isCheckednumber,this.isCheckedsymbol);
    
  }

  
  
}
