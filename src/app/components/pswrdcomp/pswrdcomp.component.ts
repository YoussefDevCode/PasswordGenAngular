import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ServicegeneratorService } from 'src/app/service/servicegenerator.service';

@Component({
  selector: 'app-pswrdcomp',
  templateUrl: './pswrdcomp.component.html',
  styleUrls: ['./pswrdcomp.component.scss'],
})
export class PswrdcompComponent implements OnInit {
  val: String = '---';
  constructor(private service: ServicegeneratorService) {}

  ngOnInit() {
    this.service.dataObeservable.subscribe((password) => {
      this.val = password;
    });
  }
}
